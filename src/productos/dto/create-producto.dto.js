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
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength, Matches, } from 'class-validator';
let CreateProductoDto = (() => {
    let _categoriaId_decorators;
    let _categoriaId_initializers = [];
    let _categoriaId_extraInitializers = [];
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _descripcion_decorators;
    let _descripcion_initializers = [];
    let _descripcion_extraInitializers = [];
    let _costoAdquisicion_decorators;
    let _costoAdquisicion_initializers = [];
    let _costoAdquisicion_extraInitializers = [];
    let _precioVenta_decorators;
    let _precioVenta_initializers = [];
    let _precioVenta_extraInitializers = [];
    return class CreateProductoDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _categoriaId_decorators = [ApiProperty({
                    example: 1,
                    description: 'ID de la categoria a la que pertenece el producto',
                }), IsInt({ message: 'el categoriaId debe ser un numero entero' }), Min(1, { message: 'el categoriaId debe ser mayor a 0' })];
            _nombre_decorators = [ApiProperty({
                    example: 'Laptop HP 15',
                    description: 'Nombre del producto',
                }), IsString({ message: 'el nombre del producto debe ser una cadena de texto' }), IsNotEmpty({ message: 'el nombre del producto es obligatorio' }), MinLength(2, {
                    message: 'El nombre del producto debe tener almenos 2 caracteres',
                }), Matches(/\S/, {
                    message: 'El nombre del producto  no puede contener solo espacios',
                })];
            _descripcion_decorators = [ApiPropertyOptional({
                    example: 'Laptop HP con procesador Intel Core i5',
                    description: 'Descripcion del producto',
                }), IsOptional(), IsString({
                    message: 'la descripcion del producto debe ser una cadena de texto',
                })];
            _costoAdquisicion_decorators = [ApiProperty({
                    example: 1800,
                    description: 'Costo de adquisicion del producto',
                }), IsNumber({}, { message: 'el costo de adquisicion debe ser un numero' }), Min(0, { message: 'el costo de adquisicion no puede ser negativo' })];
            _precioVenta_decorators = [ApiProperty({
                    example: 2500,
                    description: 'Precio de venta del producto',
                }), IsNumber({}, { message: 'el precio de venta debe ser un numero' }), Min(0, { message: 'el precio de venta no puede ser negativo' })];
            __esDecorate(null, null, _categoriaId_decorators, { kind: "field", name: "categoriaId", static: false, private: false, access: { has: obj => "categoriaId" in obj, get: obj => obj.categoriaId, set: (obj, value) => { obj.categoriaId = value; } }, metadata: _metadata }, _categoriaId_initializers, _categoriaId_extraInitializers);
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _descripcion_decorators, { kind: "field", name: "descripcion", static: false, private: false, access: { has: obj => "descripcion" in obj, get: obj => obj.descripcion, set: (obj, value) => { obj.descripcion = value; } }, metadata: _metadata }, _descripcion_initializers, _descripcion_extraInitializers);
            __esDecorate(null, null, _costoAdquisicion_decorators, { kind: "field", name: "costoAdquisicion", static: false, private: false, access: { has: obj => "costoAdquisicion" in obj, get: obj => obj.costoAdquisicion, set: (obj, value) => { obj.costoAdquisicion = value; } }, metadata: _metadata }, _costoAdquisicion_initializers, _costoAdquisicion_extraInitializers);
            __esDecorate(null, null, _precioVenta_decorators, { kind: "field", name: "precioVenta", static: false, private: false, access: { has: obj => "precioVenta" in obj, get: obj => obj.precioVenta, set: (obj, value) => { obj.precioVenta = value; } }, metadata: _metadata }, _precioVenta_initializers, _precioVenta_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        categoriaId = __runInitializers(this, _categoriaId_initializers, void 0);
        nombre = (__runInitializers(this, _categoriaId_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
        descripcion = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _descripcion_initializers, void 0));
        costoAdquisicion = (__runInitializers(this, _descripcion_extraInitializers), __runInitializers(this, _costoAdquisicion_initializers, void 0));
        precioVenta = (__runInitializers(this, _costoAdquisicion_extraInitializers), __runInitializers(this, _precioVenta_initializers, void 0));
        constructor() {
            __runInitializers(this, _precioVenta_extraInitializers);
        }
    };
})();
export { CreateProductoDto };
//# sourceMappingURL=create-producto.dto.js.map