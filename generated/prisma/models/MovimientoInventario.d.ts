import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MovimientoInventarioModel = runtime.Types.Result.DefaultSelection<Prisma.$MovimientoInventarioPayload>;
export type AggregateMovimientoInventario = {
    _count: MovimientoInventarioCountAggregateOutputType | null;
    _avg: MovimientoInventarioAvgAggregateOutputType | null;
    _sum: MovimientoInventarioSumAggregateOutputType | null;
    _min: MovimientoInventarioMinAggregateOutputType | null;
    _max: MovimientoInventarioMaxAggregateOutputType | null;
};
export type MovimientoInventarioAvgAggregateOutputType = {
    id: number | null;
    inventarioId: number | null;
    usuarioId: number | null;
    detalleVentaId: number | null;
    cantidad: number | null;
};
export type MovimientoInventarioSumAggregateOutputType = {
    id: number | null;
    inventarioId: number | null;
    usuarioId: number | null;
    detalleVentaId: number | null;
    cantidad: number | null;
};
export type MovimientoInventarioMinAggregateOutputType = {
    id: number | null;
    inventarioId: number | null;
    usuarioId: number | null;
    detalleVentaId: number | null;
    tipo: $Enums.TipoMovimiento | null;
    cantidad: number | null;
    motivo: string | null;
    referencia: string | null;
    fecha: Date | null;
    creadoEn: Date | null;
};
export type MovimientoInventarioMaxAggregateOutputType = {
    id: number | null;
    inventarioId: number | null;
    usuarioId: number | null;
    detalleVentaId: number | null;
    tipo: $Enums.TipoMovimiento | null;
    cantidad: number | null;
    motivo: string | null;
    referencia: string | null;
    fecha: Date | null;
    creadoEn: Date | null;
};
export type MovimientoInventarioCountAggregateOutputType = {
    id: number;
    inventarioId: number;
    usuarioId: number;
    detalleVentaId: number;
    tipo: number;
    cantidad: number;
    motivo: number;
    referencia: number;
    fecha: number;
    creadoEn: number;
    _all: number;
};
export type MovimientoInventarioAvgAggregateInputType = {
    id?: true;
    inventarioId?: true;
    usuarioId?: true;
    detalleVentaId?: true;
    cantidad?: true;
};
export type MovimientoInventarioSumAggregateInputType = {
    id?: true;
    inventarioId?: true;
    usuarioId?: true;
    detalleVentaId?: true;
    cantidad?: true;
};
export type MovimientoInventarioMinAggregateInputType = {
    id?: true;
    inventarioId?: true;
    usuarioId?: true;
    detalleVentaId?: true;
    tipo?: true;
    cantidad?: true;
    motivo?: true;
    referencia?: true;
    fecha?: true;
    creadoEn?: true;
};
export type MovimientoInventarioMaxAggregateInputType = {
    id?: true;
    inventarioId?: true;
    usuarioId?: true;
    detalleVentaId?: true;
    tipo?: true;
    cantidad?: true;
    motivo?: true;
    referencia?: true;
    fecha?: true;
    creadoEn?: true;
};
export type MovimientoInventarioCountAggregateInputType = {
    id?: true;
    inventarioId?: true;
    usuarioId?: true;
    detalleVentaId?: true;
    tipo?: true;
    cantidad?: true;
    motivo?: true;
    referencia?: true;
    fecha?: true;
    creadoEn?: true;
    _all?: true;
};
export type MovimientoInventarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
    orderBy?: Prisma.MovimientoInventarioOrderByWithRelationInput | Prisma.MovimientoInventarioOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoInventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MovimientoInventarioCountAggregateInputType;
    _avg?: MovimientoInventarioAvgAggregateInputType;
    _sum?: MovimientoInventarioSumAggregateInputType;
    _min?: MovimientoInventarioMinAggregateInputType;
    _max?: MovimientoInventarioMaxAggregateInputType;
};
export type GetMovimientoInventarioAggregateType<T extends MovimientoInventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateMovimientoInventario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovimientoInventario[P]> : Prisma.GetScalarType<T[P], AggregateMovimientoInventario[P]>;
};
export type MovimientoInventarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
    orderBy?: Prisma.MovimientoInventarioOrderByWithAggregationInput | Prisma.MovimientoInventarioOrderByWithAggregationInput[];
    by: Prisma.MovimientoInventarioScalarFieldEnum[] | Prisma.MovimientoInventarioScalarFieldEnum;
    having?: Prisma.MovimientoInventarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovimientoInventarioCountAggregateInputType | true;
    _avg?: MovimientoInventarioAvgAggregateInputType;
    _sum?: MovimientoInventarioSumAggregateInputType;
    _min?: MovimientoInventarioMinAggregateInputType;
    _max?: MovimientoInventarioMaxAggregateInputType;
};
export type MovimientoInventarioGroupByOutputType = {
    id: number;
    inventarioId: number;
    usuarioId: number | null;
    detalleVentaId: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo: string | null;
    referencia: string | null;
    fecha: Date;
    creadoEn: Date;
    _count: MovimientoInventarioCountAggregateOutputType | null;
    _avg: MovimientoInventarioAvgAggregateOutputType | null;
    _sum: MovimientoInventarioSumAggregateOutputType | null;
    _min: MovimientoInventarioMinAggregateOutputType | null;
    _max: MovimientoInventarioMaxAggregateOutputType | null;
};
export type GetMovimientoInventarioGroupByPayload<T extends MovimientoInventarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovimientoInventarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovimientoInventarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>;
}>>;
export type MovimientoInventarioWhereInput = {
    AND?: Prisma.MovimientoInventarioWhereInput | Prisma.MovimientoInventarioWhereInput[];
    OR?: Prisma.MovimientoInventarioWhereInput[];
    NOT?: Prisma.MovimientoInventarioWhereInput | Prisma.MovimientoInventarioWhereInput[];
    id?: Prisma.IntFilter<"MovimientoInventario"> | number;
    inventarioId?: Prisma.IntFilter<"MovimientoInventario"> | number;
    usuarioId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    detalleVentaId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    tipo?: Prisma.EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFilter<"MovimientoInventario"> | number;
    motivo?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    referencia?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    fecha?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
    creadoEn?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
    inventario?: Prisma.XOR<Prisma.InventarioScalarRelationFilter, Prisma.InventarioWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
    detalleVenta?: Prisma.XOR<Prisma.DetalleVentaNullableScalarRelationFilter, Prisma.DetalleVentaWhereInput> | null;
};
export type MovimientoInventarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    inventario?: Prisma.InventarioOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    detalleVenta?: Prisma.DetalleVentaOrderByWithRelationInput;
};
export type MovimientoInventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MovimientoInventarioWhereInput | Prisma.MovimientoInventarioWhereInput[];
    OR?: Prisma.MovimientoInventarioWhereInput[];
    NOT?: Prisma.MovimientoInventarioWhereInput | Prisma.MovimientoInventarioWhereInput[];
    inventarioId?: Prisma.IntFilter<"MovimientoInventario"> | number;
    usuarioId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    detalleVentaId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    tipo?: Prisma.EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFilter<"MovimientoInventario"> | number;
    motivo?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    referencia?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    fecha?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
    creadoEn?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
    inventario?: Prisma.XOR<Prisma.InventarioScalarRelationFilter, Prisma.InventarioWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
    detalleVenta?: Prisma.XOR<Prisma.DetalleVentaNullableScalarRelationFilter, Prisma.DetalleVentaWhereInput> | null;
}, "id">;
export type MovimientoInventarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    _count?: Prisma.MovimientoInventarioCountOrderByAggregateInput;
    _avg?: Prisma.MovimientoInventarioAvgOrderByAggregateInput;
    _max?: Prisma.MovimientoInventarioMaxOrderByAggregateInput;
    _min?: Prisma.MovimientoInventarioMinOrderByAggregateInput;
    _sum?: Prisma.MovimientoInventarioSumOrderByAggregateInput;
};
export type MovimientoInventarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.MovimientoInventarioScalarWhereWithAggregatesInput | Prisma.MovimientoInventarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.MovimientoInventarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MovimientoInventarioScalarWhereWithAggregatesInput | Prisma.MovimientoInventarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MovimientoInventario"> | number;
    inventarioId?: Prisma.IntWithAggregatesFilter<"MovimientoInventario"> | number;
    usuarioId?: Prisma.IntNullableWithAggregatesFilter<"MovimientoInventario"> | number | null;
    detalleVentaId?: Prisma.IntNullableWithAggregatesFilter<"MovimientoInventario"> | number | null;
    tipo?: Prisma.EnumTipoMovimientoWithAggregatesFilter<"MovimientoInventario"> | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntWithAggregatesFilter<"MovimientoInventario"> | number;
    motivo?: Prisma.StringNullableWithAggregatesFilter<"MovimientoInventario"> | string | null;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"MovimientoInventario"> | string | null;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"MovimientoInventario"> | Date | string;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"MovimientoInventario"> | Date | string;
};
export type MovimientoInventarioCreateInput = {
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
    inventario: Prisma.InventarioCreateNestedOneWithoutMovimientosInput;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutMovimientosInput;
    detalleVenta?: Prisma.DetalleVentaCreateNestedOneWithoutMovimientosInput;
};
export type MovimientoInventarioUncheckedCreateInput = {
    id?: number;
    inventarioId: number;
    usuarioId?: number | null;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioUpdateInput = {
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUpdateOneRequiredWithoutMovimientosNestedInput;
    usuario?: Prisma.UsuarioUpdateOneWithoutMovimientosNestedInput;
    detalleVenta?: Prisma.DetalleVentaUpdateOneWithoutMovimientosNestedInput;
};
export type MovimientoInventarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioCreateManyInput = {
    id?: number;
    inventarioId: number;
    usuarioId?: number | null;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioUpdateManyMutationInput = {
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioListRelationFilter = {
    every?: Prisma.MovimientoInventarioWhereInput;
    some?: Prisma.MovimientoInventarioWhereInput;
    none?: Prisma.MovimientoInventarioWhereInput;
};
export type MovimientoInventarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MovimientoInventarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type MovimientoInventarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type MovimientoInventarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type MovimientoInventarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type MovimientoInventarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventarioId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    detalleVentaId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type MovimientoInventarioCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | Prisma.MovimientoInventarioCreateWithoutUsuarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | Prisma.MovimientoInventarioCreateWithoutUsuarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | Prisma.MovimientoInventarioCreateWithoutUsuarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | Prisma.MovimientoInventarioCreateWithoutUsuarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type MovimientoInventarioCreateNestedManyWithoutInventarioInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput> | Prisma.MovimientoInventarioCreateWithoutInventarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyInventarioInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUncheckedCreateNestedManyWithoutInventarioInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput> | Prisma.MovimientoInventarioCreateWithoutInventarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyInventarioInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUpdateManyWithoutInventarioNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput> | Prisma.MovimientoInventarioCreateWithoutInventarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyInventarioInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type MovimientoInventarioUncheckedUpdateManyWithoutInventarioNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput> | Prisma.MovimientoInventarioCreateWithoutInventarioInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput | Prisma.MovimientoInventarioCreateOrConnectWithoutInventarioInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyInventarioInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type EnumTipoMovimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimiento;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MovimientoInventarioCreateNestedManyWithoutDetalleVentaInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput> | Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput | Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyDetalleVentaInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUncheckedCreateNestedManyWithoutDetalleVentaInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput> | Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput | Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyDetalleVentaInputEnvelope;
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
};
export type MovimientoInventarioUpdateManyWithoutDetalleVentaNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput> | Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput | Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutDetalleVentaInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyDetalleVentaInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutDetalleVentaInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutDetalleVentaInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput> | Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput[] | Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput[];
    connectOrCreate?: Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput | Prisma.MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput[];
    upsert?: Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpsertWithWhereUniqueWithoutDetalleVentaInput[];
    createMany?: Prisma.MovimientoInventarioCreateManyDetalleVentaInputEnvelope;
    set?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    disconnect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    delete?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    connect?: Prisma.MovimientoInventarioWhereUniqueInput | Prisma.MovimientoInventarioWhereUniqueInput[];
    update?: Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpdateWithWhereUniqueWithoutDetalleVentaInput[];
    updateMany?: Prisma.MovimientoInventarioUpdateManyWithWhereWithoutDetalleVentaInput | Prisma.MovimientoInventarioUpdateManyWithWhereWithoutDetalleVentaInput[];
    deleteMany?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
};
export type MovimientoInventarioCreateWithoutUsuarioInput = {
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
    inventario: Prisma.InventarioCreateNestedOneWithoutMovimientosInput;
    detalleVenta?: Prisma.DetalleVentaCreateNestedOneWithoutMovimientosInput;
};
export type MovimientoInventarioUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    inventarioId: number;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput>;
};
export type MovimientoInventarioCreateManyUsuarioInputEnvelope = {
    data: Prisma.MovimientoInventarioCreateManyUsuarioInput | Prisma.MovimientoInventarioCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutUsuarioInput>;
};
export type MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutUsuarioInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutUsuarioInput>;
};
export type MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.MovimientoInventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateManyMutationInput, Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUsuarioInput>;
};
export type MovimientoInventarioScalarWhereInput = {
    AND?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
    OR?: Prisma.MovimientoInventarioScalarWhereInput[];
    NOT?: Prisma.MovimientoInventarioScalarWhereInput | Prisma.MovimientoInventarioScalarWhereInput[];
    id?: Prisma.IntFilter<"MovimientoInventario"> | number;
    inventarioId?: Prisma.IntFilter<"MovimientoInventario"> | number;
    usuarioId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    detalleVentaId?: Prisma.IntNullableFilter<"MovimientoInventario"> | number | null;
    tipo?: Prisma.EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFilter<"MovimientoInventario"> | number;
    motivo?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    referencia?: Prisma.StringNullableFilter<"MovimientoInventario"> | string | null;
    fecha?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
    creadoEn?: Prisma.DateTimeFilter<"MovimientoInventario"> | Date | string;
};
export type MovimientoInventarioCreateWithoutInventarioInput = {
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutMovimientosInput;
    detalleVenta?: Prisma.DetalleVentaCreateNestedOneWithoutMovimientosInput;
};
export type MovimientoInventarioUncheckedCreateWithoutInventarioInput = {
    id?: number;
    usuarioId?: number | null;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioCreateOrConnectWithoutInventarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput>;
};
export type MovimientoInventarioCreateManyInventarioInputEnvelope = {
    data: Prisma.MovimientoInventarioCreateManyInventarioInput | Prisma.MovimientoInventarioCreateManyInventarioInput[];
    skipDuplicates?: boolean;
};
export type MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutInventarioInput>;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedCreateWithoutInventarioInput>;
};
export type MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutInventarioInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutInventarioInput>;
};
export type MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput = {
    where: Prisma.MovimientoInventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateManyMutationInput, Prisma.MovimientoInventarioUncheckedUpdateManyWithoutInventarioInput>;
};
export type MovimientoInventarioCreateWithoutDetalleVentaInput = {
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
    inventario: Prisma.InventarioCreateNestedOneWithoutMovimientosInput;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutMovimientosInput;
};
export type MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput = {
    id?: number;
    inventarioId: number;
    usuarioId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioCreateOrConnectWithoutDetalleVentaInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput>;
};
export type MovimientoInventarioCreateManyDetalleVentaInputEnvelope = {
    data: Prisma.MovimientoInventarioCreateManyDetalleVentaInput | Prisma.MovimientoInventarioCreateManyDetalleVentaInput[];
    skipDuplicates?: boolean;
};
export type MovimientoInventarioUpsertWithWhereUniqueWithoutDetalleVentaInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutDetalleVentaInput>;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedCreateWithoutDetalleVentaInput>;
};
export type MovimientoInventarioUpdateWithWhereUniqueWithoutDetalleVentaInput = {
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateWithoutDetalleVentaInput, Prisma.MovimientoInventarioUncheckedUpdateWithoutDetalleVentaInput>;
};
export type MovimientoInventarioUpdateManyWithWhereWithoutDetalleVentaInput = {
    where: Prisma.MovimientoInventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateManyMutationInput, Prisma.MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaInput>;
};
export type MovimientoInventarioCreateManyUsuarioInput = {
    id?: number;
    inventarioId: number;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioUpdateWithoutUsuarioInput = {
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUpdateOneRequiredWithoutMovimientosNestedInput;
    detalleVenta?: Prisma.DetalleVentaUpdateOneWithoutMovimientosNestedInput;
};
export type MovimientoInventarioUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioCreateManyInventarioInput = {
    id?: number;
    usuarioId?: number | null;
    detalleVentaId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioUpdateWithoutInventarioInput = {
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneWithoutMovimientosNestedInput;
    detalleVenta?: Prisma.DetalleVentaUpdateOneWithoutMovimientosNestedInput;
};
export type MovimientoInventarioUncheckedUpdateWithoutInventarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioUncheckedUpdateManyWithoutInventarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalleVentaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioCreateManyDetalleVentaInput = {
    id?: number;
    inventarioId: number;
    usuarioId?: number | null;
    tipo: $Enums.TipoMovimiento;
    cantidad: number;
    motivo?: string | null;
    referencia?: string | null;
    fecha?: Date | string;
    creadoEn?: Date | string;
};
export type MovimientoInventarioUpdateWithoutDetalleVentaInput = {
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventario?: Prisma.InventarioUpdateOneRequiredWithoutMovimientosNestedInput;
    usuario?: Prisma.UsuarioUpdateOneWithoutMovimientosNestedInput;
};
export type MovimientoInventarioUncheckedUpdateWithoutDetalleVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioUncheckedUpdateManyWithoutDetalleVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inventarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo?: Prisma.EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoInventarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventarioId?: boolean;
    usuarioId?: boolean;
    detalleVentaId?: boolean;
    tipo?: boolean;
    cantidad?: boolean;
    motivo?: boolean;
    referencia?: boolean;
    fecha?: boolean;
    creadoEn?: boolean;
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoInventario"]>;
export type MovimientoInventarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventarioId?: boolean;
    usuarioId?: boolean;
    detalleVentaId?: boolean;
    tipo?: boolean;
    cantidad?: boolean;
    motivo?: boolean;
    referencia?: boolean;
    fecha?: boolean;
    creadoEn?: boolean;
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoInventario"]>;
export type MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventarioId?: boolean;
    usuarioId?: boolean;
    detalleVentaId?: boolean;
    tipo?: boolean;
    cantidad?: boolean;
    motivo?: boolean;
    referencia?: boolean;
    fecha?: boolean;
    creadoEn?: boolean;
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoInventario"]>;
export type MovimientoInventarioSelectScalar = {
    id?: boolean;
    inventarioId?: boolean;
    usuarioId?: boolean;
    detalleVentaId?: boolean;
    tipo?: boolean;
    cantidad?: boolean;
    motivo?: boolean;
    referencia?: boolean;
    fecha?: boolean;
    creadoEn?: boolean;
};
export type MovimientoInventarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventarioId" | "usuarioId" | "detalleVentaId" | "tipo" | "cantidad" | "motivo" | "referencia" | "fecha" | "creadoEn", ExtArgs["result"]["movimientoInventario"]>;
export type MovimientoInventarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
};
export type MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
};
export type MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventario?: boolean | Prisma.InventarioDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.MovimientoInventario$usuarioArgs<ExtArgs>;
    detalleVenta?: boolean | Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>;
};
export type $MovimientoInventarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MovimientoInventario";
    objects: {
        inventario: Prisma.$InventarioPayload<ExtArgs>;
        usuario: Prisma.$UsuarioPayload<ExtArgs> | null;
        detalleVenta: Prisma.$DetalleVentaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        inventarioId: number;
        usuarioId: number | null;
        detalleVentaId: number | null;
        tipo: $Enums.TipoMovimiento;
        cantidad: number;
        motivo: string | null;
        referencia: string | null;
        fecha: Date;
        creadoEn: Date;
    }, ExtArgs["result"]["movimientoInventario"]>;
    composites: {};
};
export type MovimientoInventarioGetPayload<S extends boolean | null | undefined | MovimientoInventarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload, S>;
export type MovimientoInventarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MovimientoInventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovimientoInventarioCountAggregateInputType | true;
};
export interface MovimientoInventarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MovimientoInventario'];
        meta: {
            name: 'MovimientoInventario';
        };
    };
    findUnique<T extends MovimientoInventarioFindUniqueArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MovimientoInventarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MovimientoInventarioFindFirstArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MovimientoInventarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MovimientoInventarioFindManyArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MovimientoInventarioCreateArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioCreateArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MovimientoInventarioCreateManyArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MovimientoInventarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MovimientoInventarioDeleteArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioDeleteArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MovimientoInventarioUpdateArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioUpdateArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MovimientoInventarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, MovimientoInventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MovimientoInventarioUpdateManyArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MovimientoInventarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MovimientoInventarioUpsertArgs>(args: Prisma.SelectSubset<T, MovimientoInventarioUpsertArgs<ExtArgs>>): Prisma.Prisma__MovimientoInventarioClient<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MovimientoInventarioCountArgs>(args?: Prisma.Subset<T, MovimientoInventarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovimientoInventarioCountAggregateOutputType> : number>;
    aggregate<T extends MovimientoInventarioAggregateArgs>(args: Prisma.Subset<T, MovimientoInventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientoInventarioAggregateType<T>>;
    groupBy<T extends MovimientoInventarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MovimientoInventarioGroupByArgs['orderBy'];
    } : {
        orderBy?: MovimientoInventarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MovimientoInventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MovimientoInventarioFieldRefs;
}
export interface Prisma__MovimientoInventarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventario<T extends Prisma.InventarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InventarioDefaultArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.MovimientoInventario$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovimientoInventario$usuarioArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    detalleVenta<T extends Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovimientoInventario$detalleVentaArgs<ExtArgs>>): Prisma.Prisma__DetalleVentaClient<runtime.Types.Result.GetResult<Prisma.$DetalleVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MovimientoInventarioFieldRefs {
    readonly id: Prisma.FieldRef<"MovimientoInventario", 'Int'>;
    readonly inventarioId: Prisma.FieldRef<"MovimientoInventario", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"MovimientoInventario", 'Int'>;
    readonly detalleVentaId: Prisma.FieldRef<"MovimientoInventario", 'Int'>;
    readonly tipo: Prisma.FieldRef<"MovimientoInventario", 'TipoMovimiento'>;
    readonly cantidad: Prisma.FieldRef<"MovimientoInventario", 'Int'>;
    readonly motivo: Prisma.FieldRef<"MovimientoInventario", 'String'>;
    readonly referencia: Prisma.FieldRef<"MovimientoInventario", 'String'>;
    readonly fecha: Prisma.FieldRef<"MovimientoInventario", 'DateTime'>;
    readonly creadoEn: Prisma.FieldRef<"MovimientoInventario", 'DateTime'>;
}
export type MovimientoInventarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where: Prisma.MovimientoInventarioWhereUniqueInput;
};
export type MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where: Prisma.MovimientoInventarioWhereUniqueInput;
};
export type MovimientoInventarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovimientoInventarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovimientoInventarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovimientoInventarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoInventarioCreateInput, Prisma.MovimientoInventarioUncheckedCreateInput>;
};
export type MovimientoInventarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MovimientoInventarioCreateManyInput | Prisma.MovimientoInventarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MovimientoInventarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    data: Prisma.MovimientoInventarioCreateManyInput | Prisma.MovimientoInventarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MovimientoInventarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateInput, Prisma.MovimientoInventarioUncheckedUpdateInput>;
    where: Prisma.MovimientoInventarioWhereUniqueInput;
};
export type MovimientoInventarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateManyMutationInput, Prisma.MovimientoInventarioUncheckedUpdateManyInput>;
    where?: Prisma.MovimientoInventarioWhereInput;
    limit?: number;
};
export type MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoInventarioUpdateManyMutationInput, Prisma.MovimientoInventarioUncheckedUpdateManyInput>;
    where?: Prisma.MovimientoInventarioWhereInput;
    limit?: number;
    include?: Prisma.MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MovimientoInventarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where: Prisma.MovimientoInventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoInventarioCreateInput, Prisma.MovimientoInventarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MovimientoInventarioUpdateInput, Prisma.MovimientoInventarioUncheckedUpdateInput>;
};
export type MovimientoInventarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where: Prisma.MovimientoInventarioWhereUniqueInput;
};
export type MovimientoInventarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
    limit?: number;
};
export type MovimientoInventario$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
};
export type MovimientoInventario$detalleVentaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleVentaSelect<ExtArgs> | null;
    omit?: Prisma.DetalleVentaOmit<ExtArgs> | null;
    include?: Prisma.DetalleVentaInclude<ExtArgs> | null;
    where?: Prisma.DetalleVentaWhereInput;
};
export type MovimientoInventarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
};
