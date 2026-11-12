import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { EstadoPedido, TipoVenta, Rol } from '../../generated/prisma/enums.js'; // ✅ Importar Rol
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto, usuarioId: number) {
    const { direccionId, metodoPago } = createPedidoDto;

    const cliente = await this.prisma.cliente.findUnique({
      where: { usuarioId },
    });

    if (!cliente) {
      throw new NotFoundException(
        'El usuario no tiene un perfil de cliente registrado',
      );
    }

    const direccion = await this.prisma.direccion.findFirst({
      where: { id: direccionId, clienteId: cliente.id, activa: true },
    });

    if (!direccion) {
      throw new NotFoundException(
        'La dirección no existe, está inactiva o no pertenece al cliente',
      );
    }

    const carrito = await this.prisma.carrito.findFirst({
      where: { clienteId: cliente.id, activo: true },
      include: {
        detalles: {
          include: { producto: { include: { inventario: true } } },
        },
      },
    });

    if (!carrito || carrito.detalles.length === 0) {
      throw new BadRequestException('El carrito está vacío o no existe');
    }

    for (const detalle of carrito.detalles) {
      if (!detalle.producto.activo) {
        throw new BadRequestException(
          `El producto "${detalle.producto.nombre}" no está disponible`,
        );
      }
      if (!detalle.producto.inventario) {
        throw new BadRequestException(
          `El producto "${detalle.producto.nombre}" no tiene inventario`,
        );
      }
      if (detalle.producto.inventario.stock < detalle.cantidad) {
        throw new BadRequestException(
          `Stock insuficiente para "${detalle.producto.nombre}". Disponible: ${detalle.producto.inventario.stock}`,
        );
      }
    }

    const totalPedido = carrito.detalles.reduce(
      (total, d) => total + Number(d.precioUnitario) * d.cantidad,
      0,
    );

    return this.prisma.$transaction(async (tx) => {
      const pedido = await tx.pedido.create({
        data: {
          clienteId: cliente.id,
          direccionId,
          total: totalPedido,
          metodoPago,
          estado: EstadoPedido.PENDIENTE, // ✅ Asegurar estado inicial
        },
      });

      for (const detalle of carrito.detalles) {
        await tx.detallePedido.create({
          data: {
            pedidoId: pedido.id,
            productoId: detalle.productoId,
            cantidad: detalle.cantidad,
            precioUnitario: detalle.precioUnitario,
            subtotal: Number(detalle.precioUnitario) * detalle.cantidad,
          },
        });

        await tx.inventario.update({
          where: { id: detalle.producto.inventario!.id },
          data: { stock: { decrement: detalle.cantidad } },
        });

        await tx.movimientoInventario.create({
          data: {
            inventarioId: detalle.producto.inventario!.id,
            usuarioId,
            tipo: 'VENTA',
            cantidad: detalle.cantidad,
            motivo: 'Salida de inventario por pedido web',
            referencia: `Pedido #${pedido.id}`,
          },
        });
      }

      await tx.carrito.update({
        where: { id: carrito.id },
        data: { activo: false },
      });

      return { mensaje: 'Pedido creado correctamente', pedido };
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: { select: { id: true, nombre: true, precioVenta: true } },
          },
        },
        direccion: true,
      },
      orderBy: { creadoEn: 'desc' },
    });
  }

  async findPendientes() {
    return this.prisma.pedido.findMany({
      where: { estado: EstadoPedido.PENDIENTE },
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: { select: { id: true, nombre: true, precioVenta: true } },
          },
        },
        direccion: true,
      },
      orderBy: { creadoEn: 'asc' },
    });
  }

  async findMisPedidos(usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { usuarioId },
    });
    if (!cliente)
      throw new NotFoundException(
        'El usuario no tiene un perfil de cliente registrado',
      );

    return this.prisma.pedido.findMany({
      where: { clienteId: cliente.id },
      include: {
        detalles: {
          include: {
            producto: { select: { id: true, nombre: true, precioVenta: true } },
          },
        },
        direccion: true,
      },
      orderBy: { creadoEn: 'desc' },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: { select: { id: true, nombre: true, precioVenta: true } },
          },
        },
        direccion: true,
        venta: true,
      },
    });
    if (!pedido) throw new NotFoundException(`Pedido #${id} no encontrado`);
    return pedido;
  }

  // ✅ MÉTODO CORREGIDO
  async cambiarEstado(
    id: number,
    updatePedidoDto: UpdatePedidoDto,
    usuarioId: number,
  ) {
    // 1. Obtener rol del usuario para saber si es Staff o Cliente
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { rol: true },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const esStaff =
      usuario.rol === Rol.ADMINISTRADOR || usuario.rol === Rol.CAJERO;

    // 2. Buscar el pedido
    let pedido;
    if (esStaff) {
      // Staff puede ver cualquier pedido
      pedido = await this.prisma.pedido.findUnique({
        where: { id },
        include: { detalles: true, venta: true },
      });
    } else {
      // Cliente solo ve sus propios pedidos
      const cliente = await this.prisma.cliente.findUnique({
        where: { usuarioId },
      });
      if (!cliente)
        throw new NotFoundException(
          'El usuario no tiene un perfil de cliente registrado',
        );

      pedido = await this.prisma.pedido.findFirst({
        where: { id, clienteId: cliente.id },
        include: { detalles: true, venta: true },
      });
    }

    if (!pedido) {
      throw new NotFoundException(
        `Pedido #${id} no encontrado o no tienes permisos para verlo`,
      );
    }

    const estadoActual = pedido.estado;
    const nuevoEstado = updatePedidoDto.estado;

    // Validación de transiciones
    const transicionesPermitidas: Record<EstadoPedido, EstadoPedido[]> = {
      [EstadoPedido.PENDIENTE]: [EstadoPedido.PAGADO, EstadoPedido.CANCELADO],
      [EstadoPedido.PAGADO]: [
        EstadoPedido.EN_PREPARACION,
        EstadoPedido.CANCELADO,
      ],
      [EstadoPedido.EN_PREPARACION]: [EstadoPedido.EN_CAMINO],
      [EstadoPedido.EN_CAMINO]: [EstadoPedido.ENTREGADO],
      [EstadoPedido.ENTREGADO]: [],
      [EstadoPedido.CANCELADO]: [],
    };

    if (!transicionesPermitidas[estadoActual]?.includes(nuevoEstado)) {
      throw new BadRequestException(
        `Transición no permitida: No se puede cambiar de ${estadoActual} a ${nuevoEstado}`,
      );
    }

    return this.prisma.$transaction(async (tx) => {
      // Lógica de cancelación (devolver stock)
      if (nuevoEstado === EstadoPedido.CANCELADO) {
        for (const detalle of pedido.detalles) {
          const inventario = await tx.inventario.findUnique({
            where: { productoId: detalle.productoId },
          });

          if (inventario) {
            await tx.inventario.update({
              where: { id: inventario.id },
              data: { stock: { increment: detalle.cantidad } },
            });

            await tx.movimientoInventario.create({
              data: {
                inventarioId: inventario.id,
                usuarioId,
                tipo: 'DEVOLUCION',
                cantidad: detalle.cantidad,
                motivo: 'Devolución por cancelación de pedido',
                referencia: `Pedido #${pedido.id}`,
              },
            });
          }
        }
      }

      // Lógica de pago (crear venta WEB)
      if (nuevoEstado === EstadoPedido.PAGADO) {
        if (pedido.venta) {
          throw new BadRequestException(
            'Este pedido ya tiene una venta asociada',
          );
        }

        const venta = await tx.venta.create({
          data: {
            pedidoId: pedido.id,
            usuarioId,
            clienteId: pedido.clienteId,
            tipo: TipoVenta.WEB,
            subtotalVenta: pedido.total,
            descuento: 0,
            totalVenta: pedido.total,
            metodoPago: pedido.metodoPago,
            estado: 'COMPLETADA',
            observaciones: `Venta generada desde Pedido #${pedido.id}`,
          },
        });

        for (const detalle of pedido.detalles) {
          await tx.detalleVenta.create({
            data: {
              ventaId: venta.id,
              productoId: detalle.productoId,
              cantidad: detalle.cantidad,
              precioUnitario: detalle.precioUnitario,
              subtotal: detalle.subtotal,
            },
          });
        }
      }

      return tx.pedido.update({
        where: { id },
        data: { estado: nuevoEstado },
        include: {
          detalles: {
            include: {
              producto: {
                select: { id: true, nombre: true, precioVenta: true },
              },
            },
          },
          direccion: true,
          venta: true,
        },
      });
    });
  }
}
