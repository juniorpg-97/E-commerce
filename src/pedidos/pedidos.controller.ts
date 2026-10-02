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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { PedidosService } from './pedidos.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@ApiTags('Pedidos')
@ApiBearerAuth('JWT-auth')
@Controller('pedidos')
@UseGuards(JwtAuthGuard)
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  // CLIENTE
  // Crear un nuevo pedido a partir de su carrito
  @Post()
  @UseGuards(RolesGuard)
  @Roles('CLIENTE')
  create(@Body() createPedidoDto: CreatePedidoDto, @Req() req: any) {
    return this.pedidosService.create(createPedidoDto, req.usuario.id);
  }

  // CAJERO Y ADMINISTRADOR
  // Ver todos los pedidos
  @Get()
  @UseGuards(RolesGuard)
  @Roles('CAJERO', 'ADMINISTRADOR')
  findAll() {
    return this.pedidosService.findAll();
  }

  // CAJERO Y ADMINISTRADOR
  // Ver pedidos pendientes
  @Get('pendientes')
  @UseGuards(RolesGuard)
  @Roles('CAJERO', 'ADMINISTRADOR')
  findPendientes() {
    return this.pedidosService.findPendientes();
  }

  // CLIENTE
  // Ver sus propios pedidos sin enviar ningún ID
  @Get('mi-pedido')
  @UseGuards(RolesGuard)
  @Roles('CLIENTE')
  findMisPedidos(@Req() req: any) {
    return this.pedidosService.findMisPedidos(req.usuario.id);
  }

  // CAJERO Y ADMINISTRADOR
  // Ver un pedido específico
  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('CAJERO', 'ADMINISTRADOR')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  // CLIENTE
  // Cambiar el estado de su pedido
  @Patch(':id/estado')
  @UseGuards(RolesGuard)
  @Roles('CLIENTE')
  cambiarEstado(
    @Param('id') id: string,
    @Body() updatePedidoDto: UpdatePedidoDto,
    @Req() req: any,
  ) {
    return this.pedidosService.cambiarEstado(
      +id,
      updatePedidoDto,
      req.usuario.id,
    );
  }
}
