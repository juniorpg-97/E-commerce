import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UsuariosModule } from '../usuarios/usuarios.module.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { RolesGuard } from './guards/roles.guard.js';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy.js';

@Module({
  imports: [
    forwardRef(() => UsuariosModule),
    PassportModule.register({ defaultStrategy: 'local' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, RolesGuard, LocalStrategy],
  exports: [AuthService, JwtAuthGuard, RolesGuard],
})
export class AuthModule {}
