import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { RegisterClienteDto } from '../usuarios/dto/register-cliente.dto.js'; // ✅ ÚNICO IMPORT NUEVO AGREGADO
import { LocalAuthGuard } from './guards/local-auth.guard.js';
import { LoginDto } from './dto/login.dto.js';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Registrar un nuevo usuario',
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario registrado correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Los datos enviados no son válidos',
  })
  async register(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.register(createUsuarioDto);
  }

  // ✅ NUEVO ENDPOINT AGREGADO SIN TOCAR LO DEMÁS
  @Post('register-cliente')
  @ApiOperation({
    summary: 'Registrar cliente con dirección inicial',
  })
  @ApiResponse({
    status: 201,
    description: 'Cliente y dirección creados correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos o email ya existe',
  })
  async registerCliente(@Body() dto: RegisterClienteDto) {
    return this.authService.registerCliente(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({
    summary: 'Iniciar sesión',
  })
  @ApiBody({
    type: LoginDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Credenciales correctas y token JWT generado',
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciales inválidas',
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
