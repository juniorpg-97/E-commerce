import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Direccion: 'Direccion',
    Categoria: 'Categoria',
    Producto: 'Producto',
    Inventario: 'Inventario',
    MovimientoInventario: 'MovimientoInventario',
    Descuento: 'Descuento',
    ProductoDescuento: 'ProductoDescuento',
    Carrito: 'Carrito',
    DetalleCarrito: 'DetalleCarrito',
    Pedido: 'Pedido',
    DetallePedido: 'DetallePedido',
    Caja: 'Caja',
    Venta: 'Venta',
    DetalleVenta: 'DetalleVenta'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UsuarioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    rol: 'rol',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const ClienteScalarFieldEnum = {
    id: 'id',
    usuarioId: 'usuarioId',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    telefono: 'telefono',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const DireccionScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    calle: 'calle',
    numero: 'numero',
    referencia: 'referencia',
    ciudad: 'ciudad',
    codigoPostal: 'codigoPostal',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const CategoriaScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const ProductoScalarFieldEnum = {
    id: 'id',
    categoriaId: 'categoriaId',
    nombre: 'nombre',
    descripcion: 'descripcion',
    costoAdquisicion: 'costoAdquisicion',
    precioVenta: 'precioVenta',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const InventarioScalarFieldEnum = {
    id: 'id',
    productoId: 'productoId',
    stock: 'stock',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const MovimientoInventarioScalarFieldEnum = {
    id: 'id',
    inventarioId: 'inventarioId',
    usuarioId: 'usuarioId',
    detalleVentaId: 'detalleVentaId',
    tipo: 'tipo',
    cantidad: 'cantidad',
    motivo: 'motivo',
    referencia: 'referencia',
    fecha: 'fecha',
    creadoEn: 'creadoEn'
};
export const DescuentoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    tipo: 'tipo',
    porcentaje: 'porcentaje',
    monto: 'monto',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const ProductoDescuentoScalarFieldEnum = {
    id: 'id',
    productoId: 'productoId',
    descuentoId: 'descuentoId',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const CarritoScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const DetalleCarritoScalarFieldEnum = {
    id: 'id',
    carritoId: 'carritoId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const PedidoScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    direccionId: 'direccionId',
    estado: 'estado',
    total: 'total',
    metodoPago: 'metodoPago',
    observaciones: 'observaciones',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const DetallePedidoScalarFieldEnum = {
    id: 'id',
    pedidoId: 'pedidoId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    descuento: 'descuento',
    subtotal: 'subtotal',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const CajaScalarFieldEnum = {
    id: 'id',
    usuarioId: 'usuarioId',
    fechaApertura: 'fechaApertura',
    fechaCierre: 'fechaCierre',
    montoInicial: 'montoInicial',
    montoEsperado: 'montoEsperado',
    montoContado: 'montoContado',
    diferencia: 'diferencia',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const VentaScalarFieldEnum = {
    id: 'id',
    cajaId: 'cajaId',
    usuarioId: 'usuarioId',
    clienteId: 'clienteId',
    fecha: 'fecha',
    subtotal: 'subtotal',
    descuento: 'descuento',
    total: 'total',
    metodoPago: 'metodoPago',
    estado: 'estado',
    observaciones: 'observaciones',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const DetalleVentaScalarFieldEnum = {
    id: 'id',
    ventaId: 'ventaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    descuento: 'descuento',
    subtotal: 'subtotal',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map