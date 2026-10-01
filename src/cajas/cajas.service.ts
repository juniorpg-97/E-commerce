import { Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto.js';
import { UpdateCajaDto } from './dto/update-caja.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CajasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCajaDto: CreateCajaDto, usuarioId: number) {
    const { montoInicial } = createCajaDto;

    // Verificar si el usuario ya tiene una caja abierta
    const cajaAbierta = await this.prisma.caja.findFirst({
      where: {
        usuarioId,
        estado: 'ABIERTA',
      },
    });

    if (cajaAbierta) {
      throw new Error('El usuario ya tiene una caja abierta');
    }

    // Crear la nueva caja
    const caja = await this.prisma.caja.create({
      data: {
        usuarioId,
        fechaApertura: new Date(),
        montoInicial,
        estado: 'ABIERTA',
      },
    });

    return {
      mensaje: 'Caja abierta correctamente',
      caja,
    };
  }

  findAll() {
    return `This action returns all cajas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caja`;
  }

  update(id: number, updateCajaDto: UpdateCajaDto) {
    return `This action updates a #${id} caja`;
  }

  remove(id: number) {
    return `This action removes a #${id} caja`;
  }
}
