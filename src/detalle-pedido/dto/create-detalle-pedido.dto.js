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
import { IsInt, IsNotEmpty, Min } from 'class-validator';
let CreateDetallePedidoDto = (() => {
    let _pedidoId_decorators;
    let _pedidoId_initializers = [];
    let _pedidoId_extraInitializers = [];
    let _productoId_decorators;
    let _productoId_initializers = [];
    let _productoId_extraInitializers = [];
    let _cantidad_decorators;
    let _cantidad_initializers = [];
    let _cantidad_extraInitializers = [];
    return class CreateDetallePedidoDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _pedidoId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID del pedido al que pertenece el detalle',
                }), IsInt(), IsNotEmpty(), Min(1)];
            _productoId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID del producto incluido en el pedido',
                }), IsInt(), IsNotEmpty(), Min(1)];
            _cantidad_decorators = [ApiProperty({
                    example: 2,
                    description: 'Cantidad de unidades del producto',
                }), IsInt(), IsNotEmpty(), Min(1)];
            __esDecorate(null, null, _pedidoId_decorators, { kind: "field", name: "pedidoId", static: false, private: false, access: { has: obj => "pedidoId" in obj, get: obj => obj.pedidoId, set: (obj, value) => { obj.pedidoId = value; } }, metadata: _metadata }, _pedidoId_initializers, _pedidoId_extraInitializers);
            __esDecorate(null, null, _productoId_decorators, { kind: "field", name: "productoId", static: false, private: false, access: { has: obj => "productoId" in obj, get: obj => obj.productoId, set: (obj, value) => { obj.productoId = value; } }, metadata: _metadata }, _productoId_initializers, _productoId_extraInitializers);
            __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: obj => "cantidad" in obj, get: obj => obj.cantidad, set: (obj, value) => { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        pedidoId = __runInitializers(this, _pedidoId_initializers, void 0);
        productoId = (__runInitializers(this, _pedidoId_extraInitializers), __runInitializers(this, _productoId_initializers, void 0));
        cantidad = (__runInitializers(this, _productoId_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
        constructor() {
            __runInitializers(this, _cantidad_extraInitializers);
        }
    };
})();
export { CreateDetallePedidoDto };
//# sourceMappingURL=create-detalle-pedido.dto.js.map