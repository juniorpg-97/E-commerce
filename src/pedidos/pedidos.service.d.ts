import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { EstadoPedido, TipoVenta } from '../../generated/prisma/enums.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';
export declare class PedidosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPedidoDto: CreatePedidoDto, usuarioId: number): Promise<{
        mensaje: string;
        pedido: {
            id: number;
            clienteId: number;
            direccionId: number;
            estado: EstadoPedido;
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
        estado: EstadoPedido;
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
        estado: EstadoPedido;
        total: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    })[]>;
    findMisPedidos(usuarioId: number): Promise<({
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
        estado: EstadoPedido;
        total: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    })[]>;
    findOne(id: number): Promise<({
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
            tipo: TipoVenta;
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
        estado: EstadoPedido;
        total: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    }) | null>;
    cambiarEstado(id: number, updatePedidoDto: UpdatePedidoDto, usuarioId: number): Promise<{
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
            tipo: TipoVenta;
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
        estado: EstadoPedido;
        total: import("@prisma/client-runtime-utils").Decimal;
        metodoPago: import("../../generated/prisma/enums.js").MetodoPago;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
}
//# sourceMappingURL=pedidos.service.d.ts.map