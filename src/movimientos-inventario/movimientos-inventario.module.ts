import { Module } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos-inventario.service.js';
import { MovimientosInventarioController } from './movimientos-inventario.controller.js';

@Module({
  controllers: [MovimientosInventarioController],
  providers: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}
