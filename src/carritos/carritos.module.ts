import { Module } from '@nestjs/common';
import { CarritoService } from './carritos.service.js';
import { CarritoController } from './carritos.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CarritoController],
  providers: [CarritoService],
  exports: [CarritoService],
})
export class CarritosModule {}
