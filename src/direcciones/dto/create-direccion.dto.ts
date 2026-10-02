import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDireccionDto {
  @ApiProperty({
    example: 'Jr. Lima',
    description: 'Nombre de la calle o jirón',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  calle: string;

  @ApiProperty({
    example: '123',
    description: 'Número de la dirección',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  numero: string;

  @ApiProperty({
    example: 'Frente al parque',
    description: 'Referencia para facilitar la entrega',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  referencia?: string;

  @ApiProperty({
    example: 'Juliaca',
    description: 'Ciudad de la dirección',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  ciudad: string;

  @ApiProperty({
    example: '21101',
    description: 'Código postal',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  codigoPostal: string;
}
