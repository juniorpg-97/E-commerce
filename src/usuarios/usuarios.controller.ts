import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { RegisterClienteDto } from './dto/register-cliente.dto.js'; // ✅ ÚNICO IMPORT NUEVO
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
  @ApiOperation({ summary: 'Crear un nuevo usuario (Admin/Cajero)' })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente' })
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

  // ✅ NUEVO ENDPOINT PÚBLICO
  @Post('registro-cliente')
  @ApiOperation({ summary: 'Registrar cliente con dirección inicial' })
  @ApiResponse({
    status: 201,
    description: 'Cliente y dirección creados correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos o email ya existe',
  })
  registerCliente(@Body() registerClienteDto: RegisterClienteDto) {
    return this.usuariosService.createClienteConDireccion(registerClienteDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({ summary: 'Listar todos los usuarios' })
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
  @ApiOperation({ summary: 'Buscar un usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado correctamente' })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }
}
