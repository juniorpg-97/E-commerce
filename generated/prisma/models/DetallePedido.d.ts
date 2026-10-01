import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DetallePedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$DetallePedidoPayload>;
export type AggregateDetallePedido = {
    _count: DetallePedidoCountAggregateOutputType | null;
    _avg: DetallePedidoAvgAggregateOutputType | null;
    _sum: DetallePedidoSumAggregateOutputType | null;
    _min: DetallePedidoMinAggregateOutputType | null;
    _max: DetallePedidoMaxAggregateOutputType | null;
};
export type DetallePedidoAvgAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePedidoSumAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePedidoMinAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetallePedidoMaxAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    descuento: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetallePedidoCountAggregateOutputType = {
    id: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: number;
    descuento: number;
    subtotal: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type DetallePedidoAvgAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
};
export type DetallePedidoSumAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
};
export type DetallePedidoMinAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetallePedidoMaxAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetallePedidoCountAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    descuento?: true;
    subtotal?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type DetallePedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetallePedidoCountAggregateInputType;
    _avg?: DetallePedidoAvgAggregateInputType;
    _sum?: DetallePedidoSumAggregateInputType;
    _min?: DetallePedidoMinAggregateInputType;
    _max?: DetallePedidoMaxAggregateInputType;
};
export type GetDetallePedidoAggregateType<T extends DetallePedidoAggregateArgs> = {
    [P in keyof T & keyof AggregateDetallePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetallePedido[P]> : Prisma.GetScalarType<T[P], AggregateDetallePedido[P]>;
};
export type DetallePedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithAggregationInput | Prisma.DetallePedidoOrderByWithAggregationInput[];
    by: Prisma.DetallePedidoScalarFieldEnum[] | Prisma.DetallePedidoScalarFieldEnum;
    having?: Prisma.DetallePedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetallePedidoCountAggregateInputType | true;
    _avg?: DetallePedidoAvgAggregateInputType;
    _sum?: DetallePedidoSumAggregateInputType;
    _min?: DetallePedidoMinAggregateInputType;
    _max?: DetallePedidoMaxAggregateInputType;
};
export type DetallePedidoGroupByOutputType = {
    id: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal;
    descuento: runtime.Decimal;
    subtotal: runtime.Decimal;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: DetallePedidoCountAggregateOutputType | null;
    _avg: DetallePedidoAvgAggregateOutputType | null;
    _sum: DetallePedidoSumAggregateOutputType | null;
    _min: DetallePedidoMinAggregateOutputType | null;
    _max: DetallePedidoMaxAggregateOutputType | null;
};
export type GetDetallePedidoGroupByPayload<T extends DetallePedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetallePedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetallePedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetallePedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetallePedidoGroupByOutputType[P]>;
}>>;
export type DetallePedidoWhereInput = {
    AND?: Prisma.DetallePedidoWhereInput | Prisma.DetallePedidoWhereInput[];
    OR?: Prisma.DetallePedidoWhereInput[];
    NOT?: Prisma.DetallePedidoWhereInput | Prisma.DetallePedidoWhereInput[];
    id?: Prisma.IntFilter<"DetallePedido"> | number;
    pedidoId?: Prisma.IntFilter<"DetallePedido"> | number;
    productoId?: Prisma.IntFilter<"DetallePedido"> | number;
    cantidad?: Prisma.IntFilter<"DetallePedido"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.PedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
};
export type DetallePedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    pedido?: Prisma.PedidoOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
};
export type DetallePedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DetallePedidoWhereInput | Prisma.DetallePedidoWhereInput[];
    OR?: Prisma.DetallePedidoWhereInput[];
    NOT?: Prisma.DetallePedidoWhereInput | Prisma.DetallePedidoWhereInput[];
    pedidoId?: Prisma.IntFilter<"DetallePedido"> | number;
    productoId?: Prisma.IntFilter<"DetallePedido"> | number;
    cantidad?: Prisma.IntFilter<"DetallePedido"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.PedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
}, "id">;
export type DetallePedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.DetallePedidoCountOrderByAggregateInput;
    _avg?: Prisma.DetallePedidoAvgOrderByAggregateInput;
    _max?: Prisma.DetallePedidoMaxOrderByAggregateInput;
    _min?: Prisma.DetallePedidoMinOrderByAggregateInput;
    _sum?: Prisma.DetallePedidoSumOrderByAggregateInput;
};
export type DetallePedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetallePedidoScalarWhereWithAggregatesInput | Prisma.DetallePedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetallePedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetallePedidoScalarWhereWithAggregatesInput | Prisma.DetallePedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetallePedido"> | number;
    pedidoId?: Prisma.IntWithAggregatesFilter<"DetallePedido"> | number;
    productoId?: Prisma.IntWithAggregatesFilter<"DetallePedido"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"DetallePedido"> | number;
    precioUnitario?: Prisma.DecimalWithAggregatesFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalWithAggregatesFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetallePedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetallePedido"> | Date | string;
};
export type DetallePedidoCreateInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pedido: Prisma.PedidoCreateNestedOneWithoutDetallesInput;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesPedidoInput;
};
export type DetallePedidoUncheckedCreateInput = {
    id?: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedido?: Prisma.PedidoUpdateOneRequiredWithoutDetallesNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput;
};
export type DetallePedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoCreateManyInput = {
    id?: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoListRelationFilter = {
    every?: Prisma.DetallePedidoWhereInput;
    some?: Prisma.DetallePedidoWhereInput;
    none?: Prisma.DetallePedidoWhereInput;
};
export type DetallePedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetallePedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetallePedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetallePedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetallePedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    descuento?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePedidoCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput> | Prisma.DetallePedidoCreateWithoutProductoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutProductoInput | Prisma.DetallePedidoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetallePedidoCreateManyProductoInputEnvelope;
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
};
export type DetallePedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput> | Prisma.DetallePedidoCreateWithoutProductoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutProductoInput | Prisma.DetallePedidoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetallePedidoCreateManyProductoInputEnvelope;
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
};
export type DetallePedidoUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput> | Prisma.DetallePedidoCreateWithoutProductoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutProductoInput | Prisma.DetallePedidoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetallePedidoUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetallePedidoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetallePedidoCreateManyProductoInputEnvelope;
    set?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    disconnect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    delete?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    update?: Prisma.DetallePedidoUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetallePedidoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetallePedidoUpdateManyWithWhereWithoutProductoInput | Prisma.DetallePedidoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
};
export type DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput> | Prisma.DetallePedidoCreateWithoutProductoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutProductoInput | Prisma.DetallePedidoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetallePedidoUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetallePedidoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetallePedidoCreateManyProductoInputEnvelope;
    set?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    disconnect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    delete?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    update?: Prisma.DetallePedidoUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetallePedidoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetallePedidoUpdateManyWithWhereWithoutProductoInput | Prisma.DetallePedidoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
};
export type DetallePedidoCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput> | Prisma.DetallePedidoCreateWithoutPedidoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput | Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.DetallePedidoCreateManyPedidoInputEnvelope;
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
};
export type DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput> | Prisma.DetallePedidoCreateWithoutPedidoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput | Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.DetallePedidoCreateManyPedidoInputEnvelope;
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
};
export type DetallePedidoUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput> | Prisma.DetallePedidoCreateWithoutPedidoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput | Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput | Prisma.DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.DetallePedidoCreateManyPedidoInputEnvelope;
    set?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    disconnect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    delete?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    update?: Prisma.DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput | Prisma.DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.DetallePedidoUpdateManyWithWhereWithoutPedidoInput | Prisma.DetallePedidoUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
};
export type DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput> | Prisma.DetallePedidoCreateWithoutPedidoInput[] | Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput | Prisma.DetallePedidoCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput | Prisma.DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.DetallePedidoCreateManyPedidoInputEnvelope;
    set?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    disconnect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    delete?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    connect?: Prisma.DetallePedidoWhereUniqueInput | Prisma.DetallePedidoWhereUniqueInput[];
    update?: Prisma.DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput | Prisma.DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.DetallePedidoUpdateManyWithWhereWithoutPedidoInput | Prisma.DetallePedidoUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
};
export type DetallePedidoCreateWithoutProductoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pedido: Prisma.PedidoCreateNestedOneWithoutDetallesInput;
};
export type DetallePedidoUncheckedCreateWithoutProductoInput = {
    id?: number;
    pedidoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoCreateOrConnectWithoutProductoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput>;
};
export type DetallePedidoCreateManyProductoInputEnvelope = {
    data: Prisma.DetallePedidoCreateManyProductoInput | Prisma.DetallePedidoCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type DetallePedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetallePedidoUpdateWithoutProductoInput, Prisma.DetallePedidoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.DetallePedidoCreateWithoutProductoInput, Prisma.DetallePedidoUncheckedCreateWithoutProductoInput>;
};
export type DetallePedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateWithoutProductoInput, Prisma.DetallePedidoUncheckedUpdateWithoutProductoInput>;
};
export type DetallePedidoUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.DetallePedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateManyMutationInput, Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoInput>;
};
export type DetallePedidoScalarWhereInput = {
    AND?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
    OR?: Prisma.DetallePedidoScalarWhereInput[];
    NOT?: Prisma.DetallePedidoScalarWhereInput | Prisma.DetallePedidoScalarWhereInput[];
    id?: Prisma.IntFilter<"DetallePedido"> | number;
    pedidoId?: Prisma.IntFilter<"DetallePedido"> | number;
    productoId?: Prisma.IntFilter<"DetallePedido"> | number;
    cantidad?: Prisma.IntFilter<"DetallePedido"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetallePedido"> | Date | string;
};
export type DetallePedidoCreateWithoutPedidoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesPedidoInput;
};
export type DetallePedidoUncheckedCreateWithoutPedidoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoCreateOrConnectWithoutPedidoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput>;
};
export type DetallePedidoCreateManyPedidoInputEnvelope = {
    data: Prisma.DetallePedidoCreateManyPedidoInput | Prisma.DetallePedidoCreateManyPedidoInput[];
    skipDuplicates?: boolean;
};
export type DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetallePedidoUpdateWithoutPedidoInput, Prisma.DetallePedidoUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.DetallePedidoCreateWithoutPedidoInput, Prisma.DetallePedidoUncheckedCreateWithoutPedidoInput>;
};
export type DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.DetallePedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateWithoutPedidoInput, Prisma.DetallePedidoUncheckedUpdateWithoutPedidoInput>;
};
export type DetallePedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: Prisma.DetallePedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateManyMutationInput, Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoInput>;
};
export type DetallePedidoCreateManyProductoInput = {
    id?: number;
    pedidoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoUpdateWithoutProductoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedido?: Prisma.PedidoUpdateOneRequiredWithoutDetallesNestedInput;
};
export type DetallePedidoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoCreateManyPedidoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetallePedidoUpdateWithoutPedidoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput;
};
export type DetallePedidoUncheckedUpdateWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descuento?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetallePedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePedido"]>;
export type DetallePedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePedido"]>;
export type DetallePedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePedido"]>;
export type DetallePedidoSelectScalar = {
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    descuento?: boolean;
    subtotal?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type DetallePedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pedidoId" | "productoId" | "cantidad" | "precioUnitario" | "descuento" | "subtotal" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["detallePedido"]>;
export type DetallePedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type DetallePedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type DetallePedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $DetallePedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetallePedido";
    objects: {
        pedido: Prisma.$PedidoPayload<ExtArgs>;
        producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pedidoId: number;
        productoId: number;
        cantidad: number;
        precioUnitario: runtime.Decimal;
        descuento: runtime.Decimal;
        subtotal: runtime.Decimal;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["detallePedido"]>;
    composites: {};
};
export type DetallePedidoGetPayload<S extends boolean | null | undefined | DetallePedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload, S>;
export type DetallePedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetallePedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetallePedidoCountAggregateInputType | true;
};
export interface DetallePedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetallePedido'];
        meta: {
            name: 'DetallePedido';
        };
    };
    findUnique<T extends DetallePedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, DetallePedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetallePedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetallePedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetallePedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, DetallePedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetallePedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetallePedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetallePedidoFindManyArgs>(args?: Prisma.SelectSubset<T, DetallePedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetallePedidoCreateArgs>(args: Prisma.SelectSubset<T, DetallePedidoCreateArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetallePedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, DetallePedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetallePedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetallePedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetallePedidoDeleteArgs>(args: Prisma.SelectSubset<T, DetallePedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetallePedidoUpdateArgs>(args: Prisma.SelectSubset<T, DetallePedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetallePedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetallePedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetallePedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, DetallePedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetallePedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetallePedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetallePedidoUpsertArgs>(args: Prisma.SelectSubset<T, DetallePedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__DetallePedidoClient<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetallePedidoCountArgs>(args?: Prisma.Subset<T, DetallePedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetallePedidoCountAggregateOutputType> : number>;
    aggregate<T extends DetallePedidoAggregateArgs>(args: Prisma.Subset<T, DetallePedidoAggregateArgs>): Prisma.PrismaPromise<GetDetallePedidoAggregateType<T>>;
    groupBy<T extends DetallePedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetallePedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: DetallePedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetallePedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetallePedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetallePedidoFieldRefs;
}
export interface Prisma__DetallePedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.PedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetallePedidoFieldRefs {
    readonly id: Prisma.FieldRef<"DetallePedido", 'Int'>;
    readonly pedidoId: Prisma.FieldRef<"DetallePedido", 'Int'>;
    readonly productoId: Prisma.FieldRef<"DetallePedido", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"DetallePedido", 'Int'>;
    readonly precioUnitario: Prisma.FieldRef<"DetallePedido", 'Decimal'>;
    readonly descuento: Prisma.FieldRef<"DetallePedido", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"DetallePedido", 'Decimal'>;
    readonly creadoEn: Prisma.FieldRef<"DetallePedido", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"DetallePedido", 'DateTime'>;
}
export type DetallePedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where: Prisma.DetallePedidoWhereUniqueInput;
};
export type DetallePedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where: Prisma.DetallePedidoWhereUniqueInput;
};
export type DetallePedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePedidoScalarFieldEnum | Prisma.DetallePedidoScalarFieldEnum[];
};
export type DetallePedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePedidoScalarFieldEnum | Prisma.DetallePedidoScalarFieldEnum[];
};
export type DetallePedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where?: Prisma.DetallePedidoWhereInput;
    orderBy?: Prisma.DetallePedidoOrderByWithRelationInput | Prisma.DetallePedidoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePedidoScalarFieldEnum | Prisma.DetallePedidoScalarFieldEnum[];
};
export type DetallePedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePedidoCreateInput, Prisma.DetallePedidoUncheckedCreateInput>;
};
export type DetallePedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetallePedidoCreateManyInput | Prisma.DetallePedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetallePedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    data: Prisma.DetallePedidoCreateManyInput | Prisma.DetallePedidoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetallePedidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetallePedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateInput, Prisma.DetallePedidoUncheckedUpdateInput>;
    where: Prisma.DetallePedidoWhereUniqueInput;
};
export type DetallePedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetallePedidoUpdateManyMutationInput, Prisma.DetallePedidoUncheckedUpdateManyInput>;
    where?: Prisma.DetallePedidoWhereInput;
    limit?: number;
};
export type DetallePedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePedidoUpdateManyMutationInput, Prisma.DetallePedidoUncheckedUpdateManyInput>;
    where?: Prisma.DetallePedidoWhereInput;
    limit?: number;
    include?: Prisma.DetallePedidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetallePedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where: Prisma.DetallePedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePedidoCreateInput, Prisma.DetallePedidoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetallePedidoUpdateInput, Prisma.DetallePedidoUncheckedUpdateInput>;
};
export type DetallePedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
    where: Prisma.DetallePedidoWhereUniqueInput;
};
export type DetallePedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
    limit?: number;
};
export type DetallePedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePedidoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePedidoOmit<ExtArgs> | null;
    include?: Prisma.DetallePedidoInclude<ExtArgs> | null;
};
