import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCarritoDto } from './dto/create-carrito.dto.js';
import { UpdateCarritoDto } from './dto/update-carrito.dto.js';
export declare class CarritoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private obtenerCliente;
    agregarProducto(createCarritoDto: CreateCarritoDto, usuarioId: number): Promise<{
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
    findOne(usuarioId: number): Promise<({
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
    actualizarCantidad(detalleId: number, updateCarritoDto: UpdateCarritoDto, usuarioId: number): Promise<{
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
    eliminarProducto(detalleId: number, usuarioId: number): Promise<{
        mensaje: string;
    }>;
    vaciarCarrito(usuarioId: number): Promise<{
        mensaje: string;
    }>;
}
//# sourceMappingURL=carritos.service.d.ts.map