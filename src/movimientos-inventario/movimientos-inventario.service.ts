import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto.js';

@Injectable()
export class MovimientosInventarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createMovimientoInventarioDto: CreateMovimientoInventarioDto,
    usuarioId: number,
  ) {
    const { inventarioId, tipo, cantidad, motivo, referencia } =
      createMovimientoInventarioDto;

    const inventario = await this.prisma.inventario.findUnique({
      where: {
        id: inventarioId,
      },
    });

    if (!inventario) {
      throw new Error('El inventario no existe');
    }

    const movimiento = await this.prisma.movimientoInventario.create({
      data: {
        inventarioId,
        usuarioId,
        tipo,
        cantidad,
        motivo,
        referencia,
      },
      include: {
        inventario: {
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

    return {
      mensaje: 'Movimiento de inventario registrado correctamente',
      movimiento,
    };
  }

  async findAll() {
    return this.prisma.movimientoInventario.findMany({
      include: {
        inventario: {
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
        usuario: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true,
            rol: true,
          },
        },
        detalleVenta: true,
      },
      orderBy: {
        fecha: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.movimientoInventario.findUnique({
      where: {
        id,
      },
      include: {
        inventario: {
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
        usuario: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true,
            rol: true,
          },
        },
        detalleVenta: true,
      },
    });
  }
}
