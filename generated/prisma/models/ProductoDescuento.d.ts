import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductoDescuentoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductoDescuentoPayload>;
export type AggregateProductoDescuento = {
    _count: ProductoDescuentoCountAggregateOutputType | null;
    _avg: ProductoDescuentoAvgAggregateOutputType | null;
    _sum: ProductoDescuentoSumAggregateOutputType | null;
    _min: ProductoDescuentoMinAggregateOutputType | null;
    _max: ProductoDescuentoMaxAggregateOutputType | null;
};
export type ProductoDescuentoAvgAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    descuentoId: number | null;
};
export type ProductoDescuentoSumAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    descuentoId: number | null;
};
export type ProductoDescuentoMinAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    descuentoId: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ProductoDescuentoMaxAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    descuentoId: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ProductoDescuentoCountAggregateOutputType = {
    id: number;
    productoId: number;
    descuentoId: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type ProductoDescuentoAvgAggregateInputType = {
    id?: true;
    productoId?: true;
    descuentoId?: true;
};
export type ProductoDescuentoSumAggregateInputType = {
    id?: true;
    productoId?: true;
    descuentoId?: true;
};
export type ProductoDescuentoMinAggregateInputType = {
    id?: true;
    productoId?: true;
    descuentoId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ProductoDescuentoMaxAggregateInputType = {
    id?: true;
    productoId?: true;
    descuentoId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ProductoDescuentoCountAggregateInputType = {
    id?: true;
    productoId?: true;
    descuentoId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type ProductoDescuentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoDescuentoWhereInput;
    orderBy?: Prisma.ProductoDescuentoOrderByWithRelationInput | Prisma.ProductoDescuentoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoDescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductoDescuentoCountAggregateInputType;
    _avg?: ProductoDescuentoAvgAggregateInputType;
    _sum?: ProductoDescuentoSumAggregateInputType;
    _min?: ProductoDescuentoMinAggregateInputType;
    _max?: ProductoDescuentoMaxAggregateInputType;
};
export type GetProductoDescuentoAggregateType<T extends ProductoDescuentoAggregateArgs> = {
    [P in keyof T & keyof AggregateProductoDescuento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductoDescuento[P]> : Prisma.GetScalarType<T[P], AggregateProductoDescuento[P]>;
};
export type ProductoDescuentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoDescuentoWhereInput;
    orderBy?: Prisma.ProductoDescuentoOrderByWithAggregationInput | Prisma.ProductoDescuentoOrderByWithAggregationInput[];
    by: Prisma.ProductoDescuentoScalarFieldEnum[] | Prisma.ProductoDescuentoScalarFieldEnum;
    having?: Prisma.ProductoDescuentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoDescuentoCountAggregateInputType | true;
    _avg?: ProductoDescuentoAvgAggregateInputType;
    _sum?: ProductoDescuentoSumAggregateInputType;
    _min?: ProductoDescuentoMinAggregateInputType;
    _max?: ProductoDescuentoMaxAggregateInputType;
};
export type ProductoDescuentoGroupByOutputType = {
    id: number;
    productoId: number;
    descuentoId: number;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: ProductoDescuentoCountAggregateOutputType | null;
    _avg: ProductoDescuentoAvgAggregateOutputType | null;
    _sum: ProductoDescuentoSumAggregateOutputType | null;
    _min: ProductoDescuentoMinAggregateOutputType | null;
    _max: ProductoDescuentoMaxAggregateOutputType | null;
};
export type GetProductoDescuentoGroupByPayload<T extends ProductoDescuentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoDescuentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoDescuentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoDescuentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoDescuentoGroupByOutputType[P]>;
}>>;
export type ProductoDescuentoWhereInput = {
    AND?: Prisma.ProductoDescuentoWhereInput | Prisma.ProductoDescuentoWhereInput[];
    OR?: Prisma.ProductoDescuentoWhereInput[];
    NOT?: Prisma.ProductoDescuentoWhereInput | Prisma.ProductoDescuentoWhereInput[];
    id?: Prisma.IntFilter<"ProductoDescuento"> | number;
    productoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    descuentoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    activo?: Prisma.BoolFilter<"ProductoDescuento"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    descuento?: Prisma.XOR<Prisma.DescuentoScalarRelationFilter, Prisma.DescuentoWhereInput>;
};
export type ProductoDescuentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    descuento?: Prisma.DescuentoOrderByWithRelationInput;
};
export type ProductoDescuentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    productoId_descuentoId?: Prisma.ProductoDescuentoProductoIdDescuentoIdCompoundUniqueInput;
    AND?: Prisma.ProductoDescuentoWhereInput | Prisma.ProductoDescuentoWhereInput[];
    OR?: Prisma.ProductoDescuentoWhereInput[];
    NOT?: Prisma.ProductoDescuentoWhereInput | Prisma.ProductoDescuentoWhereInput[];
    productoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    descuentoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    activo?: Prisma.BoolFilter<"ProductoDescuento"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    descuento?: Prisma.XOR<Prisma.DescuentoScalarRelationFilter, Prisma.DescuentoWhereInput>;
}, "id" | "productoId_descuentoId">;
export type ProductoDescuentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.ProductoDescuentoCountOrderByAggregateInput;
    _avg?: Prisma.ProductoDescuentoAvgOrderByAggregateInput;
    _max?: Prisma.ProductoDescuentoMaxOrderByAggregateInput;
    _min?: Prisma.ProductoDescuentoMinOrderByAggregateInput;
    _sum?: Prisma.ProductoDescuentoSumOrderByAggregateInput;
};
export type ProductoDescuentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductoDescuentoScalarWhereWithAggregatesInput | Prisma.ProductoDescuentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductoDescuentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductoDescuentoScalarWhereWithAggregatesInput | Prisma.ProductoDescuentoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductoDescuento"> | number;
    productoId?: Prisma.IntWithAggregatesFilter<"ProductoDescuento"> | number;
    descuentoId?: Prisma.IntWithAggregatesFilter<"ProductoDescuento"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"ProductoDescuento"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"ProductoDescuento"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"ProductoDescuento"> | Date | string;
};
export type ProductoDescuentoCreateInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutDescuentosInput;
    descuento: Prisma.DescuentoCreateNestedOneWithoutProductosInput;
};
export type ProductoDescuentoUncheckedCreateInput = {
    id?: number;
    productoId: number;
    descuentoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoUpdateInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDescuentosNestedInput;
    descuento?: Prisma.DescuentoUpdateOneRequiredWithoutProductosNestedInput;
};
export type ProductoDescuentoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    descuentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoCreateManyInput = {
    id?: number;
    productoId: number;
    descuentoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoUpdateManyMutationInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    descuentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoListRelationFilter = {
    every?: Prisma.ProductoDescuentoWhereInput;
    some?: Prisma.ProductoDescuentoWhereInput;
    none?: Prisma.ProductoDescuentoWhereInput;
};
export type ProductoDescuentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductoDescuentoProductoIdDescuentoIdCompoundUniqueInput = {
    productoId: number;
    descuentoId: number;
};
export type ProductoDescuentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoDescuentoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
};
export type ProductoDescuentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoDescuentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoDescuentoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
};
export type ProductoDescuentoCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput> | Prisma.ProductoDescuentoCreateWithoutProductoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyProductoInputEnvelope;
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
};
export type ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput> | Prisma.ProductoDescuentoCreateWithoutProductoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyProductoInputEnvelope;
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
};
export type ProductoDescuentoUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput> | Prisma.ProductoDescuentoCreateWithoutProductoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutProductoInput | Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyProductoInputEnvelope;
    set?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    disconnect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    delete?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    update?: Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutProductoInput | Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ProductoDescuentoUpdateManyWithWhereWithoutProductoInput | Prisma.ProductoDescuentoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
};
export type ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput> | Prisma.ProductoDescuentoCreateWithoutProductoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutProductoInput | Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyProductoInputEnvelope;
    set?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    disconnect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    delete?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    update?: Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutProductoInput | Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ProductoDescuentoUpdateManyWithWhereWithoutProductoInput | Prisma.ProductoDescuentoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
};
export type ProductoDescuentoCreateNestedManyWithoutDescuentoInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput> | Prisma.ProductoDescuentoCreateWithoutDescuentoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyDescuentoInputEnvelope;
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
};
export type ProductoDescuentoUncheckedCreateNestedManyWithoutDescuentoInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput> | Prisma.ProductoDescuentoCreateWithoutDescuentoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyDescuentoInputEnvelope;
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
};
export type ProductoDescuentoUpdateManyWithoutDescuentoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput> | Prisma.ProductoDescuentoCreateWithoutDescuentoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput[];
    upsert?: Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutDescuentoInput | Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutDescuentoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyDescuentoInputEnvelope;
    set?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    disconnect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    delete?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    update?: Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutDescuentoInput | Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutDescuentoInput[];
    updateMany?: Prisma.ProductoDescuentoUpdateManyWithWhereWithoutDescuentoInput | Prisma.ProductoDescuentoUpdateManyWithWhereWithoutDescuentoInput[];
    deleteMany?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
};
export type ProductoDescuentoUncheckedUpdateManyWithoutDescuentoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput> | Prisma.ProductoDescuentoCreateWithoutDescuentoInput[] | Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput | Prisma.ProductoDescuentoCreateOrConnectWithoutDescuentoInput[];
    upsert?: Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutDescuentoInput | Prisma.ProductoDescuentoUpsertWithWhereUniqueWithoutDescuentoInput[];
    createMany?: Prisma.ProductoDescuentoCreateManyDescuentoInputEnvelope;
    set?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    disconnect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    delete?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    connect?: Prisma.ProductoDescuentoWhereUniqueInput | Prisma.ProductoDescuentoWhereUniqueInput[];
    update?: Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutDescuentoInput | Prisma.ProductoDescuentoUpdateWithWhereUniqueWithoutDescuentoInput[];
    updateMany?: Prisma.ProductoDescuentoUpdateManyWithWhereWithoutDescuentoInput | Prisma.ProductoDescuentoUpdateManyWithWhereWithoutDescuentoInput[];
    deleteMany?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
};
export type ProductoDescuentoCreateWithoutProductoInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    descuento: Prisma.DescuentoCreateNestedOneWithoutProductosInput;
};
export type ProductoDescuentoUncheckedCreateWithoutProductoInput = {
    id?: number;
    descuentoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoCreateOrConnectWithoutProductoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput>;
};
export type ProductoDescuentoCreateManyProductoInputEnvelope = {
    data: Prisma.ProductoDescuentoCreateManyProductoInput | Prisma.ProductoDescuentoCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type ProductoDescuentoUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductoDescuentoUpdateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutProductoInput>;
};
export type ProductoDescuentoUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateWithoutProductoInput, Prisma.ProductoDescuentoUncheckedUpdateWithoutProductoInput>;
};
export type ProductoDescuentoUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.ProductoDescuentoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateManyMutationInput, Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoInput>;
};
export type ProductoDescuentoScalarWhereInput = {
    AND?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
    OR?: Prisma.ProductoDescuentoScalarWhereInput[];
    NOT?: Prisma.ProductoDescuentoScalarWhereInput | Prisma.ProductoDescuentoScalarWhereInput[];
    id?: Prisma.IntFilter<"ProductoDescuento"> | number;
    productoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    descuentoId?: Prisma.IntFilter<"ProductoDescuento"> | number;
    activo?: Prisma.BoolFilter<"ProductoDescuento"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"ProductoDescuento"> | Date | string;
};
export type ProductoDescuentoCreateWithoutDescuentoInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutDescuentosInput;
};
export type ProductoDescuentoUncheckedCreateWithoutDescuentoInput = {
    id?: number;
    productoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoCreateOrConnectWithoutDescuentoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput>;
};
export type ProductoDescuentoCreateManyDescuentoInputEnvelope = {
    data: Prisma.ProductoDescuentoCreateManyDescuentoInput | Prisma.ProductoDescuentoCreateManyDescuentoInput[];
    skipDuplicates?: boolean;
};
export type ProductoDescuentoUpsertWithWhereUniqueWithoutDescuentoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductoDescuentoUpdateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedUpdateWithoutDescuentoInput>;
    create: Prisma.XOR<Prisma.ProductoDescuentoCreateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedCreateWithoutDescuentoInput>;
};
export type ProductoDescuentoUpdateWithWhereUniqueWithoutDescuentoInput = {
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateWithoutDescuentoInput, Prisma.ProductoDescuentoUncheckedUpdateWithoutDescuentoInput>;
};
export type ProductoDescuentoUpdateManyWithWhereWithoutDescuentoInput = {
    where: Prisma.ProductoDescuentoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateManyMutationInput, Prisma.ProductoDescuentoUncheckedUpdateManyWithoutDescuentoInput>;
};
export type ProductoDescuentoCreateManyProductoInput = {
    id?: number;
    descuentoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoUpdateWithoutProductoInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descuento?: Prisma.DescuentoUpdateOneRequiredWithoutProductosNestedInput;
};
export type ProductoDescuentoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descuentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descuentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoCreateManyDescuentoInput = {
    id?: number;
    productoId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoDescuentoUpdateWithoutDescuentoInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutDescuentosNestedInput;
};
export type ProductoDescuentoUncheckedUpdateWithoutDescuentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoUncheckedUpdateManyWithoutDescuentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoDescuentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    descuentoId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoDescuento"]>;
export type ProductoDescuentoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    descuentoId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoDescuento"]>;
export type ProductoDescuentoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    descuentoId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productoDescuento"]>;
export type ProductoDescuentoSelectScalar = {
    id?: boolean;
    productoId?: boolean;
    descuentoId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type ProductoDescuentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productoId" | "descuentoId" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["productoDescuento"]>;
export type ProductoDescuentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
};
export type ProductoDescuentoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
};
export type ProductoDescuentoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    descuento?: boolean | Prisma.DescuentoDefaultArgs<ExtArgs>;
};
export type $ProductoDescuentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductoDescuento";
    objects: {
        producto: Prisma.$ProductoPayload<ExtArgs>;
        descuento: Prisma.$DescuentoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productoId: number;
        descuentoId: number;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["productoDescuento"]>;
    composites: {};
};
export type ProductoDescuentoGetPayload<S extends boolean | null | undefined | ProductoDescuentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload, S>;
export type ProductoDescuentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductoDescuentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoDescuentoCountAggregateInputType | true;
};
export interface ProductoDescuentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductoDescuento'];
        meta: {
            name: 'ProductoDescuento';
        };
    };
    findUnique<T extends ProductoDescuentoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductoDescuentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductoDescuentoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductoDescuentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductoDescuentoFindManyArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductoDescuentoCreateArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoCreateArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductoDescuentoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductoDescuentoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductoDescuentoDeleteArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductoDescuentoUpdateArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductoDescuentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductoDescuentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductoDescuentoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductoDescuentoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductoDescuentoUpsertArgs>(args: Prisma.SelectSubset<T, ProductoDescuentoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductoDescuentoClient<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductoDescuentoCountArgs>(args?: Prisma.Subset<T, ProductoDescuentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoDescuentoCountAggregateOutputType> : number>;
    aggregate<T extends ProductoDescuentoAggregateArgs>(args: Prisma.Subset<T, ProductoDescuentoAggregateArgs>): Prisma.PrismaPromise<GetProductoDescuentoAggregateType<T>>;
    groupBy<T extends ProductoDescuentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductoDescuentoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductoDescuentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductoDescuentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoDescuentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductoDescuentoFieldRefs;
}
export interface Prisma__ProductoDescuentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    descuento<T extends Prisma.DescuentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DescuentoDefaultArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductoDescuentoFieldRefs {
    readonly id: Prisma.FieldRef<"ProductoDescuento", 'Int'>;
    readonly productoId: Prisma.FieldRef<"ProductoDescuento", 'Int'>;
    readonly descuentoId: Prisma.FieldRef<"ProductoDescuento", 'Int'>;
    readonly activo: Prisma.FieldRef<"ProductoDescuento", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"ProductoDescuento", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"ProductoDescuento", 'DateTime'>;
}
export type ProductoDescuentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where: Prisma.ProductoDescuentoWhereUniqueInput;
};
export type ProductoDescuentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where: Prisma.ProductoDescuentoWhereUniqueInput;
};
export type ProductoDescuentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where?: Prisma.ProductoDescuentoWhereInput;
    orderBy?: Prisma.ProductoDescuentoOrderByWithRelationInput | Prisma.ProductoDescuentoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoDescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoDescuentoScalarFieldEnum | Prisma.ProductoDescuentoScalarFieldEnum[];
};
export type ProductoDescuentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where?: Prisma.ProductoDescuentoWhereInput;
    orderBy?: Prisma.ProductoDescuentoOrderByWithRelationInput | Prisma.ProductoDescuentoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoDescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoDescuentoScalarFieldEnum | Prisma.ProductoDescuentoScalarFieldEnum[];
};
export type ProductoDescuentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where?: Prisma.ProductoDescuentoWhereInput;
    orderBy?: Prisma.ProductoDescuentoOrderByWithRelationInput | Prisma.ProductoDescuentoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoDescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoDescuentoScalarFieldEnum | Prisma.ProductoDescuentoScalarFieldEnum[];
};
export type ProductoDescuentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoDescuentoCreateInput, Prisma.ProductoDescuentoUncheckedCreateInput>;
};
export type ProductoDescuentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductoDescuentoCreateManyInput | Prisma.ProductoDescuentoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoDescuentoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    data: Prisma.ProductoDescuentoCreateManyInput | Prisma.ProductoDescuentoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductoDescuentoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductoDescuentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateInput, Prisma.ProductoDescuentoUncheckedUpdateInput>;
    where: Prisma.ProductoDescuentoWhereUniqueInput;
};
export type ProductoDescuentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateManyMutationInput, Prisma.ProductoDescuentoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoDescuentoWhereInput;
    limit?: number;
};
export type ProductoDescuentoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoDescuentoUpdateManyMutationInput, Prisma.ProductoDescuentoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoDescuentoWhereInput;
    limit?: number;
    include?: Prisma.ProductoDescuentoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductoDescuentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where: Prisma.ProductoDescuentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoDescuentoCreateInput, Prisma.ProductoDescuentoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductoDescuentoUpdateInput, Prisma.ProductoDescuentoUncheckedUpdateInput>;
};
export type ProductoDescuentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
    where: Prisma.ProductoDescuentoWhereUniqueInput;
};
export type ProductoDescuentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoDescuentoWhereInput;
    limit?: number;
};
export type ProductoDescuentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoDescuentoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoDescuentoOmit<ExtArgs> | null;
    include?: Prisma.ProductoDescuentoInclude<ExtArgs> | null;
};
