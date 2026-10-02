import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, Min } from 'class-validator';
import { MetodoPago } from '../../../generated/prisma/enums.js';

export class CreatePedidoDto {
  @ApiProperty({
    example: 1,
    description: 'ID de la dirección donde se entregará el pedido',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  direccionId: number;

  @ApiProperty({
    enum: MetodoPago,
    example: MetodoPago.YAPE,
    description: 'Método de pago utilizado para el pedido',
  })
  @IsEnum(MetodoPago)
  @IsNotEmpty()
  metodoPago: MetodoPago;
}
