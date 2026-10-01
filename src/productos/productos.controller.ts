import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import type { Request as ExpressRequest } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Productos')
@ApiBearerAuth('JWT-auth')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Crear un nuevo producto',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto creado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede crear productos',
  })
  @ApiResponse({
    status: 404,
    description: 'La categoría indicada no existe',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe un producto con ese nombre',
  })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Listar productos',
    description:
      'Obtiene todos los productos o filtra los productos por categoría. El costo de adquisición no se muestra a los clientes.',
  })
  @ApiQuery({
    name: 'categoriaId',
    required: false,
    type: Number,
    example: 1,
    description: 'ID de la categoría por la que se desea filtrar',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos obtenida correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  findAll(
    @Request()
    req: ExpressRequest & {
      usuario: {
        rol: string;
      };
    },
    @Query('categoriaId') categoriaId?: string,
  ) {
    return this.productosService.findAll(req.usuario.rol, categoriaId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Buscar un producto por ID',
    description:
      'Obtiene la información de un producto. El costo de adquisición no se muestra a los clientes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
  })
  findOne(
    @Param('id') id: string,
    @Request()
    req: ExpressRequest & {
      usuario: {
        rol: string;
      };
    },
  ) {
    return this.productosService.findOne(+id, req.usuario.rol);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Actualizar un producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede actualizar productos',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto o categoría no encontrada',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe un producto con ese nombre',
  })
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Eliminar un producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede eliminar productos',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado',
  })
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
