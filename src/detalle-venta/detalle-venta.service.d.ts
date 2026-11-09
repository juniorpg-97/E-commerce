import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto.js';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto.js';
export declare class DetalleVentaService {
    create(createDetalleVentaDto: CreateDetalleVentaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDetalleVentaDto: UpdateDetalleVentaDto): string;
    remove(id: number): string;
}
//# sourceMappingURL=detalle-venta.service.d.ts.map