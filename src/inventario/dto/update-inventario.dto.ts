import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class UpdateInventarioDto {
  @ApiProperty({
    example: 15,
    description: 'Nueva cantidad disponible en inventario',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  stock: number;
}
