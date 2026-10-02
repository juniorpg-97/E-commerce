import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateClienteDto } from './dto/create-cliente.dto.js';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto, usuarioId: number) {
    const { nombre, apellido, email, telefono } = createClienteDto;

    const clienteExistente = await this.prisma.cliente.findUnique({
      where: { usuarioId },
    });

    if (clienteExistente) {
      throw new Error('El usuario ya tiene un cliente registrado');
    }

    const emailExistente = await this.prisma.cliente.findUnique({
      where: { email },
    });

    if (emailExistente) {
      throw new Error('El correo electrónico ya está registrado como cliente');
    }

    const cliente = await this.prisma.cliente.create({
      data: {
        usuarioId,
        nombre,
        apellido,
        email,
        telefono,
      },
    });

    return {
      mensaje: 'Cliente registrado correctamente',
      cliente,
    };
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      select: {
        id: true,
        usuarioId: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        activo: true,
        creadoEn: true,
        actualizadoEn: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where: { id },
      select: {
        id: true,
        usuarioId: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        activo: true,
        creadoEn: true,
        actualizadoEn: true,
      },
    });
  }
}
