import { CategoriasService } from './categorias.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
}
//# sourceMappingURL=categorias.controller.d.ts.map