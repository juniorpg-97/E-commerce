import { DetallePedidoService } from './detalle-pedido.service.js';
export declare class DetallePedidoController {
    private readonly detallePedidoService;
    constructor(detallePedidoService: DetallePedidoService);
    findAll(): Promise<({
        pedido: {
            direccion: {
                id: number;
                clienteId: number;
                calle: string;
                numero: string;
                referencia: string | null;
                ciudad: string;
                codigoPostal: string;
                activa: boolean;
                creadoEn: Date;
                actualizadoEn: Date;
            };
        } & {
            id: number;
            clienteId: number;
            direccionId: number;
            estado: import("../../generated/prisma/enums.js").EstadoPedido;
            total: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
            observaciones: string | null;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        producto: {
            descripcion: string | null;
            id: number;
            nombre: string;
            precioVenta: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: number;
        pedidoId: number;
        productoId: number;
        cantidad: number;
        precioUnitario: import("@prisma/client-runtime-utils").Decimal;
        descuento: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        creadoEn: Date;
        actualizadoEn: Date;
    })[]>;
    findOne(id: string): Promise<({
        pedido: {
            direccion: {
                id: number;
                clienteId: number;
                calle: string;
                numero: string;
                referencia: string | null;
                ciudad: string;
                codigoPostal: string;
                activa: boolean;
                creadoEn: Date;
                actualizadoEn: Date;
            };
        } & {
            id: number;
            clienteId: number;
            direccionId: number;
            estado: import("../../generated/prisma/enums.js").EstadoPedido;
            total: import("@prisma/client-runtime-utils").Decimal;
            metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
            observaciones: string | null;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        producto: {
            descripcion: string | null;
            id: number;
            nombre: string;
            precioVenta: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: number;
        pedidoId: number;
        productoId: number;
        cantidad: number;
        precioUnitario: import("@prisma/client-runtime-utils").Decimal;
        descuento: import("@prisma/client-runtime-utils").Decimal;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        creadoEn: Date;
        actualizadoEn: Date;
    }) | null>;
}
//# sourceMappingURL=detalle-pedido.controller.d.ts.map