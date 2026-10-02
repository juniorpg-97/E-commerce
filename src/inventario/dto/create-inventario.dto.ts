import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateInventarioDto {
  @ApiProperty({
    example: 1,
    description: 'ID del producto al que pertenece el inventario',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  productoId: number;

  @ApiProperty({
    example: 10,
    description: 'Cantidad inicial disponible en inventario',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  stock: number;
}
