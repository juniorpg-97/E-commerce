import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductoPayload>;
export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type ProductoAvgAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    costoAdquisicion: runtime.Decimal | null;
    precioVenta: runtime.Decimal | null;
};
export type ProductoSumAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    costoAdquisicion: runtime.Decimal | null;
    precioVenta: runtime.Decimal | null;
};
export type ProductoMinAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    nombre: string | null;
    descripcion: string | null;
    costoAdquisicion: runtime.Decimal | null;
    precioVenta: runtime.Decimal | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ProductoMaxAggregateOutputType = {
    id: number | null;
    categoriaId: number | null;
    nombre: string | null;
    descripcion: string | null;
    costoAdquisicion: runtime.Decimal | null;
    precioVenta: runtime.Decimal | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ProductoCountAggregateOutputType = {
    id: number;
    categoriaId: number;
    nombre: number;
    descripcion: number;
    costoAdquisicion: number;
    precioVenta: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type ProductoAvgAggregateInputType = {
    id?: true;
    categoriaId?: true;
    costoAdquisicion?: true;
    precioVenta?: true;
};
export type ProductoSumAggregateInputType = {
    id?: true;
    categoriaId?: true;
    costoAdquisicion?: true;
    precioVenta?: true;
};
export type ProductoMinAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    descripcion?: true;
    costoAdquisicion?: true;
    precioVenta?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ProductoMaxAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    descripcion?: true;
    costoAdquisicion?: true;
    precioVenta?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ProductoCountAggregateInputType = {
    id?: true;
    categoriaId?: true;
    nombre?: true;
    descripcion?: true;
    costoAdquisicion?: true;
    precioVenta?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type ProductoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductoCountAggregateInputType;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducto[P]> : Prisma.GetScalarType<T[P], AggregateProducto[P]>;
};
export type ProductoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithAggregationInput | Prisma.ProductoOrderByWithAggregationInput[];
    by: Prisma.ProductoScalarFieldEnum[] | Prisma.ProductoScalarFieldEnum;
    having?: Prisma.ProductoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoCountAggregateInputType | true;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type ProductoGroupByOutputType = {
    id: number;
    categoriaId: number;
    nombre: string;
    descripcion: string | null;
    costoAdquisicion: runtime.Decimal;
    precioVenta: runtime.Decimal;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]>;
}>>;
export type ProductoWhereInput = {
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    id?: Prisma.IntFilter<"Producto"> | number;
    categoriaId?: Prisma.IntFilter<"Producto"> | number;
    nombre?: Prisma.StringFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableFilter<"Producto"> | string | null;
    costoAdquisicion?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Producto"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inventario?: Prisma.XOR<Prisma.InventarioNullableScalarRelationFilter, Prisma.InventarioWhereInput> | null;
    descuentos?: Prisma.ProductoDescuentoListRelationFilter;
    detallesCarrito?: Prisma.DetalleCarritoListRelationFilter;
    detallesPedido?: Prisma.DetallePedidoListRelationFilter;
    detallesVenta?: Prisma.DetalleVentaListRelationFilter;
};
export type ProductoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    inventario?: Prisma.InventarioOrderByWithRelationInput;
    descuentos?: Prisma.ProductoDescuentoOrderByRelationAggregateInput;
    detallesCarrito?: Prisma.DetalleCarritoOrderByRelationAggregateInput;
    detallesPedido?: Prisma.DetallePedidoOrderByRelationAggregateInput;
    detallesVenta?: Prisma.DetalleVentaOrderByRelationAggregateInput;
};
export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    categoriaId?: Prisma.IntFilter<"Producto"> | number;
    nombre?: Prisma.StringFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableFilter<"Producto"> | string | null;
    costoAdquisicion?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Producto"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inventario?: Prisma.XOR<Prisma.InventarioNullableScalarRelationFilter, Prisma.InventarioWhereInput> | null;
    descuentos?: Prisma.ProductoDescuentoListRelationFilter;
    detallesCarrito?: Prisma.DetalleCarritoListRelationFilter;
    detallesPedido?: Prisma.DetallePedidoListRelationFilter;
    detallesVenta?: Prisma.DetalleVentaListRelationFilter;
}, "id">;
export type ProductoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.ProductoCountOrderByAggregateInput;
    _avg?: Prisma.ProductoAvgOrderByAggregateInput;
    _max?: Prisma.ProductoMaxOrderByAggregateInput;
    _min?: Prisma.ProductoMinOrderByAggregateInput;
    _sum?: Prisma.ProductoSumOrderByAggregateInput;
};
export type ProductoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Producto"> | number;
    categoriaId?: Prisma.IntWithAggregatesFilter<"Producto"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Producto"> | string | null;
    costoAdquisicion?: Prisma.DecimalWithAggregatesFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalWithAggregatesFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Producto"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
};
export type ProductoCreateInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateManyInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoListRelationFilter = {
    every?: Prisma.ProductoWhereInput;
    some?: Prisma.ProductoWhereInput;
    none?: Prisma.ProductoWhereInput;
};
export type ProductoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
};
export type ProductoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ProductoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    costoAdquisicion?: Prisma.SortOrder;
    precioVenta?: Prisma.SortOrder;
};
export type ProductoScalarRelationFilter = {
    is?: Prisma.ProductoWhereInput;
    isNot?: Prisma.ProductoWhereInput;
};
export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput> | Prisma.ProductoCreateWithoutCategoriaInput[] | Prisma.ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutCategoriaInput | Prisma.ProductoCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ProductoCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
};
export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput> | Prisma.ProductoCreateWithoutCategoriaInput[] | Prisma.ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutCategoriaInput | Prisma.ProductoCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ProductoCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
};
export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput> | Prisma.ProductoCreateWithoutCategoriaInput[] | Prisma.ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutCategoriaInput | Prisma.ProductoCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ProductoCreateManyCategoriaInputEnvelope;
    set?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    disconnect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    delete?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    connect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    update?: Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput | Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ProductoScalarWhereInput | Prisma.ProductoScalarWhereInput[];
};
export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput> | Prisma.ProductoCreateWithoutCategoriaInput[] | Prisma.ProductoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutCategoriaInput | Prisma.ProductoCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ProductoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ProductoCreateManyCategoriaInputEnvelope;
    set?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    disconnect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    delete?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    connect?: Prisma.ProductoWhereUniqueInput | Prisma.ProductoWhereUniqueInput[];
    update?: Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ProductoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput | Prisma.ProductoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ProductoScalarWhereInput | Prisma.ProductoScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductoCreateNestedOneWithoutInventarioInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutInventarioInput, Prisma.ProductoUncheckedCreateWithoutInventarioInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutInventarioInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutInventarioNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutInventarioInput, Prisma.ProductoUncheckedCreateWithoutInventarioInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutInventarioInput;
    upsert?: Prisma.ProductoUpsertWithoutInventarioInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutInventarioInput, Prisma.ProductoUpdateWithoutInventarioInput>, Prisma.ProductoUncheckedUpdateWithoutInventarioInput>;
};
export type ProductoCreateNestedOneWithoutDescuentosInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDescuentosInput, Prisma.ProductoUncheckedCreateWithoutDescuentosInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDescuentosInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutDescuentosNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDescuentosInput, Prisma.ProductoUncheckedCreateWithoutDescuentosInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDescuentosInput;
    upsert?: Prisma.ProductoUpsertWithoutDescuentosInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutDescuentosInput, Prisma.ProductoUpdateWithoutDescuentosInput>, Prisma.ProductoUncheckedUpdateWithoutDescuentosInput>;
};
export type ProductoCreateNestedOneWithoutDetallesCarritoInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedCreateWithoutDetallesCarritoInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesCarritoInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedCreateWithoutDetallesCarritoInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesCarritoInput;
    upsert?: Prisma.ProductoUpsertWithoutDetallesCarritoInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutDetallesCarritoInput, Prisma.ProductoUpdateWithoutDetallesCarritoInput>, Prisma.ProductoUncheckedUpdateWithoutDetallesCarritoInput>;
};
export type ProductoCreateNestedOneWithoutDetallesPedidoInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedCreateWithoutDetallesPedidoInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesPedidoInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedCreateWithoutDetallesPedidoInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesPedidoInput;
    upsert?: Prisma.ProductoUpsertWithoutDetallesPedidoInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutDetallesPedidoInput, Prisma.ProductoUpdateWithoutDetallesPedidoInput>, Prisma.ProductoUncheckedUpdateWithoutDetallesPedidoInput>;
};
export type ProductoCreateNestedOneWithoutDetallesVentaInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesVentaInput, Prisma.ProductoUncheckedCreateWithoutDetallesVentaInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesVentaInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutDetallesVentaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesVentaInput, Prisma.ProductoUncheckedCreateWithoutDetallesVentaInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutDetallesVentaInput;
    upsert?: Prisma.ProductoUpsertWithoutDetallesVentaInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutDetallesVentaInput, Prisma.ProductoUpdateWithoutDetallesVentaInput>, Prisma.ProductoUncheckedUpdateWithoutDetallesVentaInput>;
};
export type ProductoCreateWithoutCategoriaInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput>;
};
export type ProductoCreateManyCategoriaInputEnvelope = {
    data: Prisma.ProductoCreateManyCategoriaInput | Prisma.ProductoCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ProductoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutCategoriaInput, Prisma.ProductoUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutCategoriaInput, Prisma.ProductoUncheckedCreateWithoutCategoriaInput>;
};
export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ProductoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutCategoriaInput, Prisma.ProductoUncheckedUpdateWithoutCategoriaInput>;
};
export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.ProductoScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyWithoutCategoriaInput>;
};
export type ProductoScalarWhereInput = {
    AND?: Prisma.ProductoScalarWhereInput | Prisma.ProductoScalarWhereInput[];
    OR?: Prisma.ProductoScalarWhereInput[];
    NOT?: Prisma.ProductoScalarWhereInput | Prisma.ProductoScalarWhereInput[];
    id?: Prisma.IntFilter<"Producto"> | number;
    categoriaId?: Prisma.IntFilter<"Producto"> | number;
    nombre?: Prisma.StringFilter<"Producto"> | string;
    descripcion?: Prisma.StringNullableFilter<"Producto"> | string | null;
    costoAdquisicion?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFilter<"Producto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFilter<"Producto"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Producto"> | Date | string;
};
export type ProductoCreateWithoutInventarioInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutInventarioInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutInventarioInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutInventarioInput, Prisma.ProductoUncheckedCreateWithoutInventarioInput>;
};
export type ProductoUpsertWithoutInventarioInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutInventarioInput, Prisma.ProductoUncheckedUpdateWithoutInventarioInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutInventarioInput, Prisma.ProductoUncheckedCreateWithoutInventarioInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutInventarioInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutInventarioInput, Prisma.ProductoUncheckedUpdateWithoutInventarioInput>;
};
export type ProductoUpdateWithoutInventarioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutInventarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutDescuentosInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutDescuentosInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutDescuentosInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDescuentosInput, Prisma.ProductoUncheckedCreateWithoutDescuentosInput>;
};
export type ProductoUpsertWithoutDescuentosInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutDescuentosInput, Prisma.ProductoUncheckedUpdateWithoutDescuentosInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDescuentosInput, Prisma.ProductoUncheckedCreateWithoutDescuentosInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutDescuentosInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutDescuentosInput, Prisma.ProductoUncheckedUpdateWithoutDescuentosInput>;
};
export type ProductoUpdateWithoutDescuentosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutDescuentosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutDetallesCarritoInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutDetallesCarritoInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutDetallesCarritoInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedCreateWithoutDetallesCarritoInput>;
};
export type ProductoUpsertWithoutDetallesCarritoInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedUpdateWithoutDetallesCarritoInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedCreateWithoutDetallesCarritoInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutDetallesCarritoInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesCarritoInput, Prisma.ProductoUncheckedUpdateWithoutDetallesCarritoInput>;
};
export type ProductoUpdateWithoutDetallesCarritoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutDetallesCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutDetallesPedidoInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutDetallesPedidoInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutDetallesPedidoInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedCreateWithoutDetallesPedidoInput>;
};
export type ProductoUpsertWithoutDetallesPedidoInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedUpdateWithoutDetallesPedidoInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedCreateWithoutDetallesPedidoInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutDetallesPedidoInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesPedidoInput, Prisma.ProductoUncheckedUpdateWithoutDetallesPedidoInput>;
};
export type ProductoUpdateWithoutDetallesPedidoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutDetallesPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateWithoutDetallesVentaInput = {
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutProductosInput;
    inventario?: Prisma.InventarioCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateWithoutDetallesVentaInput = {
    id?: number;
    categoriaId: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    inventario?: Prisma.InventarioUncheckedCreateNestedOneWithoutProductoInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedCreateNestedManyWithoutProductoInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoCreateOrConnectWithoutDetallesVentaInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesVentaInput, Prisma.ProductoUncheckedCreateWithoutDetallesVentaInput>;
};
export type ProductoUpsertWithoutDetallesVentaInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesVentaInput, Prisma.ProductoUncheckedUpdateWithoutDetallesVentaInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutDetallesVentaInput, Prisma.ProductoUncheckedCreateWithoutDetallesVentaInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutDetallesVentaInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutDetallesVentaInput, Prisma.ProductoUncheckedUpdateWithoutDetallesVentaInput>;
};
export type ProductoUpdateWithoutDetallesVentaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutProductosNestedInput;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutDetallesVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoriaId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateManyCategoriaInput = {
    id?: number;
    nombre: string;
    descripcion?: string | null;
    costoAdquisicion: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta: runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUncheckedUpdateOneWithoutProductoNestedInput;
    descuentos?: Prisma.ProductoDescuentoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesCarrito?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesPedido?: Prisma.DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput;
    detallesVenta?: Prisma.DetalleVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costoAdquisicion?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioVenta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoCountOutputType = {
    descuentos: number;
    detallesCarrito: number;
    detallesPedido: number;
    detallesVenta: number;
};
export type ProductoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    descuentos?: boolean | ProductoCountOutputTypeCountDescuentosArgs;
    detallesCarrito?: boolean | ProductoCountOutputTypeCountDetallesCarritoArgs;
    detallesPedido?: boolean | ProductoCountOutputTypeCountDetallesPedidoArgs;
    detallesVenta?: boolean | ProductoCountOutputTypeCountDetallesVentaArgs;
};
export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductoCountOutputTypeCountDescuentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoDescuentoWhereInput;
};
export type ProductoCountOutputTypeCountDetallesCarritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleCarritoWhereInput;
};
export type ProductoCountOutputTypeCountDetallesPedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
};
export type ProductoCountOutputTypeCountDetallesVentaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleVentaWhereInput;
};
export type ProductoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    costoAdquisicion?: boolean;
    precioVenta?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inventario?: boolean | Prisma.Producto$inventarioArgs<ExtArgs>;
    descuentos?: boolean | Prisma.Producto$descuentosArgs<ExtArgs>;
    detallesCarrito?: boolean | Prisma.Producto$detallesCarritoArgs<ExtArgs>;
    detallesPedido?: boolean | Prisma.Producto$detallesPedidoArgs<ExtArgs>;
    detallesVenta?: boolean | Prisma.Producto$detallesVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    costoAdquisicion?: boolean;
    precioVenta?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    costoAdquisicion?: boolean;
    precioVenta?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectScalar = {
    id?: boolean;
    categoriaId?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    costoAdquisicion?: boolean;
    precioVenta?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type ProductoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoriaId" | "nombre" | "descripcion" | "costoAdquisicion" | "precioVenta" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["producto"]>;
export type ProductoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inventario?: boolean | Prisma.Producto$inventarioArgs<ExtArgs>;
    descuentos?: boolean | Prisma.Producto$descuentosArgs<ExtArgs>;
    detallesCarrito?: boolean | Prisma.Producto$detallesCarritoArgs<ExtArgs>;
    detallesPedido?: boolean | Prisma.Producto$detallesPedidoArgs<ExtArgs>;
    detallesVenta?: boolean | Prisma.Producto$detallesVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
};
export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
};
export type $ProductoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Producto";
    objects: {
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        inventario: Prisma.$InventarioPayload<ExtArgs> | null;
        descuentos: Prisma.$ProductoDescuentoPayload<ExtArgs>[];
        detallesCarrito: Prisma.$DetalleCarritoPayload<ExtArgs>[];
        detallesPedido: Prisma.$DetallePedidoPayload<ExtArgs>[];
        detallesVenta: Prisma.$DetalleVentaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categoriaId: number;
        nombre: string;
        descripcion: string | null;
        costoAdquisicion: runtime.Decimal;
        precioVenta: runtime.Decimal;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["producto"]>;
    composites: {};
};
export type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductoPayload, S>;
export type ProductoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoCountAggregateInputType | true;
};
export interface ProductoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Producto'];
        meta: {
            name: 'Producto';
        };
    };
    findUnique<T extends ProductoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductoFindManyArgs>(args?: Prisma.SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductoCreateArgs>(args: Prisma.SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductoDeleteArgs>(args: Prisma.SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductoUpdateArgs>(args: Prisma.SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductoUpsertArgs>(args: Prisma.SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductoCountArgs>(args?: Prisma.Subset<T, ProductoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoCountAggregateOutputType> : number>;
    aggregate<T extends ProductoAggregateArgs>(args: Prisma.Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>;
    groupBy<T extends ProductoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductoFieldRefs;
}
export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventario<T extends Prisma.Producto$inventarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$inventarioArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    descuentos<T extends Prisma.Producto$descuentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$descuentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoDescuentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesCarrito<T extends Prisma.Producto$detallesCarritoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$detallesCarritoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesPedido<T extends Prisma.Producto$detallesPedidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$detallesPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesVenta<T extends Prisma.Producto$detallesVentaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$detallesVentaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductoFieldRefs {
    readonly id: Prisma.FieldRef<"Producto", 'Int'>;
    readonly categoriaId: Prisma.FieldRef<"Producto", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Producto", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Producto", 'String'>;
    readonly costoAdquisicion: Prisma.FieldRef<"Producto", 'Decimal'>;
    readonly precioVenta: Prisma.FieldRef<"Producto", 'Decimal'>;
    readonly activo: Prisma.FieldRef<"Producto", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Producto", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Producto", 'DateTime'>;
}
export type ProductoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
};
export type ProductoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type ProductoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
    include?: Prisma.ProductoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
};
export type ProductoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type Producto$inventarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
};
export type Producto$descuentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producto$detallesCarritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producto$detallesPedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Producto$detallesVentaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
};
