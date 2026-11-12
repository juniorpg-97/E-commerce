import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { RegisterClienteDto } from './dto/register-cliente.dto.js'; // ✅ NUEVO IMPORT

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
      where: { id },
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
      throw new NotFoundException(`Usuario de ID ${id} no encontrado`);
    }
    return usuario;
  }

  // Método original para Admin/Cajeros (SIN CAMBIOS)
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

  // ✅ NUEVO MÉTODO: Crea Usuario + Cliente + Dirección en 1 sola transacción
  async createClienteConDireccion(data: RegisterClienteDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        password: hashedPassword,
        rol: 'CLIENTE',
        activo: true,

        // Escritura anidada: crea el cliente y su primera dirección automáticamente
        cliente: {
          create: {
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            direcciones: {
              create: {
                calle: data.calle,
                numero: data.numero,
                ciudad: data.ciudad,
                referencia: data.referencia || 'Sin referencia',
                codigoPostal: data.codigoPostal || '00000',
              },
            },
          },
        },
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        rol: true,
        activo: true,
        creadoEn: true,
        cliente: { select: { id: true } }, // ✅ Devolvemos el ID del cliente recién creado
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
