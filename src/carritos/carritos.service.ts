import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCarritoDto } from './dto/create-carrito.dto.js';
import { UpdateCarritoDto } from './dto/update-carrito.dto.js';

@Injectable()
export class CarritoService {
  constructor(private readonly prisma: PrismaService) {}

  // ======================================================
  // OBTENER CLIENTE DESDE EL USUARIO AUTENTICADO
  // ======================================================

  private async obtenerCliente(usuarioId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        usuarioId,
      },
    });

    if (!cliente) {
      throw new Error('El usuario autenticado no tiene un registro de cliente');
    }

    return cliente;
  }

  // ======================================================
  // AGREGAR PRODUCTO AL CARRITO
  // ======================================================

  async agregarProducto(createCarritoDto: CreateCarritoDto, usuarioId: number) {
    const { productoId, cantidad } = createCarritoDto;

    // 1. Obtener el cliente asociado al usuario autenticado
    const cliente = await this.obtenerCliente(usuarioId);

    // 2. Buscar el producto
    const producto = await this.prisma.producto.findUnique({
      where: {
        id: productoId,
      },
      include: {
        inventario: true,
      },
    });

    // 3. Validar que el producto exista
    if (!producto) {
      throw new Error(`El producto con ID ${productoId} no existe`);
    }

    // 4. Validar que el producto esté activo
    if (!producto.activo) {
      throw new Error(`El producto "${producto.nombre}" no está activo`);
    }

    // 5. Validar que tenga inventario
    if (!producto.inventario) {
      throw new Error(`El producto "${producto.nombre}" no tiene inventario`);
    }

    // 6. Validar stock disponible
    if (producto.inventario.stock < cantidad) {
      throw new Error(
        `Stock insuficiente para "${producto.nombre}". Stock disponible: ${producto.inventario.stock}`,
      );
    }

    // 7. Buscar el carrito activo del cliente
    let carrito = await this.prisma.carrito.findFirst({
      where: {
        clienteId: cliente.id,
        activo: true,
      },
    });

    // 8. Crear carrito si no existe
    if (!carrito) {
      carrito = await this.prisma.carrito.create({
        data: {
          clienteId: cliente.id,
          activo: true,
        },
      });
    }

    // 9. Buscar si el producto ya está en el carrito
    const detalleExistente = await this.prisma.detalleCarrito.findUnique({
      where: {
        carritoId_productoId: {
          carritoId: carrito.id,
          productoId,
        },
      },
    });

    // 10. Si ya existe, aumentar la cantidad
    if (detalleExistente) {
      const nuevaCantidad = detalleExistente.cantidad + cantidad;

      // Verificar que la nueva cantidad no supere el stock
      if (producto.inventario.stock < nuevaCantidad) {
        throw new Error(
          `Stock insuficiente para "${producto.nombre}". Stock disponible: ${producto.inventario.stock}`,
        );
      }

      const detalleActualizado = await this.prisma.detalleCarrito.update({
        where: {
          id: detalleExistente.id,
        },
        data: {
          cantidad: nuevaCantidad,
        },
        include: {
          producto: {
            select: {
              id: true,
              nombre: true,
              descripcion: true,
              precioVenta: true,
              activo: true,
            },
          },
        },
      });

      return {
        mensaje: 'Cantidad del producto actualizada en el carrito',
        carritoId: carrito.id,
        detalle: detalleActualizado,
      };
    }

    // 11. Si no existe, crear el detalle
    const detalle = await this.prisma.detalleCarrito.create({
      data: {
        carritoId: carrito.id,
        productoId,
        cantidad,
        precioUnitario: producto.precioVenta,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });

    return {
      mensaje: 'Producto agregado al carrito correctamente',
      carritoId: carrito.id,
      detalle,
    };
  }

  // ======================================================
  // CONSULTAR CARRITO
  // ======================================================

  async findOne(usuarioId: number) {
    // Obtener el cliente asociado al usuario
    const cliente = await this.obtenerCliente(usuarioId);

    return this.prisma.carrito.findFirst({
      where: {
        clienteId: cliente.id,
        activo: true,
      },
      include: {
        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
                descripcion: true,
                precioVenta: true,
                activo: true,
              },
            },
          },
        },
      },
    });
  }

  // ======================================================
  // ACTUALIZAR CANTIDAD
  // ======================================================

  async actualizarCantidad(
    detalleId: number,
    updateCarritoDto: UpdateCarritoDto,
    usuarioId: number,
  ) {
    const { cantidad } = updateCarritoDto;

    // 1. Obtener el cliente
    const cliente = await this.obtenerCliente(usuarioId);

    // 2. Buscar el detalle dentro del carrito del cliente
    const detalle = await this.prisma.detalleCarrito.findFirst({
      where: {
        id: detalleId,
        carrito: {
          clienteId: cliente.id,
          activo: true,
        },
      },
      include: {
        producto: {
          include: {
            inventario: true,
          },
        },
      },
    });

    if (!detalle) {
      throw new Error('El producto no existe en el carrito del cliente');
    }

    // 3. Verificar inventario
    if (!detalle.producto.inventario) {
      throw new Error(
        `El producto "${detalle.producto.nombre}" no tiene inventario`,
      );
    }

    // 4. Verificar stock
    if (detalle.producto.inventario.stock < cantidad) {
      throw new Error(
        `Stock insuficiente para "${detalle.producto.nombre}". Stock disponible: ${detalle.producto.inventario.stock}`,
      );
    }

    // 5. Actualizar cantidad
    const detalleActualizado = await this.prisma.detalleCarrito.update({
      where: {
        id: detalleId,
      },
      data: {
        cantidad,
      },
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
            descripcion: true,
            precioVenta: true,
            activo: true,
          },
        },
      },
    });

    return {
      mensaje: 'Cantidad actualizada correctamente',
      detalle: detalleActualizado,
    };
  }

  // ======================================================
  // ELIMINAR PRODUCTO DEL CARRITO
  // ======================================================

  async eliminarProducto(detalleId: number, usuarioId: number) {
    // Obtener el cliente
    const cliente = await this.obtenerCliente(usuarioId);

    // Verificar que el detalle pertenezca
    // al carrito activo del cliente
    const detalle = await this.prisma.detalleCarrito.findFirst({
      where: {
        id: detalleId,
        carrito: {
          clienteId: cliente.id,
          activo: true,
        },
      },
    });

    if (!detalle) {
      throw new Error('El producto no existe en el carrito del cliente');
    }

    await this.prisma.detalleCarrito.delete({
      where: {
        id: detalleId,
      },
    });

    return {
      mensaje: 'Producto eliminado del carrito correctamente',
    };
  }

  // ======================================================
  // VACIAR CARRITO
  // ======================================================

  async vaciarCarrito(usuarioId: number) {
    // Obtener el cliente
    const cliente = await this.obtenerCliente(usuarioId);

    // Buscar carrito activo
    const carrito = await this.prisma.carrito.findFirst({
      where: {
        clienteId: cliente.id,
        activo: true,
      },
    });

    if (!carrito) {
      throw new Error('El cliente no tiene un carrito activo');
    }

    // Eliminar todos los detalles
    await this.prisma.detalleCarrito.deleteMany({
      where: {
        carritoId: carrito.id,
      },
    });

    return {
      mensaje: 'Carrito vaciado correctamente',
    };
  }
}
