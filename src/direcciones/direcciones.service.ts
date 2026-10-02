import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';

@Injectable()
export class DireccionesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDireccionDto: CreateDireccionDto, usuarioId: number) {
    const { calle, numero, referencia, ciudad, codigoPostal } =
      createDireccionDto;

    // Buscar el cliente relacionado con el usuario autenticado
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    const direccion = await this.prisma.direccion.create({
      data: {
        clienteId: cliente.id,
        calle,
        numero,
        referencia,
        ciudad,
        codigoPostal,
      },
    });

    return {
      mensaje: 'Dirección registrada correctamente',
      direccion,
    };
  }

  async findAll(usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    return this.prisma.direccion.findMany({
      where: {
        clienteId: cliente.id,
      },
      orderBy: {
        creadoEn: 'desc',
      },
    });
  }

  async findOne(id: number, usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    return this.prisma.direccion.findFirst({
      where: {
        id,
        clienteId: cliente.id,
      },
    });
  }

  async desactivar(id: number, usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario no tiene un cliente registrado');
    }

    const direccion = await this.prisma.direccion.findFirst({
      where: {
        id,
        clienteId: cliente.id,
      },
    });

    if (!direccion) {
      throw new Error('La dirección no existe o no pertenece al cliente');
    }

    return this.prisma.direccion.update({
      where: {
        id,
      },
      data: {
        activa: false,
      },
    });
  }
}
