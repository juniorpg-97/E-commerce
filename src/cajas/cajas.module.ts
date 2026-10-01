import { Module } from '@nestjs/common';
import { CajasService } from './cajas.service.js';
import { CajasController } from './cajas.controller.js';

@Module({
  controllers: [CajasController],
  providers: [CajasService],
})
export class CajasModule {}
