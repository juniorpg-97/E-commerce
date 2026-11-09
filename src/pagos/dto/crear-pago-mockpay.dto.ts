import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CrearPagoMockPayDto {
  @ApiProperty({
    example: 1,
    description: 'ID del pedido que se desea pagar',
  })
  @IsInt()
  @Min(1)
  pedidoId: number;

  @ApiProperty({
    example: 150.5,
    description: 'Monto del pago',
  })
  @IsNumber()
  @Min(0.01)
  monto: number;

  @ApiProperty({
    example: 'MP-123456789',
    description: 'ID de transacción generado por MockPay',
  })
  @IsString()
  transaccionId: string;

  @ApiProperty({
    example: 'PEDIDO-1',
    description: 'Referencia de la operación',
  })
  @IsString()
  referencia: string;
}
