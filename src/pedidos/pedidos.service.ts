import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { EstadoPedido, TipoVenta } from '../../generated/prisma/enums.js';
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
      throw new Error('El usuario no tiene un cliente registrado');
    }

    const direccion = await this.prisma.direccion.findFirst({
      where: {
        id: direccionId,
        clienteId: cliente.id,
        activa: true,
      },
    });

    if (!direccion) {
      throw new Error(
        'La dirección no existe, está inactiva o no pertenece al cliente',
      );
    }

    const carrito = await this.prisma.carrito.findFirst({
      where: {
        clienteId: cliente.id,
        activo: true,
      },
      include: {
        detalles: {
          include: {
            producto: {
              include: {
                inventario: true,
              },
            },
          },
        },
      },
    });

    if (!carrito) {
      throw new Error('El cliente no tiene un carrito activo');
    }

    if (carrito.detalles.length === 0) {
      throw new Error('El carrito está vacío');
    }

    for (const detalle of carrito.detalles) {
      if (!detalle.producto.activo) {
        throw new Error(
          `El producto "${detalle.producto.nombre}" no está disponible`,
        );
      }

      if (!detalle.producto.inventario) {
        throw new Error(
          `El producto "${detalle.producto.nombre}" no tiene inventario`,
        );
      }

      if (detalle.producto.inventario.stock < detalle.cantidad) {
        throw new Error(
          `Stock insuficiente para "${detalle.producto.nombre}". Stock disponible: ${detalle.producto.inventario.stock}`,
        );
      }
    }

    const totalPedido = carrito.detalles.reduce(
      (total, detalle) =>
        total + Number(detalle.precioUnitario) * detalle.cantidad,
      0,
    );

    return this.prisma.$transaction(async (tx) => {
      const pedido = await tx.pedido.create({
        data: {
          clienteId: cliente.id,
          direccionId,
          total: totalPedido,
          metodoPago,
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
          where: {
            id: detalle.producto.inventario!.id,
          },
          data: {
            stock: {
              decrement: detalle.cantidad,
            },
          },
        });

        await tx.movimientoInventario.create({
          data: {
            inventarioId: detalle.producto.inventario!.id,
            usuarioId,
            detalleVentaId: null,
            tipo: 'VENTA',
            cantidad: detalle.cantidad,
            motivo: 'Salida de inventario por pedido web',
            referencia: `Pedido #${pedido.id}`,
          },
        });
      }

      await tx.carrito.update({
        where: {
          id: carrito.id,
        },
        data: {
          activo: false,
        },
      });

      return {
        mensaje: 'Pedido creado correctamente',
        pedido,
      };
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
                precioVenta: true,
              },
            },
          },
        },
        direccion: true,
      },
      orderBy: {
        creadoEn: 'desc',
      },
    });
  }

  async findPendientes() {
    return this.prisma.pedido.findMany({
      where: {
        estado: EstadoPedido.PENDIENTE,
      },
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
                precioVenta: true,
              },
            },
          },
        },
        direccion: true,
      },
      orderBy: {
        creadoEn: 'asc',
      },
    });
  }

  async findMisPedidos(usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    return this.prisma.pedido.findMany({
      where: {
        clienteId: cliente.id,
      },
      include: {
        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
                precioVenta: true,
              },
            },
          },
        },
        direccion: true,
      },
      orderBy: {
        creadoEn: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: {
        id,
      },
      include: {
        cliente: true,
        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
                precioVenta: true,
              },
            },
          },
        },
        direccion: true,
        venta: true,
      },
    });
  }

  async cambiarEstado(
    id: number,
    updatePedidoDto: UpdatePedidoDto,
    usuarioId: number,
  ) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    const pedido = await this.prisma.pedido.findFirst({
      where: {
        id,
        clienteId: cliente.id,
      },
      include: {
        detalles: true,
        venta: true,
      },
    });

    if (!pedido) {
      throw new Error('El pedido no existe o no pertenece al cliente');
    }

    const estadoActual = pedido.estado;
    const nuevoEstado = updatePedidoDto.estado;

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

    if (!transicionesPermitidas[estadoActual].includes(nuevoEstado)) {
      throw new BadRequestException(
        `No se puede cambiar el pedido de ${estadoActual} a ${nuevoEstado}`,
      );
    }

    return this.prisma.$transaction(async (tx) => {
      /*
       * Si el pedido se cancela, devolvemos el stock.
       */
      if (nuevoEstado === EstadoPedido.CANCELADO) {
        for (const detalle of pedido.detalles) {
          const inventario = await tx.inventario.findUnique({
            where: {
              productoId: detalle.productoId,
            },
          });

          if (!inventario) {
            throw new Error(
              `No existe inventario para el producto ${detalle.productoId}`,
            );
          }

          await tx.inventario.update({
            where: {
              id: inventario.id,
            },
            data: {
              stock: {
                increment: detalle.cantidad,
              },
            },
          });

          await tx.movimientoInventario.create({
            data: {
              inventarioId: inventario.id,
              usuarioId,
              detalleVentaId: null,
              tipo: 'DEVOLUCION',
              cantidad: detalle.cantidad,
              motivo: 'Devolución de inventario por cancelación de pedido web',
              referencia: `Pedido #${pedido.id}`,
            },
          });
        }
      }

      /*
       * Si el pedido pasa a PAGADO,
       * se convierte automáticamente en una Venta WEB.
       */
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
            observaciones: `Venta generada automáticamente desde el Pedido #${pedido.id}`,
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
        where: {
          id,
        },
        data: {
          estado: nuevoEstado,
        },
        include: {
          detalles: {
            include: {
              producto: {
                select: {
                  id: true,
                  nombre: true,
                  precioVenta: true,
                },
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
