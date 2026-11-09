import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
export declare class CategoriasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
}
//# sourceMappingURL=categorias.service.d.ts.map