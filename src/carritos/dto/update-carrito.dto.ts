import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class UpdateCarritoDto {
  @ApiProperty({
    example: 5,
    description: 'Nueva cantidad del producto en el carrito',
  })
  @IsInt({ message: 'la cantidad debe ser un numero entero' })
  @IsNotEmpty({ message: 'la cantidad es obligatoria' })
  @Min(1, { message: 'la cantidad debe ser mayor a 0' })
  cantidad: number;
}
