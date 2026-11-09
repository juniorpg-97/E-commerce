import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto.js';
export declare class MovimientosInventarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMovimientoInventarioDto: CreateMovimientoInventarioDto, usuarioId: number): Promise<{
        mensaje: string;
        movimiento: {
            id: number;
            inventarioId: number;
            usuarioId: number | null;
            detalleVentaId: number | null;
            tipo: import("../../generated/prisma/enums.js").TipoMovimiento;
            cantidad: number;
            motivo: string | null;
            referencia: string | null;
            fecha: Date;
            creadoEn: Date;
        };
    }>;
    findAll(): Promise<({
        detalleVenta: {
            id: number;
            ventaId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        } | null;
        inventario: {
            producto: {
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
        usuario: {
            apellido: string;
            email: string;
            id: number;
            nombre: string;
            rol: import("../../generated/prisma/enums.js").Rol;
        } | null;
    } & {
        id: number;
        inventarioId: number;
        usuarioId: number | null;
        detalleVentaId: number | null;
        tipo: import("../../generated/prisma/enums.js").TipoMovimiento;
        cantidad: number;
        motivo: string | null;
        referencia: string | null;
        fecha: Date;
        creadoEn: Date;
    })[]>;
    findOne(id: number): Promise<({
        detalleVenta: {
            id: number;
            ventaId: number;
            productoId: number;
            cantidad: number;
            precioUnitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            creadoEn: Date;
            actualizadoEn: Date;
        } | null;
        inventario: {
            producto: {
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
        usuario: {
            apellido: string;
            email: string;
            id: number;
            nombre: string;
            rol: import("../../generated/prisma/enums.js").Rol;
        } | null;
    } & {
        id: number;
        inventarioId: number;
        usuarioId: number | null;
        detalleVentaId: number | null;
        tipo: import("../../generated/prisma/enums.js").TipoMovimiento;
        cantidad: number;
        motivo: string | null;
        referencia: string | null;
        fecha: Date;
        creadoEn: Date;
    }) | null>;
}
//# sourceMappingURL=movimientos-inventario.service.d.ts.map