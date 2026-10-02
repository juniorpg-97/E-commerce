import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MetodoPago, TipoVenta } from '../../../generated/prisma/client.js';
import { CreateDetalleVentaDto } from '../../detalle-venta/dto/create-detalle-venta.dto.js';

export class CreateVentaDto {
  @ApiProperty({
    example: 1,
    description: 'ID de la caja donde se realiza la venta',
  })
  @IsInt({ message: 'el cajaId debe ser un numero entero' })
  @IsNotEmpty({ message: 'el cajaId es obligatorio' })
  @Min(1, { message: 'el cajaId debe ser mayor a 0' })
  cajaId: number;

  @ApiPropertyOptional({
    enum: TipoVenta,
    example: TipoVenta.POS,
    default: TipoVenta.POS,
    description:
      'Origen de la venta: POS para venta presencial o REDES_SOCIALES para una venta registrada desde redes sociales',
  })
  @IsOptional()
  @IsEnum(TipoVenta, {
    message: 'el tipo debe ser POS, REDES_SOCIALES o WEB',
  })
  tipo?: TipoVenta;

  @ApiPropertyOptional({
    example: 3,
    description: 'ID del cliente que realiza la compra',
  })
  @IsOptional()
  @IsInt({ message: 'el clienteId debe ser un numero entero' })
  @Min(1, { message: 'el clienteId debe ser mayor a 0' })
  clienteId?: number;

  @ApiProperty({
    enum: MetodoPago,
    example: MetodoPago.EFECTIVO,
    description: 'Método de pago utilizado en la venta',
  })
  @IsEnum(MetodoPago, {
    message:
      'el metodoPago debe ser EFECTIVO, TARJETA, TRANSFERENCIA, YAPE, PLIN u OTRO',
  })
  metodoPago: MetodoPago;

  @ApiPropertyOptional({
    example: 10,
    description: 'Descuento monetario aplicado a la venta',
  })
  @IsOptional()
  @IsNumber({}, { message: 'el descuento debe ser un numero' })
  @Min(0, { message: 'el descuento no puede ser negativo' })
  descuento?: number;

  @ApiPropertyOptional({
    example: 'Venta realizada en mostrador',
    description: 'Observaciones adicionales de la venta',
  })
  @IsOptional()
  @IsString({ message: 'las observaciones deben ser una cadena de texto' })
  observaciones?: string;

  @ApiProperty({
    type: [CreateDetalleVentaDto],
    description: 'Productos que forman parte de la venta',
  })
  @IsArray({ message: 'los detalles deben ser un arreglo' })
  @ValidateNested({ each: true })
  @Type(() => CreateDetalleVentaDto)
  detalles: CreateDetalleVentaDto[];
}
