import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';
export declare class DireccionesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDireccionDto: CreateDireccionDto, usuarioId: number): Promise<{
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
    findAll(usuarioId: number): Promise<{
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
    findOne(id: number, usuarioId: number): Promise<{
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
    desactivar(id: number, usuarioId: number): Promise<{
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
//# sourceMappingURL=direcciones.service.d.ts.map