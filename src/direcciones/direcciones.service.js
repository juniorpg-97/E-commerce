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
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDireccionDto } from './dto/create-direccion.dto.js';
let DireccionesService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DireccionesService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DireccionesService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async create(createDireccionDto, usuarioId) {
            const { calle, numero, referencia, ciudad, codigoPostal } = createDireccionDto;
            // Buscar el cliente relacionado con el usuario autenticado
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            const direccion = await this.prisma.direccion.create({
                data: {
                    clienteId: cliente.id,
                    calle,
                    numero,
                    referencia,
                    ciudad,
                    codigoPostal,
                },
            });
            return {
                mensaje: 'Dirección registrada correctamente',
                direccion,
            };
        }
        async findAll(usuarioId) {
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            return this.prisma.direccion.findMany({
                where: {
                    clienteId: cliente.id,
                },
                orderBy: {
                    creadoEn: 'desc',
                },
            });
        }
        async findOne(id, usuarioId) {
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            return this.prisma.direccion.findFirst({
                where: {
                    id,
                    clienteId: cliente.id,
                },
            });
        }
        async desactivar(id, usuarioId) {
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            const direccion = await this.prisma.direccion.findFirst({
                where: {
                    id,
                    clienteId: cliente.id,
                },
            });
            if (!direccion) {
                throw new Error('La dirección no existe o no pertenece al cliente');
            }
            return this.prisma.direccion.update({
                where: {
                    id,
                },
                data: {
                    activa: false,
                },
            });
        }
    };
    return DireccionesService = _classThis;
})();
export { DireccionesService };
//# sourceMappingURL=direcciones.service.js.map