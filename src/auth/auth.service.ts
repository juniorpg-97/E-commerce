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

  // ✅ 1. Reutilizamos este método para validar
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

  // ✅ 2. Reutilizamos este método para generar el token
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

    return jwt.sign(
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
  }

  // ✅ 3. Login limpio, reutilizando los métodos anteriores y devolviendo el usuario
  async login(loginDto: LoginDto) {
    // Validamos al usuario (si falla, lanza la excepción automáticamente)
    const usuario = await this.validateUser(loginDto.email, loginDto.password);

    // Generamos el token
    const token = await this.generateToken({
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
    });

    // ✅ DEVOLVEMOS EL TOKEN Y LOS DATOS DEL USUARIO EXPLÍCITAMENTE
    return {
      mensaje: 'Credenciales correctas',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol,
      },
    };
  }
}
