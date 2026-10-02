import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class VentasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVentaDto: CreateVentaDto, usuarioId: number) {
    const {
      cajaId,
      clienteId,
      tipo = 'POS',
      metodoPago,
      descuento = 0,
      observaciones,
      detalles,
    } = createVentaDto;

    return this.prisma.$transaction(async (tx) => {
      // 1. Validar que la caja exista
      const caja = await tx.caja.findUnique({
        where: {
          id: cajaId,
        },
      });

      if (!caja) {
        throw new Error('La caja no existe');
      }

      // 2. Validar que la caja esté abierta
      if (caja.estado !== 'ABIERTA') {
        throw new Error('La caja está cerrada');
      }

      // 3. Validar productos y stock
      for (const detalle of detalles) {
        const producto = await tx.producto.findUnique({
          where: {
            id: detalle.productoId,
          },
          include: {
            inventario: true,
          },
        });

        // 4. Validar que el producto exista
        if (!producto) {
          throw new Error(`El producto con ID ${detalle.productoId} no existe`);
        }

        // 5. Validar que el producto esté activo
        if (!producto.activo) {
          throw new Error(`El producto "${producto.nombre}" no está activo`);
        }

        // 6. Validar que el producto tenga inventario
        if (!producto.inventario) {
          throw new Error(
            `El producto "${producto.nombre}" no tiene inventario`,
          );
        }

        // 7. Validar stock disponible
        if (producto.inventario.stock < detalle.cantidad) {
          throw new Error(
            `Stock insuficiente para "${producto.nombre}". Stock disponible: ${producto.inventario.stock}`,
          );
        }
      }

      // 8. Calcular subtotales de cada producto
      const detallesCalculados = [];

      for (const detalle of detalles) {
        const producto = await tx.producto.findUnique({
          where: {
            id: detalle.productoId,
          },
        });

        if (!producto) {
          throw new Error(`El producto con ID ${detalle.productoId} no existe`);
        }

        const precioUnitario = Number(producto.precioVenta);
        const subtotal = precioUnitario * detalle.cantidad;

        detallesCalculados.push({
          productoId: detalle.productoId,
          cantidad: detalle.cantidad,
          precioUnitario,
          subtotal,
        });
      }

      // 9. Calcular subtotal general de la venta
      const subtotalVenta = detallesCalculados.reduce(
        (acumulado, detalle) => acumulado + detalle.subtotal,
        0,
      );

      // 10. Validar descuento
      if (descuento > subtotalVenta) {
        throw new Error(
          'El descuento no puede ser mayor que el subtotal de la venta',
        );
      }

      // 11. Calcular total de la venta
      const totalVenta = subtotalVenta - descuento;

      // 12. Crear la venta
      const venta = await tx.venta.create({
        data: {
          cajaId,
          usuarioId,
          clienteId,
          tipo,
          subtotalVenta,
          descuento,
          totalVenta,
          metodoPago,
          observaciones,
        },
      });

      // 13. Crear detalles, descontar stock y registrar movimientos
      for (const detalle of detallesCalculados) {
        const detalleVenta = await tx.detalleVenta.create({
          data: {
            ventaId: venta.id,
            productoId: detalle.productoId,
            cantidad: detalle.cantidad,
            precioUnitario: detalle.precioUnitario,
            subtotal: detalle.subtotal,
          },
        });

        // Buscar nuevamente el inventario del producto
        const producto = await tx.producto.findUnique({
          where: {
            id: detalle.productoId,
          },
          include: {
            inventario: true,
          },
        });

        if (!producto || !producto.inventario) {
          throw new Error(
            `No se encontró el inventario del producto ${detalle.productoId}`,
          );
        }

        // Descontar stock
        await tx.inventario.update({
          where: {
            id: producto.inventario.id,
          },
          data: {
            stock: {
              decrement: detalle.cantidad,
            },
          },
        });

        // Registrar movimiento de inventario
        await tx.movimientoInventario.create({
          data: {
            inventarioId: producto.inventario.id,
            usuarioId,
            detalleVentaId: detalleVenta.id,
            tipo: 'VENTA',
            cantidad: detalle.cantidad,
            motivo: 'Salida de inventario por venta POS',
            referencia: `Venta #${venta.id}`,
          },
        });
      }

      // 14. Devolver la venta completa
      return {
        mensaje: 'Venta procesada correctamente',
        venta,
        detalles: detallesCalculados,
      };
    });
  }

  async findAll(fechaInicio?: string, fechaFin?: string) {
    const where: {
      fecha?: {
        gte?: Date;
        lte?: Date;
      };
    } = {};

    if (fechaInicio) {
      where.fecha = {
        ...where.fecha,
        gte: new Date(`${fechaInicio}T00:00:00`),
      };
    }

    if (fechaFin) {
      where.fecha = {
        ...where.fecha,
        lte: new Date(`${fechaFin}T23:59:59.999`),
      };
    }

    return this.prisma.venta.findMany({
      where,
      orderBy: {
        fecha: 'desc',
      },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true,
            rol: true,
          },
        },
        cliente: {
          select: {
            id: true,
          },
        },
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
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
