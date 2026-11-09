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
import { IsInt, IsNumber, IsString, Min } from 'class-validator';
let CrearPagoMockPayDto = (() => {
    let _pedidoId_decorators;
    let _pedidoId_initializers = [];
    let _pedidoId_extraInitializers = [];
    let _monto_decorators;
    let _monto_initializers = [];
    let _monto_extraInitializers = [];
    let _transaccionId_decorators;
    let _transaccionId_initializers = [];
    let _transaccionId_extraInitializers = [];
    let _referencia_decorators;
    let _referencia_initializers = [];
    let _referencia_extraInitializers = [];
    return class CrearPagoMockPayDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _pedidoId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID del pedido que se desea pagar',
                }), IsInt(), Min(1)];
            _monto_decorators = [ApiProperty({
                    example: 150.5,
                    description: 'Monto del pago',
                }), IsNumber(), Min(0.01)];
            _transaccionId_decorators = [ApiProperty({
                    example: 'MP-123456789',
                    description: 'ID de transacción generado por MockPay',
                }), IsString()];
            _referencia_decorators = [ApiProperty({
                    example: 'PEDIDO-1',
                    description: 'Referencia de la operación',
                }), IsString()];
            __esDecorate(null, null, _pedidoId_decorators, { kind: "field", name: "pedidoId", static: false, private: false, access: { has: obj => "pedidoId" in obj, get: obj => obj.pedidoId, set: (obj, value) => { obj.pedidoId = value; } }, metadata: _metadata }, _pedidoId_initializers, _pedidoId_extraInitializers);
            __esDecorate(null, null, _monto_decorators, { kind: "field", name: "monto", static: false, private: false, access: { has: obj => "monto" in obj, get: obj => obj.monto, set: (obj, value) => { obj.monto = value; } }, metadata: _metadata }, _monto_initializers, _monto_extraInitializers);
            __esDecorate(null, null, _transaccionId_decorators, { kind: "field", name: "transaccionId", static: false, private: false, access: { has: obj => "transaccionId" in obj, get: obj => obj.transaccionId, set: (obj, value) => { obj.transaccionId = value; } }, metadata: _metadata }, _transaccionId_initializers, _transaccionId_extraInitializers);
            __esDecorate(null, null, _referencia_decorators, { kind: "field", name: "referencia", static: false, private: false, access: { has: obj => "referencia" in obj, get: obj => obj.referencia, set: (obj, value) => { obj.referencia = value; } }, metadata: _metadata }, _referencia_initializers, _referencia_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        pedidoId = __runInitializers(this, _pedidoId_initializers, void 0);
        monto = (__runInitializers(this, _pedidoId_extraInitializers), __runInitializers(this, _monto_initializers, void 0));
        transaccionId = (__runInitializers(this, _monto_extraInitializers), __runInitializers(this, _transaccionId_initializers, void 0));
        referencia = (__runInitializers(this, _transaccionId_extraInitializers), __runInitializers(this, _referencia_initializers, void 0));
        constructor() {
            __runInitializers(this, _referencia_extraInitializers);
        }
    };
})();
export { CrearPagoMockPayDto };
//# sourceMappingURL=crear-pago-mockpay.dto.js.map