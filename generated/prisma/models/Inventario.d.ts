import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InventarioModel = runtime.Types.Result.DefaultSelection<Prisma.$InventarioPayload>;
export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null;
    _avg: InventarioAvgAggregateOutputType | null;
    _sum: InventarioSumAggregateOutputType | null;
    _min: InventarioMinAggregateOutputType | null;
    _max: InventarioMaxAggregateOutputType | null;
};
export type InventarioAvgAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stock: number | null;
};
export type InventarioSumAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stock: number | null;
};
export type InventarioMinAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stock: number | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type InventarioMaxAggregateOutputType = {
    id: number | null;
    productoId: number | null;
    stock: number | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type InventarioCountAggregateOutputType = {
    id: number;
    productoId: number;
    stock: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type InventarioAvgAggregateInputType = {
    id?: true;
    productoId?: true;
    stock?: true;
};
export type InventarioSumAggregateInputType = {
    id?: true;
    productoId?: true;
    stock?: true;
};
export type InventarioMinAggregateInputType = {
    id?: true;
    productoId?: true;
    stock?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type InventarioMaxAggregateInputType = {
    id?: true;
    productoId?: true;
    stock?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type InventarioCountAggregateInputType = {
    id?: true;
    productoId?: true;
    stock?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type InventarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventarioCountAggregateInputType;
    _avg?: InventarioAvgAggregateInputType;
    _sum?: InventarioSumAggregateInputType;
    _min?: InventarioMinAggregateInputType;
    _max?: InventarioMaxAggregateInputType;
};
export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventario[P]> : Prisma.GetScalarType<T[P], AggregateInventario[P]>;
};
export type InventarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithAggregationInput | Prisma.InventarioOrderByWithAggregationInput[];
    by: Prisma.InventarioScalarFieldEnum[] | Prisma.InventarioScalarFieldEnum;
    having?: Prisma.InventarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventarioCountAggregateInputType | true;
    _avg?: InventarioAvgAggregateInputType;
    _sum?: InventarioSumAggregateInputType;
    _min?: InventarioMinAggregateInputType;
    _max?: InventarioMaxAggregateInputType;
};
export type InventarioGroupByOutputType = {
    id: number;
    productoId: number;
    stock: number;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: InventarioCountAggregateOutputType | null;
    _avg: InventarioAvgAggregateOutputType | null;
    _sum: InventarioSumAggregateOutputType | null;
    _min: InventarioMinAggregateOutputType | null;
    _max: InventarioMaxAggregateOutputType | null;
};
export type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventarioGroupByOutputType[P]>;
}>>;
export type InventarioWhereInput = {
    AND?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    OR?: Prisma.InventarioWhereInput[];
    NOT?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    id?: Prisma.IntFilter<"Inventario"> | number;
    productoId?: Prisma.IntFilter<"Inventario"> | number;
    stock?: Prisma.IntFilter<"Inventario"> | number;
    creadoEn?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
};
export type InventarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    movimientos?: Prisma.MovimientoInventarioOrderByRelationAggregateInput;
};
export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    productoId?: number;
    AND?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    OR?: Prisma.InventarioWhereInput[];
    NOT?: Prisma.InventarioWhereInput | Prisma.InventarioWhereInput[];
    stock?: Prisma.IntFilter<"Inventario"> | number;
    creadoEn?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"Inventario"> | Date | string;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
}, "id" | "productoId">;
export type InventarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.InventarioCountOrderByAggregateInput;
    _avg?: Prisma.InventarioAvgOrderByAggregateInput;
    _max?: Prisma.InventarioMaxOrderByAggregateInput;
    _min?: Prisma.InventarioMinOrderByAggregateInput;
    _sum?: Prisma.InventarioSumOrderByAggregateInput;
};
export type InventarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventarioScalarWhereWithAggregatesInput | Prisma.InventarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventarioScalarWhereWithAggregatesInput | Prisma.InventarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Inventario"> | number;
    productoId?: Prisma.IntWithAggregatesFilter<"Inventario"> | number;
    stock?: Prisma.IntWithAggregatesFilter<"Inventario"> | number;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Inventario"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"Inventario"> | Date | string;
};
export type InventarioCreateInput = {
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutInventarioInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutInventarioInput;
};
export type InventarioUncheckedCreateInput = {
    id?: number;
    productoId: number;
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutInventarioInput;
};
export type InventarioUpdateInput = {
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutInventarioNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutInventarioNestedInput;
};
export type InventarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutInventarioNestedInput;
};
export type InventarioCreateManyInput = {
    id?: number;
    productoId: number;
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type InventarioUpdateManyMutationInput = {
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioNullableScalarRelationFilter = {
    is?: Prisma.InventarioWhereInput | null;
    isNot?: Prisma.InventarioWhereInput | null;
};
export type InventarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type InventarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type InventarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type InventarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type InventarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type InventarioScalarRelationFilter = {
    is?: Prisma.InventarioWhereInput;
    isNot?: Prisma.InventarioWhereInput;
};
export type InventarioCreateNestedOneWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutProductoInput;
    connect?: Prisma.InventarioWhereUniqueInput;
};
export type InventarioUncheckedCreateNestedOneWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutProductoInput;
    connect?: Prisma.InventarioWhereUniqueInput;
};
export type InventarioUpdateOneWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutProductoInput;
    upsert?: Prisma.InventarioUpsertWithoutProductoInput;
    disconnect?: Prisma.InventarioWhereInput | boolean;
    delete?: Prisma.InventarioWhereInput | boolean;
    connect?: Prisma.InventarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventarioUpdateToOneWithWhereWithoutProductoInput, Prisma.InventarioUpdateWithoutProductoInput>, Prisma.InventarioUncheckedUpdateWithoutProductoInput>;
};
export type InventarioUncheckedUpdateOneWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutProductoInput;
    upsert?: Prisma.InventarioUpsertWithoutProductoInput;
    disconnect?: Prisma.InventarioWhereInput | boolean;
    delete?: Prisma.InventarioWhereInput | boolean;
    connect?: Prisma.InventarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventarioUpdateToOneWithWhereWithoutProductoInput, Prisma.InventarioUpdateWithoutProductoInput>, Prisma.InventarioUncheckedUpdateWithoutProductoInput>;
};
export type InventarioCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutMovimientosInput, Prisma.InventarioUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.InventarioWhereUniqueInput;
};
export type InventarioUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.InventarioCreateWithoutMovimientosInput, Prisma.InventarioUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.InventarioCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.InventarioUpsertWithoutMovimientosInput;
    connect?: Prisma.InventarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventarioUpdateToOneWithWhereWithoutMovimientosInput, Prisma.InventarioUpdateWithoutMovimientosInput>, Prisma.InventarioUncheckedUpdateWithoutMovimientosInput>;
};
export type InventarioCreateWithoutProductoInput = {
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutInventarioInput;
};
export type InventarioUncheckedCreateWithoutProductoInput = {
    id?: number;
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutInventarioInput;
};
export type InventarioCreateOrConnectWithoutProductoInput = {
    where: Prisma.InventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
};
export type InventarioUpsertWithoutProductoInput = {
    update: Prisma.XOR<Prisma.InventarioUpdateWithoutProductoInput, Prisma.InventarioUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutProductoInput, Prisma.InventarioUncheckedCreateWithoutProductoInput>;
    where?: Prisma.InventarioWhereInput;
};
export type InventarioUpdateToOneWithWhereWithoutProductoInput = {
    where?: Prisma.InventarioWhereInput;
    data: Prisma.XOR<Prisma.InventarioUpdateWithoutProductoInput, Prisma.InventarioUncheckedUpdateWithoutProductoInput>;
};
export type InventarioUpdateWithoutProductoInput = {
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutInventarioNestedInput;
};
export type InventarioUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutInventarioNestedInput;
};
export type InventarioCreateWithoutMovimientosInput = {
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    producto: Prisma.ProductoCreateNestedOneWithoutInventarioInput;
};
export type InventarioUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    productoId: number;
    stock?: number;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type InventarioCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.InventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutMovimientosInput, Prisma.InventarioUncheckedCreateWithoutMovimientosInput>;
};
export type InventarioUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.InventarioUpdateWithoutMovimientosInput, Prisma.InventarioUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.InventarioCreateWithoutMovimientosInput, Prisma.InventarioUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.InventarioWhereInput;
};
export type InventarioUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.InventarioWhereInput;
    data: Prisma.XOR<Prisma.InventarioUpdateWithoutMovimientosInput, Prisma.InventarioUncheckedUpdateWithoutMovimientosInput>;
};
export type InventarioUpdateWithoutMovimientosInput = {
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutInventarioNestedInput;
};
export type InventarioUncheckedUpdateWithoutMovimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventarioCountOutputType = {
    movimientos: number;
};
export type InventarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movimientos?: boolean | InventarioCountOutputTypeCountMovimientosArgs;
};
export type InventarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioCountOutputTypeSelect<ExtArgs> | null;
};
export type InventarioCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
};
export type InventarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    stock?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Inventario$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.InventarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    stock?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    stock?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventario"]>;
export type InventarioSelectScalar = {
    id?: boolean;
    productoId?: boolean;
    stock?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type InventarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productoId" | "stock" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["inventario"]>;
export type InventarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Inventario$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.InventarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InventarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type InventarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
};
export type $InventarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Inventario";
    objects: {
        producto: Prisma.$ProductoPayload<ExtArgs>;
        movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productoId: number;
        stock: number;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["inventario"]>;
    composites: {};
};
export type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventarioPayload, S>;
export type InventarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventarioCountAggregateInputType | true;
};
export interface InventarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Inventario'];
        meta: {
            name: 'Inventario';
        };
    };
    findUnique<T extends InventarioFindUniqueArgs>(args: Prisma.SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventarioFindFirstArgs>(args?: Prisma.SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventarioFindManyArgs>(args?: Prisma.SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventarioCreateArgs>(args: Prisma.SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventarioCreateManyArgs>(args?: Prisma.SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventarioDeleteArgs>(args: Prisma.SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventarioUpdateArgs>(args: Prisma.SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventarioUpdateManyArgs>(args: Prisma.SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventarioUpsertArgs>(args: Prisma.SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma.Prisma__InventarioClient<runtime.Types.Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventarioCountArgs>(args?: Prisma.Subset<T, InventarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventarioCountAggregateOutputType> : number>;
    aggregate<T extends InventarioAggregateArgs>(args: Prisma.Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>;
    groupBy<T extends InventarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventarioGroupByArgs['orderBy'];
    } : {
        orderBy?: InventarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventarioFieldRefs;
}
export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movimientos<T extends Prisma.Inventario$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Inventario$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventarioFieldRefs {
    readonly id: Prisma.FieldRef<"Inventario", 'Int'>;
    readonly productoId: Prisma.FieldRef<"Inventario", 'Int'>;
    readonly stock: Prisma.FieldRef<"Inventario", 'Int'>;
    readonly creadoEn: Prisma.FieldRef<"Inventario", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"Inventario", 'DateTime'>;
}
export type InventarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where?: Prisma.InventarioWhereInput;
    orderBy?: Prisma.InventarioOrderByWithRelationInput | Prisma.InventarioOrderByWithRelationInput[];
    cursor?: Prisma.InventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventarioScalarFieldEnum | Prisma.InventarioScalarFieldEnum[];
};
export type InventarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioCreateInput, Prisma.InventarioUncheckedCreateInput>;
};
export type InventarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventarioCreateManyInput | Prisma.InventarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    data: Prisma.InventarioCreateManyInput | Prisma.InventarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioUpdateInput, Prisma.InventarioUncheckedUpdateInput>;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventarioUpdateManyMutationInput, Prisma.InventarioUncheckedUpdateManyInput>;
    where?: Prisma.InventarioWhereInput;
    limit?: number;
};
export type InventarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventarioUpdateManyMutationInput, Prisma.InventarioUncheckedUpdateManyInput>;
    where?: Prisma.InventarioWhereInput;
    limit?: number;
    include?: Prisma.InventarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventarioCreateInput, Prisma.InventarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventarioUpdateInput, Prisma.InventarioUncheckedUpdateInput>;
};
export type InventarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
    where: Prisma.InventarioWhereUniqueInput;
};
export type InventarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventarioWhereInput;
    limit?: number;
};
export type Inventario$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventarioSelect<ExtArgs> | null;
    omit?: Prisma.InventarioOmit<ExtArgs> | null;
    include?: Prisma.InventarioInclude<ExtArgs> | null;
};
