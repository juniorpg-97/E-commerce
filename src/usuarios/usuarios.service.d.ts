import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }[]>;
    findOne(id: number): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    create(createUserDto: CreateUsuarioDto): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    findByEmail(email: string): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        password: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    } | null>;
}
//# sourceMappingURL=usuarios.service.d.ts.map