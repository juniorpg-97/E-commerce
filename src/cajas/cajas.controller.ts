import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';

import { CajasService } from './cajas.service.js';
import { CreateCajaDto } from './dto/create-caja.dto.js';
import { CerrarCajaDto } from './dto/cerrar-caja.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@ApiTags('Cajas')
@ApiBearerAuth('JWT-auth')
@Controller('cajas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CajasController {
  constructor(private readonly cajasService: CajasService) {}

  @Post()
  @Roles('ADMINISTRADOR', 'CAJERO')
  @ApiOperation({
    summary: 'Abrir una caja',
    description: 'Abre una nueva caja con un monto inicial.',
  })
  @ApiResponse({ status: 201, description: 'Caja abierta correctamente.' })
  create(@Body() createCajaDto: CreateCajaDto, @Req() request: Request) {
    const usuario = (request as Request & { usuario: { id: number } }).usuario;
    return this.cajasService.create(createCajaDto, usuario.id);
  }

  @Get('activa')
  @Roles('ADMINISTRADOR', 'CAJERO')
  @ApiOperation({
    summary: 'Obtener caja activa',
    description: 'Devuelve la caja abierta del usuario.',
  })
  getCajaActiva(@Req() request: Request) {
    const usuario = (request as Request & { usuario: { id: number } }).usuario;
    return this.cajasService.obtenerCajaActiva(usuario.id);
  }

  // ✅ NUEVO: Ver conciliación antes de cerrar
  @Get(':id/conciliacion')
  @Roles('ADMINISTRADOR') // Solo admin puede ver la conciliación detallada
  @ApiOperation({
    summary: 'Obtener conciliación de caja',
    description: 'Muestra el desglose de ventas y montos esperados.',
  })
  getConciliacion(@Param('id') id: string) {
    return this.cajasService.obtenerConciliacion(+id);
  }

  // ✅ NUEVO: Cerrar caja (Solo Admin)
  @Patch(':id/cerrar')
  @Roles('ADMINISTRADOR') // 🔒 SOLO ADMINISTRADOR
  @ApiOperation({
    summary: 'Cerrar caja',
    description:
      'Solo el administrador puede cerrar la caja, ingresar el monto contado y ver la diferencia.',
  })
  @ApiResponse({ status: 200, description: 'Caja cerrada y conciliada.' })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede cerrar cajas.',
  })
  cerrarCaja(
    @Param('id') id: string,
    @Body() dto: CerrarCajaDto,
    @Req() request: Request,
  ) {
    const usuario = (request as Request & { usuario: { id: number } }).usuario;
    return this.cajasService.cerrarCaja(+id, dto, usuario.id);
  }
  @Get()
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Listar todas las cajas',
    description: 'Exclusivo para administradores.',
  })
  findAll() {
    return this.cajasService.findAll();
  }

  // ✅ NUEVO: Historial de cajas cerradas
  @Get('historial')
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Historial de cajas',
    description: 'Lista de todas las cajas cerradas con sus diferencias.',
  })
  getHistorial() {
    return this.cajasService.obtenerHistorial();
  }
}
