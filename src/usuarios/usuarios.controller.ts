import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Usuarios')
@ApiBearerAuth('JWT-auth')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Crear un nuevo usuario',
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario creado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'No tienes permisos para crear usuarios',
  })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Listar todos los usuarios',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios obtenida correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede consultar los usuarios',
  })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Buscar un usuario por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario encontrado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }
}
