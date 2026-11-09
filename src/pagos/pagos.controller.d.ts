import { CrearPagoMockPayDto } from './dto/crear-pago-mockpay.dto.js';
import { PagosService } from './pagos.service.js';
import { MockPayWebhookDto } from './dto/mockpay-webhook.dto.js';
export declare class PagosController {
    private readonly pagosService;
    constructor(pagosService: PagosService);
    webhookMockPay(webhook: MockPayWebhookDto): Promise<{
        message: string;
        pagoId: number;
        transaccionId: string | null;
        estado: import("../../generated/prisma/enums.js").EstadoPago;
    }>;
    crearPagoMockPay(dto: CrearPagoMockPayDto): Promise<{
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
//# sourceMappingURL=pagos.controller.d.ts.map