import { ClientesService } from './clientes.service.js';
import { CreateClienteDto } from './dto/create-cliente.dto.js';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto, req: any): Promise<{
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
    findOne(id: string): Promise<{
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
//# sourceMappingURL=clientes.controller.d.ts.map