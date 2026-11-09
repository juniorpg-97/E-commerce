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
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min, } from 'class-validator';
import { TipoMovimiento } from '../../../generated/prisma/enums.js';
let CreateMovimientoInventarioDto = (() => {
    let _inventarioId_decorators;
    let _inventarioId_initializers = [];
    let _inventarioId_extraInitializers = [];
    let _tipo_decorators;
    let _tipo_initializers = [];
    let _tipo_extraInitializers = [];
    let _cantidad_decorators;
    let _cantidad_initializers = [];
    let _cantidad_extraInitializers = [];
    let _motivo_decorators;
    let _motivo_initializers = [];
    let _motivo_extraInitializers = [];
    let _referencia_decorators;
    let _referencia_initializers = [];
    let _referencia_extraInitializers = [];
    return class CreateMovimientoInventarioDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _inventarioId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID del inventario afectado',
                }), IsInt(), IsNotEmpty(), Min(1)];
            _tipo_decorators = [ApiProperty({
                    example: 'ENTRADA',
                    enum: TipoMovimiento,
                    description: 'Tipo de movimiento de inventario',
                }), IsEnum(TipoMovimiento), IsNotEmpty()];
            _cantidad_decorators = [ApiProperty({
                    example: 10,
                    description: 'Cantidad del movimiento',
                }), IsInt(), IsNotEmpty(), Min(1)];
            _motivo_decorators = [ApiProperty({
                    example: 'Ingreso de mercadería',
                    description: 'Motivo del movimiento',
                    required: false,
                }), IsOptional(), IsString()];
            _referencia_decorators = [ApiProperty({
                    example: 'Compra #15',
                    description: 'Referencia relacionada con el movimiento',
                    required: false,
                }), IsOptional(), IsString()];
            __esDecorate(null, null, _inventarioId_decorators, { kind: "field", name: "inventarioId", static: false, private: false, access: { has: obj => "inventarioId" in obj, get: obj => obj.inventarioId, set: (obj, value) => { obj.inventarioId = value; } }, metadata: _metadata }, _inventarioId_initializers, _inventarioId_extraInitializers);
            __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: obj => "tipo" in obj, get: obj => obj.tipo, set: (obj, value) => { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
            __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: obj => "cantidad" in obj, get: obj => obj.cantidad, set: (obj, value) => { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
            __esDecorate(null, null, _motivo_decorators, { kind: "field", name: "motivo", static: false, private: false, access: { has: obj => "motivo" in obj, get: obj => obj.motivo, set: (obj, value) => { obj.motivo = value; } }, metadata: _metadata }, _motivo_initializers, _motivo_extraInitializers);
            __esDecorate(null, null, _referencia_decorators, { kind: "field", name: "referencia", static: false, private: false, access: { has: obj => "referencia" in obj, get: obj => obj.referencia, set: (obj, value) => { obj.referencia = value; } }, metadata: _metadata }, _referencia_initializers, _referencia_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        inventarioId = __runInitializers(this, _inventarioId_initializers, void 0);
        tipo = (__runInitializers(this, _inventarioId_extraInitializers), __runInitializers(this, _tipo_initializers, void 0));
        cantidad = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
        motivo = (__runInitializers(this, _cantidad_extraInitializers), __runInitializers(this, _motivo_initializers, void 0));
        referencia = (__runInitializers(this, _motivo_extraInitializers), __runInitializers(this, _referencia_initializers, void 0));
        constructor() {
            __runInitializers(this, _referencia_extraInitializers);
        }
    };
})();
export { CreateMovimientoInventarioDto };
//# sourceMappingURL=create-movimiento-inventario.dto.js.map