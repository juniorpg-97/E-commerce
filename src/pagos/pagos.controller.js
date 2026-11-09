var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CrearPagoMockPayDto } from './dto/crear-pago-mockpay.dto.js';
import { PagosService } from './pagos.service.js';
import { MockPayWebhookDto } from './dto/mockpay-webhook.dto.js';
let PagosController = (() => {
    let _classDecorators = [ApiTags('Pagos'), Controller('pagos')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _webhookMockPay_decorators;
    let _crearPagoMockPay_decorators;
    var PagosController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _webhookMockPay_decorators = [Post('webhook/mockpay'), HttpCode(HttpStatus.OK), ApiOperation({
                    summary: 'Webhook de MockPay',
                    description: 'Recibe la notificación del resultado de un pago realizado mediante MockPay.',
                }), ApiResponse({
                    status: 200,
                    description: 'Webhook procesado correctamente',
                }), ApiResponse({
                    status: 404,
                    description: 'Pago no encontrado',
                })];
            _crearPagoMockPay_decorators = [Post('mockpay'), HttpCode(HttpStatus.CREATED), ApiOperation({
                    summary: 'Registrar un pago MockPay',
                    description: 'Crea un pago pendiente asociado a un pedido antes de recibir el webhook.',
                }), ApiResponse({
                    status: 201,
                    description: 'Pago MockPay creado correctamente',
                })];
            __esDecorate(this, null, _webhookMockPay_decorators, { kind: "method", name: "webhookMockPay", static: false, private: false, access: { has: obj => "webhookMockPay" in obj, get: obj => obj.webhookMockPay }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _crearPagoMockPay_decorators, { kind: "method", name: "crearPagoMockPay", static: false, private: false, access: { has: obj => "crearPagoMockPay" in obj, get: obj => obj.crearPagoMockPay }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            PagosController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        pagosService = __runInitializers(this, _instanceExtraInitializers);
        constructor(pagosService) {
            this.pagosService = pagosService;
        }
        async webhookMockPay(webhook) {
            return this.pagosService.procesarWebhookMockPay(webhook);
        }
        async crearPagoMockPay(dto) {
            return this.pagosService.crearPagoMockPay(dto.pedidoId, dto.monto, dto.transaccionId, dto.referencia);
        }
    };
    return PagosController = _classThis;
})();
export { PagosController };
//# sourceMappingURL=pagos.controller.js.map