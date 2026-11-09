import { PrismaService } from '../prisma/prisma.service.js';
import { CreateInventarioDto } from './dto/create-inventario.dto.js';
import { UpdateInventarioDto } from './dto/update-inventario.dto.js';
export declare class InventarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<({
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
    findByProducto(productoId: number): Promise<({
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
    update(id: number, updateInventarioDto: UpdateInventarioDto): Promise<{
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
//# sourceMappingURL=inventario.service.d.ts.map