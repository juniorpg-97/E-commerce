import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoriaExistente = await this.prisma.categoria.findUnique({
      where: {
        nombre: createCategoriaDto.nombre,
      },
    });

    if (categoriaExistente) {
      throw new ConflictException('Ya existe una categoria con ese nombre');
    }

    return this.prisma.categoria.create({
      data: {
        nombre: createCategoriaDto.nombre,
        descripcion: createCategoriaDto.descripcion,
      },
    });
  }
  async findAll() {
    return this.prisma.categoria.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });
    if (!categoria) {
      throw new NotFoundException(`categoria de ID ${id} no encontrada`);
    }

    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.findOne(id);

    if (updateCategoriaDto.nombre) {
      const categoriaExistente = await this.prisma.categoria.findFirst({
        where: {
          nombre: updateCategoriaDto.nombre,
          NOT: {
            id,
          },
        },
      });

      if (categoriaExistente) {
        throw new ConflictException('Ya existe una categoria con ese nombre');
      }
    }

    return this.prisma.categoria.update({
      where: {
        id,
      },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.categoria.delete({
      where: {
        id,
      },
    });
  }
}
