import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DetalleCarritoModel = runtime.Types.Result.DefaultSelection<Prisma.$DetalleCarritoPayload>;
export type AggregateDetalleCarrito = {
    _count: DetalleCarritoCountAggregateOutputType | null;
    _avg: DetalleCarritoAvgAggregateOutputType | null;
    _sum: DetalleCarritoSumAggregateOutputType | null;
    _min: DetalleCarritoMinAggregateOutputType | null;
    _max: DetalleCarritoMaxAggregateOutputType | null;
};
export type DetalleCarritoAvgAggregateOutputType = {
    id: number | null;
    carritoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
};
export type DetalleCarritoSumAggregateOutputType = {
    id: number | null;
    carritoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
};
export type DetalleCarritoMinAggregateOutputType = {
    id: number | null;
    carritoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetalleCarritoMaxAggregateOutputType = {
    id: number | null;
    carritoId: number | null;
    productoId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DetalleCarritoCountAggregateOutputType = {
    id: number;
    carritoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type DetalleCarritoAvgAggregateInputType = {
    id?: true;
    carritoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
};
export type DetalleCarritoSumAggregateInputType = {
    id?: true;
    carritoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
};
export type DetalleCarritoMinAggregateInputType = {
    id?: true;
    carritoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetalleCarritoMaxAggregateInputType = {
    id?: true;
    carritoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DetalleCarritoCountAggregateInputType = {
    id?: true;
    carritoId?: true;
    productoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type DetalleCarritoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleCarritoWhereInput;
    orderBy?: Prisma.DetalleCarritoOrderByWithRelationInput | Prisma.DetalleCarritoOrderByWithRelationInput[];
    cursor?: Prisma.DetalleCarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetalleCarritoCountAggregateInputType;
    _avg?: DetalleCarritoAvgAggregateInputType;
    _sum?: DetalleCarritoSumAggregateInputType;
    _min?: DetalleCarritoMinAggregateInputType;
    _max?: DetalleCarritoMaxAggregateInputType;
};
export type GetDetalleCarritoAggregateType<T extends DetalleCarritoAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalleCarrito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalleCarrito[P]> : Prisma.GetScalarType<T[P], AggregateDetalleCarrito[P]>;
};
export type DetalleCarritoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleCarritoWhereInput;
    orderBy?: Prisma.DetalleCarritoOrderByWithAggregationInput | Prisma.DetalleCarritoOrderByWithAggregationInput[];
    by: Prisma.DetalleCarritoScalarFieldEnum[] | Prisma.DetalleCarritoScalarFieldEnum;
    having?: Prisma.DetalleCarritoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetalleCarritoCountAggregateInputType | true;
    _avg?: DetalleCarritoAvgAggregateInputType;
    _sum?: DetalleCarritoSumAggregateInputType;
    _min?: DetalleCarritoMinAggregateInputType;
    _max?: DetalleCarritoMaxAggregateInputType;
};
export type DetalleCarritoGroupByOutputType = {
    id: number;
    carritoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: DetalleCarritoCountAggregateOutputType | null;
    _avg: DetalleCarritoAvgAggregateOutputType | null;
    _sum: DetalleCarritoSumAggregateOutputType | null;
    _min: DetalleCarritoMinAggregateOutputType | null;
    _max: DetalleCarritoMaxAggregateOutputType | null;
};
export type GetDetalleCarritoGroupByPayload<T extends DetalleCarritoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetalleCarritoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetalleCarritoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetalleCarritoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetalleCarritoGroupByOutputType[P]>;
}>>;
export type DetalleCarritoWhereInput = {
    AND?: Prisma.DetalleCarritoWhereInput | Prisma.DetalleCarritoWhereInput[];
    OR?: Prisma.DetalleCarritoWhereInput[];
    NOT?: Prisma.DetalleCarritoWhereInput | Prisma.DetalleCarritoWhereInput[];
    id?: Prisma.IntFilter<"DetalleCarrito"> | number;
    carritoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    productoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    cantidad?: Prisma.IntFilter<"DetalleCarrito"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleCarrito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
    carrito?: Prisma.XOR<Prisma.CarritoScalarRelationFilter, Prisma.CarritoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
};
export type DetalleCarritoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    carrito?: Prisma.CarritoOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
};
export type DetalleCarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    carritoId_productoId?: Prisma.DetalleCarritoCarritoIdProductoIdCompoundUniqueInput;
    AND?: Prisma.DetalleCarritoWhereInput | Prisma.DetalleCarritoWhereInput[];
    OR?: Prisma.DetalleCarritoWhereInput[];
    NOT?: Prisma.DetalleCarritoWhereInput | Prisma.DetalleCarritoWhereInput[];
    carritoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    productoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    cantidad?: Prisma.IntFilter<"DetalleCarrito"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleCarrito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
    carrito?: Prisma.XOR<Prisma.CarritoScalarRelationFilter, Prisma.CarritoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
}, "id" | "carritoId_productoId">;
export type DetalleCarritoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.DetalleCarritoCountOrderByAggregateInput;
    _avg?: Prisma.DetalleCarritoAvgOrderByAggregateInput;
    _max?: Prisma.DetalleCarritoMaxOrderByAggregateInput;
    _min?: Prisma.DetalleCarritoMinOrderByAggregateInput;
    _sum?: Prisma.DetalleCarritoSumOrderByAggregateInput;
};
export type DetalleCarritoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetalleCarritoScalarWhereWithAggregatesInput | Prisma.DetalleCarritoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetalleCarritoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetalleCarritoScalarWhereWithAggregatesInput | Prisma.DetalleCarritoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetalleCarrito"> | number;
    carritoId?: Prisma.IntWithAggregatesFilter<"DetalleCarrito"> | number;
    productoId?: Prisma.IntWithAggregatesFilter<"DetalleCarrito"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"DetalleCarrito"> | number;
    precioUnitario?: Prisma.DecimalWithAggregatesFilter<"DetalleCarrito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetalleCarrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"DetalleCarrito"> | Date | string;
};
export type DetalleCarritoCreateInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    carrito: Prisma.CarritoCreateNestedOneWithoutDetallesInput;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesCarritoInput;
};
export type DetalleCarritoUncheckedCreateInput = {
    id?: number;
    carritoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carrito?: Prisma.CarritoUpdateOneRequiredWithoutDetallesNestedInput;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput;
};
export type DetalleCarritoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carritoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoCreateManyInput = {
    id?: number;
    carritoId: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carritoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoListRelationFilter = {
    every?: Prisma.DetalleCarritoWhereInput;
    some?: Prisma.DetalleCarritoWhereInput;
    none?: Prisma.DetalleCarritoWhereInput;
};
export type DetalleCarritoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetalleCarritoCarritoIdProductoIdCompoundUniqueInput = {
    carritoId: number;
    productoId: number;
};
export type DetalleCarritoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleCarritoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
};
export type DetalleCarritoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleCarritoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DetalleCarritoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carritoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
};
export type DetalleCarritoCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput> | Prisma.DetalleCarritoCreateWithoutProductoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput | Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyProductoInputEnvelope;
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
};
export type DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput> | Prisma.DetalleCarritoCreateWithoutProductoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput | Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyProductoInputEnvelope;
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
};
export type DetalleCarritoUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput> | Prisma.DetalleCarritoCreateWithoutProductoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput | Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyProductoInputEnvelope;
    set?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    disconnect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    delete?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    update?: Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetalleCarritoUpdateManyWithWhereWithoutProductoInput | Prisma.DetalleCarritoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
};
export type DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput> | Prisma.DetalleCarritoCreateWithoutProductoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput | Prisma.DetalleCarritoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput | Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyProductoInputEnvelope;
    set?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    disconnect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    delete?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    update?: Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput | Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.DetalleCarritoUpdateManyWithWhereWithoutProductoInput | Prisma.DetalleCarritoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
};
export type DetalleCarritoCreateNestedManyWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput> | Prisma.DetalleCarritoCreateWithoutCarritoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput | Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyCarritoInputEnvelope;
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
};
export type DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput> | Prisma.DetalleCarritoCreateWithoutCarritoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput | Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyCarritoInputEnvelope;
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
};
export type DetalleCarritoUpdateManyWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput> | Prisma.DetalleCarritoCreateWithoutCarritoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput | Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput[];
    upsert?: Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput | Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyCarritoInputEnvelope;
    set?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    disconnect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    delete?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    update?: Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput | Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput[];
    updateMany?: Prisma.DetalleCarritoUpdateManyWithWhereWithoutCarritoInput | Prisma.DetalleCarritoUpdateManyWithWhereWithoutCarritoInput[];
    deleteMany?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
};
export type DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput> | Prisma.DetalleCarritoCreateWithoutCarritoInput[] | Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput | Prisma.DetalleCarritoCreateOrConnectWithoutCarritoInput[];
    upsert?: Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput | Prisma.DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput[];
    createMany?: Prisma.DetalleCarritoCreateManyCarritoInputEnvelope;
    set?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    disconnect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    delete?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    connect?: Prisma.DetalleCarritoWhereUniqueInput | Prisma.DetalleCarritoWhereUniqueInput[];
    update?: Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput | Prisma.DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput[];
    updateMany?: Prisma.DetalleCarritoUpdateManyWithWhereWithoutCarritoInput | Prisma.DetalleCarritoUpdateManyWithWhereWithoutCarritoInput[];
    deleteMany?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
};
export type DetalleCarritoCreateWithoutProductoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    carrito: Prisma.CarritoCreateNestedOneWithoutDetallesInput;
};
export type DetalleCarritoUncheckedCreateWithoutProductoInput = {
    id?: number;
    carritoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoCreateOrConnectWithoutProductoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput>;
};
export type DetalleCarritoCreateManyProductoInputEnvelope = {
    data: Prisma.DetalleCarritoCreateManyProductoInput | Prisma.DetalleCarritoCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleCarritoUpdateWithoutProductoInput, Prisma.DetalleCarritoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutProductoInput, Prisma.DetalleCarritoUncheckedCreateWithoutProductoInput>;
};
export type DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateWithoutProductoInput, Prisma.DetalleCarritoUncheckedUpdateWithoutProductoInput>;
};
export type DetalleCarritoUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.DetalleCarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateManyMutationInput, Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoInput>;
};
export type DetalleCarritoScalarWhereInput = {
    AND?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
    OR?: Prisma.DetalleCarritoScalarWhereInput[];
    NOT?: Prisma.DetalleCarritoScalarWhereInput | Prisma.DetalleCarritoScalarWhereInput[];
    id?: Prisma.IntFilter<"DetalleCarrito"> | number;
    carritoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    productoId?: Prisma.IntFilter<"DetalleCarrito"> | number;
    cantidad?: Prisma.IntFilter<"DetalleCarrito"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetalleCarrito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"DetalleCarrito"> | Date | string;
};
export type DetalleCarritoCreateWithoutCarritoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutDetallesCarritoInput;
};
export type DetalleCarritoUncheckedCreateWithoutCarritoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoCreateOrConnectWithoutCarritoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput>;
};
export type DetalleCarritoCreateManyCarritoInputEnvelope = {
    data: Prisma.DetalleCarritoCreateManyCarritoInput | Prisma.DetalleCarritoCreateManyCarritoInput[];
    skipDuplicates?: boolean;
};
export type DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleCarritoUpdateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedUpdateWithoutCarritoInput>;
    create: Prisma.XOR<Prisma.DetalleCarritoCreateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedCreateWithoutCarritoInput>;
};
export type DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput = {
    where: Prisma.DetalleCarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateWithoutCarritoInput, Prisma.DetalleCarritoUncheckedUpdateWithoutCarritoInput>;
};
export type DetalleCarritoUpdateManyWithWhereWithoutCarritoInput = {
    where: Prisma.DetalleCarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateManyMutationInput, Prisma.DetalleCarritoUncheckedUpdateManyWithoutCarritoInput>;
};
export type DetalleCarritoCreateManyProductoInput = {
    id?: number;
    carritoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoUpdateWithoutProductoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carrito?: Prisma.CarritoUpdateOneRequiredWithoutDetallesNestedInput;
};
export type DetalleCarritoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carritoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carritoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoCreateManyCarritoInput = {
    id?: number;
    productoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DetalleCarritoUpdateWithoutCarritoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput;
};
export type DetalleCarritoUncheckedUpdateWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoUncheckedUpdateManyWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DetalleCarritoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carritoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleCarrito"]>;
export type DetalleCarritoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carritoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleCarrito"]>;
export type DetalleCarritoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carritoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleCarrito"]>;
export type DetalleCarritoSelectScalar = {
    id?: boolean;
    carritoId?: boolean;
    productoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type DetalleCarritoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "carritoId" | "productoId" | "cantidad" | "precioUnitario" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["detalleCarrito"]>;
export type DetalleCarritoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type DetalleCarritoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type DetalleCarritoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.CarritoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $DetalleCarritoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetalleCarrito";
    objects: {
        carrito: Prisma.$CarritoPayload<ExtArgs>;
        producto: Prisma.$ProductoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        carritoId: number;
        productoId: number;
        cantidad: number;
        precioUnitario: runtime.Decimal;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["detalleCarrito"]>;
    composites: {};
};
export type DetalleCarritoGetPayload<S extends boolean | null | undefined | DetalleCarritoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload, S>;
export type DetalleCarritoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetalleCarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetalleCarritoCountAggregateInputType | true;
};
export interface DetalleCarritoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetalleCarrito'];
        meta: {
            name: 'DetalleCarrito';
        };
    };
    findUnique<T extends DetalleCarritoFindUniqueArgs>(args: Prisma.SelectSubset<T, DetalleCarritoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetalleCarritoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetalleCarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetalleCarritoFindFirstArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetalleCarritoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetalleCarritoFindManyArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetalleCarritoCreateArgs>(args: Prisma.SelectSubset<T, DetalleCarritoCreateArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetalleCarritoCreateManyArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetalleCarritoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetalleCarritoDeleteArgs>(args: Prisma.SelectSubset<T, DetalleCarritoDeleteArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetalleCarritoUpdateArgs>(args: Prisma.SelectSubset<T, DetalleCarritoUpdateArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetalleCarritoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetalleCarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetalleCarritoUpdateManyArgs>(args: Prisma.SelectSubset<T, DetalleCarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetalleCarritoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetalleCarritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetalleCarritoUpsertArgs>(args: Prisma.SelectSubset<T, DetalleCarritoUpsertArgs<ExtArgs>>): Prisma.Prisma__DetalleCarritoClient<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetalleCarritoCountArgs>(args?: Prisma.Subset<T, DetalleCarritoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetalleCarritoCountAggregateOutputType> : number>;
    aggregate<T extends DetalleCarritoAggregateArgs>(args: Prisma.Subset<T, DetalleCarritoAggregateArgs>): Prisma.PrismaPromise<GetDetalleCarritoAggregateType<T>>;
    groupBy<T extends DetalleCarritoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetalleCarritoGroupByArgs['orderBy'];
    } : {
        orderBy?: DetalleCarritoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetalleCarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetalleCarritoFieldRefs;
}
export interface Prisma__DetalleCarritoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carrito<T extends Prisma.CarritoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CarritoDefaultArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetalleCarritoFieldRefs {
    readonly id: Prisma.FieldRef<"DetalleCarrito", 'Int'>;
    readonly carritoId: Prisma.FieldRef<"DetalleCarrito", 'Int'>;
    readonly productoId: Prisma.FieldRef<"DetalleCarrito", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"DetalleCarrito", 'Int'>;
    readonly precioUnitario: Prisma.FieldRef<"DetalleCarrito", 'Decimal'>;
    readonly creadoEn: Prisma.FieldRef<"DetalleCarrito", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"DetalleCarrito", 'DateTime'>;
}
export type DetalleCarritoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where: Prisma.DetalleCarritoWhereUniqueInput;
};
export type DetalleCarritoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where: Prisma.DetalleCarritoWhereUniqueInput;
};
export type DetalleCarritoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where?: Prisma.DetalleCarritoWhereInput;
    orderBy?: Prisma.DetalleCarritoOrderByWithRelationInput | Prisma.DetalleCarritoOrderByWithRelationInput[];
    cursor?: Prisma.DetalleCarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleCarritoScalarFieldEnum | Prisma.DetalleCarritoScalarFieldEnum[];
};
export type DetalleCarritoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where?: Prisma.DetalleCarritoWhereInput;
    orderBy?: Prisma.DetalleCarritoOrderByWithRelationInput | Prisma.DetalleCarritoOrderByWithRelationInput[];
    cursor?: Prisma.DetalleCarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleCarritoScalarFieldEnum | Prisma.DetalleCarritoScalarFieldEnum[];
};
export type DetalleCarritoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where?: Prisma.DetalleCarritoWhereInput;
    orderBy?: Prisma.DetalleCarritoOrderByWithRelationInput | Prisma.DetalleCarritoOrderByWithRelationInput[];
    cursor?: Prisma.DetalleCarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleCarritoScalarFieldEnum | Prisma.DetalleCarritoScalarFieldEnum[];
};
export type DetalleCarritoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleCarritoCreateInput, Prisma.DetalleCarritoUncheckedCreateInput>;
};
export type DetalleCarritoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetalleCarritoCreateManyInput | Prisma.DetalleCarritoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetalleCarritoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    data: Prisma.DetalleCarritoCreateManyInput | Prisma.DetalleCarritoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetalleCarritoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetalleCarritoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateInput, Prisma.DetalleCarritoUncheckedUpdateInput>;
    where: Prisma.DetalleCarritoWhereUniqueInput;
};
export type DetalleCarritoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateManyMutationInput, Prisma.DetalleCarritoUncheckedUpdateManyInput>;
    where?: Prisma.DetalleCarritoWhereInput;
    limit?: number;
};
export type DetalleCarritoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleCarritoUpdateManyMutationInput, Prisma.DetalleCarritoUncheckedUpdateManyInput>;
    where?: Prisma.DetalleCarritoWhereInput;
    limit?: number;
    include?: Prisma.DetalleCarritoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetalleCarritoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where: Prisma.DetalleCarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleCarritoCreateInput, Prisma.DetalleCarritoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetalleCarritoUpdateInput, Prisma.DetalleCarritoUncheckedUpdateInput>;
};
export type DetalleCarritoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
    where: Prisma.DetalleCarritoWhereUniqueInput;
};
export type DetalleCarritoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleCarritoWhereInput;
    limit?: number;
};
export type DetalleCarritoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleCarritoSelect<ExtArgs> | null;
    omit?: Prisma.DetalleCarritoOmit<ExtArgs> | null;
    include?: Prisma.DetalleCarritoInclude<ExtArgs> | null;
};
