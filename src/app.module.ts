import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './config/env.validation.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CategoriasModule } from './categorias/categorias.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ProductosModule } from './productos/productos.module.js';
import { VentasModule } from './ventas/ventas.module.js';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module.js';
import { CajasModule } from './cajas/cajas.module.js';
import { CarritosModule } from './carritos/carritos.module.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { PedidosModule } from './pedidos/pedidos.module.js';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module.js';
import { DireccionesModule } from './direcciones/direcciones.module.js';
import { InventarioModule } from './inventario/inventario.module.js';
import { MovimientosInventarioModule } from './movimientos-inventario/movimientos-inventario.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
    }),

    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'E_commerce',
    }),
    PrismaModule,
    UsuariosModule,
    AuthModule,
    CategoriasModule,
    ProductosModule,
    VentasModule,
    DetalleVentaModule,
    CajasModule,
    CarritosModule,
    ClientesModule,
    PedidosModule,
    DetallePedidoModule,
    DireccionesModule,
    InventarioModule,
    MovimientosInventarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
