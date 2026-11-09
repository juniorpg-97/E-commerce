import { UsuariosService } from './usuarios.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    findAll(): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }[]>;
    findOne(id: string): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
}
//# sourceMappingURL=usuarios.controller.d.ts.map