import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    password: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    password: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nombre: number;
    apellido: number;
    email: number;
    password: number;
    rol: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    password?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    password?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    apellido?: true;
    email?: true;
    password?: true;
    rol?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: $Enums.Rol;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    apellido?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    cajas?: Prisma.CajaListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    cajas?: Prisma.CajaOrderByRelationAggregateInput;
    ventas?: Prisma.VentaOrderByRelationAggregateInput;
    movimientos?: Prisma.MovimientoInventarioOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    apellido?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.ClienteWhereInput> | null;
    cajas?: Prisma.CajaListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
}, "id" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    rol?: Prisma.EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol;
    activo?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteUncheckedCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUncheckedUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput | null;
    isNot?: Prisma.UsuarioWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsuarioCreateNestedOneWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutClienteInput, Prisma.UsuarioUncheckedCreateWithoutClienteInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutClienteInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutClienteInput, Prisma.UsuarioUncheckedCreateWithoutClienteInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutClienteInput;
    upsert?: Prisma.UsuarioUpsertWithoutClienteInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutClienteInput, Prisma.UsuarioUpdateWithoutClienteInput>, Prisma.UsuarioUncheckedUpdateWithoutClienteInput>;
};
export type UsuarioCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutMovimientosInput, Prisma.UsuarioUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutMovimientosInput, Prisma.UsuarioUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.UsuarioUpsertWithoutMovimientosInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutMovimientosInput, Prisma.UsuarioUpdateWithoutMovimientosInput>, Prisma.UsuarioUncheckedUpdateWithoutMovimientosInput>;
};
export type UsuarioCreateNestedOneWithoutCajasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutCajasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutCajasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutCajasInput;
    upsert?: Prisma.UsuarioUpsertWithoutCajasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutCajasInput, Prisma.UsuarioUpdateWithoutCajasInput>, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
};
export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutVentasInput, Prisma.UsuarioUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutVentasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutVentasInput, Prisma.UsuarioUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutVentasInput;
    upsert?: Prisma.UsuarioUpsertWithoutVentasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutVentasInput, Prisma.UsuarioUpdateWithoutVentasInput>, Prisma.UsuarioUncheckedUpdateWithoutVentasInput>;
};
export type UsuarioCreateWithoutClienteInput = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutClienteInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutClienteInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutClienteInput, Prisma.UsuarioUncheckedCreateWithoutClienteInput>;
};
export type UsuarioUpsertWithoutClienteInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutClienteInput, Prisma.UsuarioUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutClienteInput, Prisma.UsuarioUncheckedCreateWithoutClienteInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutClienteInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutClienteInput, Prisma.UsuarioUncheckedUpdateWithoutClienteInput>;
};
export type UsuarioUpdateWithoutClienteInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutMovimientosInput = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteUncheckedCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutMovimientosInput, Prisma.UsuarioUncheckedCreateWithoutMovimientosInput>;
};
export type UsuarioUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutMovimientosInput, Prisma.UsuarioUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutMovimientosInput, Prisma.UsuarioUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutMovimientosInput, Prisma.UsuarioUncheckedUpdateWithoutMovimientosInput>;
};
export type UsuarioUpdateWithoutMovimientosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutMovimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUncheckedUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutCajasInput = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteCreateNestedOneWithoutUsuarioInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutCajasInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteUncheckedCreateNestedOneWithoutUsuarioInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutCajasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
};
export type UsuarioUpsertWithoutCajasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutCajasInput, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutCajasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutCajasInput, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
};
export type UsuarioUpdateWithoutCajasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutCajasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUncheckedUpdateOneWithoutUsuarioNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutVentasInput = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutVentasInput = {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente?: Prisma.ClienteUncheckedCreateNestedOneWithoutUsuarioInput;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutVentasInput, Prisma.UsuarioUncheckedCreateWithoutVentasInput>;
};
export type UsuarioUpsertWithoutVentasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutVentasInput, Prisma.UsuarioUncheckedUpdateWithoutVentasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutVentasInput, Prisma.UsuarioUncheckedCreateWithoutVentasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutVentasInput, Prisma.UsuarioUncheckedUpdateWithoutVentasInput>;
};
export type UsuarioUpdateWithoutVentasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUncheckedUpdateOneWithoutUsuarioNestedInput;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCountOutputType = {
    cajas: number;
    ventas: number;
    movimientos: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cajas?: boolean | UsuarioCountOutputTypeCountCajasArgs;
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs;
    movimientos?: boolean | UsuarioCountOutputTypeCountMovimientosArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountCajasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CajaWhereInput;
};
export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
};
export type UsuarioCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.Usuario$clienteArgs<ExtArgs>;
    cajas?: boolean | Prisma.Usuario$cajasArgs<ExtArgs>;
    ventas?: boolean | Prisma.Usuario$ventasArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Usuario$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "password" | "rol" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.Usuario$clienteArgs<ExtArgs>;
    cajas?: boolean | Prisma.Usuario$cajasArgs<ExtArgs>;
    ventas?: boolean | Prisma.Usuario$ventasArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Usuario$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs> | null;
        cajas: Prisma.$CajaPayload<ExtArgs>[];
        ventas: Prisma.$VentaPayload<ExtArgs>[];
        movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        rol: $Enums.Rol;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.Usuario$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$clienteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cajas<T extends Prisma.Usuario$cajasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$cajasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ventas<T extends Prisma.Usuario$ventasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movimientos<T extends Prisma.Usuario$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Usuario", 'String'>;
    readonly apellido: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly password: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rol: Prisma.FieldRef<"Usuario", 'Rol'>;
    readonly activo: Prisma.FieldRef<"Usuario", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Usuario", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
};
export type Usuario$cajasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CajaScalarFieldEnum | Prisma.CajaScalarFieldEnum[];
};
export type Usuario$ventasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
