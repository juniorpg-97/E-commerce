import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import type { Request as ExpressRequest } from 'express';
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
  async login(@Request() req: ExpressRequest) {
    return this.authService.generateToken(
      req.user as {
        id: number;
        email: string;
        rol: string;
        nombre: string;
        apellido: string;
      },
    );
  }
}
