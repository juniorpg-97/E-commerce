import { PedidosService } from './pedidos.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto, req: any): Promise<{
        mensaje: string;
        pedido: {
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
    }>;
    findAll(): Promise<({
        cliente: {
            id: number;
            usuarioId: number;
            nombre: string;
            apellido: string;
            email: string;
            telefono: string | null;
            activo: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        detalles: ({
            producto: {
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
        })[];
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
    })[]>;
    findPendientes(): Promise<({
        cliente: {
            id: number;
            usuarioId: number;
            nombre: string;
            apellido: string;
            email: string;
            telefono: string | null;
            activo: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        detalles: ({
            producto: {
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
        })[];
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
    })[]>;
    findMisPedidos(req: any): Promise<({
        detalles: ({
            producto: {
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
        })[];
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
    })[]>;
    findOne(id: string): Promise<({
        cliente: {
            id: number;
            usuarioId: number;
            nombre: string;
            apellido: string;
            email: string;
            telefono: string | null;
            activo: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
        };
        detalles: ({
            producto: {
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
        })[];
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
        } | null;
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
    }) | null>;
    cambiarEstado(id: string, updatePedidoDto: UpdatePedidoDto, req: any): Promise<{
        detalles: ({
            producto: {
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
        })[];
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
        } | null;
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
    }>;
}
//# sourceMappingURL=pedidos.controller.d.ts.map