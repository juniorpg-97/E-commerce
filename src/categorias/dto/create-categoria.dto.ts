import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({
    example: 'Electronica',
    description: 'Nombre de la categoria',
  })
  @IsString({ message: 'el nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener almenos 2 caracteres' })
  @Matches(/\S/, { message: 'El nombre  no puede contener solo espacios' })
  nombre: string;

  @ApiPropertyOptional({
    example: 'Productos electronicas y tecnologicos',
    description: 'Descripcion de la categoria',
  })
  @IsOptional()
  @IsString({ message: 'la descripcion debe ser una cadena de texto' })
  descripcion?: string;
}
