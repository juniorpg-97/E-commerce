import { MetodoPago, TipoVenta } from '../../../generated/prisma/client.js';
import { CreateDetalleVentaDto } from '../../detalle-venta/dto/create-detalle-venta.dto.js';
export declare class CreateVentaDto {
    cajaId: number;
    tipo?: TipoVenta;
    clienteId?: number;
    metodoPago: MetodoPago;
    descuento?: number;
    observaciones?: string;
    detalles: CreateDetalleVentaDto[];
}
//# sourceMappingURL=create-venta.dto.d.ts.map