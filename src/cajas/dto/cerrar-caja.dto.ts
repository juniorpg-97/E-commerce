import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CerrarCajaDto {
  @ApiProperty({
    example: 1500.5,
    description: 'Monto de efectivo físico contado al momento del cierre',
  })
  @IsNumber({}, { message: 'El monto contado debe ser un número' })
  @IsNotEmpty({ message: 'El monto contado es obligatorio' })
  @Min(0, { message: 'El monto contado no puede ser negativo' })
  montoContado: number;
}
