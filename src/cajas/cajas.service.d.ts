import { CreateCajaDto } from './dto/create-caja.dto.js';
import { UpdateCajaDto } from './dto/update-caja.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class CajasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCajaDto: CreateCajaDto, usuarioId: number): Promise<{
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
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCajaDto: UpdateCajaDto): string;
    remove(id: number): string;
}
//# sourceMappingURL=cajas.service.d.ts.map