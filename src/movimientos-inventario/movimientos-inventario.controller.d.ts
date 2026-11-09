import { MovimientosInventarioService } from './movimientos-inventario.service.js';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto.js';
import { Rol } from '../../generated/prisma/enums.js';
export declare class MovimientosInventarioController {
    private readonly movimientosInventarioService;
    constructor(movimientosInventarioService: MovimientosInventarioService);
    create(createMovimientoInventarioDto: CreateMovimientoInventarioDto, req: any): Promise<{
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
            rol: Rol;
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
    findOne(id: string): Promise<({
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
            rol: Rol;
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
//# sourceMappingURL=movimientos-inventario.controller.d.ts.map