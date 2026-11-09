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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO8601, IsNumber, IsObject, IsOptional, IsString, } from 'class-validator';
let WebhookPagoDto = (() => {
    let _event_decorators;
    let _event_initializers = [];
    let _event_extraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _amount_decorators;
    let _amount_initializers = [];
    let _amount_extraInitializers = [];
    let _currency_decorators;
    let _currency_initializers = [];
    let _currency_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _failure_reason_decorators;
    let _failure_reason_initializers = [];
    let _failure_reason_extraInitializers = [];
    let _metadata_decorators;
    let _metadata_initializers = [];
    let _metadata_extraInitializers = [];
    let _created_at_decorators;
    let _created_at_initializers = [];
    let _created_at_extraInitializers = [];
    return class WebhookPagoDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _event_decorators = [ApiProperty({
                    example: 'payment.succeeded',
                    description: 'Evento enviado por la pasarela de pagos',
                }), IsString()];
            _id_decorators = [ApiProperty({
                    example: 'uuid-de-la-transaccion',
                    description: 'Identificador de la transacción',
                }), IsString()];
            _amount_decorators = [ApiProperty({
                    example: 120.5,
                    description: 'Monto de la transacción',
                }), IsNumber()];
            _currency_decorators = [ApiProperty({
                    example: 'USD',
                    description: 'Moneda de la transacción',
                }), IsString()];
            _status_decorators = [ApiProperty({
                    example: 'SUCCEEDED',
                    description: 'Estado de la transacción',
                }), IsString()];
            _failure_reason_decorators = [ApiPropertyOptional({
                    example: null,
                    description: 'Motivo del fallo del pago',
                    nullable: true,
                }), IsOptional(), IsString()];
            _metadata_decorators = [ApiProperty({
                    example: {
                        order_id: '25',
                    },
                    description: 'Datos enviados por la pasarela. order_id corresponde al ID del Pedido.',
                }), IsObject()];
            _created_at_decorators = [ApiProperty({
                    example: '2026-10-02T15:00:00Z',
                    description: 'Fecha y hora de creación de la transacción',
                }), IsISO8601()];
            __esDecorate(null, null, _event_decorators, { kind: "field", name: "event", static: false, private: false, access: { has: obj => "event" in obj, get: obj => obj.event, set: (obj, value) => { obj.event = value; } }, metadata: _metadata }, _event_initializers, _event_extraInitializers);
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: obj => "amount" in obj, get: obj => obj.amount, set: (obj, value) => { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _currency_decorators, { kind: "field", name: "currency", static: false, private: false, access: { has: obj => "currency" in obj, get: obj => obj.currency, set: (obj, value) => { obj.currency = value; } }, metadata: _metadata }, _currency_initializers, _currency_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _failure_reason_decorators, { kind: "field", name: "failure_reason", static: false, private: false, access: { has: obj => "failure_reason" in obj, get: obj => obj.failure_reason, set: (obj, value) => { obj.failure_reason = value; } }, metadata: _metadata }, _failure_reason_initializers, _failure_reason_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: obj => "metadata" in obj, get: obj => obj.metadata, set: (obj, value) => { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: obj => "created_at" in obj, get: obj => obj.created_at, set: (obj, value) => { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _created_at_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        event = __runInitializers(this, _event_initializers, void 0);
        id = (__runInitializers(this, _event_extraInitializers), __runInitializers(this, _id_initializers, void 0));
        amount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
        currency = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _currency_initializers, void 0));
        status = (__runInitializers(this, _currency_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        failure_reason = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _failure_reason_initializers, void 0));
        metadata = (__runInitializers(this, _failure_reason_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
        created_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _created_at_initializers, void 0));
        constructor() {
            __runInitializers(this, _created_at_extraInitializers);
        }
    };
})();
export { WebhookPagoDto };
//# sourceMappingURL=webhook-pago.dto.js.map