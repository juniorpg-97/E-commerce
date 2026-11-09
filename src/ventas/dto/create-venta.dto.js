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
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested, } from 'class-validator';
import { Type } from 'class-transformer';
import { MetodoPago, TipoVenta } from '../../../generated/prisma/client.js';
import { CreateDetalleVentaDto } from '../../detalle-venta/dto/create-detalle-venta.dto.js';
let CreateVentaDto = (() => {
    let _cajaId_decorators;
    let _cajaId_initializers = [];
    let _cajaId_extraInitializers = [];
    let _tipo_decorators;
    let _tipo_initializers = [];
    let _tipo_extraInitializers = [];
    let _clienteId_decorators;
    let _clienteId_initializers = [];
    let _clienteId_extraInitializers = [];
    let _metodoPago_decorators;
    let _metodoPago_initializers = [];
    let _metodoPago_extraInitializers = [];
    let _descuento_decorators;
    let _descuento_initializers = [];
    let _descuento_extraInitializers = [];
    let _observaciones_decorators;
    let _observaciones_initializers = [];
    let _observaciones_extraInitializers = [];
    let _detalles_decorators;
    let _detalles_initializers = [];
    let _detalles_extraInitializers = [];
    return class CreateVentaDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _cajaId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID de la caja donde se realiza la venta',
                }), IsInt({ message: 'el cajaId debe ser un numero entero' }), IsNotEmpty({ message: 'el cajaId es obligatorio' }), Min(1, { message: 'el cajaId debe ser mayor a 0' })];
            _tipo_decorators = [ApiPropertyOptional({
                    enum: TipoVenta,
                    example: TipoVenta.POS,
                    default: TipoVenta.POS,
                    description: 'Origen de la venta: POS para venta presencial o REDES_SOCIALES para una venta registrada desde redes sociales',
                }), IsOptional(), IsEnum(TipoVenta, {
                    message: 'el tipo debe ser POS, REDES_SOCIALES o WEB',
                })];
            _clienteId_decorators = [ApiPropertyOptional({
                    example: 3,
                    description: 'ID del cliente que realiza la compra',
                }), IsOptional(), IsInt({ message: 'el clienteId debe ser un numero entero' }), Min(1, { message: 'el clienteId debe ser mayor a 0' })];
            _metodoPago_decorators = [ApiProperty({
                    enum: MetodoPago,
                    example: MetodoPago.EFECTIVO,
                    description: 'Método de pago utilizado en la venta',
                }), IsEnum(MetodoPago, {
                    message: 'el metodoPago debe ser EFECTIVO, TARJETA, TRANSFERENCIA, YAPE, PLIN u OTRO',
                })];
            _descuento_decorators = [ApiPropertyOptional({
                    example: 10,
                    description: 'Descuento monetario aplicado a la venta',
                }), IsOptional(), IsNumber({}, { message: 'el descuento debe ser un numero' }), Min(0, { message: 'el descuento no puede ser negativo' })];
            _observaciones_decorators = [ApiPropertyOptional({
                    example: 'Venta realizada en mostrador',
                    description: 'Observaciones adicionales de la venta',
                }), IsOptional(), IsString({ message: 'las observaciones deben ser una cadena de texto' })];
            _detalles_decorators = [ApiProperty({
                    type: [CreateDetalleVentaDto],
                    description: 'Productos que forman parte de la venta',
                }), IsArray({ message: 'los detalles deben ser un arreglo' }), ValidateNested({ each: true }), Type(() => CreateDetalleVentaDto)];
            __esDecorate(null, null, _cajaId_decorators, { kind: "field", name: "cajaId", static: false, private: false, access: { has: obj => "cajaId" in obj, get: obj => obj.cajaId, set: (obj, value) => { obj.cajaId = value; } }, metadata: _metadata }, _cajaId_initializers, _cajaId_extraInitializers);
            __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: obj => "tipo" in obj, get: obj => obj.tipo, set: (obj, value) => { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
            __esDecorate(null, null, _clienteId_decorators, { kind: "field", name: "clienteId", static: false, private: false, access: { has: obj => "clienteId" in obj, get: obj => obj.clienteId, set: (obj, value) => { obj.clienteId = value; } }, metadata: _metadata }, _clienteId_initializers, _clienteId_extraInitializers);
            __esDecorate(null, null, _metodoPago_decorators, { kind: "field", name: "metodoPago", static: false, private: false, access: { has: obj => "metodoPago" in obj, get: obj => obj.metodoPago, set: (obj, value) => { obj.metodoPago = value; } }, metadata: _metadata }, _metodoPago_initializers, _metodoPago_extraInitializers);
            __esDecorate(null, null, _descuento_decorators, { kind: "field", name: "descuento", static: false, private: false, access: { has: obj => "descuento" in obj, get: obj => obj.descuento, set: (obj, value) => { obj.descuento = value; } }, metadata: _metadata }, _descuento_initializers, _descuento_extraInitializers);
            __esDecorate(null, null, _observaciones_decorators, { kind: "field", name: "observaciones", static: false, private: false, access: { has: obj => "observaciones" in obj, get: obj => obj.observaciones, set: (obj, value) => { obj.observaciones = value; } }, metadata: _metadata }, _observaciones_initializers, _observaciones_extraInitializers);
            __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: obj => "detalles" in obj, get: obj => obj.detalles, set: (obj, value) => { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        cajaId = __runInitializers(this, _cajaId_initializers, void 0);
        tipo = (__runInitializers(this, _cajaId_extraInitializers), __runInitializers(this, _tipo_initializers, void 0));
        clienteId = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _clienteId_initializers, void 0));
        metodoPago = (__runInitializers(this, _clienteId_extraInitializers), __runInitializers(this, _metodoPago_initializers, void 0));
        descuento = (__runInitializers(this, _metodoPago_extraInitializers), __runInitializers(this, _descuento_initializers, void 0));
        observaciones = (__runInitializers(this, _descuento_extraInitializers), __runInitializers(this, _observaciones_initializers, void 0));
        detalles = (__runInitializers(this, _observaciones_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
        constructor() {
            __runInitializers(this, _detalles_extraInitializers);
        }
    };
})();
export { CreateVentaDto };
//# sourceMappingURL=create-venta.dto.js.map