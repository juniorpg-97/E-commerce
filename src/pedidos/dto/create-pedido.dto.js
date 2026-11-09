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
import { IsEnum, IsInt, IsNotEmpty, Min } from 'class-validator';
import { MetodoPago } from '../../../generated/prisma/enums.js';
let CreatePedidoDto = (() => {
    let _direccionId_decorators;
    let _direccionId_initializers = [];
    let _direccionId_extraInitializers = [];
    let _metodoPago_decorators;
    let _metodoPago_initializers = [];
    let _metodoPago_extraInitializers = [];
    return class CreatePedidoDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _direccionId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID de la dirección donde se entregará el pedido',
                }), IsInt(), IsNotEmpty(), Min(1)];
            _metodoPago_decorators = [ApiProperty({
                    enum: MetodoPago,
                    example: MetodoPago.YAPE,
                    description: 'Método de pago utilizado para el pedido',
                }), IsEnum(MetodoPago), IsNotEmpty()];
            __esDecorate(null, null, _direccionId_decorators, { kind: "field", name: "direccionId", static: false, private: false, access: { has: obj => "direccionId" in obj, get: obj => obj.direccionId, set: (obj, value) => { obj.direccionId = value; } }, metadata: _metadata }, _direccionId_initializers, _direccionId_extraInitializers);
            __esDecorate(null, null, _metodoPago_decorators, { kind: "field", name: "metodoPago", static: false, private: false, access: { has: obj => "metodoPago" in obj, get: obj => obj.metodoPago, set: (obj, value) => { obj.metodoPago = value; } }, metadata: _metadata }, _metodoPago_initializers, _metodoPago_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        direccionId = __runInitializers(this, _direccionId_initializers, void 0);
        metodoPago = (__runInitializers(this, _direccionId_extraInitializers), __runInitializers(this, _metodoPago_initializers, void 0));
        constructor() {
            __runInitializers(this, _metodoPago_extraInitializers);
        }
    };
})();
export { CreatePedidoDto };
//# sourceMappingURL=create-pedido.dto.js.map