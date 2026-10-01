import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$PedidoPayload>;
export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type PedidoAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    direccionId: number | null;
    total: runtime.Decimal | null;
};
export type PedidoSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    direccionId: number | null;
    total: runtime.Decimal | null;
};
export type PedidoMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    direccionId: number | null;
    estado: $Enums.EstadoPedido | null;
    total: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    observaciones: string | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type PedidoMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    direccionId: number | null;
    estado: $Enums.EstadoPedido | null;
    total: runtime.Decimal | null;
    metodoPago: $Enums.MetodoPago | null;
    observaciones: string | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type PedidoCountAggregateOutputType = {
    id: number;
    clienteId: number;
    direccionId: number;
    estado: number;
    total: number;
    metodoPago: number;
    observaciones: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type PedidoAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
    direccionId?: true;
    total?: true;
};
export type PedidoSumAggregateInputType = {
    id?: true;
    clienteId?: true;
    direccionId?: true;
    total?: true;
};
export type PedidoMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    direccionId?: true;
    estado?: true;
    total?: true;
    metodoPago?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type PedidoMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    direccionId?: true;
    estado?: true;
    total?: true;
    metodoPago?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type PedidoCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    direccionId?: true;
    estado?: true;
    total?: true;
    metodoPago?: true;
    observaciones?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type PedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    cursor?: Prisma.PedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PedidoCountAggregateInputType;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido[P]> : Prisma.GetScalarType<T[P], AggregatePedido[P]>;
};
export type PedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithAggregationInput | Prisma.PedidoOrderByWithAggregationInput[];
    by: Prisma.PedidoScalarFieldEnum[] | Prisma.PedidoScalarFieldEnum;
    having?: Prisma.PedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCountAggregateInputType | true;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type PedidoGroupByOutputType = {
    id: number;
    clienteId: number;
    direccionId: number;
    estado: $Enums.EstadoPedido;
    total: runtime.Decimal;
    metodoPago: $Enums.MetodoPago;
    observaciones: string | null;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]>;
}>>;
export type PedidoWhereInput = {
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    clienteId?: Prisma.IntFilter<"Pedido"> | number;
    direccionId?: Prisma.IntFilter<"Pedido"> | number;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    observaciones?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    direccion?: Prisma.XOR<Prisma.DireccionScalarRelationFilter, Prisma.DireccionWhereInput>;
    detalles?: Prisma.DetallePedidoListRelationFilter;
};
export type PedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    direccion?: Prisma.DireccionOrderByWithRelationInput;
    detalles?: Prisma.DetallePedidoOrderByRelationAggregateInput;
};
export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    clienteId?: Prisma.IntFilter<"Pedido"> | number;
    direccionId?: Prisma.IntFilter<"Pedido"> | number;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    observaciones?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    direccion?: Prisma.XOR<Prisma.DireccionScalarRelationFilter, Prisma.DireccionWhereInput>;
    detalles?: Prisma.DetallePedidoListRelationFilter;
}, "id">;
export type PedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.PedidoCountOrderByAggregateInput;
    _avg?: Prisma.PedidoAvgOrderByAggregateInput;
    _max?: Prisma.PedidoMaxOrderByAggregateInput;
    _min?: Prisma.PedidoMinOrderByAggregateInput;
    _sum?: Prisma.PedidoSumOrderByAggregateInput;
};
export type PedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    direccionId?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    estado?: Prisma.EnumEstadoPedidoWithAggregatesFilter<"Pedido"> | $Enums.EstadoPedido;
    total?: Prisma.DecimalWithAggregatesFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoWithAggregatesFilter<"Pedido"> | $Enums.MetodoPago;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"Pedido"> | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Pedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Pedido"> | Date | string;
};
export type PedidoCreateInput = {
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutPedidosInput;
    direccion: Prisma.DireccionCreateNestedOneWithoutPedidosInput;
    detalles?: Prisma.DetallePedidoCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    direccionId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoUpdateInput = {
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutPedidosNestedInput;
    direccion?: Prisma.DireccionUpdateOneRequiredWithoutPedidosNestedInput;
    detalles?: Prisma.DetallePedidoUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    direccionId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoCreateManyInput = {
    id?: number;
    clienteId: number;
    direccionId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type PedidoUpdateManyMutationInput = {
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    direccionId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoListRelationFilter = {
    every?: Prisma.PedidoWhereInput;
    some?: Prisma.PedidoWhereInput;
    none?: Prisma.PedidoWhereInput;
};
export type PedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type PedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type PedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type PedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    direccionId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidoScalarRelationFilter = {
    is?: Prisma.PedidoWhereInput;
    isNot?: Prisma.PedidoWhereInput;
};
export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput> | Prisma.PedidoCreateWithoutClienteInput[] | Prisma.PedidoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutClienteInput | Prisma.PedidoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PedidoCreateManyClienteInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput> | Prisma.PedidoCreateWithoutClienteInput[] | Prisma.PedidoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutClienteInput | Prisma.PedidoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PedidoCreateManyClienteInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput> | Prisma.PedidoCreateWithoutClienteInput[] | Prisma.PedidoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutClienteInput | Prisma.PedidoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutClienteInput | Prisma.PedidoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PedidoCreateManyClienteInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutClienteInput | Prisma.PedidoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutClienteInput | Prisma.PedidoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput> | Prisma.PedidoCreateWithoutClienteInput[] | Prisma.PedidoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutClienteInput | Prisma.PedidoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutClienteInput | Prisma.PedidoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PedidoCreateManyClienteInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutClienteInput | Prisma.PedidoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutClienteInput | Prisma.PedidoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoCreateNestedManyWithoutDireccionInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput> | Prisma.PedidoCreateWithoutDireccionInput[] | Prisma.PedidoUncheckedCreateWithoutDireccionInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDireccionInput | Prisma.PedidoCreateOrConnectWithoutDireccionInput[];
    createMany?: Prisma.PedidoCreateManyDireccionInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput> | Prisma.PedidoCreateWithoutDireccionInput[] | Prisma.PedidoUncheckedCreateWithoutDireccionInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDireccionInput | Prisma.PedidoCreateOrConnectWithoutDireccionInput[];
    createMany?: Prisma.PedidoCreateManyDireccionInputEnvelope;
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUpdateManyWithoutDireccionNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput> | Prisma.PedidoCreateWithoutDireccionInput[] | Prisma.PedidoUncheckedCreateWithoutDireccionInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDireccionInput | Prisma.PedidoCreateOrConnectWithoutDireccionInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutDireccionInput | Prisma.PedidoUpsertWithWhereUniqueWithoutDireccionInput[];
    createMany?: Prisma.PedidoCreateManyDireccionInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutDireccionInput | Prisma.PedidoUpdateWithWhereUniqueWithoutDireccionInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutDireccionInput | Prisma.PedidoUpdateManyWithWhereWithoutDireccionInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput> | Prisma.PedidoCreateWithoutDireccionInput[] | Prisma.PedidoUncheckedCreateWithoutDireccionInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDireccionInput | Prisma.PedidoCreateOrConnectWithoutDireccionInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutDireccionInput | Prisma.PedidoUpsertWithWhereUniqueWithoutDireccionInput[];
    createMany?: Prisma.PedidoCreateManyDireccionInputEnvelope;
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutDireccionInput | Prisma.PedidoUpdateWithWhereUniqueWithoutDireccionInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutDireccionInput | Prisma.PedidoUpdateManyWithWhereWithoutDireccionInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type EnumEstadoPedidoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPedido;
};
export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago;
};
export type PedidoCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
};
export type PedidoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.PedidoUpsertWithoutDetallesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PedidoUpdateToOneWithWhereWithoutDetallesInput, Prisma.PedidoUpdateWithoutDetallesInput>, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
};
export type PedidoCreateWithoutClienteInput = {
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direccion: Prisma.DireccionCreateNestedOneWithoutPedidosInput;
    detalles?: Prisma.DetallePedidoCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: number;
    direccionId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoCreateOrConnectWithoutClienteInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput>;
};
export type PedidoCreateManyClienteInputEnvelope = {
    data: Prisma.PedidoCreateManyClienteInput | Prisma.PedidoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutClienteInput, Prisma.PedidoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutClienteInput, Prisma.PedidoUncheckedCreateWithoutClienteInput>;
};
export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutClienteInput, Prisma.PedidoUncheckedUpdateWithoutClienteInput>;
};
export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.PedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyWithoutClienteInput>;
};
export type PedidoScalarWhereInput = {
    AND?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    OR?: Prisma.PedidoScalarWhereInput[];
    NOT?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    clienteId?: Prisma.IntFilter<"Pedido"> | number;
    direccionId?: Prisma.IntFilter<"Pedido"> | number;
    estado?: Prisma.EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido;
    total?: Prisma.DecimalFilter<"Pedido"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFilter<"Pedido"> | $Enums.MetodoPago;
    observaciones?: Prisma.StringNullableFilter<"Pedido"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
};
export type PedidoCreateWithoutDireccionInput = {
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutPedidosInput;
    detalles?: Prisma.DetallePedidoCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateWithoutDireccionInput = {
    id?: number;
    clienteId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoCreateOrConnectWithoutDireccionInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput>;
};
export type PedidoCreateManyDireccionInputEnvelope = {
    data: Prisma.PedidoCreateManyDireccionInput | Prisma.PedidoCreateManyDireccionInput[];
    skipDuplicates?: boolean;
};
export type PedidoUpsertWithWhereUniqueWithoutDireccionInput = {
    where: Prisma.PedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutDireccionInput, Prisma.PedidoUncheckedUpdateWithoutDireccionInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDireccionInput, Prisma.PedidoUncheckedCreateWithoutDireccionInput>;
};
export type PedidoUpdateWithWhereUniqueWithoutDireccionInput = {
    where: Prisma.PedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutDireccionInput, Prisma.PedidoUncheckedUpdateWithoutDireccionInput>;
};
export type PedidoUpdateManyWithWhereWithoutDireccionInput = {
    where: Prisma.PedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyWithoutDireccionInput>;
};
export type PedidoCreateWithoutDetallesInput = {
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutPedidosInput;
    direccion: Prisma.DireccionCreateNestedOneWithoutPedidosInput;
};
export type PedidoUncheckedCreateWithoutDetallesInput = {
    id?: number;
    clienteId: number;
    direccionId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type PedidoCreateOrConnectWithoutDetallesInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
};
export type PedidoUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutDetallesInput, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutDetallesInput, Prisma.PedidoUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.PedidoWhereInput;
};
export type PedidoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.PedidoWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutDetallesInput, Prisma.PedidoUncheckedUpdateWithoutDetallesInput>;
};
export type PedidoUpdateWithoutDetallesInput = {
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutPedidosNestedInput;
    direccion?: Prisma.DireccionUpdateOneRequiredWithoutPedidosNestedInput;
};
export type PedidoUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    direccionId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoCreateManyClienteInput = {
    id?: number;
    direccionId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type PedidoUpdateWithoutClienteInput = {
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direccion?: Prisma.DireccionUpdateOneRequiredWithoutPedidosNestedInput;
    detalles?: Prisma.DetallePedidoUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    direccionId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    direccionId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoCreateManyDireccionInput = {
    id?: number;
    clienteId: number;
    estado?: $Enums.EstadoPedido;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: $Enums.MetodoPago;
    observaciones?: string | null;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type PedidoUpdateWithoutDireccionInput = {
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutPedidosNestedInput;
    detalles?: Prisma.DetallePedidoUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateWithoutDireccionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateManyWithoutDireccionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoCountOutputType = {
    detalles: number;
};
export type PedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | PedidoCountOutputTypeCountDetallesArgs;
};
export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoCountOutputTypeSelect<ExtArgs> | null;
};
export type PedidoCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePedidoWhereInput;
};
export type PedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    direccionId?: boolean;
    estado?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Pedido$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    direccionId?: boolean;
    estado?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    direccionId?: boolean;
    estado?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    direccionId?: boolean;
    estado?: boolean;
    total?: boolean;
    metodoPago?: boolean;
    observaciones?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type PedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "direccionId" | "estado" | "total" | "metodoPago" | "observaciones" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["pedido"]>;
export type PedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Pedido$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
};
export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    direccion?: boolean | Prisma.DireccionDefaultArgs<ExtArgs>;
};
export type $PedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pedido";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        direccion: Prisma.$DireccionPayload<ExtArgs>;
        detalles: Prisma.$DetallePedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        direccionId: number;
        estado: $Enums.EstadoPedido;
        total: runtime.Decimal;
        metodoPago: $Enums.MetodoPago;
        observaciones: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["pedido"]>;
    composites: {};
};
export type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PedidoPayload, S>;
export type PedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidoCountAggregateInputType | true;
};
export interface PedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pedido'];
        meta: {
            name: 'Pedido';
        };
    };
    findUnique<T extends PedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PedidoFindManyArgs>(args?: Prisma.SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PedidoCreateArgs>(args: Prisma.SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PedidoDeleteArgs>(args: Prisma.SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PedidoUpdateArgs>(args: Prisma.SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PedidoUpsertArgs>(args: Prisma.SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PedidoCountArgs>(args?: Prisma.Subset<T, PedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidoCountAggregateOutputType> : number>;
    aggregate<T extends PedidoAggregateArgs>(args: Prisma.Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>;
    groupBy<T extends PedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: PedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PedidoFieldRefs;
}
export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    direccion<T extends Prisma.DireccionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DireccionDefaultArgs<ExtArgs>>): Prisma.Prisma__DireccionClient<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.Pedido$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pedido$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PedidoFieldRefs {
    readonly id: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly direccionId: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly estado: Prisma.FieldRef<"Pedido", 'EstadoPedido'>;
    readonly total: Prisma.FieldRef<"Pedido", 'Decimal'>;
    readonly metodoPago: Prisma.FieldRef<"Pedido", 'MetodoPago'>;
    readonly observaciones: Prisma.FieldRef<"Pedido", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"Pedido", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Pedido", 'DateTime'>;
}
export type PedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
};
export type PedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PedidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    where?: Prisma.PedidoWhereInput;
    limit?: number;
};
export type PedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    where?: Prisma.PedidoWhereInput;
    limit?: number;
    include?: Prisma.PedidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
};
export type PedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    limit?: number;
};
export type Pedido$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
};
