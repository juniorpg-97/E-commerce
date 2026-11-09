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
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
export var MockPayPaymentStatus;
(function (MockPayPaymentStatus) {
    MockPayPaymentStatus["APPROVED"] = "APPROVED";
    MockPayPaymentStatus["REJECTED"] = "REJECTED";
    MockPayPaymentStatus["CANCELLED"] = "CANCELLED";
})(MockPayPaymentStatus || (MockPayPaymentStatus = {}));
let MockPayWebhookDto = (() => {
    let _transactionId_decorators;
    let _transactionId_initializers = [];
    let _transactionId_extraInitializers = [];
    let _reference_decorators;
    let _reference_initializers = [];
    let _reference_extraInitializers = [];
    let _amount_decorators;
    let _amount_initializers = [];
    let _amount_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    let _paymentDate_decorators;
    let _paymentDate_initializers = [];
    let _paymentDate_extraInitializers = [];
    return class MockPayWebhookDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _transactionId_decorators = [ApiProperty({
                    example: 'MP-123456789',
                    description: 'Identificador de la transacción de MockPay',
                }), IsString()];
            _reference_decorators = [ApiProperty({
                    example: 'PEDIDO-1001',
                    description: 'Referencia del pago',
                }), IsString()];
            _amount_decorators = [ApiProperty({
                    example: 150.5,
                    description: 'Monto pagado',
                }), IsNumber()];
            _status_decorators = [ApiProperty({
                    enum: MockPayPaymentStatus,
                    example: MockPayPaymentStatus.APPROVED,
                }), IsEnum(MockPayPaymentStatus)];
            _paymentDate_decorators = [ApiProperty({
                    example: '2026-10-08T02:30:00.000Z',
                    required: false,
                }), IsOptional(), IsString()];
            __esDecorate(null, null, _transactionId_decorators, { kind: "field", name: "transactionId", static: false, private: false, access: { has: obj => "transactionId" in obj, get: obj => obj.transactionId, set: (obj, value) => { obj.transactionId = value; } }, metadata: _metadata }, _transactionId_initializers, _transactionId_extraInitializers);
            __esDecorate(null, null, _reference_decorators, { kind: "field", name: "reference", static: false, private: false, access: { has: obj => "reference" in obj, get: obj => obj.reference, set: (obj, value) => { obj.reference = value; } }, metadata: _metadata }, _reference_initializers, _reference_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: obj => "amount" in obj, get: obj => obj.amount, set: (obj, value) => { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _paymentDate_decorators, { kind: "field", name: "paymentDate", static: false, private: false, access: { has: obj => "paymentDate" in obj, get: obj => obj.paymentDate, set: (obj, value) => { obj.paymentDate = value; } }, metadata: _metadata }, _paymentDate_initializers, _paymentDate_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        transactionId = __runInitializers(this, _transactionId_initializers, void 0);
        reference = (__runInitializers(this, _transactionId_extraInitializers), __runInitializers(this, _reference_initializers, void 0));
        amount = (__runInitializers(this, _reference_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
        status = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _status_initializers, void 0));
        paymentDate = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _paymentDate_initializers, void 0));
        constructor() {
            __runInitializers(this, _paymentDate_extraInitializers);
        }
    };
})();
export { MockPayWebhookDto };
//# sourceMappingURL=mockpay-webhook.dto.js.map