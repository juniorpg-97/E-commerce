import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id: createProductoDto.categoriaId,
      },
    });

    if (!categoria) {
      throw new NotFoundException(
        `categoria de ID ${createProductoDto.categoriaId} no encontrada`,
      );
    }

    const productoExistente = await this.prisma.producto.findFirst({
      where: {
        nombre: createProductoDto.nombre,
      },
    });

    if (productoExistente) {
      throw new ConflictException('Ya existe un producto con ese nombre');
    }

    return this.prisma.producto.create({
      data: {
        categoriaId: createProductoDto.categoriaId,
        nombre: createProductoDto.nombre,
        descripcion: createProductoDto.descripcion,
        costoAdquisicion: createProductoDto.costoAdquisicion,
        precioVenta: createProductoDto.precioVenta,
        inventario: {
          create: {
            stock: 0,
          },
        },
      },
      include: {
        categoria: true,
        inventario: true,
      },
    });
  }

  async findAll(rol: string, categoriaId?: string) {
    const productos = await this.prisma.producto.findMany({
      where: {
        ...(categoriaId
          ? {
              categoriaId: Number(categoriaId),
            }
          : {}),
        ...(rol === 'CLIENTE'
          ? {
              activo: true,
              inventario: {
                stock: {
                  gt: 0,
                },
              },
            }
          : {}),
      },
      orderBy: {
        id: 'asc',
      },
      include: {
        categoria: true,
        inventario: true,
      },
    });

    if (rol === 'CLIENTE') {
      return productos.map(({ costoAdquisicion, ...producto }) => producto);
    }

    return productos;
  }

  async findOne(id: number, rol?: string) {
    const producto = await this.prisma.producto.findUnique({
      where: {
        id,
      },
      include: {
        categoria: true,
        inventario: true,
      },
    });

    if (!producto) {
      throw new NotFoundException(`producto de ID ${id} no encontrado`);
    }

    if (rol === 'CLIENTE') {
      const { costoAdquisicion, ...productoSinCosto } = producto;
      return productoSinCosto;
    }

    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    await this.findOne(id);

    if (updateProductoDto.categoriaId) {
      const categoria = await this.prisma.categoria.findUnique({
        where: {
          id: updateProductoDto.categoriaId,
        },
      });

      if (!categoria) {
        throw new NotFoundException(
          `categoria de ID ${updateProductoDto.categoriaId} no encontrada`,
        );
      }
    }

    if (updateProductoDto.nombre) {
      const productoExistente = await this.prisma.producto.findFirst({
        where: {
          nombre: updateProductoDto.nombre,
          NOT: {
            id,
          },
        },
      });

      if (productoExistente) {
        throw new ConflictException('Ya existe un producto con ese nombre');
      }
    }

    return this.prisma.producto.update({
      where: {
        id,
      },
      data: updateProductoDto,
      include: {
        categoria: true,
        inventario: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      await tx.inventario.deleteMany({
        where: {
          productoId: id,
        },
      });

      return tx.producto.delete({
        where: {
          id,
        },
      });
    });
  }
}
