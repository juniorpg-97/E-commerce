import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { LoginDto } from './dto/login.dto.js';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usuariosService;
    private readonly configService;
    constructor(usuariosService: UsuariosService, configService: ConfigService);
    register(createUsuarioDto: CreateUsuarioDto): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    validateUser(email: string, password: string): Promise<{
        activo: boolean;
        apellido: string;
        creadoEn: Date;
        email: string;
        id: number;
        nombre: string;
        password: string;
        rol: import("../../generated/prisma/enums.js").Rol;
    }>;
    generateToken(usuario: {
        id: number;
        email: string;
        rol: string;
        nombre: string;
        apellido: string;
    }): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        mensaje: string;
        token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map