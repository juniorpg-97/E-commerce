import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InventarioService } from './inventario.service.js';
import { CreateInventarioDto } from './dto/create-inventario.dto.js';
import { UpdateInventarioDto } from './dto/update-inventario.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { Rol } from '../../generated/prisma/enums.js';

@ApiTags('Inventario')
@ApiBearerAuth('JWT-auth')
@Controller('inventario')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Post()
  @Roles(Rol.ADMINISTRADOR)
  create(@Body() createInventarioDto: CreateInventarioDto) {
    return this.inventarioService.create(createInventarioDto);
  }

  @Get()
  @Roles(Rol.ADMINISTRADOR, Rol.CAJERO)
  findAll() {
    return this.inventarioService.findAll();
  }

  @Get('producto/:productoId')
  @Roles(Rol.ADMINISTRADOR, Rol.CAJERO, Rol.CLIENTE)
  findByProducto(@Param('productoId') productoId: string) {
    return this.inventarioService.findByProducto(+productoId);
  }

  @Get(':id')
  @Roles(Rol.ADMINISTRADOR, Rol.CAJERO)
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Rol.ADMINISTRADOR)
  update(
    @Param('id') id: string,
    @Body() updateInventarioDto: UpdateInventarioDto,
  ) {
    return this.inventarioService.update(+id, updateInventarioDto);
  }
}
