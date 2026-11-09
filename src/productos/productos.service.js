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
import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
let ProductosService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProductosService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ProductosService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async create(createProductoDto) {
            const categoria = await this.prisma.categoria.findUnique({
                where: {
                    id: createProductoDto.categoriaId,
                },
            });
            if (!categoria) {
                throw new NotFoundException(`categoria de ID ${createProductoDto.categoriaId} no encontrada`);
            }
            const productoExistente = await this.prisma.producto.findFirst({
                where: {
                    nombre: createProductoDto.nombre,
                },
            });
            if (productoExistente) {
                throw new ConflictException('Ya existe un producto con ese nombre');
            }
            return this.prisma.producto.create({
                data: {
                    categoriaId: createProductoDto.categoriaId,
                    nombre: createProductoDto.nombre,
                    descripcion: createProductoDto.descripcion,
                    costoAdquisicion: createProductoDto.costoAdquisicion,
                    precioVenta: createProductoDto.precioVenta,
                    inventario: {
                        create: {
                            stock: 0,
                        },
                    },
                },
                include: {
                    categoria: true,
                    inventario: true,
                },
            });
        }
        async findAll(rol, categoriaId) {
            const productos = await this.prisma.producto.findMany({
                where: {
                    ...(categoriaId
                        ? {
                            categoriaId: Number(categoriaId),
                        }
                        : {}),
                    ...(rol === 'CLIENTE'
                        ? {
                            activo: true,
                            inventario: {
                                stock: {
                                    gt: 0,
                                },
                            },
                        }
                        : {}),
                },
                orderBy: {
                    id: 'asc',
                },
                include: {
                    categoria: true,
                    inventario: true,
                },
            });
            if (rol === 'CLIENTE') {
                return productos.map(({ costoAdquisicion, ...producto }) => producto);
            }
            return productos;
        }
        async findOne(id, rol) {
            const producto = await this.prisma.producto.findUnique({
                where: {
                    id,
                },
                include: {
                    categoria: true,
                    inventario: true,
                },
            });
            if (!producto) {
                throw new NotFoundException(`producto de ID ${id} no encontrado`);
            }
            if (rol === 'CLIENTE') {
                const { costoAdquisicion, ...productoSinCosto } = producto;
                return productoSinCosto;
            }
            return producto;
        }
        async update(id, updateProductoDto) {
            await this.findOne(id);
            if (updateProductoDto.categoriaId) {
                const categoria = await this.prisma.categoria.findUnique({
                    where: {
                        id: updateProductoDto.categoriaId,
                    },
                });
                if (!categoria) {
                    throw new NotFoundException(`categoria de ID ${updateProductoDto.categoriaId} no encontrada`);
                }
            }
            if (updateProductoDto.nombre) {
                const productoExistente = await this.prisma.producto.findFirst({
                    where: {
                        nombre: updateProductoDto.nombre,
                        NOT: {
                            id,
                        },
                    },
                });
                if (productoExistente) {
                    throw new ConflictException('Ya existe un producto con ese nombre');
                }
            }
            return this.prisma.producto.update({
                where: {
                    id,
                },
                data: updateProductoDto,
                include: {
                    categoria: true,
                    inventario: true,
                },
            });
        }
        async remove(id) {
            await this.findOne(id);
            return this.prisma.$transaction(async (tx) => {
                await tx.inventario.deleteMany({
                    where: {
                        productoId: id,
                    },
                });
                return tx.producto.delete({
                    where: {
                        id,
                    },
                });
            });
        }
    };
    return ProductosService = _classThis;
})();
export { ProductosService };
//# sourceMappingURL=productos.service.js.map