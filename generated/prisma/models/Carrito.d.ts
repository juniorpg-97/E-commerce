import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CarritoModel = runtime.Types.Result.DefaultSelection<Prisma.$CarritoPayload>;
export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
export type CarritoAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type CarritoSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type CarritoMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type CarritoMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type CarritoCountAggregateOutputType = {
    id: number;
    clienteId: number;
    activo: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type CarritoAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type CarritoSumAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type CarritoMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type CarritoMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type CarritoCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    activo?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type CarritoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithRelationInput | Prisma.CarritoOrderByWithRelationInput[];
    cursor?: Prisma.CarritoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarritoCountAggregateInputType;
    _avg?: CarritoAvgAggregateInputType;
    _sum?: CarritoSumAggregateInputType;
    _min?: CarritoMinAggregateInputType;
    _max?: CarritoMaxAggregateInputType;
};
export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
    [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarrito[P]> : Prisma.GetScalarType<T[P], AggregateCarrito[P]>;
};
export type CarritoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
    orderBy?: Prisma.CarritoOrderByWithAggregationInput | Prisma.CarritoOrderByWithAggregationInput[];
    by: Prisma.CarritoScalarFieldEnum[] | Prisma.CarritoScalarFieldEnum;
    having?: Prisma.CarritoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarritoCountAggregateInputType | true;
    _avg?: CarritoAvgAggregateInputType;
    _sum?: CarritoSumAggregateInputType;
    _min?: CarritoMinAggregateInputType;
    _max?: CarritoMaxAggregateInputType;
};
export type CarritoGroupByOutputType = {
    id: number;
    clienteId: number;
    activo: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
export type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarritoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]>;
}>>;
export type CarritoWhereInput = {
    AND?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    OR?: Prisma.CarritoWhereInput[];
    NOT?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    id?: Prisma.IntFilter<"Carrito"> | number;
    clienteId?: Prisma.IntFilter<"Carrito"> | number;
    activo?: Prisma.BoolFilter<"Carrito"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    detalles?: Prisma.DetalleCarritoListRelationFilter;
};
export type CarritoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    detalles?: Prisma.DetalleCarritoOrderByRelationAggregateInput;
};
export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    OR?: Prisma.CarritoWhereInput[];
    NOT?: Prisma.CarritoWhereInput | Prisma.CarritoWhereInput[];
    clienteId?: Prisma.IntFilter<"Carrito"> | number;
    activo?: Prisma.BoolFilter<"Carrito"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    detalles?: Prisma.DetalleCarritoListRelationFilter;
}, "id">;
export type CarritoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.CarritoCountOrderByAggregateInput;
    _avg?: Prisma.CarritoAvgOrderByAggregateInput;
    _max?: Prisma.CarritoMaxOrderByAggregateInput;
    _min?: Prisma.CarritoMinOrderByAggregateInput;
    _sum?: Prisma.CarritoSumOrderByAggregateInput;
};
export type CarritoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CarritoScalarWhereWithAggregatesInput | Prisma.CarritoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CarritoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CarritoScalarWhereWithAggregatesInput | Prisma.CarritoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Carrito"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"Carrito"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Carrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Carrito"> | Date | string;
};
export type CarritoCreateInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCarritosInput;
    detalles?: Prisma.DetalleCarritoCreateNestedManyWithoutCarritoInput;
};
export type CarritoUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput;
};
export type CarritoUpdateInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCarritosNestedInput;
    detalles?: Prisma.DetalleCarritoUpdateManyWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput;
};
export type CarritoCreateManyInput = {
    id?: number;
    clienteId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type CarritoUpdateManyMutationInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoListRelationFilter = {
    every?: Prisma.CarritoWhereInput;
    some?: Prisma.CarritoWhereInput;
    none?: Prisma.CarritoWhereInput;
};
export type CarritoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CarritoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type CarritoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type CarritoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type CarritoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type CarritoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type CarritoScalarRelationFilter = {
    is?: Prisma.CarritoWhereInput;
    isNot?: Prisma.CarritoWhereInput;
};
export type CarritoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput> | Prisma.CarritoCreateWithoutClienteInput[] | Prisma.CarritoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutClienteInput | Prisma.CarritoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CarritoCreateManyClienteInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput> | Prisma.CarritoCreateWithoutClienteInput[] | Prisma.CarritoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutClienteInput | Prisma.CarritoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CarritoCreateManyClienteInputEnvelope;
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
};
export type CarritoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput> | Prisma.CarritoCreateWithoutClienteInput[] | Prisma.CarritoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutClienteInput | Prisma.CarritoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutClienteInput | Prisma.CarritoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CarritoCreateManyClienteInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutClienteInput | Prisma.CarritoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutClienteInput | Prisma.CarritoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput> | Prisma.CarritoCreateWithoutClienteInput[] | Prisma.CarritoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutClienteInput | Prisma.CarritoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CarritoUpsertWithWhereUniqueWithoutClienteInput | Prisma.CarritoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CarritoCreateManyClienteInputEnvelope;
    set?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    disconnect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    delete?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    connect?: Prisma.CarritoWhereUniqueInput | Prisma.CarritoWhereUniqueInput[];
    update?: Prisma.CarritoUpdateWithWhereUniqueWithoutClienteInput | Prisma.CarritoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CarritoUpdateManyWithWhereWithoutClienteInput | Prisma.CarritoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
};
export type CarritoCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutDetallesInput, Prisma.CarritoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.CarritoWhereUniqueInput;
};
export type CarritoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.CarritoCreateWithoutDetallesInput, Prisma.CarritoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.CarritoCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.CarritoUpsertWithoutDetallesInput;
    connect?: Prisma.CarritoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CarritoUpdateToOneWithWhereWithoutDetallesInput, Prisma.CarritoUpdateWithoutDetallesInput>, Prisma.CarritoUncheckedUpdateWithoutDetallesInput>;
};
export type CarritoCreateWithoutClienteInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleCarritoCreateNestedManyWithoutCarritoInput;
};
export type CarritoUncheckedCreateWithoutClienteInput = {
    id?: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    detalles?: Prisma.DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput;
};
export type CarritoCreateOrConnectWithoutClienteInput = {
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput>;
};
export type CarritoCreateManyClienteInputEnvelope = {
    data: Prisma.CarritoCreateManyClienteInput | Prisma.CarritoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type CarritoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CarritoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarritoUpdateWithoutClienteInput, Prisma.CarritoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutClienteInput, Prisma.CarritoUncheckedCreateWithoutClienteInput>;
};
export type CarritoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CarritoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarritoUpdateWithoutClienteInput, Prisma.CarritoUncheckedUpdateWithoutClienteInput>;
};
export type CarritoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.CarritoScalarWhereInput;
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyWithoutClienteInput>;
};
export type CarritoScalarWhereInput = {
    AND?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
    OR?: Prisma.CarritoScalarWhereInput[];
    NOT?: Prisma.CarritoScalarWhereInput | Prisma.CarritoScalarWhereInput[];
    id?: Prisma.IntFilter<"Carrito"> | number;
    clienteId?: Prisma.IntFilter<"Carrito"> | number;
    activo?: Prisma.BoolFilter<"Carrito"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Carrito"> | Date | string;
};
export type CarritoCreateWithoutDetallesInput = {
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCarritosInput;
};
export type CarritoUncheckedCreateWithoutDetallesInput = {
    id?: number;
    clienteId: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type CarritoCreateOrConnectWithoutDetallesInput = {
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutDetallesInput, Prisma.CarritoUncheckedCreateWithoutDetallesInput>;
};
export type CarritoUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.CarritoUpdateWithoutDetallesInput, Prisma.CarritoUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.CarritoCreateWithoutDetallesInput, Prisma.CarritoUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.CarritoWhereInput;
};
export type CarritoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.CarritoWhereInput;
    data: Prisma.XOR<Prisma.CarritoUpdateWithoutDetallesInput, Prisma.CarritoUncheckedUpdateWithoutDetallesInput>;
};
export type CarritoUpdateWithoutDetallesInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCarritosNestedInput;
};
export type CarritoUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoCreateManyClienteInput = {
    id?: number;
    activo?: boolean;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type CarritoUpdateWithoutClienteInput = {
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleCarritoUpdateManyWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    detalles?: Prisma.DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput;
};
export type CarritoUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CarritoCountOutputType = {
    detalles: number;
};
export type CarritoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | CarritoCountOutputTypeCountDetallesArgs;
};
export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoCountOutputTypeSelect<ExtArgs> | null;
};
export type CarritoCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleCarritoWhereInput;
};
export type CarritoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Carrito$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.CarritoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type CarritoSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type CarritoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["carrito"]>;
export type CarritoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Carrito$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.CarritoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CarritoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type CarritoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type $CarritoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Carrito";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        detalles: Prisma.$DetalleCarritoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["carrito"]>;
    composites: {};
};
export type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CarritoPayload, S>;
export type CarritoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarritoCountAggregateInputType | true;
};
export interface CarritoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Carrito'];
        meta: {
            name: 'Carrito';
        };
    };
    findUnique<T extends CarritoFindUniqueArgs>(args: Prisma.SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CarritoFindFirstArgs>(args?: Prisma.SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CarritoFindManyArgs>(args?: Prisma.SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CarritoCreateArgs>(args: Prisma.SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CarritoCreateManyArgs>(args?: Prisma.SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CarritoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CarritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CarritoDeleteArgs>(args: Prisma.SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CarritoUpdateArgs>(args: Prisma.SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CarritoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CarritoUpdateManyArgs>(args: Prisma.SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CarritoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CarritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CarritoUpsertArgs>(args: Prisma.SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma.Prisma__CarritoClient<runtime.Types.Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CarritoCountArgs>(args?: Prisma.Subset<T, CarritoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarritoCountAggregateOutputType> : number>;
    aggregate<T extends CarritoAggregateArgs>(args: Prisma.Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>;
    groupBy<T extends CarritoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CarritoGroupByArgs['orderBy'];
    } : {
        orderBy?: CarritoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CarritoFieldRefs;
}
export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.Carrito$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Carrito$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CarritoFieldRefs {
    readonly id: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Carrito", 'Int'>;
    readonly activo: Prisma.FieldRef<"Carrito", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Carrito", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Carrito", 'DateTime'>;
}
export type CarritoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where: Prisma.CarritoWhereUniqueInput;
};
export type CarritoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where: Prisma.CarritoWhereUniqueInput;
};
export type CarritoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarritoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarritoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarritoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarritoCreateInput, Prisma.CarritoUncheckedCreateInput>;
};
export type CarritoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CarritoCreateManyInput | Prisma.CarritoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CarritoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    data: Prisma.CarritoCreateManyInput | Prisma.CarritoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CarritoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CarritoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarritoUpdateInput, Prisma.CarritoUncheckedUpdateInput>;
    where: Prisma.CarritoWhereUniqueInput;
};
export type CarritoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyInput>;
    where?: Prisma.CarritoWhereInput;
    limit?: number;
};
export type CarritoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarritoUpdateManyMutationInput, Prisma.CarritoUncheckedUpdateManyInput>;
    where?: Prisma.CarritoWhereInput;
    limit?: number;
    include?: Prisma.CarritoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CarritoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where: Prisma.CarritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarritoCreateInput, Prisma.CarritoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CarritoUpdateInput, Prisma.CarritoUncheckedUpdateInput>;
};
export type CarritoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
    where: Prisma.CarritoWhereUniqueInput;
};
export type CarritoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarritoWhereInput;
    limit?: number;
};
export type Carrito$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarritoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoSelect<ExtArgs> | null;
    omit?: Prisma.CarritoOmit<ExtArgs> | null;
    include?: Prisma.CarritoInclude<ExtArgs> | null;
};
