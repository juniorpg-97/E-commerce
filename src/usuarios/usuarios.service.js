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
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
let UsuariosService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UsuariosService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            UsuariosService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async findAll() {
            return this.prisma.usuario.findMany({
                orderBy: { id: 'asc' },
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    rol: true,
                    activo: true,
                    creadoEn: true,
                },
            });
        }
        async findOne(id) {
            const usuario = await this.prisma.usuario.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    rol: true,
                    activo: true,
                    creadoEn: true,
                },
            });
            if (!usuario) {
                throw new NotFoundException(`usuario de ID ${id} no encontrado`);
            }
            return usuario;
        }
        async create(createUserDto) {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            return await this.prisma.usuario.create({
                data: {
                    nombre: createUserDto.nombre,
                    apellido: createUserDto.apellido,
                    email: createUserDto.email,
                    password: hashedPassword,
                    rol: createUserDto.rol ?? 'CLIENTE',
                    activo: true,
                },
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    rol: true,
                    activo: true,
                    creadoEn: true,
                },
            });
        }
        async findByEmail(email) {
            return this.prisma.usuario.findUnique({
                where: { email },
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    rol: true,
                    activo: true,
                    creadoEn: true,
                    password: true,
                },
            });
        }
    };
    return UsuariosService = _classThis;
})();
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map