import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { VentasService } from './ventas.service.js';
import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { Rol } from '../../generated/prisma/client.js';

@ApiTags('Ventas')
@ApiBearerAuth('JWT-auth')
@Controller('ventas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  @ApiOperation({
    summary: 'Registrar una venta POS',
    description:
      'Registra una venta, crea sus detalles, calcula subtotales y total, descuenta el stock y registra los movimientos de inventario.',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'Venta procesada correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  @ApiResponse({
    status: 403,
    description:
      'El usuario no tiene permisos. Solo ADMINISTRADOR y CAJERO pueden registrar ventas.',
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR', 'CAJERO')
  create(@Body() createVentaDto: CreateVentaDto, @Req() request: Request) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.ventasService.create(createVentaDto, usuario.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Consultar historial de ventas',
    description:
      'Obtiene el historial de ventas ordenado desde la más reciente. Permite filtrar por fecha inicial, fecha final o ambas.',
  })
  @ApiQuery({
    name: 'fechaInicio',
    required: false,
    example: '2026-10-01',
    description: 'Fecha inicial del periodo de consulta.',
  })
  @ApiQuery({
    name: 'fechaFin',
    required: false,
    example: '2026-10-01',
    description: 'Fecha final del periodo de consulta.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de ventas con usuario, cliente, productos, cantidades, precios y totales.',
  })
  findAll(
    @Query('fechaInicio') fechaInicio?: string,
    @Query('fechaFin') fechaFin?: string,
  ) {
    return this.ventasService.findAll(fechaInicio, fechaFin);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Consultar una venta por ID',
    description: 'Obtiene una venta específica mediante su identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Venta encontrada.',
  })
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar una venta',
    description: 'Actualiza los datos de una venta existente.',
  })
  @ApiResponse({
    status: 200,
    description: 'Venta actualizada correctamente.',
  })
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.ventasService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar una venta',
    description: 'Elimina una venta mediante su identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Venta eliminada correctamente.',
  })
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }
}
