import type { Request } from 'express';
import { CarritoService } from './carritos.service.js';
import { CreateCarritoDto } from './dto/create-carrito.dto.js';
import { UpdateCarritoDto } from './dto/update-carrito.dto.js';
export declare class CarritoController {
    private readonly carritoService;
    constructor(carritoService: CarritoService);
    agregarProducto(createCarritoDto: CreateCarritoDto, request: Request): Promise<{
        mensaje: string;
        carritoId: number;
        detalle: {
            producto: {
                activo: boolean;
                descripcion: string | null;
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            carritoId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        };
    }>;
    findOne(request: Request): Promise<({
        detalles: ({
            producto: {
                activo: boolean;
                descripcion: string | null;
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            carritoId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        })[];
    } & {
        id: number;
        clienteId: number;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }) | null>;
    actualizarCantidad(id: string, updateCarritoDto: UpdateCarritoDto, request: Request): Promise<{
        mensaje: string;
        detalle: {
            producto: {
                activo: boolean;
                descripcion: string | null;
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            carritoId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        };
    }>;
    eliminarProducto(id: string, request: Request): Promise<{
        mensaje: string;
    }>;
    vaciarCarrito(request: Request): Promise<{
        mensaje: string;
    }>;
}
//# sourceMappingURL=carritos.controller.d.ts.map