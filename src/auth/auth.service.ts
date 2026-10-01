import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt, { SignOptions } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly configService: ConfigService,
  ) {}
  async register(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  async validateUser(email: string, password: string) {
    const usuario = await this.usuariosService.findByEmail(email);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales invalidas');
    }
    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales invalidas');
    }
    return usuario;
  }

  async generateToken(usuario: {
    id: number;
    email: string;
    rol: string;
    nombre: string;
    apellido: string;
  }) {
    const secret = this.configService.getOrThrow<string>('JWT_SECRET');
    const expiresIn = this.configService.getOrThrow<string>('JWT_EXPIRES_IN');

    const options: SignOptions = {
      expiresIn: expiresIn as SignOptions['expiresIn'],
    };

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
      },
      secret,
      options,
    );

    return {
      token,
    };
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.usuariosService.findByEmail(loginDto.email);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales invalidas');
    }
    const isMatch = await bcrypt.compare(loginDto.password, usuario.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales invalidas');
    }
    const secret = this.configService.getOrThrow<string>('JWT_SECRET');
    const expiresIn = this.configService.getOrThrow<string>('JWT_EXPIRES_IN');
    const options: SignOptions = {
      expiresIn: expiresIn as SignOptions['expiresIn'],
    };
    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
      },
      secret,
      options,
    );
    return {
      mensaje: 'Credenciales correctas',
      token,
    };
  }
}
