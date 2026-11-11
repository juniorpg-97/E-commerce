import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto.js';
import { CerrarCajaDto } from './dto/cerrar-caja.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CajasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCajaDto: CreateCajaDto, usuarioId: number) {
    const { montoInicial } = createCajaDto;

    const cajaAbierta = await this.prisma.caja.findFirst({
      where: { usuarioId, estado: 'ABIERTA' },
    });

    if (cajaAbierta) {
      throw new Error('El usuario ya tiene una caja abierta');
    }

    const caja = await this.prisma.caja.create({
      data: {
        usuarioId,
        fechaApertura: new Date(),
        montoInicial,
        estado: 'ABIERTA',
      },
    });

    return { mensaje: 'Caja abierta correctamente', caja };
  }

  async obtenerCajaActiva(usuarioId: number) {
    const caja = await this.prisma.caja.findFirst({
      where: { usuarioId, estado: 'ABIERTA' },
    });

    if (!caja) {
      throw new Error(
        'No tienes una caja abierta. Por favor, abre una caja antes de realizar ventas.',
      );
    }

    return caja;
  }

  // ✅ NUEVO: Obtener datos de conciliación de una caja específica
  async obtenerConciliacion(cajaId: number) {
    const caja = await this.prisma.caja.findUnique({
      where: { id: cajaId },
      include: {
        ventas: {
          where: { tipo: 'POS' }, // Solo ventas de mostrador
          select: {
            id: true,
            totalVenta: true,
            metodoPago: true,
            fecha: true,
          },
        },
        usuario: {
          select: { nombre: true, apellido: true },
        },
      },
    });

    if (!caja) {
      throw new Error('La caja no existe');
    }

    // Calcular suma de ventas POS
    const totalVentasPOS = caja.ventas.reduce(
      (suma, venta) => suma + Number(venta.totalVenta),
      0,
    );

    // montoEsperado = montoInicial + totalVentasPOS
    const montoEsperado = Number(caja.montoInicial) + totalVentasPOS;

    return {
      cajaId: caja.id,
      usuario: `${caja.usuario.nombre} ${caja.usuario.apellido}`,
      fechaApertura: caja.fechaApertura,
      fechaCierre: caja.fechaCierre,
      estado: caja.estado,
      montoInicial: Number(caja.montoInicial),
      totalVentasPOS,
      montoEsperado,
      montoContado: caja.montoContado ? Number(caja.montoContado) : null,
      diferencia: caja.diferencia ? Number(caja.diferencia) : null,
      ventas: caja.ventas,
    };
  }

  // ✅ NUEVO: Cerrar caja y registrar conciliación
  async cerrarCaja(cajaId: number, dto: CerrarCajaDto, usuarioId: number) {
    const caja = await this.prisma.caja.findUnique({
      where: { id: cajaId },
      include: {
        ventas: { where: { tipo: 'POS' } },
      },
    });

    if (!caja) {
      throw new Error('La caja no existe');
    }

    if (caja.estado === 'CERRADA') {
      throw new Error('Esta caja ya está cerrada');
    }

    // Calcular montos
    const totalVentasPOS = caja.ventas.reduce(
      (suma, venta) => suma + Number(venta.totalVenta),
      0,
    );
    const montoEsperado = Number(caja.montoInicial) + totalVentasPOS;
    const diferencia = dto.montoContado - montoEsperado;

    // Actualizar caja
    const cajaCerrada = await this.prisma.caja.update({
      where: { id: cajaId },
      data: {
        estado: 'CERRADA',
        fechaCierre: new Date(),
        montoContado: dto.montoContado,
        montoEsperado,
        diferencia,
      },
    });

    return {
      mensaje: 'Caja cerrada y conciliada correctamente',
      caja: cajaCerrada,
      resumen: {
        montoInicial: Number(caja.montoInicial),
        totalVentasPOS,
        montoEsperado,
        montoContado: dto.montoContado,
        diferencia,
      },
    };
  }

  // ✅ NUEVO: Historial de cajas (para el admin)
  async obtenerHistorial() {
    return this.prisma.caja.findMany({
      where: { estado: 'CERRADA' },
      include: {
        usuario: {
          select: { nombre: true, apellido: true },
        },
      },
      orderBy: { fechaCierre: 'desc' },
    });
  }
}
