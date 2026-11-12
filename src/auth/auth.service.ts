import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { RegisterClienteDto } from '../usuarios/dto/register-cliente.dto.js'; // ✅ NUEVO IMPORT
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt, { SignOptions } from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async register(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  // ✅ NUEVO MÉTODO PUENTE PARA EL REGISTRO DE CLIENTES
  async registerCliente(data: RegisterClienteDto) {
    return this.usuariosService.createClienteConDireccion(data);
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
    clienteId?: number | null;
  }) {
    const secret = this.configService.getOrThrow<string>('JWT_SECRET');
    const expiresIn = this.configService.getOrThrow<string>('JWT_EXPIRES_IN');

    return jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        clienteId: usuario.clienteId,
      },
      secret,
      { expiresIn: expiresIn as SignOptions['expiresIn'] },
    );
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.validateUser(loginDto.email, loginDto.password);

    const cliente = await this.prisma.cliente.findUnique({
      where: { usuarioId: usuario.id },
      select: { id: true },
    });

    const clienteId = cliente?.id ?? null;

    const token = await this.generateToken({
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      clienteId,
    });

    return {
      mensaje: 'Credenciales correctas',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol,
        clienteId,
      },
    };
  }
}
