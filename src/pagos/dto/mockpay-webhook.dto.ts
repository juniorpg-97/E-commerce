import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum MockPayPaymentStatus {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

export class MockPayWebhookDto {
  @ApiProperty({
    example: 'MP-123456789',
    description: 'Identificador de la transacción de MockPay',
  })
  @IsString()
  transactionId: string;

  @ApiProperty({
    example: 'PEDIDO-1001',
    description: 'Referencia del pago',
  })
  @IsString()
  reference: string;

  @ApiProperty({
    example: 150.5,
    description: 'Monto pagado',
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    enum: MockPayPaymentStatus,
    example: MockPayPaymentStatus.APPROVED,
  })
  @IsEnum(MockPayPaymentStatus)
  status: MockPayPaymentStatus;

  @ApiProperty({
    example: '2026-10-08T02:30:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymentDate?: string;
}
