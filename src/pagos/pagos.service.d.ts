import { PrismaService } from '../prisma/prisma.service.js';
import { MockPayWebhookDto } from './dto/mockpay-webhook.dto.js';
export declare class PagosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    procesarWebhookMockPay(webhook: MockPayWebhookDto): Promise<{
        message: string;
        pagoId: number;
        transaccionId: string | null;
        estado: import("../../generated/prisma/enums.js").EstadoPago;
    }>;
    private obtenerEstadoPago;
    crearPagoMockPay(pedidoId: number, monto: number, transaccionId: string, referencia: string): Promise<{
        id: number;
        pedidoId: number | null;
        ventaId: number | null;
        metodo: import("../../generated/prisma/enums.js").MetodoPago;
        estado: import("../../generated/prisma/enums.js").EstadoPago;
        monto: import("@prisma/client-runtime-utils").Decimal;
        transaccionId: string | null;
        referencia: string | null;
        respuestaMockPay: string | null;
        fechaPago: Date | null;
        creadoEn: Date;
        actualizadoEn: Date;
    }>;
}
//# sourceMappingURL=pagos.service.d.ts.map