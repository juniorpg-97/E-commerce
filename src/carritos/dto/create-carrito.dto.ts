import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateCarritoDto {
  @ApiProperty({
    example: 1,
    description: 'ID del producto que se desea agregar al carrito',
  })
  @IsInt({ message: 'el productoId debe ser un numero entero' })
  @IsNotEmpty({ message: 'el productoId es obligatorio' })
  @Min(1, { message: 'el productoId debe ser mayor a 0' })
  productoId: number;

  @ApiProperty({
    example: 2,
    description: 'Cantidad del producto que se desea agregar al carrito',
  })
  @IsInt({ message: 'la cantidad debe ser un numero entero' })
  @IsNotEmpty({ message: 'la cantidad es obligatoria' })
  @Min(1, { message: 'la cantidad debe ser mayor a 0' })
  cantidad: number;
}
