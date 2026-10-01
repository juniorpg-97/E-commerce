import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service.js';
import { DetalleVentaController } from './detalle-venta.controller.js';

@Module({
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}
