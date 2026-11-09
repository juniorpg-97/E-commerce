import type { Request } from 'express';
import { CajasService } from './cajas.service.js';
import { CreateCajaDto } from './dto/create-caja.dto.js';
export declare class CajasController {
    private readonly cajasService;
    constructor(cajasService: CajasService);
    create(createCajaDto: CreateCajaDto, request: Request): Promise<{
        mensaje: string;
        caja: {
            id: number;
            usuarioId: number;
            fechaApertura: Date;
            fechaCierre: Date | null;
            montoInicial: import("@prisma/client-runtime-utils").Decimal;
            montoEsperado: import("@prisma/client-runtime-utils").Decimal | null;
            montoContado: import("@prisma/client-runtime-utils").Decimal | null;
            diferencia: import("@prisma/client-runtime-utils").Decimal | null;
            estado: import("../../generated/prisma/enums.js").EstadoCaja;
            creadoEn: Date;
            actualizadoEn: Date;
        };
    }>;
}
//# sourceMappingURL=cajas.controller.d.ts.map