import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';

import { CajasService } from './cajas.service.js';
import { CreateCajaDto } from './dto/create-caja.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { Rol } from '../../generated/prisma/client.js';

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
    description:
      'Abre una nueva caja para el usuario autenticado con un monto inicial.',
  })
  @ApiResponse({
    status: 201,
    description: 'Caja abierta correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  @ApiResponse({
    status: 403,
    description: 'El usuario no tiene permisos para abrir una caja.',
  })
  create(@Body() createCajaDto: CreateCajaDto, @Req() request: Request) {
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

    return this.cajasService.create(createCajaDto, usuario.id);
  }
}
