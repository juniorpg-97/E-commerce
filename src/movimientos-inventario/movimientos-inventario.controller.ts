import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MovimientosInventarioService } from './movimientos-inventario.service.js';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { Rol } from '../../generated/prisma/enums.js';

@ApiTags('Movimientos Inventario')
@ApiBearerAuth('JWT-auth')
@Controller('movimientos-inventario')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MovimientosInventarioController {
  constructor(
    private readonly movimientosInventarioService: MovimientosInventarioService,
  ) {}

  @Post()
  @Roles(Rol.ADMINISTRADOR)
  create(
    @Body()
    createMovimientoInventarioDto: CreateMovimientoInventarioDto,
    @Req() req: any,
  ) {
    return this.movimientosInventarioService.create(
      createMovimientoInventarioDto,
      req.usuario.id,
    );
  }

  @Get()
  @Roles(Rol.ADMINISTRADOR, Rol.CAJERO)
  findAll() {
    return this.movimientosInventarioService.findAll();
  }

  @Get(':id')
  @Roles(Rol.ADMINISTRADOR, Rol.CAJERO)
  findOne(@Param('id') id: string) {
    return this.movimientosInventarioService.findOne(+id);
  }
}
