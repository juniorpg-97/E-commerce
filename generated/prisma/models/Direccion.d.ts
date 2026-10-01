import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DireccionModel = runtime.Types.Result.DefaultSelection<Prisma.$DireccionPayload>;
export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null;
    _avg: DireccionAvgAggregateOutputType | null;
    _sum: DireccionSumAggregateOutputType | null;
    _min: DireccionMinAggregateOutputType | null;
    _max: DireccionMaxAggregateOutputType | null;
};
export type DireccionAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type DireccionSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type DireccionMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    calle: string | null;
    numero: string | null;
    referencia: string | null;
    ciudad: string | null;
    codigoPostal: string | null;
    activa: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DireccionMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    calle: string | null;
    numero: string | null;
    referencia: string | null;
    ciudad: string | null;
    codigoPostal: string | null;
    activa: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type DireccionCountAggregateOutputType = {
    id: number;
    clienteId: number;
    calle: number;
    numero: number;
    referencia: number;
    ciudad: number;
    codigoPostal: number;
    activa: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type DireccionAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type DireccionSumAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type DireccionMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    calle?: true;
    numero?: true;
    referencia?: true;
    ciudad?: true;
    codigoPostal?: true;
    activa?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DireccionMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    calle?: true;
    numero?: true;
    referencia?: true;
    ciudad?: true;
    codigoPostal?: true;
    activa?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type DireccionCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    calle?: true;
    numero?: true;
    referencia?: true;
    ciudad?: true;
    codigoPostal?: true;
    activa?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type DireccionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DireccionWhereInput;
    orderBy?: Prisma.DireccionOrderByWithRelationInput | Prisma.DireccionOrderByWithRelationInput[];
    cursor?: Prisma.DireccionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DireccionCountAggregateInputType;
    _avg?: DireccionAvgAggregateInputType;
    _sum?: DireccionSumAggregateInputType;
    _min?: DireccionMinAggregateInputType;
    _max?: DireccionMaxAggregateInputType;
};
export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
    [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDireccion[P]> : Prisma.GetScalarType<T[P], AggregateDireccion[P]>;
};
export type DireccionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DireccionWhereInput;
    orderBy?: Prisma.DireccionOrderByWithAggregationInput | Prisma.DireccionOrderByWithAggregationInput[];
    by: Prisma.DireccionScalarFieldEnum[] | Prisma.DireccionScalarFieldEnum;
    having?: Prisma.DireccionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DireccionCountAggregateInputType | true;
    _avg?: DireccionAvgAggregateInputType;
    _sum?: DireccionSumAggregateInputType;
    _min?: DireccionMinAggregateInputType;
    _max?: DireccionMaxAggregateInputType;
};
export type DireccionGroupByOutputType = {
    id: number;
    clienteId: number;
    calle: string;
    numero: string;
    referencia: string | null;
    ciudad: string;
    codigoPostal: string;
    activa: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: DireccionCountAggregateOutputType | null;
    _avg: DireccionAvgAggregateOutputType | null;
    _sum: DireccionSumAggregateOutputType | null;
    _min: DireccionMinAggregateOutputType | null;
    _max: DireccionMaxAggregateOutputType | null;
};
export type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DireccionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DireccionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DireccionGroupByOutputType[P]>;
}>>;
export type DireccionWhereInput = {
    AND?: Prisma.DireccionWhereInput | Prisma.DireccionWhereInput[];
    OR?: Prisma.DireccionWhereInput[];
    NOT?: Prisma.DireccionWhereInput | Prisma.DireccionWhereInput[];
    id?: Prisma.IntFilter<"Direccion"> | number;
    clienteId?: Prisma.IntFilter<"Direccion"> | number;
    calle?: Prisma.StringFilter<"Direccion"> | string;
    numero?: Prisma.StringFilter<"Direccion"> | string;
    referencia?: Prisma.StringNullableFilter<"Direccion"> | string | null;
    ciudad?: Prisma.StringFilter<"Direccion"> | string;
    codigoPostal?: Prisma.StringFilter<"Direccion"> | string;
    activa?: Prisma.BoolFilter<"Direccion"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    pedidos?: Prisma.PedidoListRelationFilter;
};
export type DireccionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    calle?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    pedidos?: Prisma.PedidoOrderByRelationAggregateInput;
};
export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DireccionWhereInput | Prisma.DireccionWhereInput[];
    OR?: Prisma.DireccionWhereInput[];
    NOT?: Prisma.DireccionWhereInput | Prisma.DireccionWhereInput[];
    clienteId?: Prisma.IntFilter<"Direccion"> | number;
    calle?: Prisma.StringFilter<"Direccion"> | string;
    numero?: Prisma.StringFilter<"Direccion"> | string;
    referencia?: Prisma.StringNullableFilter<"Direccion"> | string | null;
    ciudad?: Prisma.StringFilter<"Direccion"> | string;
    codigoPostal?: Prisma.StringFilter<"Direccion"> | string;
    activa?: Prisma.BoolFilter<"Direccion"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    pedidos?: Prisma.PedidoListRelationFilter;
}, "id">;
export type DireccionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    calle?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.DireccionCountOrderByAggregateInput;
    _avg?: Prisma.DireccionAvgOrderByAggregateInput;
    _max?: Prisma.DireccionMaxOrderByAggregateInput;
    _min?: Prisma.DireccionMinOrderByAggregateInput;
    _sum?: Prisma.DireccionSumOrderByAggregateInput;
};
export type DireccionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DireccionScalarWhereWithAggregatesInput | Prisma.DireccionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DireccionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DireccionScalarWhereWithAggregatesInput | Prisma.DireccionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Direccion"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Direccion"> | number;
    calle?: Prisma.StringWithAggregatesFilter<"Direccion"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"Direccion"> | string;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"Direccion"> | string | null;
    ciudad?: Prisma.StringWithAggregatesFilter<"Direccion"> | string;
    codigoPostal?: Prisma.StringWithAggregatesFilter<"Direccion"> | string;
    activa?: Prisma.BoolWithAggregatesFilter<"Direccion"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Direccion"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Direccion"> | Date | string;
};
export type DireccionCreateInput = {
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutDireccionesInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutDireccionInput;
};
export type DireccionUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutDireccionInput;
};
export type DireccionUpdateInput = {
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutDireccionesNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutDireccionNestedInput;
};
export type DireccionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutDireccionNestedInput;
};
export type DireccionCreateManyInput = {
    id?: number;
    clienteId: number;
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DireccionUpdateManyMutationInput = {
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DireccionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DireccionListRelationFilter = {
    every?: Prisma.DireccionWhereInput;
    some?: Prisma.DireccionWhereInput;
    none?: Prisma.DireccionWhereInput;
};
export type DireccionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DireccionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    calle?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DireccionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type DireccionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    calle?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DireccionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    calle?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type DireccionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type DireccionScalarRelationFilter = {
    is?: Prisma.DireccionWhereInput;
    isNot?: Prisma.DireccionWhereInput;
};
export type DireccionCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput> | Prisma.DireccionCreateWithoutClienteInput[] | Prisma.DireccionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutClienteInput | Prisma.DireccionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.DireccionCreateManyClienteInputEnvelope;
    connect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
};
export type DireccionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput> | Prisma.DireccionCreateWithoutClienteInput[] | Prisma.DireccionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutClienteInput | Prisma.DireccionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.DireccionCreateManyClienteInputEnvelope;
    connect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
};
export type DireccionUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput> | Prisma.DireccionCreateWithoutClienteInput[] | Prisma.DireccionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutClienteInput | Prisma.DireccionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.DireccionUpsertWithWhereUniqueWithoutClienteInput | Prisma.DireccionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.DireccionCreateManyClienteInputEnvelope;
    set?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    disconnect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    delete?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    connect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    update?: Prisma.DireccionUpdateWithWhereUniqueWithoutClienteInput | Prisma.DireccionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.DireccionUpdateManyWithWhereWithoutClienteInput | Prisma.DireccionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.DireccionScalarWhereInput | Prisma.DireccionScalarWhereInput[];
};
export type DireccionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput> | Prisma.DireccionCreateWithoutClienteInput[] | Prisma.DireccionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutClienteInput | Prisma.DireccionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.DireccionUpsertWithWhereUniqueWithoutClienteInput | Prisma.DireccionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.DireccionCreateManyClienteInputEnvelope;
    set?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    disconnect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    delete?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    connect?: Prisma.DireccionWhereUniqueInput | Prisma.DireccionWhereUniqueInput[];
    update?: Prisma.DireccionUpdateWithWhereUniqueWithoutClienteInput | Prisma.DireccionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.DireccionUpdateManyWithWhereWithoutClienteInput | Prisma.DireccionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.DireccionScalarWhereInput | Prisma.DireccionScalarWhereInput[];
};
export type DireccionCreateNestedOneWithoutPedidosInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutPedidosInput, Prisma.DireccionUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutPedidosInput;
    connect?: Prisma.DireccionWhereUniqueInput;
};
export type DireccionUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: Prisma.XOR<Prisma.DireccionCreateWithoutPedidosInput, Prisma.DireccionUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.DireccionCreateOrConnectWithoutPedidosInput;
    upsert?: Prisma.DireccionUpsertWithoutPedidosInput;
    connect?: Prisma.DireccionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DireccionUpdateToOneWithWhereWithoutPedidosInput, Prisma.DireccionUpdateWithoutPedidosInput>, Prisma.DireccionUncheckedUpdateWithoutPedidosInput>;
};
export type DireccionCreateWithoutClienteInput = {
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutDireccionInput;
};
export type DireccionUncheckedCreateWithoutClienteInput = {
    id?: number;
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutDireccionInput;
};
export type DireccionCreateOrConnectWithoutClienteInput = {
    where: Prisma.DireccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput>;
};
export type DireccionCreateManyClienteInputEnvelope = {
    data: Prisma.DireccionCreateManyClienteInput | Prisma.DireccionCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type DireccionUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.DireccionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DireccionUpdateWithoutClienteInput, Prisma.DireccionUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.DireccionCreateWithoutClienteInput, Prisma.DireccionUncheckedCreateWithoutClienteInput>;
};
export type DireccionUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.DireccionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DireccionUpdateWithoutClienteInput, Prisma.DireccionUncheckedUpdateWithoutClienteInput>;
};
export type DireccionUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.DireccionScalarWhereInput;
    data: Prisma.XOR<Prisma.DireccionUpdateManyMutationInput, Prisma.DireccionUncheckedUpdateManyWithoutClienteInput>;
};
export type DireccionScalarWhereInput = {
    AND?: Prisma.DireccionScalarWhereInput | Prisma.DireccionScalarWhereInput[];
    OR?: Prisma.DireccionScalarWhereInput[];
    NOT?: Prisma.DireccionScalarWhereInput | Prisma.DireccionScalarWhereInput[];
    id?: Prisma.IntFilter<"Direccion"> | number;
    clienteId?: Prisma.IntFilter<"Direccion"> | number;
    calle?: Prisma.StringFilter<"Direccion"> | string;
    numero?: Prisma.StringFilter<"Direccion"> | string;
    referencia?: Prisma.StringNullableFilter<"Direccion"> | string | null;
    ciudad?: Prisma.StringFilter<"Direccion"> | string;
    codigoPostal?: Prisma.StringFilter<"Direccion"> | string;
    activa?: Prisma.BoolFilter<"Direccion"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Direccion"> | Date | string;
};
export type DireccionCreateWithoutPedidosInput = {
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutDireccionesInput;
};
export type DireccionUncheckedCreateWithoutPedidosInput = {
    id?: number;
    clienteId: number;
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DireccionCreateOrConnectWithoutPedidosInput = {
    where: Prisma.DireccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DireccionCreateWithoutPedidosInput, Prisma.DireccionUncheckedCreateWithoutPedidosInput>;
};
export type DireccionUpsertWithoutPedidosInput = {
    update: Prisma.XOR<Prisma.DireccionUpdateWithoutPedidosInput, Prisma.DireccionUncheckedUpdateWithoutPedidosInput>;
    create: Prisma.XOR<Prisma.DireccionCreateWithoutPedidosInput, Prisma.DireccionUncheckedCreateWithoutPedidosInput>;
    where?: Prisma.DireccionWhereInput;
};
export type DireccionUpdateToOneWithWhereWithoutPedidosInput = {
    where?: Prisma.DireccionWhereInput;
    data: Prisma.XOR<Prisma.DireccionUpdateWithoutPedidosInput, Prisma.DireccionUncheckedUpdateWithoutPedidosInput>;
};
export type DireccionUpdateWithoutPedidosInput = {
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutDireccionesNestedInput;
};
export type DireccionUncheckedUpdateWithoutPedidosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DireccionCreateManyClienteInput = {
    id?: number;
    calle: string;
    numero: string;
    referencia?: string | null;
    ciudad: string;
    codigoPostal: string;
    activa?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type DireccionUpdateWithoutClienteInput = {
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUpdateManyWithoutDireccionNestedInput;
};
export type DireccionUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutDireccionNestedInput;
};
export type DireccionUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    calle?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoPostal?: Prisma.StringFieldUpdateOperationsInput | string;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DireccionCountOutputType = {
    pedidos: number;
};
export type DireccionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedidos?: boolean | DireccionCountOutputTypeCountPedidosArgs;
};
export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionCountOutputTypeSelect<ExtArgs> | null;
};
export type DireccionCountOutputTypeCountPedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
};
export type DireccionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    calle?: boolean;
    numero?: boolean;
    referencia?: boolean;
    ciudad?: boolean;
    codigoPostal?: boolean;
    activa?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Direccion$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.DireccionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["direccion"]>;
export type DireccionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    calle?: boolean;
    numero?: boolean;
    referencia?: boolean;
    ciudad?: boolean;
    codigoPostal?: boolean;
    activa?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["direccion"]>;
export type DireccionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    calle?: boolean;
    numero?: boolean;
    referencia?: boolean;
    ciudad?: boolean;
    codigoPostal?: boolean;
    activa?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["direccion"]>;
export type DireccionSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    calle?: boolean;
    numero?: boolean;
    referencia?: boolean;
    ciudad?: boolean;
    codigoPostal?: boolean;
    activa?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type DireccionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "calle" | "numero" | "referencia" | "ciudad" | "codigoPostal" | "activa" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["direccion"]>;
export type DireccionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Direccion$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.DireccionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DireccionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type DireccionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type $DireccionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Direccion";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        pedidos: Prisma.$PedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        calle: string;
        numero: string;
        referencia: string | null;
        ciudad: string;
        codigoPostal: string;
        activa: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["direccion"]>;
    composites: {};
};
export type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DireccionPayload, S>;
export type DireccionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DireccionCountAggregateInputType | true;
};
export interface DireccionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Direccion'];
        meta: {
            name: 'Direccion';
        };
    };
    findUnique<T extends DireccionFindUniqueArgs>(args: Prisma.SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DireccionFindFirstArgs>(args?: Prisma.SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DireccionFindManyArgs>(args?: Prisma.SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DireccionCreateArgs>(args: Prisma.SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DireccionCreateManyArgs>(args?: Prisma.SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DireccionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DireccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DireccionDeleteArgs>(args: Prisma.SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DireccionUpdateArgs>(args: Prisma.SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DireccionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DireccionUpdateManyArgs>(args: Prisma.SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DireccionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DireccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DireccionUpsertArgs>(args: Prisma.SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DireccionCountArgs>(args?: Prisma.Subset<T, DireccionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DireccionCountAggregateOutputType> : number>;
    aggregate<T extends DireccionAggregateArgs>(args: Prisma.Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>;
    groupBy<T extends DireccionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DireccionGroupByArgs['orderBy'];
    } : {
        orderBy?: DireccionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DireccionFieldRefs;
}
export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pedidos<T extends Prisma.Direccion$pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Direccion$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DireccionFieldRefs {
    readonly id: Prisma.FieldRef<"Direccion", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Direccion", 'Int'>;
    readonly calle: Prisma.FieldRef<"Direccion", 'String'>;
    readonly numero: Prisma.FieldRef<"Direccion", 'String'>;
    readonly referencia: Prisma.FieldRef<"Direccion", 'String'>;
    readonly ciudad: Prisma.FieldRef<"Direccion", 'String'>;
    readonly codigoPostal: Prisma.FieldRef<"Direccion", 'String'>;
    readonly activa: Prisma.FieldRef<"Direccion", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Direccion", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Direccion", 'DateTime'>;
}
export type DireccionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where: Prisma.DireccionWhereUniqueInput;
};
export type DireccionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where: Prisma.DireccionWhereUniqueInput;
};
export type DireccionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where?: Prisma.DireccionWhereInput;
    orderBy?: Prisma.DireccionOrderByWithRelationInput | Prisma.DireccionOrderByWithRelationInput[];
    cursor?: Prisma.DireccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DireccionScalarFieldEnum | Prisma.DireccionScalarFieldEnum[];
};
export type DireccionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where?: Prisma.DireccionWhereInput;
    orderBy?: Prisma.DireccionOrderByWithRelationInput | Prisma.DireccionOrderByWithRelationInput[];
    cursor?: Prisma.DireccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DireccionScalarFieldEnum | Prisma.DireccionScalarFieldEnum[];
};
export type DireccionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where?: Prisma.DireccionWhereInput;
    orderBy?: Prisma.DireccionOrderByWithRelationInput | Prisma.DireccionOrderByWithRelationInput[];
    cursor?: Prisma.DireccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DireccionScalarFieldEnum | Prisma.DireccionScalarFieldEnum[];
};
export type DireccionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DireccionCreateInput, Prisma.DireccionUncheckedCreateInput>;
};
export type DireccionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DireccionCreateManyInput | Prisma.DireccionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DireccionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    data: Prisma.DireccionCreateManyInput | Prisma.DireccionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DireccionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DireccionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DireccionUpdateInput, Prisma.DireccionUncheckedUpdateInput>;
    where: Prisma.DireccionWhereUniqueInput;
};
export type DireccionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DireccionUpdateManyMutationInput, Prisma.DireccionUncheckedUpdateManyInput>;
    where?: Prisma.DireccionWhereInput;
    limit?: number;
};
export type DireccionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DireccionUpdateManyMutationInput, Prisma.DireccionUncheckedUpdateManyInput>;
    where?: Prisma.DireccionWhereInput;
    limit?: number;
    include?: Prisma.DireccionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DireccionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where: Prisma.DireccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DireccionCreateInput, Prisma.DireccionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DireccionUpdateInput, Prisma.DireccionUncheckedUpdateInput>;
};
export type DireccionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
    where: Prisma.DireccionWhereUniqueInput;
};
export type DireccionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DireccionWhereInput;
    limit?: number;
};
export type Direccion$pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    cursor?: Prisma.PedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
export type DireccionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DireccionSelect<ExtArgs> | null;
    omit?: Prisma.DireccionOmit<ExtArgs> | null;
    include?: Prisma.DireccionInclude<ExtArgs> | null;
};
