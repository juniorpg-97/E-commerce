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
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query, } from '@nestjs/common';
import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiQuery, } from '@nestjs/swagger';
let ProductosController = (() => {
    let _classDecorators = [ApiTags('Productos'), ApiBearerAuth('JWT-auth'), Controller('productos')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _create_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _update_decorators;
    let _remove_decorators;
    var ProductosController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _create_decorators = [Post(), UseGuards(JwtAuthGuard, RolesGuard), Roles('ADMINISTRADOR'), ApiOperation({
                    summary: 'Crear un nuevo producto',
                }), ApiResponse({
                    status: 201,
                    description: 'Producto creado correctamente',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado o inválido',
                }), ApiResponse({
                    status: 403,
                    description: 'Solo el administrador puede crear productos',
                }), ApiResponse({
                    status: 404,
                    description: 'La categoría indicada no existe',
                }), ApiResponse({
                    status: 409,
                    description: 'Ya existe un producto con ese nombre',
                })];
            _findAll_decorators = [Get(), UseGuards(JwtAuthGuard), ApiOperation({
                    summary: 'Listar productos',
                    description: 'Obtiene todos los productos o filtra los productos por categoría. El costo de adquisición no se muestra a los clientes.',
                }), ApiQuery({
                    name: 'categoriaId',
                    required: false,
                    type: Number,
                    example: 1,
                    description: 'ID de la categoría por la que se desea filtrar',
                }), ApiResponse({
                    status: 200,
                    description: 'Lista de productos obtenida correctamente',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado o inválido',
                })];
            _findOne_decorators = [Get(':id'), UseGuards(JwtAuthGuard), ApiOperation({
                    summary: 'Buscar un producto por ID',
                    description: 'Obtiene la información de un producto. El costo de adquisición no se muestra a los clientes.',
                }), ApiResponse({
                    status: 200,
                    description: 'Producto encontrado correctamente',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado o inválido',
                }), ApiResponse({
                    status: 404,
                    description: 'Producto no encontrado',
                })];
            _update_decorators = [Patch(':id'), UseGuards(JwtAuthGuard, RolesGuard), Roles('ADMINISTRADOR'), ApiOperation({
                    summary: 'Actualizar un producto',
                }), ApiResponse({
                    status: 200,
                    description: 'Producto actualizado correctamente',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado o inválido',
                }), ApiResponse({
                    status: 403,
                    description: 'Solo el administrador puede actualizar productos',
                }), ApiResponse({
                    status: 404,
                    description: 'Producto o categoría no encontrada',
                }), ApiResponse({
                    status: 409,
                    description: 'Ya existe un producto con ese nombre',
                })];
            _remove_decorators = [Delete(':id'), UseGuards(JwtAuthGuard, RolesGuard), Roles('ADMINISTRADOR'), ApiOperation({
                    summary: 'Eliminar un producto',
                }), ApiResponse({
                    status: 200,
                    description: 'Producto eliminado correctamente',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado o inválido',
                }), ApiResponse({
                    status: 403,
                    description: 'Solo el administrador puede eliminar productos',
                }), ApiResponse({
                    status: 404,
                    description: 'Producto no encontrado',
                })];
            __esDecorate(this, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ProductosController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        productosService = __runInitializers(this, _instanceExtraInitializers);
        constructor(productosService) {
            this.productosService = productosService;
        }
        create(createProductoDto) {
            return this.productosService.create(createProductoDto);
        }
        findAll(req, categoriaId) {
            return this.productosService.findAll(req.usuario.rol, categoriaId);
        }
        findOne(id, req) {
            return this.productosService.findOne(+id, req.usuario.rol);
        }
        update(id, updateProductoDto) {
            return this.productosService.update(+id, updateProductoDto);
        }
        remove(id) {
            return this.productosService.remove(+id);
        }
    };
    return ProductosController = _classThis;
})();
export { ProductosController };
//# sourceMappingURL=productos.controller.js.map