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
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { CarritoService } from './carritos.service.js';
import { CreateCarritoDto } from './dto/create-carrito.dto.js';
import { UpdateCarritoDto } from './dto/update-carrito.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
let CarritoController = (() => {
    let _classDecorators = [ApiTags('Carrito'), ApiBearerAuth('JWT-auth'), Controller('carrito'), UseGuards(JwtAuthGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _agregarProducto_decorators;
    let _findOne_decorators;
    let _actualizarCantidad_decorators;
    let _eliminarProducto_decorators;
    let _vaciarCarrito_decorators;
    var CarritoController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _agregarProducto_decorators = [Post(), ApiOperation({
                    summary: 'Agregar producto al carrito',
                    description: 'Agrega un producto al carrito activo del cliente autenticado. Si el producto ya existe, aumenta su cantidad.',
                }), ApiResponse({
                    status: 201,
                    description: 'Producto agregado al carrito correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                })];
            _findOne_decorators = [Get(), ApiOperation({
                    summary: 'Consultar carrito activo',
                    description: 'Obtiene el carrito activo del cliente autenticado con sus productos.',
                }), ApiResponse({
                    status: 200,
                    description: 'Carrito obtenido correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                })];
            _actualizarCantidad_decorators = [Patch(':id'), ApiOperation({
                    summary: 'Actualizar cantidad de un producto',
                    description: 'Modifica la cantidad de un producto que ya pertenece al carrito activo del cliente.',
                }), ApiResponse({
                    status: 200,
                    description: 'Cantidad actualizada correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                })];
            _eliminarProducto_decorators = [Delete(':id'), ApiOperation({
                    summary: 'Eliminar producto del carrito',
                    description: 'Elimina un producto específico del carrito activo del cliente.',
                }), ApiResponse({
                    status: 200,
                    description: 'Producto eliminado correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                })];
            _vaciarCarrito_decorators = [Delete(), ApiOperation({
                    summary: 'Vaciar carrito',
                    description: 'Elimina todos los productos del carrito activo del cliente.',
                }), ApiResponse({
                    status: 200,
                    description: 'Carrito vaciado correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                })];
            __esDecorate(this, null, _agregarProducto_decorators, { kind: "method", name: "agregarProducto", static: false, private: false, access: { has: obj => "agregarProducto" in obj, get: obj => obj.agregarProducto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _actualizarCantidad_decorators, { kind: "method", name: "actualizarCantidad", static: false, private: false, access: { has: obj => "actualizarCantidad" in obj, get: obj => obj.actualizarCantidad }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _eliminarProducto_decorators, { kind: "method", name: "eliminarProducto", static: false, private: false, access: { has: obj => "eliminarProducto" in obj, get: obj => obj.eliminarProducto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _vaciarCarrito_decorators, { kind: "method", name: "vaciarCarrito", static: false, private: false, access: { has: obj => "vaciarCarrito" in obj, get: obj => obj.vaciarCarrito }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CarritoController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        carritoService = __runInitializers(this, _instanceExtraInitializers);
        constructor(carritoService) {
            this.carritoService = carritoService;
        }
        agregarProducto(createCarritoDto, request) {
            const usuario = request.usuario;
            return this.carritoService.agregarProducto(createCarritoDto, usuario.id);
        }
        findOne(request) {
            const usuario = request.usuario;
            return this.carritoService.findOne(usuario.id);
        }
        actualizarCantidad(id, updateCarritoDto, request) {
            const usuario = request.usuario;
            return this.carritoService.actualizarCantidad(+id, updateCarritoDto, usuario.id);
        }
        eliminarProducto(id, request) {
            const usuario = request.usuario;
            return this.carritoService.eliminarProducto(+id, usuario.id);
        }
        vaciarCarrito(request) {
            const usuario = request.usuario;
            return this.carritoService.vaciarCarrito(usuario.id);
        }
    };
    return CarritoController = _classThis;
})();
export { CarritoController };
//# sourceMappingURL=carritos.controller.js.map