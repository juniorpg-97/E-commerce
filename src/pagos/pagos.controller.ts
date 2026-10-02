import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PagosService } from './pagos.service.js';
import { WebhookPagoDto } from './dto/webhook-pago.dto.js';

@ApiTags('Pagos')
@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Post('webhook')
  @ApiOperation({
    summary: 'Recibir notificación de pago',
    description:
      'Recibe la notificación enviada por la pasarela cuando un pago fue exitoso o fallido.',
  })
  @ApiBody({
    type: WebhookPagoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Notificación recibida correctamente.',
  })
  recibirWebhook(@Body() payload: WebhookPagoDto) {
    return this.pagosService.procesarWebhook(payload);
  }
}
