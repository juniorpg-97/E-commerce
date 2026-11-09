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
import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards, } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PedidosService } from './pedidos.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
let PedidosController = (() => {
    let _classDecorators = [ApiTags('Pedidos'), ApiBearerAuth('JWT-auth'), Controller('pedidos'), UseGuards(JwtAuthGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _create_decorators;
    let _findAll_decorators;
    let _findPendientes_decorators;
    let _findMisPedidos_decorators;
    let _findOne_decorators;
    let _cambiarEstado_decorators;
    var PedidosController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _create_decorators = [Post(), UseGuards(RolesGuard), Roles('CLIENTE')];
            _findAll_decorators = [Get(), UseGuards(RolesGuard), Roles('CAJERO', 'ADMINISTRADOR')];
            _findPendientes_decorators = [Get('pendientes'), UseGuards(RolesGuard), Roles('CAJERO', 'ADMINISTRADOR')];
            _findMisPedidos_decorators = [Get('mi-pedido'), UseGuards(RolesGuard), Roles('CLIENTE')];
            _findOne_decorators = [Get(':id'), UseGuards(RolesGuard), Roles('CAJERO', 'ADMINISTRADOR')];
            _cambiarEstado_decorators = [Patch(':id/estado'), UseGuards(RolesGuard), Roles('CLIENTE')];
            __esDecorate(this, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findPendientes_decorators, { kind: "method", name: "findPendientes", static: false, private: false, access: { has: obj => "findPendientes" in obj, get: obj => obj.findPendientes }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findMisPedidos_decorators, { kind: "method", name: "findMisPedidos", static: false, private: false, access: { has: obj => "findMisPedidos" in obj, get: obj => obj.findMisPedidos }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _cambiarEstado_decorators, { kind: "method", name: "cambiarEstado", static: false, private: false, access: { has: obj => "cambiarEstado" in obj, get: obj => obj.cambiarEstado }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            PedidosController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        pedidosService = __runInitializers(this, _instanceExtraInitializers);
        constructor(pedidosService) {
            this.pedidosService = pedidosService;
        }
        // CLIENTE
        // Crear un nuevo pedido a partir de su carrito
        create(createPedidoDto, req) {
            return this.pedidosService.create(createPedidoDto, req.usuario.id);
        }
        // CAJERO Y ADMINISTRADOR
        // Ver todos los pedidos
        findAll() {
            return this.pedidosService.findAll();
        }
        // CAJERO Y ADMINISTRADOR
        // Ver pedidos pendientes
        findPendientes() {
            return this.pedidosService.findPendientes();
        }
        // CLIENTE
        // Ver sus propios pedidos sin enviar ningún ID
        findMisPedidos(req) {
            return this.pedidosService.findMisPedidos(req.usuario.id);
        }
        // CAJERO Y ADMINISTRADOR
        // Ver un pedido específico
        findOne(id) {
            return this.pedidosService.findOne(+id);
        }
        // CLIENTE
        // Cambiar el estado de su pedido
        cambiarEstado(id, updatePedidoDto, req) {
            return this.pedidosService.cambiarEstado(+id, updatePedidoDto, req.usuario.id);
        }
    };
    return PedidosController = _classThis;
})();
export { PedidosController };
//# sourceMappingURL=pedidos.controller.js.map