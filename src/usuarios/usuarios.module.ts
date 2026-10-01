import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { UsuariosController } from './usuarios.controller.js';

@Module({
  controllers: [UsuariosController], //controladores que pertenecen a este modulo
  providers: [UsuariosService], // servicios que se púeden inyectar dentro de este modulo
  exports: [UsuariosService], //Servicios que quieres "Prestar" a otros modulos
})
export class UsuariosModule {}
