import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { EstadoPedido } from '../../../generated/prisma/enums.js';

export class UpdatePedidoDto {
  @ApiProperty({
    enum: EstadoPedido,
    example: EstadoPedido.PAGADO,
    description: 'Nuevo estado del pedido',
  })
  @IsEnum(EstadoPedido, {
    message: 'El estado del pedido no es válido',
  })
  @IsNotEmpty({
    message: 'El estado del pedido es obligatorio',
  })
  estado: EstadoPedido;
}
