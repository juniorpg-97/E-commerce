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
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
let CreateDireccionDto = (() => {
    let _calle_decorators;
    let _calle_initializers = [];
    let _calle_extraInitializers = [];
    let _numero_decorators;
    let _numero_initializers = [];
    let _numero_extraInitializers = [];
    let _referencia_decorators;
    let _referencia_initializers = [];
    let _referencia_extraInitializers = [];
    let _ciudad_decorators;
    let _ciudad_initializers = [];
    let _ciudad_extraInitializers = [];
    let _codigoPostal_decorators;
    let _codigoPostal_initializers = [];
    let _codigoPostal_extraInitializers = [];
    return class CreateDireccionDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _calle_decorators = [ApiProperty({
                    example: 'Jr. Lima',
                    description: 'Nombre de la calle o jirón',
                }), IsString(), IsNotEmpty(), MaxLength(150)];
            _numero_decorators = [ApiProperty({
                    example: '123',
                    description: 'Número de la dirección',
                }), IsString(), IsNotEmpty(), MaxLength(20)];
            _referencia_decorators = [ApiProperty({
                    example: 'Frente al parque',
                    description: 'Referencia para facilitar la entrega',
                    required: false,
                }), IsOptional(), IsString(), MaxLength(255)];
            _ciudad_decorators = [ApiProperty({
                    example: 'Juliaca',
                    description: 'Ciudad de la dirección',
                }), IsString(), IsNotEmpty(), MaxLength(100)];
            _codigoPostal_decorators = [ApiProperty({
                    example: '21101',
                    description: 'Código postal',
                }), IsString(), IsNotEmpty(), MaxLength(20)];
            __esDecorate(null, null, _calle_decorators, { kind: "field", name: "calle", static: false, private: false, access: { has: obj => "calle" in obj, get: obj => obj.calle, set: (obj, value) => { obj.calle = value; } }, metadata: _metadata }, _calle_initializers, _calle_extraInitializers);
            __esDecorate(null, null, _numero_decorators, { kind: "field", name: "numero", static: false, private: false, access: { has: obj => "numero" in obj, get: obj => obj.numero, set: (obj, value) => { obj.numero = value; } }, metadata: _metadata }, _numero_initializers, _numero_extraInitializers);
            __esDecorate(null, null, _referencia_decorators, { kind: "field", name: "referencia", static: false, private: false, access: { has: obj => "referencia" in obj, get: obj => obj.referencia, set: (obj, value) => { obj.referencia = value; } }, metadata: _metadata }, _referencia_initializers, _referencia_extraInitializers);
            __esDecorate(null, null, _ciudad_decorators, { kind: "field", name: "ciudad", static: false, private: false, access: { has: obj => "ciudad" in obj, get: obj => obj.ciudad, set: (obj, value) => { obj.ciudad = value; } }, metadata: _metadata }, _ciudad_initializers, _ciudad_extraInitializers);
            __esDecorate(null, null, _codigoPostal_decorators, { kind: "field", name: "codigoPostal", static: false, private: false, access: { has: obj => "codigoPostal" in obj, get: obj => obj.codigoPostal, set: (obj, value) => { obj.codigoPostal = value; } }, metadata: _metadata }, _codigoPostal_initializers, _codigoPostal_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        calle = __runInitializers(this, _calle_initializers, void 0);
        numero = (__runInitializers(this, _calle_extraInitializers), __runInitializers(this, _numero_initializers, void 0));
        referencia = (__runInitializers(this, _numero_extraInitializers), __runInitializers(this, _referencia_initializers, void 0));
        ciudad = (__runInitializers(this, _referencia_extraInitializers), __runInitializers(this, _ciudad_initializers, void 0));
        codigoPostal = (__runInitializers(this, _ciudad_extraInitializers), __runInitializers(this, _codigoPostal_initializers, void 0));
        constructor() {
            __runInitializers(this, _codigoPostal_extraInitializers);
        }
    };
})();
export { CreateDireccionDto };
//# sourceMappingURL=create-direccion.dto.js.map