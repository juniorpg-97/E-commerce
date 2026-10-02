import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { TipoMovimiento } from '../../../generated/prisma/enums.js';

export class CreateMovimientoInventarioDto {
  @ApiProperty({
    example: 1,
    description: 'ID del inventario afectado',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  inventarioId: number;

  @ApiProperty({
    example: 'ENTRADA',
    enum: TipoMovimiento,
    description: 'Tipo de movimiento de inventario',
  })
  @IsEnum(TipoMovimiento)
  @IsNotEmpty()
  tipo: TipoMovimiento;

  @ApiProperty({
    example: 10,
    description: 'Cantidad del movimiento',
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  cantidad: number;

  @ApiProperty({
    example: 'Ingreso de mercadería',
    description: 'Motivo del movimiento',
    required: false,
  })
  @IsOptional()
  @IsString()
  motivo?: string;

  @ApiProperty({
    example: 'Compra #15',
    description: 'Referencia relacionada con el movimiento',
    required: false,
  })
  @IsOptional()
  @IsString()
  referencia?: string;
}
