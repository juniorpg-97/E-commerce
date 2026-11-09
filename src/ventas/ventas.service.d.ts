import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class VentasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createVentaDto: CreateVentaDto, usuarioId: number): Promise<{
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
            rol: import("../../generated/prisma/enums.js").Rol;
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
    findOne(id: number): string;
    update(id: number, updateVentaDto: UpdateVentaDto): string;
    remove(id: number): string;
}
//# sourceMappingURL=ventas.service.d.ts.map