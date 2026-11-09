import { InventarioService } from './inventario.service.js';
import { CreateInventarioDto } from './dto/create-inventario.dto.js';
import { UpdateInventarioDto } from './dto/update-inventario.dto.js';
export declare class InventarioController {
    private readonly inventarioService;
    constructor(inventarioService: InventarioService);
    create(createInventarioDto: CreateInventarioDto): Promise<{
        mensaje: string;
        inventario: {
            producto: {
                activo: boolean;
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            productoId: number;
            stock: number;
            creadoEn: Date;
            actualizadoEn: Date;
        };
    }>;
    findAll(): Promise<({
        producto: {
            activo: boolean;
            descripcion: string | null;
            id: number;
            nombre: string;
            precioVenta: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: number;
        productoId: number;
        stock: number;
        creadoEn: Date;
        actualizadoEn: Date;
    })[]>;
    findByProducto(productoId: string): Promise<({
        producto: {
            activo: boolean;
            descripcion: string | null;
            id: number;
            nombre: string;
            precioVenta: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: number;
        productoId: number;
        stock: number;
        creadoEn: Date;
        actualizadoEn: Date;
    }) | null>;
    findOne(id: string): Promise<({
        producto: {
            activo: boolean;
            descripcion: string | null;
            id: number;
            nombre: string;
            precioVenta: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: number;
        productoId: number;
        stock: number;
        creadoEn: Date;
        actualizadoEn: Date;
    }) | null>;
    update(id: string, updateInventarioDto: UpdateInventarioDto): Promise<{
        mensaje: string;
        inventario: {
            producto: {
                activo: boolean;
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            productoId: number;
            stock: number;
            creadoEn: Date;
            actualizadoEn: Date;
        };
    }>;
}
//# sourceMappingURL=inventario.controller.d.ts.map