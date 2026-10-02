import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DetallePedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.detallePedido.findMany({
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
          },
        },
        pedido: {
          include: {
            direccion: true,
          },
        },
      },
      orderBy: {
        creadoEn: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.detallePedido.findUnique({
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
          },
        },
        pedido: {
          include: {
            direccion: true,
          },
        },
      },
    });
  }
}
