import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty({
    example: 1,
    description: 'ID de la categoria a la que pertenece el producto',
  })
  @IsInt({ message: 'el categoriaId debe ser un numero entero' })
  @Min(1, { message: 'el categoriaId debe ser mayor a 0' })
  categoriaId: number;

  @ApiProperty({
    example: 'Laptop HP 15',
    description: 'Nombre del producto',
  })
  @IsString({ message: 'el nombre del producto debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el nombre del producto es obligatorio' })
  @MinLength(2, {
    message: 'El nombre del producto debe tener almenos 2 caracteres',
  })
  @Matches(/\S/, {
    message: 'El nombre del producto  no puede contener solo espacios',
  })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Laptop HP con procesador Intel Core i5',
    description: 'Descripcion del producto',
  })
  @IsOptional()
  @IsString({
    message: 'la descripcion del producto debe ser una cadena de texto',
  })
  descripcion?: string;

  @ApiProperty({
    example: 1800,
    description: 'Costo de adquisicion del producto',
  })
  @IsNumber({}, { message: 'el costo de adquisicion debe ser un numero' })
  @Min(0, { message: 'el costo de adquisicion no puede ser negativo' })
  costoAdquisicion: number;

  @ApiProperty({
    example: 2500,
    description: 'Precio de venta del producto',
  })
  @IsNumber({}, { message: 'el precio de venta debe ser un numero' })
  @Min(0, { message: 'el precio de venta no puede ser negativo' })
  precioVenta: number;
}
