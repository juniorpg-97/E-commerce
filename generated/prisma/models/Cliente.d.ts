import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClienteModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type ClienteSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type ClienteMinAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    telefono: string | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    telefono: string | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type ClienteCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    nombre: number;
    apellido: number;
    email: number;
    telefono: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type ClienteAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type ClienteSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type ClienteMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    telefono?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ClienteMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    telefono?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type ClienteCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    telefono?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClienteCountAggregateInputType;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type ClienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithAggregationInput | Prisma.ClienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    id: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string | null;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type ClienteWhereInput = {
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    id?: Prisma.IntFilter<"Cliente"> | number;
    usuarioId?: Prisma.IntFilter<"Cliente"> | number;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    apellido?: Prisma.StringFilter<"Cliente"> | string;
    email?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    activo?: Prisma.BoolFilter<"Cliente"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    direcciones?: Prisma.DireccionListRelationFilter;
    carritos?: Prisma.CarritoListRelationFilter;
    pedidos?: Prisma.PedidoListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
};
export type ClienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    direcciones?: Prisma.DireccionOrderByRelationAggregateInput;
    carritos?: Prisma.CarritoOrderByRelationAggregateInput;
    pedidos?: Prisma.PedidoOrderByRelationAggregateInput;
    ventas?: Prisma.VentaOrderByRelationAggregateInput;
};
export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    usuarioId?: number;
    email?: string;
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    apellido?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringNullableFilter<"Cliente"> | string | null;
    activo?: Prisma.BoolFilter<"Cliente"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    direcciones?: Prisma.DireccionListRelationFilter;
    carritos?: Prisma.CarritoListRelationFilter;
    pedidos?: Prisma.PedidoListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
}, "id" | "usuarioId" | "email">;
export type ClienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.ClienteCountOrderByAggregateInput;
    _avg?: Prisma.ClienteAvgOrderByAggregateInput;
    _max?: Prisma.ClienteMaxOrderByAggregateInput;
    _min?: Prisma.ClienteMinOrderByAggregateInput;
    _sum?: Prisma.ClienteSumOrderByAggregateInput;
};
export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Cliente"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"Cliente"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
};
export type ClienteCreateInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutClienteInput;
    direcciones?: Prisma.DireccionCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionUncheckedCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutClienteNestedInput;
    direcciones?: Prisma.DireccionUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUncheckedUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateManyInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type ClienteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteNullableScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput | null;
    isNot?: Prisma.ClienteWhereInput | null;
};
export type ClienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ClienteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type ClienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ClienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type ClienteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type ClienteScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput;
    isNot?: Prisma.ClienteWhereInput;
};
export type ClienteCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.ClienteUpsertWithoutUsuarioInput;
    disconnect?: Prisma.ClienteWhereInput | boolean;
    delete?: Prisma.ClienteWhereInput | boolean;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutUsuarioInput, Prisma.ClienteUpdateWithoutUsuarioInput>, Prisma.ClienteUncheckedUpdateWithoutUsuarioInput>;
};
export type ClienteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.ClienteUpsertWithoutUsuarioInput;
    disconnect?: Prisma.ClienteWhereInput | boolean;
    delete?: Prisma.ClienteWhereInput | boolean;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutUsuarioInput, Prisma.ClienteUpdateWithoutUsuarioInput>, Prisma.ClienteUncheckedUpdateWithoutUsuarioInput>;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ClienteCreateNestedOneWithoutDireccionesInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutDireccionesInput, Prisma.ClienteUncheckedCreateWithoutDireccionesInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutDireccionesInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutDireccionesInput, Prisma.ClienteUncheckedCreateWithoutDireccionesInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutDireccionesInput;
    upsert?: Prisma.ClienteUpsertWithoutDireccionesInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutDireccionesInput, Prisma.ClienteUpdateWithoutDireccionesInput>, Prisma.ClienteUncheckedUpdateWithoutDireccionesInput>;
};
export type ClienteCreateNestedOneWithoutCarritosInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutCarritosInput, Prisma.ClienteUncheckedCreateWithoutCarritosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutCarritosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutCarritosNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutCarritosInput, Prisma.ClienteUncheckedCreateWithoutCarritosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutCarritosInput;
    upsert?: Prisma.ClienteUpsertWithoutCarritosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutCarritosInput, Prisma.ClienteUpdateWithoutCarritosInput>, Prisma.ClienteUncheckedUpdateWithoutCarritosInput>;
};
export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutPedidosInput, Prisma.ClienteUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutPedidosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutPedidosInput, Prisma.ClienteUncheckedCreateWithoutPedidosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutPedidosInput;
    upsert?: Prisma.ClienteUpsertWithoutPedidosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutPedidosInput, Prisma.ClienteUpdateWithoutPedidosInput>, Prisma.ClienteUncheckedUpdateWithoutPedidosInput>;
};
export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutVentasInput, Prisma.ClienteUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutVentasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneWithoutVentasNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutVentasInput, Prisma.ClienteUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutVentasInput;
    upsert?: Prisma.ClienteUpsertWithoutVentasInput;
    disconnect?: Prisma.ClienteWhereInput | boolean;
    delete?: Prisma.ClienteWhereInput | boolean;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutVentasInput, Prisma.ClienteUpdateWithoutVentasInput>, Prisma.ClienteUncheckedUpdateWithoutVentasInput>;
};
export type ClienteCreateWithoutUsuarioInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionUncheckedCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
};
export type ClienteUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutUsuarioInput, Prisma.ClienteUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutUsuarioInput, Prisma.ClienteUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutUsuarioInput, Prisma.ClienteUncheckedUpdateWithoutUsuarioInput>;
};
export type ClienteUpdateWithoutUsuarioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUncheckedUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutDireccionesInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutClienteInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutDireccionesInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutDireccionesInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutDireccionesInput, Prisma.ClienteUncheckedCreateWithoutDireccionesInput>;
};
export type ClienteUpsertWithoutDireccionesInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutDireccionesInput, Prisma.ClienteUncheckedUpdateWithoutDireccionesInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutDireccionesInput, Prisma.ClienteUncheckedCreateWithoutDireccionesInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutDireccionesInput, Prisma.ClienteUncheckedUpdateWithoutDireccionesInput>;
};
export type ClienteUpdateWithoutDireccionesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutDireccionesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutCarritosInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutClienteInput;
    direcciones?: Prisma.DireccionCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutCarritosInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionUncheckedCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutCarritosInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutCarritosInput, Prisma.ClienteUncheckedCreateWithoutCarritosInput>;
};
export type ClienteUpsertWithoutCarritosInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutCarritosInput, Prisma.ClienteUncheckedUpdateWithoutCarritosInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutCarritosInput, Prisma.ClienteUncheckedCreateWithoutCarritosInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutCarritosInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutCarritosInput, Prisma.ClienteUncheckedUpdateWithoutCarritosInput>;
};
export type ClienteUpdateWithoutCarritosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutClienteNestedInput;
    direcciones?: Prisma.DireccionUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutCarritosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUncheckedUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutPedidosInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutClienteInput;
    direcciones?: Prisma.DireccionCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionUncheckedCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutClienteInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutPedidosInput, Prisma.ClienteUncheckedCreateWithoutPedidosInput>;
};
export type ClienteUpsertWithoutPedidosInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutPedidosInput, Prisma.ClienteUncheckedUpdateWithoutPedidosInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutPedidosInput, Prisma.ClienteUncheckedCreateWithoutPedidosInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutPedidosInput, Prisma.ClienteUncheckedUpdateWithoutPedidosInput>;
};
export type ClienteUpdateWithoutPedidosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutClienteNestedInput;
    direcciones?: Prisma.DireccionUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUncheckedUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutClienteNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutVentasInput = {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutClienteInput;
    direcciones?: Prisma.DireccionCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutVentasInput = {
    id?: number;
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string | null;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    direcciones?: Prisma.DireccionUncheckedCreateNestedManyWithoutClienteInput;
    carritos?: Prisma.CarritoUncheckedCreateNestedManyWithoutClienteInput;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutVentasInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutVentasInput, Prisma.ClienteUncheckedCreateWithoutVentasInput>;
};
export type ClienteUpsertWithoutVentasInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutVentasInput, Prisma.ClienteUncheckedUpdateWithoutVentasInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutVentasInput, Prisma.ClienteUncheckedCreateWithoutVentasInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutVentasInput, Prisma.ClienteUncheckedUpdateWithoutVentasInput>;
};
export type ClienteUpdateWithoutVentasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutClienteNestedInput;
    direcciones?: Prisma.DireccionUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutVentasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    direcciones?: Prisma.DireccionUncheckedUpdateManyWithoutClienteNestedInput;
    carritos?: Prisma.CarritoUncheckedUpdateManyWithoutClienteNestedInput;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCountOutputType = {
    direcciones: number;
    carritos: number;
    pedidos: number;
    ventas: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    direcciones?: boolean | ClienteCountOutputTypeCountDireccionesArgs;
    carritos?: boolean | ClienteCountOutputTypeCountCarritosArgs;
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs;
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs;
};
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
export type ClienteCountOutputTypeCountDireccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DireccionWhereInput;
};
export type ClienteCountOutputTypeCountCarritosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
};
export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
};
export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
};
export type ClienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    telefono?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    direcciones?: boolean | Prisma.Cliente$direccionesArgs<ExtArgs>;
    carritos?: boolean | Prisma.Cliente$carritosArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Cliente$pedidosArgs<ExtArgs>;
    ventas?: boolean | Prisma.Cliente$ventasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    telefono?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    telefono?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    telefono?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type ClienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "nombre" | "apellido" | "email" | "telefono" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["cliente"]>;
export type ClienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    direcciones?: boolean | Prisma.Cliente$direccionesArgs<ExtArgs>;
    carritos?: boolean | Prisma.Cliente$carritosArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Cliente$pedidosArgs<ExtArgs>;
    ventas?: boolean | Prisma.Cliente$ventasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $ClientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cliente";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        direcciones: Prisma.$DireccionPayload<ExtArgs>[];
        carritos: Prisma.$CarritoPayload<ExtArgs>[];
        pedidos: Prisma.$PedidoPayload<ExtArgs>[];
        ventas: Prisma.$VentaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuarioId: number;
        nombre: string;
        apellido: string;
        email: string;
        telefono: string | null;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientePayload, S>;
export type ClienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface ClienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
        meta: {
            name: 'Cliente';
        };
    };
    findUnique<T extends ClienteFindUniqueArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClienteFindFirstArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClienteFindManyArgs>(args?: Prisma.SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClienteCreateArgs>(args: Prisma.SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClienteCreateManyArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClienteDeleteArgs>(args: Prisma.SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClienteUpdateArgs>(args: Prisma.SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClienteUpdateManyArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClienteUpsertArgs>(args: Prisma.SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClienteCountArgs>(args?: Prisma.Subset<T, ClienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    groupBy<T extends ClienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClienteGroupByArgs['orderBy'];
    } : {
        orderBy?: ClienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClienteFieldRefs;
}
export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    direcciones<T extends Prisma.Cliente$direccionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carritos<T extends Prisma.Cliente$carritosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$carritosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pedidos<T extends Prisma.Cliente$pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ventas<T extends Prisma.Cliente$ventasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClienteFieldRefs {
    readonly id: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Cliente", 'String'>;
    readonly apellido: Prisma.FieldRef<"Cliente", 'String'>;
    readonly email: Prisma.FieldRef<"Cliente", 'String'>;
    readonly telefono: Prisma.FieldRef<"Cliente", 'String'>;
    readonly activo: Prisma.FieldRef<"Cliente", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Cliente", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Cliente", 'DateTime'>;
}
export type ClienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
};
export type ClienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClienteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
    include?: Prisma.ClienteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
};
export type ClienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type Cliente$direccionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cliente$carritosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    cursor?: Prisma.CarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
export type Cliente$pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cliente$ventasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
};
