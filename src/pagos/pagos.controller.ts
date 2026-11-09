import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CrearPagoMockPayDto } from './dto/crear-pago-mockpay.dto.js';
import { PagosService } from './pagos.service.js';
import { MockPayWebhookDto } from './dto/mockpay-webhook.dto.js';

@ApiTags('Pagos')
@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Post('webhook/mockpay')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Webhook de MockPay',
    description:
      'Recibe la notificación del resultado de un pago realizado mediante MockPay.',
  })
  @ApiResponse({
    status: 200,
    description: 'Webhook procesado correctamente',
  })
  @ApiResponse({
    status: 404,
    description: 'Pago no encontrado',
  })
  async webhookMockPay(@Body() webhook: MockPayWebhookDto) {
    return this.pagosService.procesarWebhookMockPay(webhook);
  }
  @Post('mockpay')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Registrar un pago MockPay',
    description:
      'Crea un pago pendiente asociado a un pedido antes de recibir el webhook.',
  })
  @ApiResponse({
    status: 201,
    description: 'Pago MockPay creado correctamente',
  })
  async crearPagoMockPay(@Body() dto: CrearPagoMockPayDto) {
    return this.pagosService.crearPagoMockPay(
      dto.pedidoId,
      dto.monto,
      dto.transaccionId,
      dto.referencia,
    );
  }
}
