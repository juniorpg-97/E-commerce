import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DetalleVentaModel = runtime.Types.Result.DefaultSelection<Prisma.$DetalleVentaPayload>;
export type AggregateDetalleVenta = {
    _count: DetalleVentaCountAggregateOutputType | null;
    _avg: DetalleVentaAvgAggregateOutputType | null;
    _sum: DetalleVentaSumAggregateOutputType | null;
    _min: DetalleVentaMinAggregateOutputType | null;
    _max: DetalleVentaMaxAggregateOutputType | null;
};
export type DetalleVentaAvgAggregateOutputType = {
    id: number | null;
    ventaId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleVentaSumAggregateOutputType = {
    id: number | null;
    ventaId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleVentaMinAggregateOutputType = {
    id: number | null;
    ventaId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetalleVentaMaxAggregateOutputType = {
    id: number | null;
    ventaId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetalleVentaCountAggregateOutputType = {
    id: number;
    ventaId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: number;
    descuento: number;
    subtotal: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type DetalleVentaAvgAggregateInputType = {
    id?: true;
    ventaId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
};
export type DetalleVentaSumAggregateInputType = {
    id?: true;
    ventaId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
};
export type DetalleVentaMinAggregateInputType = {
    id?: true;
    ventaId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetalleVentaMaxAggregateInputType = {
    id?: true;
    ventaId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetalleVentaCountAggregateInputType = {
    id?: true;
    ventaId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type DetalleVentaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleVentaWhereInput;
    orderBy?: Prisma.DetalleVentaOrderByWithRelationInput | Prisma.DetalleVentaOrderByWithRelationInput[];
    cursor?: Prisma.DetalleVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetalleVentaCountAggregateInputType;
    _avg?: DetalleVentaAvgAggregateInputType;
    _sum?: DetalleVentaSumAggregateInputType;
    _min?: DetalleVentaMinAggregateInputType;
    _max?: DetalleVentaMaxAggregateInputType;
};
export type GetDetalleVentaAggregateType<T extends DetalleVentaAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalleVenta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalleVenta[P]> : Prisma.GetScalarType<T[P], AggregateDetalleVenta[P]>;
};
export type DetalleVentaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleVentaWhereInput;
    orderBy?: Prisma.DetalleVentaOrderByWithAggregationInput | Prisma.DetalleVentaOrderByWithAggregationInput[];
    by: Prisma.DetalleVentaScalarFieldEnum[] | Prisma.DetalleVentaScalarFieldEnum;
    having?: Prisma.DetalleVentaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetalleVentaCountAggregateInputType | true;
    _avg?: DetalleVentaAvgAggregateInputType;
    _sum?: DetalleVentaSumAggregateInputType;
    _min?: DetalleVentaMinAggregateInputType;
    _max?: DetalleVentaMaxAggregateInputType;
};
export type DetalleVentaGroupByOutputType = {
    id: number;
    ventaId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal;
    descuento: runtime.Decimal;
    subtotal: runtime.Decimal;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: DetalleVentaCountAggregateOutputType | null;
    _avg: DetalleVentaAvgAggregateOutputType | null;
    _sum: DetalleVentaSumAggregateOutputType | null;
    _min: DetalleVentaMinAggregateOutputType | null;
    _max: DetalleVentaMaxAggregateOutputType | null;
};
export type GetDetalleVentaGroupByPayload<T extends DetalleVentaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetalleVentaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetalleVentaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetalleVentaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetalleVentaGroupByOutputType[P]>;
}>>;
export type DetalleVentaWhereInput = {
    AND?: Prisma.DetalleVentaWhereInput | Prisma.DetalleVentaWhereInput[];
    OR?: Prisma.DetalleVentaWhereInput[];
    NOT?: Prisma.DetalleVentaWhereInput | Prisma.DetalleVentaWhereInput[];
    id?: Prisma.IntFilter<"DetalleVenta"> | number;
    ventaId?: Prisma.IntFilter<"DetalleVenta"> | number;
    productoId?: Prisma.IntFilter<"DetalleVenta"> | number;
    cantidad?: Prisma.IntFilter<"DetalleVenta"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
    venta?: Prisma.XOR<Prisma.VentaScalarRelationFilter, Prisma.VentaWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
};
export type DetalleVentaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    venta?: Prisma.VentaOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    movimientos?: Prisma.MovimientoInventarioOrderByRelationAggregateInput;
};
export type DetalleVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DetalleVentaWhereInput | Prisma.DetalleVentaWhereInput[];
    OR?: Prisma.DetalleVentaWhereInput[];
    NOT?: Prisma.DetalleVentaWhereInput | Prisma.DetalleVentaWhereInput[];
    ventaId?: Prisma.IntFilter<"DetalleVenta"> | number;
    productoId?: Prisma.IntFilter<"DetalleVenta"> | number;
    cantidad?: Prisma.IntFilter<"DetalleVenta"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
    venta?: Prisma.XOR<Prisma.VentaScalarRelationFilter, Prisma.VentaWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
}, "id">;
export type DetalleVentaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.DetalleVentaCountOrderByAggregateInput;
    _avg?: Prisma.DetalleVentaAvgOrderByAggregateInput;
    _max?: Prisma.DetalleVentaMaxOrderByAggregateInput;
    _min?: Prisma.DetalleVentaMinOrderByAggregateInput;
    _sum?: Prisma.DetalleVentaSumOrderByAggregateInput;
};
export type DetalleVentaScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetalleVentaScalarWhereWithAggregatesInput | Prisma.DetalleVentaScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetalleVentaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetalleVentaScalarWhereWithAggregatesInput | Prisma.DetalleVentaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetalleVenta"> | number;
    ventaId?: Prisma.IntWithAggregatesFilter<"DetalleVenta"> | number;
    productoId?: Prisma.IntWithAggregatesFilter<"DetalleVenta"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"DetalleVenta"> | number;
    precioUnitario?: Prisma.DecimalWithAggregatesFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalWithAggregatesFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetalleVenta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetalleVenta"> | Date | string;
};
export type DetalleVentaCreateInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    venta: Prisma.VentaCreateNestedOneWithoutDetallesInput;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesVentaInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaUncheckedCreateInput = {
    id?: number;
    ventaId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venta?: Prisma.VentaUpdateOneRequiredWithoutDetallesNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesVentaNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ventaId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaCreateManyInput = {
    id?: number;
    ventaId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleVentaUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleVentaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ventaId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleVentaListRelationFilter = {
    every?: Prisma.DetalleVentaWhereInput;
    some?: Prisma.DetalleVentaWhereInput;
    none?: Prisma.DetalleVentaWhereInput;
};
export type DetalleVentaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetalleVentaNullableScalarRelationFilter = {
    is?: Prisma.DetalleVentaWhereInput | null;
    isNot?: Prisma.DetalleVentaWhereInput | null;
};
export type DetalleVentaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleVentaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleVentaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleVentaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleVentaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ventaId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleVentaCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput> | Prisma.DetalleVentaCreateWithoutProductoInput[] | Prisma.DetalleVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutProductoInput | Prisma.DetalleVentaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetalleVentaCreateManyProductoInputEnvelope;
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
};
export type DetalleVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput> | Prisma.DetalleVentaCreateWithoutProductoInput[] | Prisma.DetalleVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutProductoInput | Prisma.DetalleVentaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetalleVentaCreateManyProductoInputEnvelope;
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
};
export type DetalleVentaUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput> | Prisma.DetalleVentaCreateWithoutProductoInput[] | Prisma.DetalleVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutProductoInput | Prisma.DetalleVentaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetalleVentaCreateManyProductoInputEnvelope;
    set?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    disconnect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    delete?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    update?: Prisma.DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetalleVentaUpdateManyWithWhereWithoutProductoInput | Prisma.DetalleVentaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
};
export type DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput> | Prisma.DetalleVentaCreateWithoutProductoInput[] | Prisma.DetalleVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutProductoInput | Prisma.DetalleVentaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetalleVentaUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetalleVentaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetalleVentaCreateManyProductoInputEnvelope;
    set?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    disconnect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    delete?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    update?: Prisma.DetalleVentaUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetalleVentaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetalleVentaUpdateManyWithWhereWithoutProductoInput | Prisma.DetalleVentaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
};
export type DetalleVentaCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.DetalleVentaWhereUniqueInput;
};
export type DetalleVentaUpdateOneWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.DetalleVentaUpsertWithoutMovimientosInput;
    disconnect?: Prisma.DetalleVentaWhereInput | boolean;
    delete?: Prisma.DetalleVentaWhereInput | boolean;
    connect?: Prisma.DetalleVentaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DetalleVentaUpdateToOneWithWhereWithoutMovimientosInput, Prisma.DetalleVentaUpdateWithoutMovimientosInput>, Prisma.DetalleVentaUncheckedUpdateWithoutMovimientosInput>;
};
export type DetalleVentaCreateNestedManyWithoutVentaInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput> | Prisma.DetalleVentaCreateWithoutVentaInput[] | Prisma.DetalleVentaUncheckedCreateWithoutVentaInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutVentaInput | Prisma.DetalleVentaCreateOrConnectWithoutVentaInput[];
    createMany?: Prisma.DetalleVentaCreateManyVentaInputEnvelope;
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
};
export type DetalleVentaUncheckedCreateNestedManyWithoutVentaInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput> | Prisma.DetalleVentaCreateWithoutVentaInput[] | Prisma.DetalleVentaUncheckedCreateWithoutVentaInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutVentaInput | Prisma.DetalleVentaCreateOrConnectWithoutVentaInput[];
    createMany?: Prisma.DetalleVentaCreateManyVentaInputEnvelope;
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
};
export type DetalleVentaUpdateManyWithoutVentaNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput> | Prisma.DetalleVentaCreateWithoutVentaInput[] | Prisma.DetalleVentaUncheckedCreateWithoutVentaInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutVentaInput | Prisma.DetalleVentaCreateOrConnectWithoutVentaInput[];
    upsert?: Prisma.DetalleVentaUpsertWithWhereUniqueWithoutVentaInput | Prisma.DetalleVentaUpsertWithWhereUniqueWithoutVentaInput[];
    createMany?: Prisma.DetalleVentaCreateManyVentaInputEnvelope;
    set?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    disconnect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    delete?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    update?: Prisma.DetalleVentaUpdateWithWhereUniqueWithoutVentaInput | Prisma.DetalleVentaUpdateWithWhereUniqueWithoutVentaInput[];
    updateMany?: Prisma.DetalleVentaUpdateManyWithWhereWithoutVentaInput | Prisma.DetalleVentaUpdateManyWithWhereWithoutVentaInput[];
    deleteMany?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
};
export type DetalleVentaUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput> | Prisma.DetalleVentaCreateWithoutVentaInput[] | Prisma.DetalleVentaUncheckedCreateWithoutVentaInput[];
    connectOrCreate?: Prisma.DetalleVentaCreateOrConnectWithoutVentaInput | Prisma.DetalleVentaCreateOrConnectWithoutVentaInput[];
    upsert?: Prisma.DetalleVentaUpsertWithWhereUniqueWithoutVentaInput | Prisma.DetalleVentaUpsertWithWhereUniqueWithoutVentaInput[];
    createMany?: Prisma.DetalleVentaCreateManyVentaInputEnvelope;
    set?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    disconnect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    delete?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    connect?: Prisma.DetalleVentaWhereUniqueInput | Prisma.DetalleVentaWhereUniqueInput[];
    update?: Prisma.DetalleVentaUpdateWithWhereUniqueWithoutVentaInput | Prisma.DetalleVentaUpdateWithWhereUniqueWithoutVentaInput[];
    updateMany?: Prisma.DetalleVentaUpdateManyWithWhereWithoutVentaInput | Prisma.DetalleVentaUpdateManyWithWhereWithoutVentaInput[];
    deleteMany?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
};
export type DetalleVentaCreateWithoutProductoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    venta: Prisma.VentaCreateNestedOneWithoutDetallesInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaUncheckedCreateWithoutProductoInput = {
    id?: number;
    ventaId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaCreateOrConnectWithoutProductoInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput>;
};
export type DetalleVentaCreateManyProductoInputEnvelope = {
    data: Prisma.DetalleVentaCreateManyProductoInput | Prisma.DetalleVentaCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type DetalleVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutProductoInput, Prisma.DetalleVentaUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutProductoInput, Prisma.DetalleVentaUncheckedCreateWithoutProductoInput>;
};
export type DetalleVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutProductoInput, Prisma.DetalleVentaUncheckedUpdateWithoutProductoInput>;
};
export type DetalleVentaUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.DetalleVentaScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateManyMutationInput, Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoInput>;
};
export type DetalleVentaScalarWhereInput = {
    AND?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
    OR?: Prisma.DetalleVentaScalarWhereInput[];
    NOT?: Prisma.DetalleVentaScalarWhereInput | Prisma.DetalleVentaScalarWhereInput[];
    id?: Prisma.IntFilter<"DetalleVenta"> | number;
    ventaId?: Prisma.IntFilter<"DetalleVenta"> | number;
    productoId?: Prisma.IntFilter<"DetalleVenta"> | number;
    cantidad?: Prisma.IntFilter<"DetalleVenta"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleVenta"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleVenta"> | Date | string;
};
export type DetalleVentaCreateWithoutMovimientosInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    venta: Prisma.VentaCreateNestedOneWithoutDetallesInput;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesVentaInput;
};
export type DetalleVentaUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    ventaId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleVentaCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedCreateWithoutMovimientosInput>;
};
export type DetalleVentaUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.DetalleVentaWhereInput;
};
export type DetalleVentaUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.DetalleVentaWhereInput;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutMovimientosInput, Prisma.DetalleVentaUncheckedUpdateWithoutMovimientosInput>;
};
export type DetalleVentaUpdateWithoutMovimientosInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venta?: Prisma.VentaUpdateOneRequiredWithoutDetallesNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateWithoutMovimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ventaId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleVentaCreateWithoutVentaInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesVentaInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaUncheckedCreateWithoutVentaInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutDetalleVentaInput;
};
export type DetalleVentaCreateOrConnectWithoutVentaInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput>;
};
export type DetalleVentaCreateManyVentaInputEnvelope = {
    data: Prisma.DetalleVentaCreateManyVentaInput | Prisma.DetalleVentaCreateManyVentaInput[];
    skipDuplicates?: boolean;
};
export type DetalleVentaUpsertWithWhereUniqueWithoutVentaInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutVentaInput, Prisma.DetalleVentaUncheckedUpdateWithoutVentaInput>;
    create: Prisma.XOR<Prisma.DetalleVentaCreateWithoutVentaInput, Prisma.DetalleVentaUncheckedCreateWithoutVentaInput>;
};
export type DetalleVentaUpdateWithWhereUniqueWithoutVentaInput = {
    where: Prisma.DetalleVentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateWithoutVentaInput, Prisma.DetalleVentaUncheckedUpdateWithoutVentaInput>;
};
export type DetalleVentaUpdateManyWithWhereWithoutVentaInput = {
    where: Prisma.DetalleVentaScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateManyMutationInput, Prisma.DetalleVentaUncheckedUpdateManyWithoutVentaInput>;
};
export type DetalleVentaCreateManyProductoInput = {
    id?: number;
    ventaId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleVentaUpdateWithoutProductoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venta?: Prisma.VentaUpdateOneRequiredWithoutDetallesNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ventaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ventaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleVentaCreateManyVentaInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleVentaUpdateWithoutVentaInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesVentaNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateWithoutVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaNestedInput;
};
export type DetalleVentaUncheckedUpdateManyWithoutVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleVentaCountOutputType = {
    movimientos: number;
};
export type DetalleVentaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movimientos?: boolean | DetalleVentaCountOutputTypeCountMovimientosArgs;
};
export type DetalleVentaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaCountOutputTypeSelect<ExtArgs> | null;
};
export type DetalleVentaCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
};
export type DetalleVentaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ventaId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.DetalleVenta$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.DetalleVentaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleVenta"]>;
export type DetalleVentaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ventaId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleVenta"]>;
export type DetalleVentaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ventaId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleVenta"]>;
export type DetalleVentaSelectScalar = {
    id?: boolean;
    ventaId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type DetalleVentaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ventaId" | "productoId" | "cantidad" | "precioUnitario" | "descuento" | "subtotal" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["detalleVenta"]>;
export type DetalleVentaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.DetalleVenta$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.DetalleVentaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DetalleVentaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type DetalleVentaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venta?: boolean | Prisma.VentaDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $DetalleVentaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetalleVenta";
    objects: {
        venta: Prisma.$VentaPayload<ExtArgs>;
        producto: Prisma.$ProductoPayload<ExtArgs>;
        movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ventaId: number;
        productoId: number;
        cantidad: number;
        precioUnitario: runtime.Decimal;
        descuento: runtime.Decimal;
        subtotal: runtime.Decimal;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["detalleVenta"]>;
    composites: {};
};
export type DetalleVentaGetPayload<S extends boolean | null | undefined | DetalleVentaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload, S>;
export type DetalleVentaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetalleVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetalleVentaCountAggregateInputType | true;
};
export interface DetalleVentaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetalleVenta'];
        meta: {
            name: 'DetalleVenta';
        };
    };
    findUnique<T extends DetalleVentaFindUniqueArgs>(args: Prisma.SelectSubset<T, DetalleVentaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetalleVentaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetalleVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetalleVentaFindFirstArgs>(args?: Prisma.SelectSubset<T, DetalleVentaFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetalleVentaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetalleVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetalleVentaFindManyArgs>(args?: Prisma.SelectSubset<T, DetalleVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetalleVentaCreateArgs>(args: Prisma.SelectSubset<T, DetalleVentaCreateArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetalleVentaCreateManyArgs>(args?: Prisma.SelectSubset<T, DetalleVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetalleVentaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetalleVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetalleVentaDeleteArgs>(args: Prisma.SelectSubset<T, DetalleVentaDeleteArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetalleVentaUpdateArgs>(args: Prisma.SelectSubset<T, DetalleVentaUpdateArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetalleVentaDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetalleVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetalleVentaUpdateManyArgs>(args: Prisma.SelectSubset<T, DetalleVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetalleVentaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetalleVentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetalleVentaUpsertArgs>(args: Prisma.SelectSubset<T, DetalleVentaUpsertArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetalleVentaCountArgs>(args?: Prisma.Subset<T, DetalleVentaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetalleVentaCountAggregateOutputType> : number>;
    aggregate<T extends DetalleVentaAggregateArgs>(args: Prisma.Subset<T, DetalleVentaAggregateArgs>): Prisma.PrismaPromise<GetDetalleVentaAggregateType<T>>;
    groupBy<T extends DetalleVentaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetalleVentaGroupByArgs['orderBy'];
    } : {
        orderBy?: DetalleVentaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetalleVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetalleVentaFieldRefs;
}
export interface Prisma__DetalleVentaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    venta<T extends Prisma.VentaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VentaDefaultArgs<ExtArgs>>): Prisma.Prisma__VentaClient<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movimientos<T extends Prisma.DetalleVenta$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DetalleVenta$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetalleVentaFieldRefs {
    readonly id: Prisma.FieldRef<"DetalleVenta", 'Int'>;
    readonly ventaId: Prisma.FieldRef<"DetalleVenta", 'Int'>;
    readonly productoId: Prisma.FieldRef<"DetalleVenta", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"DetalleVenta", 'Int'>;
    readonly precioUnitario: Prisma.FieldRef<"DetalleVenta", 'Decimal'>;
    readonly descuento: Prisma.FieldRef<"DetalleVenta", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"DetalleVenta", 'Decimal'>;
    readonly creadoEn: Prisma.FieldRef<"DetalleVenta", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"DetalleVenta", 'DateTime'>;
}
export type DetalleVentaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where: Prisma.DetalleVentaWhereUniqueInput;
};
export type DetalleVentaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where: Prisma.DetalleVentaWhereUniqueInput;
};
export type DetalleVentaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetalleVentaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetalleVentaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetalleVentaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleVentaCreateInput, Prisma.DetalleVentaUncheckedCreateInput>;
};
export type DetalleVentaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetalleVentaCreateManyInput | Prisma.DetalleVentaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetalleVentaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    data: Prisma.DetalleVentaCreateManyInput | Prisma.DetalleVentaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetalleVentaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetalleVentaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateInput, Prisma.DetalleVentaUncheckedUpdateInput>;
    where: Prisma.DetalleVentaWhereUniqueInput;
};
export type DetalleVentaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetalleVentaUpdateManyMutationInput, Prisma.DetalleVentaUncheckedUpdateManyInput>;
    where?: Prisma.DetalleVentaWhereInput;
    limit?: number;
};
export type DetalleVentaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleVentaUpdateManyMutationInput, Prisma.DetalleVentaUncheckedUpdateManyInput>;
    where?: Prisma.DetalleVentaWhereInput;
    limit?: number;
    include?: Prisma.DetalleVentaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetalleVentaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where: Prisma.DetalleVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleVentaCreateInput, Prisma.DetalleVentaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetalleVentaUpdateInput, Prisma.DetalleVentaUncheckedUpdateInput>;
};
export type DetalleVentaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where: Prisma.DetalleVentaWhereUniqueInput;
};
export type DetalleVentaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleVentaWhereInput;
    limit?: number;
};
export type DetalleVenta$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where?: Prisma.MovimientoInventarioWhereInput;
    orderBy?: Prisma.MovimientoInventarioOrderByWithRelationInput | Prisma.MovimientoInventarioOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoInventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientoInventarioScalarFieldEnum | Prisma.MovimientoInventarioScalarFieldEnum[];
};
export type DetalleVentaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
};
