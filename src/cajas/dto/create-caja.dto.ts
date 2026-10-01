import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateCajaDto {
  @ApiProperty({
    example: 100,
    description: 'Monto inicial disponible al abrir la caja',
  })
  @IsNumber({}, { message: 'el montoInicial debe ser un numero' })
  @IsNotEmpty({ message: 'el montoInicial es obligatorio' })
  @Min(0, { message: 'el montoInicial no puede ser negativo' })
  montoInicial: number;
}
