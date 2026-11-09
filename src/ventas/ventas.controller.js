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
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { VentasService } from './ventas.service.js';
import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { Rol } from '../../generated/prisma/client.js';
let VentasController = (() => {
    let _classDecorators = [ApiTags('Ventas'), ApiBearerAuth('JWT-auth'), Controller('ventas'), UseGuards(JwtAuthGuard, RolesGuard)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _create_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _update_decorators;
    let _remove_decorators;
    var VentasController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _create_decorators = [Post(), ApiOperation({
                    summary: 'Registrar una venta POS',
                    description: 'Registra una venta, crea sus detalles, calcula subtotales y total, descuenta el stock y registra los movimientos de inventario.',
                }), ApiBearerAuth(), ApiResponse({
                    status: 201,
                    description: 'Venta procesada correctamente.',
                }), ApiResponse({
                    status: 401,
                    description: 'Token no proporcionado, inválido o expirado.',
                }), ApiResponse({
                    status: 403,
                    description: 'El usuario no tiene permisos. Solo ADMINISTRADOR y CAJERO pueden registrar ventas.',
                }), UseGuards(JwtAuthGuard, RolesGuard), Roles('ADMINISTRADOR', 'CAJERO')];
            _findAll_decorators = [Get(), ApiOperation({
                    summary: 'Consultar historial de ventas',
                    description: 'Obtiene el historial de ventas ordenado desde la más reciente. Permite filtrar por fecha inicial, fecha final o ambas.',
                }), ApiQuery({
                    name: 'fechaInicio',
                    required: false,
                    example: '2026-10-01',
                    description: 'Fecha inicial del periodo de consulta.',
                }), ApiQuery({
                    name: 'fechaFin',
                    required: false,
                    example: '2026-10-01',
                    description: 'Fecha final del periodo de consulta.',
                }), ApiResponse({
                    status: 200,
                    description: 'Lista de ventas con usuario, cliente, productos, cantidades, precios y totales.',
                })];
            _findOne_decorators = [Get(':id'), ApiOperation({
                    summary: 'Consultar una venta por ID',
                    description: 'Obtiene una venta específica mediante su identificador.',
                }), ApiResponse({
                    status: 200,
                    description: 'Venta encontrada.',
                })];
            _update_decorators = [Patch(':id'), ApiOperation({
                    summary: 'Actualizar una venta',
                    description: 'Actualiza los datos de una venta existente.',
                }), ApiResponse({
                    status: 200,
                    description: 'Venta actualizada correctamente.',
                })];
            _remove_decorators = [Delete(':id'), ApiOperation({
                    summary: 'Eliminar una venta',
                    description: 'Elimina una venta mediante su identificador.',
                }), ApiResponse({
                    status: 200,
                    description: 'Venta eliminada correctamente.',
                })];
            __esDecorate(this, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: obj => "remove" in obj, get: obj => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VentasController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        ventasService = __runInitializers(this, _instanceExtraInitializers);
        constructor(ventasService) {
            this.ventasService = ventasService;
        }
        create(createVentaDto, request) {
            const usuario = request.usuario;
            return this.ventasService.create(createVentaDto, usuario.id);
        }
        findAll(fechaInicio, fechaFin) {
            return this.ventasService.findAll(fechaInicio, fechaFin);
        }
        findOne(id) {
            return this.ventasService.findOne(+id);
        }
        update(id, updateVentaDto) {
            return this.ventasService.update(+id, updateVentaDto);
        }
        remove(id) {
            return this.ventasService.remove(+id);
        }
    };
    return VentasController = _classThis;
})();
export { VentasController };
//# sourceMappingURL=ventas.controller.js.map