import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Categorías')
@ApiBearerAuth('JWT-auth')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Crear una nueva categoría',
  })
  @ApiResponse({
    status: 201,
    description: 'Categoría creada correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede crear categorías',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe una categoría con ese nombre',
  })
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Listar todas las categorías',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorías obtenida correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Buscar una categoría por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría encontrada correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Actualizar una categoría',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría actualizada correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede actualizar categorías',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe una categoría con ese nombre',
  })
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMINISTRADOR')
  @ApiOperation({
    summary: 'Eliminar una categoría',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoría eliminada correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token no proporcionado o inválido',
  })
  @ApiResponse({
    status: 403,
    description: 'Solo el administrador puede eliminar categorías',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoría no encontrada',
  })
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
