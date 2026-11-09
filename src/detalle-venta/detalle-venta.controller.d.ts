import { DetalleVentaService } from './detalle-venta.service.js';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto.js';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto.js';
export declare class DetalleVentaController {
    private readonly detalleVentaService;
    constructor(detalleVentaService: DetalleVentaService);
    create(createDetalleVentaDto: CreateDetalleVentaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDetalleVentaDto: UpdateDetalleVentaDto): string;
    remove(id: string): string;
}
//# sourceMappingURL=detalle-venta.controller.d.ts.map