import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return this.prisma.usuario.findMany({
      orderBy: { id: 'asc' },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        rol: true,
        activo: true,
        creadoEn: true,
      },
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        rol: true,
        activo: true,
        creadoEn: true,
      },
    });
    if (!usuario) {
      throw new NotFoundException(`usuario de ID ${id} no encontrado`);
    }
    return usuario;
  }
  async create(createUserDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.prisma.usuario.create({
      data: {
        nombre: createUserDto.nombre,
        apellido: createUserDto.apellido,
        email: createUserDto.email,
        password: hashedPassword,
        rol: createUserDto.rol ?? 'CLIENTE',
        activo: true,
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        rol: true,
        activo: true,
        creadoEn: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        rol: true,
        activo: true,
        creadoEn: true,
        password: true,
      },
    });
  }
}
