import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateDetallePedidoDto {
  @ApiProperty({
    example: 1,
    description: 'ID del pedido al que pertenece el detalle',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  pedidoId: number;

  @ApiProperty({
    example: 1,
    description: 'ID del producto incluido en el pedido',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  productoId: number;

  @ApiProperty({
    example: 2,
    description: 'Cantidad de unidades del producto',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  cantidad: number;
}
