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
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, Matches, } from 'class-validator';
import { Rol } from '../../../generated/prisma/client.js';
let CreateUsuarioDto = (() => {
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _apellido_decorators;
    let _apellido_initializers = [];
    let _apellido_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _password_extraInitializers = [];
    let _rol_decorators;
    let _rol_initializers = [];
    let _rol_extraInitializers = [];
    return class CreateUsuarioDto {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [ApiProperty({
                    example: 'Juan',
                    description: 'Nombre del usuario',
                }), IsString({ message: 'el nombre debe ser una cadena de texto' }), IsNotEmpty({ message: 'el nombre es obligatorio' }), MinLength(2, { message: 'El nombre debe tener almenos 2 caracteres' }), Matches(/\S/, { message: 'El nombre  no puede contener solo espacios' })];
            _apellido_decorators = [ApiProperty({
                    example: 'Pérez',
                    description: 'Apellido del usuario',
                }), IsString({ message: 'el apellido debe ser una cadena de texto' }), IsNotEmpty({ message: 'el apellido es obligatorio' }), MinLength(2, { message: 'El apellido debe tener almenos 2 caracteres' }), Matches(/\S/, { message: 'El apellido  no puede contener solo espacios' })];
            _email_decorators = [ApiProperty({
                    example: 'juan@correo.com',
                    description: 'Correo electrónico del usuario',
                }), IsEmail({}, { message: 'el email debe estar en el formato correcto' }), IsNotEmpty({ message: 'el email es obligatorio' })];
            _password_decorators = [ApiProperty({
                    example: 'Cliente12345',
                    description: 'Contraseña del usuario',
                    minLength: 6,
                }), IsString({ message: 'password debe ser una cadena de texto' }), IsNotEmpty({ message: 'password es obligatorio' }), MinLength(6, { message: 'la contraseña debe tener almenos 6 caracteres' }), Matches(/\S/, { message: 'La contraseña no puede contener solo espacios' })];
            _rol_decorators = [ApiPropertyOptional({
                    enum: Rol,
                    example: Rol.CLIENTE,
                    description: 'Rol del usuario. Si no se envía, se utilizará CLIENTE.',
                }), IsOptional(), IsEnum(Rol, { message: 'el rol debe ser ADMINISTRADOR, CAJERO o CLIENTE' })];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _apellido_decorators, { kind: "field", name: "apellido", static: false, private: false, access: { has: obj => "apellido" in obj, get: obj => obj.apellido, set: (obj, value) => { obj.apellido = value; } }, metadata: _metadata }, _apellido_initializers, _apellido_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
            __esDecorate(null, null, _rol_decorators, { kind: "field", name: "rol", static: false, private: false, access: { has: obj => "rol" in obj, get: obj => obj.rol, set: (obj, value) => { obj.rol = value; } }, metadata: _metadata }, _rol_initializers, _rol_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        nombre = __runInitializers(this, _nombre_initializers, void 0);
        apellido = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _apellido_initializers, void 0));
        email = (__runInitializers(this, _apellido_extraInitializers), __runInitializers(this, _email_initializers, void 0));
        password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
        rol = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _rol_initializers, void 0));
        constructor() {
            __runInitializers(this, _rol_extraInitializers);
        }
    };
})();
export { CreateUsuarioDto };
//# sourceMappingURL=create-usuario.dto.js.map