import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VentaModel = runtime.Types.Result.DefaultSelection<Prisma.$VentaPayload>;
export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null;
    _avg: VentaAvgAggregateOutputType | null;
    _sum: VentaSumAggregateOutputType | null;
    _min: VentaMinAggregateOutputType | null;
    _max: VentaMaxAggregateOutputType | null;
};
export type VentaAvgAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    usuarioId: number | null;
    clienteId: number | null;
    subtotal: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type VentaSumAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    usuarioId: number | null;
    clienteId: number | null;
    subtotal: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type VentaMinAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    usuarioId: number | null;
    clienteId: number | null;
    fecha: Date | null;
    subtotal: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    total: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    estado: $Enums.EstadoVenta | null;
    observaciones: string | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type VentaMaxAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    usuarioId: number | null;
    clienteId: number | null;
    fecha: Date | null;
    subtotal: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    total: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    estado: $Enums.EstadoVenta | null;
    observaciones: string | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type VentaCountAggregateOutputType = {
    id: number;
    cajaId: number;
    usuarioId: number;
    clienteId: number;
    fecha: number;
    subtotal: number;
    descuento: number;
    total: number;
    metodoPago: number;
    estado: number;
    observaciones: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type VentaAvgAggregateInputType = {
    id?: true;
    cajaId?: true;
    usuarioId?: true;
    clienteId?: true;
    subtotal?: true;
    descuento?: true;
    total?: true;
};
export type VentaSumAggregateInputType = {
    id?: true;
    cajaId?: true;
    usuarioId?: true;
    clienteId?: true;
    subtotal?: true;
    descuento?: true;
    total?: true;
};
export type VentaMinAggregateInputType = {
    id?: true;
    cajaId?: true;
    usuarioId?: true;
    clienteId?: true;
    fecha?: true;
    subtotal?: true;
    descuento?: true;
    total?: true;
    metodoPago?: true;
    estado?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type VentaMaxAggregateInputType = {
    id?: true;
    cajaId?: true;
    usuarioId?: true;
    clienteId?: true;
    fecha?: true;
    subtotal?: true;
    descuento?: true;
    total?: true;
    metodoPago?: true;
    estado?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type VentaCountAggregateInputType = {
    id?: true;
    cajaId?: true;
    usuarioId?: true;
    clienteId?: true;
    fecha?: true;
    subtotal?: true;
    descuento?: true;
    total?: true;
    metodoPago?: true;
    estado?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type VentaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithRelationInput | Prisma.VentaOrderByWithRelationInput[];
    cursor?: Prisma.VentaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VentaCountAggregateInputType;
    _avg?: VentaAvgAggregateInputType;
    _sum?: VentaSumAggregateInputType;
    _min?: VentaMinAggregateInputType;
    _max?: VentaMaxAggregateInputType;
};
export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
    [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVenta[P]> : Prisma.GetScalarType<T[P], AggregateVenta[P]>;
};
export type VentaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithAggregationInput | Prisma.VentaOrderByWithAggregationInput[];
    by: Prisma.VentaScalarFieldEnum[] | Prisma.VentaScalarFieldEnum;
    having?: Prisma.VentaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VentaCountAggregateInputType | true;
    _avg?: VentaAvgAggregateInputType;
    _sum?: VentaSumAggregateInputType;
    _min?: VentaMinAggregateInputType;
    _max?: VentaMaxAggregateInputType;
};
export type VentaGroupByOutputType = {
    id: number;
    cajaId: number | null;
    usuarioId: number;
    clienteId: number | null;
    fecha: Date;
    subtotal: runtime.Decimal;
    descuento: runtime.Decimal;
    total: runtime.Decimal;
    metodoPago: $Enums.MetodoPago;
    estado: $Enums.EstadoVenta;
    observaciones: string | null;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: VentaCountAggregateOutputType | null;
    _avg: VentaAvgAggregateOutputType | null;
    _sum: VentaSumAggregateOutputType | null;
    _min: VentaMinAggregateOutputType | null;
    _max: VentaMaxAggregateOutputType | null;
};
export type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VentaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VentaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VentaGroupByOutputType[P]>;
}>>;
export type VentaWhereInput = {
    AND?: Prisma.VentaWhereInput | Prisma.VentaWhereInput[];
    OR?: Prisma.VentaWhereInput[];
    NOT?: Prisma.VentaWhereInput | Prisma.VentaWhereInput[];
    id?: Prisma.IntFilter<"Venta"> | number;
    cajaId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    usuarioId?: Prisma.IntFilter<"Venta"> | number;
    clienteId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    fecha?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    subtotal?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFilter<"Venta"> | $Enums.EstadoVenta;
    observaciones?: Prisma.StringNullableFilter<"Venta"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    caja?: Prisma.XOR<Prisma.CajaNullableScalarRelationFilter, Prisma.CajaWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    detalles?: Prisma.DetalleVentaListRelationFilter;
};
export type VentaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    caja?: Prisma.CajaOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    detalles?: Prisma.DetalleVentaOrderByRelationAggregateInput;
};
export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.VentaWhereInput | Prisma.VentaWhereInput[];
    OR?: Prisma.VentaWhereInput[];
    NOT?: Prisma.VentaWhereInput | Prisma.VentaWhereInput[];
    cajaId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    usuarioId?: Prisma.IntFilter<"Venta"> | number;
    clienteId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    fecha?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    subtotal?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFilter<"Venta"> | $Enums.EstadoVenta;
    observaciones?: Prisma.StringNullableFilter<"Venta"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    caja?: Prisma.XOR<Prisma.CajaNullableScalarRelationFilter, Prisma.CajaWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    detalles?: Prisma.DetalleVentaListRelationFilter;
}, "id">;
export type VentaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.VentaCountOrderByAggregateInput;
    _avg?: Prisma.VentaAvgOrderByAggregateInput;
    _max?: Prisma.VentaMaxOrderByAggregateInput;
    _min?: Prisma.VentaMinOrderByAggregateInput;
    _sum?: Prisma.VentaSumOrderByAggregateInput;
};
export type VentaScalarWhereWithAggregatesInput = {
    AND?: Prisma.VentaScalarWhereWithAggregatesInput | Prisma.VentaScalarWhereWithAggregatesInput[];
    OR?: Prisma.VentaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VentaScalarWhereWithAggregatesInput | Prisma.VentaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Venta"> | number;
    cajaId?: Prisma.IntNullableWithAggregatesFilter<"Venta"> | number | null;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Venta"> | number;
    clienteId?: Prisma.IntNullableWithAggregatesFilter<"Venta"> | number | null;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Venta"> | Date | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalWithAggregatesFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoWithAggregatesFilter<"Venta"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaWithAggregatesFilter<"Venta"> | $Enums.EstadoVenta;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"Venta"> | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Venta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Venta"> | Date | string;
};
export type VentaCreateInput = {
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    caja?: Prisma.CajaCreateNestedOneWithoutVentasInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutVentasInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutVentasInput;
    detalles?: Prisma.DetalleVentaCreateNestedManyWithoutVentaInput;
};
export type VentaUncheckedCreateInput = {
    id?: number;
    cajaId?: number | null;
    usuarioId: number;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutVentaInput;
};
export type VentaUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    caja?: Prisma.CajaUpdateOneWithoutVentasNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutVentasNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutVentasNestedInput;
    detalles?: Prisma.DetalleVentaUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput;
};
export type VentaCreateManyInput = {
    id?: number;
    cajaId?: number | null;
    usuarioId: number;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type VentaUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaListRelationFilter = {
    every?: Prisma.VentaWhereInput;
    some?: Prisma.VentaWhereInput;
    none?: Prisma.VentaWhereInput;
};
export type VentaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VentaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type VentaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type VentaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type VentaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type VentaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type VentaScalarRelationFilter = {
    is?: Prisma.VentaWhereInput;
    isNot?: Prisma.VentaWhereInput;
};
export type VentaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput> | Prisma.VentaCreateWithoutUsuarioInput[] | Prisma.VentaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutUsuarioInput | Prisma.VentaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.VentaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput> | Prisma.VentaCreateWithoutUsuarioInput[] | Prisma.VentaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutUsuarioInput | Prisma.VentaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.VentaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput> | Prisma.VentaCreateWithoutUsuarioInput[] | Prisma.VentaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutUsuarioInput | Prisma.VentaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.VentaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.VentaCreateManyUsuarioInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.VentaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutUsuarioInput | Prisma.VentaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type VentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput> | Prisma.VentaCreateWithoutUsuarioInput[] | Prisma.VentaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutUsuarioInput | Prisma.VentaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.VentaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.VentaCreateManyUsuarioInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.VentaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutUsuarioInput | Prisma.VentaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type VentaCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput> | Prisma.VentaCreateWithoutClienteInput[] | Prisma.VentaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutClienteInput | Prisma.VentaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.VentaCreateManyClienteInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput> | Prisma.VentaCreateWithoutClienteInput[] | Prisma.VentaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutClienteInput | Prisma.VentaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.VentaCreateManyClienteInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput> | Prisma.VentaCreateWithoutClienteInput[] | Prisma.VentaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutClienteInput | Prisma.VentaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput | Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.VentaCreateManyClienteInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput | Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutClienteInput | Prisma.VentaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput> | Prisma.VentaCreateWithoutClienteInput[] | Prisma.VentaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutClienteInput | Prisma.VentaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput | Prisma.VentaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.VentaCreateManyClienteInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput | Prisma.VentaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutClienteInput | Prisma.VentaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type VentaCreateNestedManyWithoutCajaInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput> | Prisma.VentaCreateWithoutCajaInput[] | Prisma.VentaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutCajaInput | Prisma.VentaCreateOrConnectWithoutCajaInput[];
    createMany?: Prisma.VentaCreateManyCajaInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUncheckedCreateNestedManyWithoutCajaInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput> | Prisma.VentaCreateWithoutCajaInput[] | Prisma.VentaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutCajaInput | Prisma.VentaCreateOrConnectWithoutCajaInput[];
    createMany?: Prisma.VentaCreateManyCajaInputEnvelope;
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
};
export type VentaUpdateManyWithoutCajaNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput> | Prisma.VentaCreateWithoutCajaInput[] | Prisma.VentaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutCajaInput | Prisma.VentaCreateOrConnectWithoutCajaInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutCajaInput | Prisma.VentaUpsertWithWhereUniqueWithoutCajaInput[];
    createMany?: Prisma.VentaCreateManyCajaInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutCajaInput | Prisma.VentaUpdateWithWhereUniqueWithoutCajaInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutCajaInput | Prisma.VentaUpdateManyWithWhereWithoutCajaInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type VentaUncheckedUpdateManyWithoutCajaNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput> | Prisma.VentaCreateWithoutCajaInput[] | Prisma.VentaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutCajaInput | Prisma.VentaCreateOrConnectWithoutCajaInput[];
    upsert?: Prisma.VentaUpsertWithWhereUniqueWithoutCajaInput | Prisma.VentaUpsertWithWhereUniqueWithoutCajaInput[];
    createMany?: Prisma.VentaCreateManyCajaInputEnvelope;
    set?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    disconnect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    delete?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    connect?: Prisma.VentaWhereUniqueInput | Prisma.VentaWhereUniqueInput[];
    update?: Prisma.VentaUpdateWithWhereUniqueWithoutCajaInput | Prisma.VentaUpdateWithWhereUniqueWithoutCajaInput[];
    updateMany?: Prisma.VentaUpdateManyWithWhereWithoutCajaInput | Prisma.VentaUpdateManyWithWhereWithoutCajaInput[];
    deleteMany?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
};
export type EnumEstadoVentaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoVenta;
};
export type VentaCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutDetallesInput, Prisma.VentaUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.VentaWhereUniqueInput;
};
export type VentaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.VentaCreateWithoutDetallesInput, Prisma.VentaUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.VentaCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.VentaUpsertWithoutDetallesInput;
    connect?: Prisma.VentaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VentaUpdateToOneWithWhereWithoutDetallesInput, Prisma.VentaUpdateWithoutDetallesInput>, Prisma.VentaUncheckedUpdateWithoutDetallesInput>;
};
export type VentaCreateWithoutUsuarioInput = {
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    caja?: Prisma.CajaCreateNestedOneWithoutVentasInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutVentasInput;
    detalles?: Prisma.DetalleVentaCreateNestedManyWithoutVentaInput;
};
export type VentaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    cajaId?: number | null;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutVentaInput;
};
export type VentaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.VentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput>;
};
export type VentaCreateManyUsuarioInputEnvelope = {
    data: Prisma.VentaCreateManyUsuarioInput | Prisma.VentaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type VentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.VentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.VentaUpdateWithoutUsuarioInput, Prisma.VentaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.VentaCreateWithoutUsuarioInput, Prisma.VentaUncheckedCreateWithoutUsuarioInput>;
};
export type VentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.VentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.VentaUpdateWithoutUsuarioInput, Prisma.VentaUncheckedUpdateWithoutUsuarioInput>;
};
export type VentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.VentaScalarWhereInput;
    data: Prisma.XOR<Prisma.VentaUpdateManyMutationInput, Prisma.VentaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type VentaScalarWhereInput = {
    AND?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
    OR?: Prisma.VentaScalarWhereInput[];
    NOT?: Prisma.VentaScalarWhereInput | Prisma.VentaScalarWhereInput[];
    id?: Prisma.IntFilter<"Venta"> | number;
    cajaId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    usuarioId?: Prisma.IntFilter<"Venta"> | number;
    clienteId?: Prisma.IntNullableFilter<"Venta"> | number | null;
    fecha?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    subtotal?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Venta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Venta"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFilter<"Venta"> | $Enums.EstadoVenta;
    observaciones?: Prisma.StringNullableFilter<"Venta"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Venta"> | Date | string;
};
export type VentaCreateWithoutClienteInput = {
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    caja?: Prisma.CajaCreateNestedOneWithoutVentasInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutVentasInput;
    detalles?: Prisma.DetalleVentaCreateNestedManyWithoutVentaInput;
};
export type VentaUncheckedCreateWithoutClienteInput = {
    id?: number;
    cajaId?: number | null;
    usuarioId: number;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutVentaInput;
};
export type VentaCreateOrConnectWithoutClienteInput = {
    where: Prisma.VentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput>;
};
export type VentaCreateManyClienteInputEnvelope = {
    data: Prisma.VentaCreateManyClienteInput | Prisma.VentaCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.VentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.VentaUpdateWithoutClienteInput, Prisma.VentaUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.VentaCreateWithoutClienteInput, Prisma.VentaUncheckedCreateWithoutClienteInput>;
};
export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.VentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.VentaUpdateWithoutClienteInput, Prisma.VentaUncheckedUpdateWithoutClienteInput>;
};
export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.VentaScalarWhereInput;
    data: Prisma.XOR<Prisma.VentaUpdateManyMutationInput, Prisma.VentaUncheckedUpdateManyWithoutClienteInput>;
};
export type VentaCreateWithoutCajaInput = {
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutVentasInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutVentasInput;
    detalles?: Prisma.DetalleVentaCreateNestedManyWithoutVentaInput;
};
export type VentaUncheckedCreateWithoutCajaInput = {
    id?: number;
    usuarioId: number;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutVentaInput;
};
export type VentaCreateOrConnectWithoutCajaInput = {
    where: Prisma.VentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput>;
};
export type VentaCreateManyCajaInputEnvelope = {
    data: Prisma.VentaCreateManyCajaInput | Prisma.VentaCreateManyCajaInput[];
    skipDuplicates?: boolean;
};
export type VentaUpsertWithWhereUniqueWithoutCajaInput = {
    where: Prisma.VentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.VentaUpdateWithoutCajaInput, Prisma.VentaUncheckedUpdateWithoutCajaInput>;
    create: Prisma.XOR<Prisma.VentaCreateWithoutCajaInput, Prisma.VentaUncheckedCreateWithoutCajaInput>;
};
export type VentaUpdateWithWhereUniqueWithoutCajaInput = {
    where: Prisma.VentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.VentaUpdateWithoutCajaInput, Prisma.VentaUncheckedUpdateWithoutCajaInput>;
};
export type VentaUpdateManyWithWhereWithoutCajaInput = {
    where: Prisma.VentaScalarWhereInput;
    data: Prisma.XOR<Prisma.VentaUpdateManyMutationInput, Prisma.VentaUncheckedUpdateManyWithoutCajaInput>;
};
export type VentaCreateWithoutDetallesInput = {
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    caja?: Prisma.CajaCreateNestedOneWithoutVentasInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutVentasInput;
    cliente?: Prisma.ClienteCreateNestedOneWithoutVentasInput;
};
export type VentaUncheckedCreateWithoutDetallesInput = {
    id?: number;
    cajaId?: number | null;
    usuarioId: number;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type VentaCreateOrConnectWithoutDetallesInput = {
    where: Prisma.VentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VentaCreateWithoutDetallesInput, Prisma.VentaUncheckedCreateWithoutDetallesInput>;
};
export type VentaUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.VentaUpdateWithoutDetallesInput, Prisma.VentaUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.VentaCreateWithoutDetallesInput, Prisma.VentaUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.VentaWhereInput;
};
export type VentaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.VentaWhereInput;
    data: Prisma.XOR<Prisma.VentaUpdateWithoutDetallesInput, Prisma.VentaUncheckedUpdateWithoutDetallesInput>;
};
export type VentaUpdateWithoutDetallesInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    caja?: Prisma.CajaUpdateOneWithoutVentasNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutVentasNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutVentasNestedInput;
};
export type VentaUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaCreateManyUsuarioInput = {
    id?: number;
    cajaId?: number | null;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type VentaUpdateWithoutUsuarioInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    caja?: Prisma.CajaUpdateOneWithoutVentasNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutVentasNestedInput;
    detalles?: Prisma.DetalleVentaUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaCreateManyClienteInput = {
    id?: number;
    cajaId?: number | null;
    usuarioId: number;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type VentaUpdateWithoutClienteInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    caja?: Prisma.CajaUpdateOneWithoutVentasNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutVentasNestedInput;
    detalles?: Prisma.DetalleVentaUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaCreateManyCajaInput = {
    id?: number;
    usuarioId: number;
    clienteId?: number | null;
    fecha?: Date | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    estado?: $Enums.EstadoVenta;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type VentaUpdateWithoutCajaInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutVentasNestedInput;
    cliente?: Prisma.ClienteUpdateOneWithoutVentasNestedInput;
    detalles?: Prisma.DetalleVentaUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateWithoutCajaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput;
};
export type VentaUncheckedUpdateManyWithoutCajaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoVentaFieldUpdateOperationsInput | $Enums.EstadoVenta;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VentaCountOutputType = {
    detalles: number;
};
export type VentaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | VentaCountOutputTypeCountDetallesArgs;
};
export type VentaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaCountOutputTypeSelect<ExtArgs> | null;
};
export type VentaCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleVentaWhereInput;
};
export type VentaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    usuarioId?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    subtotal?: boolean;
    descuento?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
    detalles?: boolean | Prisma.Venta$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.VentaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["venta"]>;
export type VentaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    usuarioId?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    subtotal?: boolean;
    descuento?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["venta"]>;
export type VentaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    usuarioId?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    subtotal?: boolean;
    descuento?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["venta"]>;
export type VentaSelectScalar = {
    id?: boolean;
    cajaId?: boolean;
    usuarioId?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    subtotal?: boolean;
    descuento?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type VentaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cajaId" | "usuarioId" | "clienteId" | "fecha" | "subtotal" | "descuento" | "total" | "metodoPago" | "estado" | "observaciones" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["venta"]>;
export type VentaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
    detalles?: boolean | Prisma.Venta$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.VentaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VentaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
};
export type VentaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.Venta$cajaArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    cliente?: boolean | Prisma.Venta$clienteArgs<ExtArgs>;
};
export type $VentaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Venta";
    objects: {
        caja: Prisma.$CajaPayload<ExtArgs> | null;
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        cliente: Prisma.$ClientePayload<ExtArgs> | null;
        detalles: Prisma.$DetalleVentaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cajaId: number | null;
        usuarioId: number;
        clienteId: number | null;
        fecha: Date;
        subtotal: runtime.Decimal;
        descuento: runtime.Decimal;
        total: runtime.Decimal;
        metodoPago: $Enums.MetodoPago;
        estado: $Enums.EstadoVenta;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["venta"]>;
    composites: {};
};
export type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VentaPayload, S>;
export type VentaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VentaCountAggregateInputType | true;
};
export interface VentaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Venta'];
        meta: {
            name: 'Venta';
        };
    };
    findUnique<T extends VentaFindUniqueArgs>(args: Prisma.SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VentaFindFirstArgs>(args?: Prisma.SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VentaFindManyArgs>(args?: Prisma.SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VentaCreateArgs>(args: Prisma.SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VentaCreateManyArgs>(args?: Prisma.SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VentaDeleteArgs>(args: Prisma.SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VentaUpdateArgs>(args: Prisma.SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VentaDeleteManyArgs>(args?: Prisma.SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VentaUpdateManyArgs>(args: Prisma.SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VentaUpsertArgs>(args: Prisma.SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VentaCountArgs>(args?: Prisma.Subset<T, VentaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VentaCountAggregateOutputType> : number>;
    aggregate<T extends VentaAggregateArgs>(args: Prisma.Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>;
    groupBy<T extends VentaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VentaGroupByArgs['orderBy'];
    } : {
        orderBy?: VentaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VentaFieldRefs;
}
export interface Prisma__VentaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    caja<T extends Prisma.Venta$cajaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venta$cajaArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.Venta$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venta$clienteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.Venta$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venta$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VentaFieldRefs {
    readonly id: Prisma.FieldRef<"Venta", 'Int'>;
    readonly cajaId: Prisma.FieldRef<"Venta", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"Venta", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Venta", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Venta", 'DateTime'>;
    readonly subtotal: Prisma.FieldRef<"Venta", 'Decimal'>;
    readonly descuento: Prisma.FieldRef<"Venta", 'Decimal'>;
    readonly total: Prisma.FieldRef<"Venta", 'Decimal'>;
    readonly metodoPago: Prisma.FieldRef<"Venta", 'MetodoPago'>;
    readonly estado: Prisma.FieldRef<"Venta", 'EstadoVenta'>;
    readonly observaciones: Prisma.FieldRef<"Venta", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"Venta", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Venta", 'DateTime'>;
}
export type VentaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where: Prisma.VentaWhereUniqueInput;
};
export type VentaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where: Prisma.VentaWhereUniqueInput;
};
export type VentaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithRelationInput | Prisma.VentaOrderByWithRelationInput[];
    cursor?: Prisma.VentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VentaScalarFieldEnum | Prisma.VentaScalarFieldEnum[];
};
export type VentaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithRelationInput | Prisma.VentaOrderByWithRelationInput[];
    cursor?: Prisma.VentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VentaScalarFieldEnum | Prisma.VentaScalarFieldEnum[];
};
export type VentaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithRelationInput | Prisma.VentaOrderByWithRelationInput[];
    cursor?: Prisma.VentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VentaScalarFieldEnum | Prisma.VentaScalarFieldEnum[];
};
export type VentaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VentaCreateInput, Prisma.VentaUncheckedCreateInput>;
};
export type VentaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VentaCreateManyInput | Prisma.VentaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VentaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    data: Prisma.VentaCreateManyInput | Prisma.VentaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VentaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VentaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VentaUpdateInput, Prisma.VentaUncheckedUpdateInput>;
    where: Prisma.VentaWhereUniqueInput;
};
export type VentaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VentaUpdateManyMutationInput, Prisma.VentaUncheckedUpdateManyInput>;
    where?: Prisma.VentaWhereInput;
    limit?: number;
};
export type VentaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VentaUpdateManyMutationInput, Prisma.VentaUncheckedUpdateManyInput>;
    where?: Prisma.VentaWhereInput;
    limit?: number;
    include?: Prisma.VentaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VentaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where: Prisma.VentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VentaCreateInput, Prisma.VentaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VentaUpdateInput, Prisma.VentaUncheckedUpdateInput>;
};
export type VentaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where: Prisma.VentaWhereUniqueInput;
};
export type VentaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
    limit?: number;
};
export type Venta$cajaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
};
export type Venta$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
};
export type Venta$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where?: Prisma.DetalleVentaWhereInput;
    orderBy?: Prisma.DetalleVentaOrderByWithRelationInput | Prisma.DetalleVentaOrderByWithRelationInput[];
    cursor?: Prisma.DetalleVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleVentaScalarFieldEnum | Prisma.DetalleVentaScalarFieldEnum[];
};
export type VentaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VentaSelect<ExtArgs> | null;
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    include?: Prisma.VentaInclude<ExtArgs> | null;
};
