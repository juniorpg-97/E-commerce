export declare const Rol: {
    readonly ADMINISTRADOR: "ADMINISTRADOR";
    readonly CAJERO: "CAJERO";
    readonly CLIENTE: "CLIENTE";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const TipoDescuento: {
    readonly TEMPORADA: "TEMPORADA";
    readonly LIQUIDACION: "LIQUIDACION";
    readonly CUPON: "CUPON";
    readonly CUMPLEAÑOS: "CUMPLEAÑOS";
};
export type TipoDescuento = (typeof TipoDescuento)[keyof typeof TipoDescuento];
export declare const TipoMovimiento: {
    readonly ENTRADA: "ENTRADA";
    readonly VENTA: "VENTA";
    readonly MERMA: "MERMA";
    readonly AJUSTE: "AJUSTE";
    readonly DEVOLUCION: "DEVOLUCION";
};
export type TipoMovimiento = (typeof TipoMovimiento)[keyof typeof TipoMovimiento];
export declare const EstadoPedido: {
    readonly PENDIENTE: "PENDIENTE";
    readonly PAGADO: "PAGADO";
    readonly EN_PREPARACION: "EN_PREPARACION";
    readonly EN_CAMINO: "EN_CAMINO";
    readonly ENTREGADO: "ENTREGADO";
    readonly CANCELADO: "CANCELADO";
};
export type EstadoPedido = (typeof EstadoPedido)[keyof typeof EstadoPedido];
export declare const EstadoVenta: {
    readonly COMPLETADA: "COMPLETADA";
    readonly ANULADA: "ANULADA";
};
export type EstadoVenta = (typeof EstadoVenta)[keyof typeof EstadoVenta];
export declare const MetodoPago: {
    readonly EFECTIVO: "EFECTIVO";
    readonly TARJETA: "TARJETA";
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly YAPE: "YAPE";
    readonly PLIN: "PLIN";
    readonly OTRO: "OTRO";
};
export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago];
export declare const EstadoCaja: {
    readonly ABIERTA: "ABIERTA";
    readonly CERRADA: "CERRADA";
};
export type EstadoCaja = (typeof EstadoCaja)[keyof typeof EstadoCaja];
