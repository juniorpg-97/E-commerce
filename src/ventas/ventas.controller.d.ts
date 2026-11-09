import type { Request } from 'express';
import { VentasService } from './ventas.service.js';
import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { Rol } from '../../generated/prisma/client.js';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    create(createVentaDto: CreateVentaDto, request: Request): Promise<{
        mensaje: string;
        venta: {
            id: number;
            pedidoId: number | null;
            cajaId: number | null;
            usuarioId: number;
            clienteId: number | null;
            tipo: import("../../generated/prisma/enums.js").TipoVenta;
            fecha: Date;
            subtotalVenta: import("@prisma/client-runtime-utils").Decimal;
            descuento: import("@prisma/client-runtime-utils").Decimal;
            totalVenta: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
            estado: import("../../generated/prisma/enums.js").EstadoVenta;
            observaciones: string | null;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        detalles: {
            productoId: number;
            cantidad: number;
            precioUnitario: number;
            subtotal: number;
        }[];
    }>;
    findAll(fechaInicio?: string, fechaFin?: string): Promise<({
        cliente: {
            id: number;
        } | null;
        detalles: ({
            producto: {
                id: number;
                nombre: string;
                precioVenta: import("@prisma/client-runtime-utils").Decimal;
            };
        } & {
            id: number;
            ventaId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        })[];
        usuario: {
            apellido: string;
            email: string;
            id: number;
            nombre: string;
            rol: Rol;
        };
    } & {
        id: number;
        pedidoId: number | null;
        cajaId: number | null;
        usuarioId: number;
        clienteId: number | null;
        tipo: import("../../generated/prisma/enums.js").TipoVenta;
        fecha: Date;
        subtotalVenta: import("@prisma/client-runtime-utils").Decimal;
        descuento: import("@prisma/client-runtime-utils").Decimal;
        totalVenta: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
        estado: import("../../generated/prisma/enums.js").EstadoVenta;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateVentaDto: UpdateVentaDto): string;
    remove(id: string): string;
}
//# sourceMappingURL=ventas.controller.d.ts.map