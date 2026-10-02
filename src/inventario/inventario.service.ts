import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInventarioDto } from './dto/create-inventario.dto.js';
import { UpdateInventarioDto } from './dto/update-inventario.dto.js';

@Injectable()
export class InventarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventarioDto: CreateInventarioDto) {
    const { productoId, stock } = createInventarioDto;

    const producto = await this.prisma.producto.findUnique({
      where: {
        id: productoId,
      },
    });

    if (!producto) {
      throw new Error('El producto no existe');
    }

    const inventarioExistente = await this.prisma.inventario.findUnique({
      where: {
        productoId,
      },
    });

    if (inventarioExistente) {
      throw new Error('El producto ya tiene un registro de inventario');
    }

    const inventario = await this.prisma.inventario.create({
      data: {
        productoId,
        stock,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });

    return {
      mensaje: 'Inventario creado correctamente',
      inventario,
    };
  }

  async findAll() {
    return this.prisma.inventario.findMany({
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.inventario.findUnique({
      where: {
        id,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });
  }

  async findByProducto(productoId: number) {
    return this.prisma.inventario.findUnique({
      where: {
        productoId,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    const inventario = await this.prisma.inventario.findUnique({
      where: {
        id,
      },
    });

    if (!inventario) {
      throw new Error('El inventario no existe');
    }

    const inventarioActualizado = await this.prisma.inventario.update({
      where: {
        id,
      },
      data: {
        stock: updateInventarioDto.stock,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });

    return {
      mensaje: 'Inventario actualizado correctamente',
      inventario: inventarioActualizado,
    };
  }
}
