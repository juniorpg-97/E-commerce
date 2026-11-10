import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class DetalleSincronizacionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  productoId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  cantidad: number;

  @ApiProperty({ example: 2500.0 })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  precioUnitario: number;
}

export class SincronizarCarritoDto {
  @ApiProperty({ type: [DetalleSincronizacionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DetalleSincronizacionDto)
  detalles: DetalleSincronizacionDto[];
}
