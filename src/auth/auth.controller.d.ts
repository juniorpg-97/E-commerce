import { AuthService } from './auth.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import type { Request as ExpressRequest } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUsuarioDto: CreateUsuarioDto): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    login(req: ExpressRequest): Promise<{
        token: string;
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map