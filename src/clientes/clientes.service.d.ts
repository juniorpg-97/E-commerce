import { PrismaService } from '../prisma/prisma.service.js';
import { CreateClienteDto } from './dto/create-cliente.dto.js';
export declare class ClientesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClienteDto: CreateClienteDto, usuarioId: number): Promise<{
        mensaje: string;
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
    }>;
    findAll(): Promise<{
        activo: boolean;
        actualizadoEn: Date;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        telefono: string | null;
        usuarioId: number;
    }[]>;
    findOne(id: number): Promise<{
        activo: boolean;
        actualizadoEn: Date;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        telefono: string | null;
        usuarioId: number;
    } | null>;
}
//# sourceMappingURL=clientes.service.d.ts.map