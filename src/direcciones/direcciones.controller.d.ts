import { DireccionesService } from './direcciones.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';
export declare class DireccionesController {
    private readonly direccionesService;
    constructor(direccionesService: DireccionesService);
    create(createDireccionDto: CreateDireccionDto, req: any): Promise<{
        mensaje: string;
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
    }>;
    findAll(req: any): Promise<{
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
    }[]>;
    findOne(id: string, req: any): Promise<{
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
    } | null>;
    desactivar(id: string, req: any): Promise<{
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
    }>;
}
//# sourceMappingURL=direcciones.controller.d.ts.map