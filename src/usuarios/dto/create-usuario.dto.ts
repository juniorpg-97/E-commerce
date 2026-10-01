import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';
import { Rol } from '../../../generated/prisma/client.js';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del usuario',
  })
  @IsString({ message: 'el nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener almenos 2 caracteres' })
  @Matches(/\S/, { message: 'El nombre  no puede contener solo espacios' })
  nombre: string;

  @ApiProperty({
    example: 'Pérez',
    description: 'Apellido del usuario',
  })
  @IsString({ message: 'el apellido debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el apellido es obligatorio' })
  @MinLength(2, { message: 'El apellido debe tener almenos 2 caracteres' })
  @Matches(/\S/, { message: 'El apellido  no puede contener solo espacios' })
  apellido: string;

  @ApiProperty({
    example: 'juan@correo.com',
    description: 'Correo electrónico del usuario',
  })
  @IsEmail({}, { message: 'el email debe estar en el formato correcto' })
  @IsNotEmpty({ message: 'el email es obligatorio' })
  email: string;

  @ApiProperty({
    example: 'Cliente12345',
    description: 'Contraseña del usuario',
    minLength: 6,
  })
  @IsString({ message: 'password debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'password es obligatorio' })
  @MinLength(6, { message: 'la contraseña debe tener almenos 6 caracteres' })
  @Matches(/\S/, { message: 'La contraseña no puede contener solo espacios' })
  password: string;

  @ApiPropertyOptional({
    enum: Rol,
    example: Rol.CLIENTE,
    description: 'Rol del usuario. Si no se envía, se utilizará CLIENTE.',
  })
  @IsOptional()
  @IsEnum(Rol, { message: 'el rol debe ser ADMINISTRADOR, CAJERO o CLIENTE' })
  rol?: Rol;
}
