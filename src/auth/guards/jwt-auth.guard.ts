import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { CajaGroupByArgs } from '../../../generated/prisma/models.js';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const header = request.headers.authorization;

    if (!header || !header.startsWith('Bearer')) {
      throw new UnauthorizedException('Token no proporcionado');
    }
    try {
      request.usuario = jwt.verify(
        header.split(' ')[1],
        this.configService.getOrThrow<string>('JWT_SECRET'),
      );
      return true;
    } catch {
      throw new UnauthorizedException('Token invalido o expirado');
    }
  }
}
