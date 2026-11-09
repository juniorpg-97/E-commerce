import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import type { Request as ExpressRequest } from 'express';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
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
    findAll(req: ExpressRequest & {
        usuario: {
            rol: string;
        };
    }, categoriaId?: string): Promise<{
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
    findOne(id: string, req: ExpressRequest & {
        usuario: {
            rol: string;
        };
    }): Promise<{
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
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<{
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
    remove(id: string): Promise<{
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
//# sourceMappingURL=productos.controller.d.ts.map