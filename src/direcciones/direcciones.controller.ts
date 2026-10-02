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
import { DireccionesService } from './direcciones.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

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

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.direccionesService.findOne(+id, req.usuario.id);
  }

  @Delete(':id')
  desactivar(@Param('id') id: string, @Req() req: any) {
    return this.direccionesService.desactivar(+id, req.usuario.id);
  }
}
