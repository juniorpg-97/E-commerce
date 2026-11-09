import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import {
  MockPayPaymentStatus,
  MockPayWebhookDto,
} from './dto/mockpay-webhook.dto.js';

@Injectable()
export class PagosService {
  constructor(private readonly prisma: PrismaService) {}

  async procesarWebhookMockPay(webhook: MockPayWebhookDto) {
    const pago = await this.prisma.pago.findUnique({
      where: {
        transaccionId: webhook.transactionId,
      },
    });

    if (!pago) {
      throw new NotFoundException(
        'No se encontró un pago asociado a la transacción de MockPay',
      );
    }

    if (pago.metodo !== 'MOCKPAY') {
      throw new BadRequestException(
        'El pago encontrado no corresponde al método MOCKPAY',
      );
    }

    const estado = this.obtenerEstadoPago(webhook.status);

    const pagoActualizado = await this.prisma.pago.update({
      where: {
        id: pago.id,
      },
      data: {
        estado,
        referencia: webhook.reference,
        monto: webhook.amount,
        respuestaMockPay: JSON.stringify(webhook),
        fechaPago: webhook.paymentDate
          ? new Date(webhook.paymentDate)
          : new Date(),
      },
    });

    return {
      message: 'Webhook procesado correctamente',
      pagoId: pagoActualizado.id,
      transaccionId: pagoActualizado.transaccionId,
      estado: pagoActualizado.estado,
    };
  }

  private obtenerEstadoPago(
    status: MockPayPaymentStatus,
  ): 'APROBADO' | 'RECHAZADO' | 'CANCELADO' {
    switch (status) {
      case MockPayPaymentStatus.APPROVED:
        return 'APROBADO';

      case MockPayPaymentStatus.REJECTED:
        return 'RECHAZADO';

      case MockPayPaymentStatus.CANCELLED:
        return 'CANCELADO';

      default:
        throw new BadRequestException('Estado de pago de MockPay no válido');
    }
  }
  async crearPagoMockPay(
    pedidoId: number,
    monto: number,
    transaccionId: string,
    referencia: string,
  ) {
    const pedido = await this.prisma.pedido.findUnique({
      where: {
        id: pedidoId,
      },
    });

    if (!pedido) {
      throw new NotFoundException(
        `No se encontró el pedido con ID ${pedidoId}`,
      );
    }

    if (pedido.total.toNumber() !== monto) {
      throw new BadRequestException(
        'El monto del pago no coincide con el total del pedido',
      );
    }

    const pagoExistente = await this.prisma.pago.findUnique({
      where: {
        transaccionId,
      },
    });

    if (pagoExistente) {
      throw new BadRequestException(
        'La transacción ya se encuentra registrada',
      );
    }

    return this.prisma.pago.create({
      data: {
        pedidoId,
        metodo: 'MOCKPAY',
        estado: 'PENDIENTE',
        monto,
        transaccionId,
        referencia,
      },
    });
  }
}
