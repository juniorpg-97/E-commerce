import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt, { SignOptions } from 'jsonwebtoken';
// ✅ IMPORTANTE: Necesitamos PrismaService para buscar el cliente
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly configService: ConfigService,
    // ✅ Inyectamos PrismaService
    private readonly prisma: PrismaService,
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

  // ✅ MODIFICADO: Ahora acepta clienteId opcional
  async generateToken(usuario: {
    id: number;
    email: string;
    rol: string;
    nombre: string;
    apellido: string;
    clienteId?: number | null; // ✅ Agregado
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
        clienteId: usuario.clienteId, // ✅ Incluido en el payload del token
      },
      secret,
      options,
    );
  }

  // ✅ CORREGIDO: Busca el cliente y lo devuelve en la respuesta
  async login(loginDto: LoginDto) {
    const usuario = await this.validateUser(loginDto.email, loginDto.password);

    // ✅ BUSCAR EL CLIENTE ASOCIADO A ESTE USUARIO
    const cliente = await this.prisma.cliente.findUnique({
      where: { usuarioId: usuario.id },
      select: { id: true },
    });

    const clienteId = cliente?.id ?? null;

    // Generamos el token incluyendo el clienteId
    const token = await this.generateToken({
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      clienteId: clienteId, // ✅ Pasamos el ID encontrado
    });

    // ✅ DEVOLVEMOS EL TOKEN Y LOS DATOS DEL USUARIO INCLUYENDO clienteId
    return {
      mensaje: 'Credenciales correctas',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol,
        clienteId: clienteId, // ✅ AGREGADO AQUÍ PARA EL FRONTEND
      },
    };
  }
}
