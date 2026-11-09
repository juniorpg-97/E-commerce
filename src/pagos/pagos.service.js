var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { MockPayPaymentStatus, MockPayWebhookDto, } from './dto/mockpay-webhook.dto.js';
let PagosService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PagosService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            PagosService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async procesarWebhookMockPay(webhook) {
            const pago = await this.prisma.pago.findUnique({
                where: {
                    transaccionId: webhook.transactionId,
                },
            });
            if (!pago) {
                throw new NotFoundException('No se encontró un pago asociado a la transacción de MockPay');
            }
            if (pago.metodo !== 'MOCKPAY') {
                throw new BadRequestException('El pago encontrado no corresponde al método MOCKPAY');
            }
            const estado = this.obtenerEstadoPago(webhook.status);
            const pagoActualizado = await this.prisma.pago.update({
                where: {
                    id: pago.id,
                },
                data: {
                    estado,
                    referencia: webhook.reference,
                    monto: webhook.amount,
                    respuestaMockPay: JSON.stringify(webhook),
                    fechaPago: webhook.paymentDate
                        ? new Date(webhook.paymentDate)
                        : new Date(),
                },
            });
            return {
                message: 'Webhook procesado correctamente',
                pagoId: pagoActualizado.id,
                transaccionId: pagoActualizado.transaccionId,
                estado: pagoActualizado.estado,
            };
        }
        obtenerEstadoPago(status) {
            switch (status) {
                case MockPayPaymentStatus.APPROVED:
                    return 'APROBADO';
                case MockPayPaymentStatus.REJECTED:
                    return 'RECHAZADO';
                case MockPayPaymentStatus.CANCELLED:
                    return 'CANCELADO';
                default:
                    throw new BadRequestException('Estado de pago de MockPay no válido');
            }
        }
        async crearPagoMockPay(pedidoId, monto, transaccionId, referencia) {
            const pedido = await this.prisma.pedido.findUnique({
                where: {
                    id: pedidoId,
                },
            });
            if (!pedido) {
                throw new NotFoundException(`No se encontró el pedido con ID ${pedidoId}`);
            }
            if (pedido.total.toNumber() !== monto) {
                throw new BadRequestException('El monto del pago no coincide con el total del pedido');
            }
            const pagoExistente = await this.prisma.pago.findUnique({
                where: {
                    transaccionId,
                },
            });
            if (pagoExistente) {
                throw new BadRequestException('La transacción ya se encuentra registrada');
            }
            return this.prisma.pago.create({
                data: {
                    pedidoId,
                    metodo: 'MOCKPAY',
                    estado: 'PENDIENTE',
                    monto,
                    transaccionId,
                    referencia,
                },
            });
        }
    };
    return PagosService = _classThis;
})();
export { PagosService };
//# sourceMappingURL=pagos.service.js.map