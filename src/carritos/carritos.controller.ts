import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';

import { CarritoService } from './carritos.service.js';
import { CreateCarritoDto } from './dto/create-carrito.dto.js';
import { UpdateCarritoDto } from './dto/update-carrito.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@ApiTags('Carrito')
@ApiBearerAuth('JWT-auth')
@Controller('carrito')
@UseGuards(JwtAuthGuard)
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post()
  @ApiOperation({
    summary: 'Agregar producto al carrito',
    description:
      'Agrega un producto al carrito activo del cliente autenticado. Si el producto ya existe, aumenta su cantidad.',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto agregado al carrito correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  agregarProducto(
    @Body() createCarritoDto: CreateCarritoDto,
    @Req() request: Request,
  ) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.carritoService.agregarProducto(createCarritoDto, usuario.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Consultar carrito activo',
    description:
      'Obtiene el carrito activo del cliente autenticado con sus productos.',
  })
  @ApiResponse({
    status: 200,
    description: 'Carrito obtenido correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  findOne(@Req() request: Request) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.carritoService.findOne(usuario.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar cantidad de un producto',
    description:
      'Modifica la cantidad de un producto que ya pertenece al carrito activo del cliente.',
  })
  @ApiResponse({
    status: 200,
    description: 'Cantidad actualizada correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  actualizarCantidad(
    @Param('id') id: string,
    @Body() updateCarritoDto: UpdateCarritoDto,
    @Req() request: Request,
  ) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.carritoService.actualizarCantidad(
      +id,
      updateCarritoDto,
      usuario.id,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar producto del carrito',
    description:
      'Elimina un producto específico del carrito activo del cliente.',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  eliminarProducto(@Param('id') id: string, @Req() request: Request) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.carritoService.eliminarProducto(+id, usuario.id);
  }

  @Delete()
  @ApiOperation({
    summary: 'Vaciar carrito',
    description: 'Elimina todos los productos del carrito activo del cliente.',
  })
  @ApiResponse({
    status: 200,
    description: 'Carrito vaciado correctamente.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado, inválido o expirado.',
  })
  vaciarCarrito(@Req() request: Request) {
    const usuario = (
      request as Request & {
        usuario: {
          id: number;
          email: string;
          rol: string;
          nombre: string;
          apellido: string;
        };
      }
    ).usuario;

    return this.carritoService.vaciarCarrito(usuario.id);
  }
}
