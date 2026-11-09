import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
export declare class ProductosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductoDto: CreateProductoDto): Promise<{
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        costoAdquisicion: import("@prisma/client-runtime-utils").Decimal;
        precioVenta: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    findAll(rol: string, categoriaId?: string): Promise<{
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        precioVenta: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        categoria: {
            id: number;
            nombre: string;
            descripcion: string | null;
            activa: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        inventario: {
            id: number;
            productoId: number;
            stock: number;
            creadoEn: Date;
            actualizadoEn: Date;
        } | null;
    }[]>;
    findOne(id: number, rol?: string): Promise<{
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        precioVenta: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        categoria: {
            id: number;
            nombre: string;
            descripcion: string | null;
            activa: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        inventario: {
            id: number;
            productoId: number;
            stock: number;
            creadoEn: Date;
            actualizadoEn: Date;
        } | null;
    }>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<{
        categoria: {
            id: number;
            nombre: string;
            descripcion: string | null;
            activa: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        inventario: {
            id: number;
            productoId: number;
            stock: number;
            creadoEn: Date;
            actualizadoEn: Date;
        } | null;
    } & {
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        costoAdquisicion: import("@prisma/client-runtime-utils").Decimal;
        precioVenta: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        costoAdquisicion: import("@prisma/client-runtime-utils").Decimal;
        precioVenta: import("@prisma/client-runtime-utils").Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
}
//# sourceMappingURL=productos.service.d.ts.map