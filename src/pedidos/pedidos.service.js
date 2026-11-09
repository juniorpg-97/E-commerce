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
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { EstadoPedido, TipoVenta } from '../../generated/prisma/enums.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';
let PedidosService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PedidosService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            PedidosService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prisma;
        constructor(prisma) {
            this.prisma = prisma;
        }
        async create(createPedidoDto, usuarioId) {
            const { direccionId, metodoPago } = createPedidoDto;
            const cliente = await this.prisma.cliente.findUnique({
                where: { usuarioId },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            const direccion = await this.prisma.direccion.findFirst({
                where: {
                    id: direccionId,
                    clienteId: cliente.id,
                    activa: true,
                },
            });
            if (!direccion) {
                throw new Error('La dirección no existe, está inactiva o no pertenece al cliente');
            }
            const carrito = await this.prisma.carrito.findFirst({
                where: {
                    clienteId: cliente.id,
                    activo: true,
                },
                include: {
                    detalles: {
                        include: {
                            producto: {
                                include: {
                                    inventario: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!carrito) {
                throw new Error('El cliente no tiene un carrito activo');
            }
            if (carrito.detalles.length === 0) {
                throw new Error('El carrito está vacío');
            }
            for (const detalle of carrito.detalles) {
                if (!detalle.producto.activo) {
                    throw new Error(`El producto "${detalle.producto.nombre}" no está disponible`);
                }
                if (!detalle.producto.inventario) {
                    throw new Error(`El producto "${detalle.producto.nombre}" no tiene inventario`);
                }
                if (detalle.producto.inventario.stock < detalle.cantidad) {
                    throw new Error(`Stock insuficiente para "${detalle.producto.nombre}". Stock disponible: ${detalle.producto.inventario.stock}`);
                }
            }
            const totalPedido = carrito.detalles.reduce((total, detalle) => total + Number(detalle.precioUnitario) * detalle.cantidad, 0);
            return this.prisma.$transaction(async (tx) => {
                const pedido = await tx.pedido.create({
                    data: {
                        clienteId: cliente.id,
                        direccionId,
                        total: totalPedido,
                        metodoPago,
                    },
                });
                for (const detalle of carrito.detalles) {
                    await tx.detallePedido.create({
                        data: {
                            pedidoId: pedido.id,
                            productoId: detalle.productoId,
                            cantidad: detalle.cantidad,
                            precioUnitario: detalle.precioUnitario,
                            subtotal: Number(detalle.precioUnitario) * detalle.cantidad,
                        },
                    });
                    await tx.inventario.update({
                        where: {
                            id: detalle.producto.inventario.id,
                        },
                        data: {
                            stock: {
                                decrement: detalle.cantidad,
                            },
                        },
                    });
                    await tx.movimientoInventario.create({
                        data: {
                            inventarioId: detalle.producto.inventario.id,
                            usuarioId,
                            detalleVentaId: null,
                            tipo: 'VENTA',
                            cantidad: detalle.cantidad,
                            motivo: 'Salida de inventario por pedido web',
                            referencia: `Pedido #${pedido.id}`,
                        },
                    });
                }
                await tx.carrito.update({
                    where: {
                        id: carrito.id,
                    },
                    data: {
                        activo: false,
                    },
                });
                return {
                    mensaje: 'Pedido creado correctamente',
                    pedido,
                };
            });
        }
        async findAll() {
            return this.prisma.pedido.findMany({
                include: {
                    cliente: true,
                    detalles: {
                        include: {
                            producto: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    precioVenta: true,
                                },
                            },
                        },
                    },
                    direccion: true,
                },
                orderBy: {
                    creadoEn: 'desc',
                },
            });
        }
        async findPendientes() {
            return this.prisma.pedido.findMany({
                where: {
                    estado: EstadoPedido.PENDIENTE,
                },
                include: {
                    cliente: true,
                    detalles: {
                        include: {
                            producto: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    precioVenta: true,
                                },
                            },
                        },
                    },
                    direccion: true,
                },
                orderBy: {
                    creadoEn: 'asc',
                },
            });
        }
        async findMisPedidos(usuarioId) {
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            return this.prisma.pedido.findMany({
                where: {
                    clienteId: cliente.id,
                },
                include: {
                    detalles: {
                        include: {
                            producto: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    precioVenta: true,
                                },
                            },
                        },
                    },
                    direccion: true,
                },
                orderBy: {
                    creadoEn: 'desc',
                },
            });
        }
        async findOne(id) {
            return this.prisma.pedido.findUnique({
                where: {
                    id,
                },
                include: {
                    cliente: true,
                    detalles: {
                        include: {
                            producto: {
                                select: {
                                    id: true,
                                    nombre: true,
                                    precioVenta: true,
                                },
                            },
                        },
                    },
                    direccion: true,
                    venta: true,
                },
            });
        }
        async cambiarEstado(id, updatePedidoDto, usuarioId) {
            const cliente = await this.prisma.cliente.findUnique({
                where: {
                    usuarioId,
                },
            });
            if (!cliente) {
                throw new Error('El usuario no tiene un cliente registrado');
            }
            const pedido = await this.prisma.pedido.findFirst({
                where: {
                    id,
                    clienteId: cliente.id,
                },
                include: {
                    detalles: true,
                    venta: true,
                },
            });
            if (!pedido) {
                throw new Error('El pedido no existe o no pertenece al cliente');
            }
            const estadoActual = pedido.estado;
            const nuevoEstado = updatePedidoDto.estado;
            const transicionesPermitidas = {
                [EstadoPedido.PENDIENTE]: [EstadoPedido.PAGADO, EstadoPedido.CANCELADO],
                [EstadoPedido.PAGADO]: [
                    EstadoPedido.EN_PREPARACION,
                    EstadoPedido.CANCELADO,
                ],
                [EstadoPedido.EN_PREPARACION]: [EstadoPedido.EN_CAMINO],
                [EstadoPedido.EN_CAMINO]: [EstadoPedido.ENTREGADO],
                [EstadoPedido.ENTREGADO]: [],
                [EstadoPedido.CANCELADO]: [],
            };
            if (!transicionesPermitidas[estadoActual].includes(nuevoEstado)) {
                throw new BadRequestException(`No se puede cambiar el pedido de ${estadoActual} a ${nuevoEstado}`);
            }
            return this.prisma.$transaction(async (tx) => {
                /*
                 * Si el pedido se cancela, devolvemos el stock.
                 */
                if (nuevoEstado === EstadoPedido.CANCELADO) {
                    for (const detalle of pedido.detalles) {
                        const inventario = await tx.inventario.findUnique({
                            where: {
                                productoId: detalle.productoId,
                            },
                        });
                        if (!inventario) {
                            throw new Error(`No existe inventario para el producto ${detalle.productoId}`);
                        }
                        await tx.inventario.update({
                            where: {
                                id: inventario.id,
                            },
                            data: {
                                stock: {
                                    increment: detalle.cantidad,
                                },
                            },
                        });
                        await tx.movimientoInventario.create({
                            data: {
                                inventarioId: inventario.id,
                                usuarioId,
                                detalleVentaId: null,
                                tipo: 'DEVOLUCION',
                                cantidad: detalle.cantidad,
                                motivo: 'Devolución de inventario por cancelación de pedido web',
                                referencia: `Pedido #${pedido.id}`,
                            },
                        });
                    }
                }
                /*
                 * Si el pedido pasa a PAGADO,
                 * se convierte automáticamente en una Venta WEB.
                 */
                if (nuevoEstado === EstadoPedido.PAGADO) {
                    if (pedido.venta) {
                        throw new BadRequestException('Este pedido ya tiene una venta asociada');
                    }
                    const venta = await tx.venta.create({
                        data: {
                            pedidoId: pedido.id,
                            usuarioId,
                            clienteId: pedido.clienteId,
                            tipo: TipoVenta.WEB,
                            subtotalVenta: pedido.total,
                            descuento: 0,
                            totalVenta: pedido.total,
                            metodoPago: pedido.metodoPago,
                            estado: 'COMPLETADA',
                            observaciones: `Venta generada automáticamente desde el Pedido #${pedido.id}`,
                        },
                    });
                    for (const detalle of pedido.detalles) {
                        await tx.detalleVenta.create({
                            data: {
                                ventaId: venta.id,
                                productoId: detalle.productoId,
                                cantidad: detalle.cantidad,
                                precioUnitario: detalle.precioUnitario,
                                subtotal: detalle.subtotal,
                            },
                        });
                    }
                }
                return tx.pedido.update({
                    where: {
                        id,
                    },
                    data: {
                        estado: nuevoEstado,
                    },
                    include: {
                        detalles: {
                            include: {
                                producto: {
                                    select: {
                                        id: true,
                                        nombre: true,
                                        precioVenta: true,
                                    },
                                },
                            },
                        },
                        direccion: true,
                        venta: true,
                    },
                });
            });
        }
    };
    return PedidosService = _classThis;
})();
export { PedidosService };
//# sourceMappingURL=pedidos.service.js.map