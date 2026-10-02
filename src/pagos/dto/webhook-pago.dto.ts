import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsISO8601,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class WebhookPagoDto {
  @ApiProperty({
    example: 'payment.succeeded',
    description: 'Evento enviado por la pasarela de pagos',
  })
  @IsString()
  event: string;

  @ApiProperty({
    example: 'uuid-de-la-transaccion',
    description: 'Identificador de la transacción',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: 120.5,
    description: 'Monto de la transacción',
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: 'USD',
    description: 'Moneda de la transacción',
  })
  @IsString()
  currency: string;

  @ApiProperty({
    example: 'SUCCEEDED',
    description: 'Estado de la transacción',
  })
  @IsString()
  status: string;

  @ApiPropertyOptional({
    example: null,
    description: 'Motivo del fallo del pago',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  failure_reason?: string | null;

  @ApiProperty({
    example: {
      order_id: '25',
    },
    description:
      'Datos enviados por la pasarela. order_id corresponde al ID del Pedido.',
  })
  @IsObject()
  metadata: {
    order_id: string;
  };

  @ApiProperty({
    example: '2026-10-02T15:00:00Z',
    description: 'Fecha y hora de creación de la transacción',
  })
  @IsISO8601()
  created_at: string;
}
