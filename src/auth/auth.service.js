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
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt, { SignOptions } from 'jsonwebtoken';
let AuthService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuthService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AuthService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        usuariosService;
        configService;
        constructor(usuariosService, configService) {
            this.usuariosService = usuariosService;
            this.configService = configService;
        }
        async register(createUsuarioDto) {
            return this.usuariosService.create(createUsuarioDto);
        }
        async validateUser(email, password) {
            const usuario = await this.usuariosService.findByEmail(email);
            if (!usuario) {
                throw new UnauthorizedException('Credenciales invalidas');
            }
            const isMatch = await bcrypt.compare(password, usuario.password);
            if (!isMatch) {
                throw new UnauthorizedException('Credenciales invalidas');
            }
            return usuario;
        }
        async generateToken(usuario) {
            const secret = this.configService.getOrThrow('JWT_SECRET');
            const expiresIn = this.configService.getOrThrow('JWT_EXPIRES_IN');
            const options = {
                expiresIn: expiresIn,
            };
            const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                rol: usuario.rol,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
            }, secret, options);
            return {
                token,
            };
        }
        async login(loginDto) {
            const usuario = await this.usuariosService.findByEmail(loginDto.email);
            if (!usuario) {
                throw new UnauthorizedException('Credenciales invalidas');
            }
            const isMatch = await bcrypt.compare(loginDto.password, usuario.password);
            if (!isMatch) {
                throw new UnauthorizedException('Credenciales invalidas');
            }
            const secret = this.configService.getOrThrow('JWT_SECRET');
            const expiresIn = this.configService.getOrThrow('JWT_EXPIRES_IN');
            const options = {
                expiresIn: expiresIn,
            };
            const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                rol: usuario.rol,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
            }, secret, options);
            return {
                mensaje: 'Credenciales correctas',
                token,
            };
        }
    };
    return AuthService = _classThis;
})();
export { AuthService };
//# sourceMappingURL=auth.service.js.map