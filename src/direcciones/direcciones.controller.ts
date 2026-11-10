import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { DireccionesService } from './direcciones.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@ApiTags('Direcciones')
@ApiBearerAuth('JWT-auth')
@Controller('direcciones')
@UseGuards(JwtAuthGuard)
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Post()
  create(@Body() createDireccionDto: CreateDireccionDto, @Req() req: any) {
    return this.direccionesService.create(createDireccionDto, req.usuario.id);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.direccionesService.findAll(req.usuario.id);
  }

  // ⚠️ IMPORTANTE: Esta ruta específica debe ir ANTES de la ruta dinámica ':id'
  @Get('mis-direcciones')
  @UseGuards(RolesGuard)
  @Roles('CLIENTE')
  findMisDirecciones(@Req() request: Request) {
    const usuario = (request as Request & { usuario: { id: number } }).usuario;
    return this.direccionesService.findMisDirecciones(usuario.id);
  }

  // ⚠️ La ruta dinámica ':id' siempre va al final
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.direccionesService.findOne(+id, req.usuario.id);
  }

  @Delete(':id')
  desactivar(@Param('id') id: string, @Req() req: any) {
    return this.direccionesService.desactivar(+id, req.usuario.id);
  }
}
