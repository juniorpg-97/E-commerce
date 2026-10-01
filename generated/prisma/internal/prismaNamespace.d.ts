import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Cliente: "Cliente";
    readonly Direccion: "Direccion";
    readonly Categoria: "Categoria";
    readonly Producto: "Producto";
    readonly Inventario: "Inventario";
    readonly MovimientoInventario: "MovimientoInventario";
    readonly Descuento: "Descuento";
    readonly ProductoDescuento: "ProductoDescuento";
    readonly Carrito: "Carrito";
    readonly DetalleCarrito: "DetalleCarrito";
    readonly Pedido: "Pedido";
    readonly DetallePedido: "DetallePedido";
    readonly Caja: "Caja";
    readonly Venta: "Venta";
    readonly DetalleVenta: "DetalleVenta";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "cliente" | "direccion" | "categoria" | "producto" | "inventario" | "movimientoInventario" | "descuento" | "productoDescuento" | "carrito" | "detalleCarrito" | "pedido" | "detallePedido" | "caja" | "venta" | "detalleVenta";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Cliente: {
            payload: Prisma.$ClientePayload<ExtArgs>;
            fields: Prisma.ClienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findFirst: {
                    args: Prisma.ClienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findMany: {
                    args: Prisma.ClienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                create: {
                    args: Prisma.ClienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                createMany: {
                    args: Prisma.ClienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                delete: {
                    args: Prisma.ClienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                update: {
                    args: Prisma.ClienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                deleteMany: {
                    args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                upsert: {
                    args: Prisma.ClienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.ClienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        Direccion: {
            payload: Prisma.$DireccionPayload<ExtArgs>;
            fields: Prisma.DireccionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DireccionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                findFirst: {
                    args: Prisma.DireccionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                findMany: {
                    args: Prisma.DireccionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>[];
                };
                create: {
                    args: Prisma.DireccionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                createMany: {
                    args: Prisma.DireccionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DireccionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>[];
                };
                delete: {
                    args: Prisma.DireccionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                update: {
                    args: Prisma.DireccionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                deleteMany: {
                    args: Prisma.DireccionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DireccionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DireccionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>[];
                };
                upsert: {
                    args: Prisma.DireccionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DireccionPayload>;
                };
                aggregate: {
                    args: Prisma.DireccionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDireccion>;
                };
                groupBy: {
                    args: Prisma.DireccionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DireccionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DireccionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DireccionCountAggregateOutputType> | number;
                };
            };
        };
        Categoria: {
            payload: Prisma.$CategoriaPayload<ExtArgs>;
            fields: Prisma.CategoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                findMany: {
                    args: Prisma.CategoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                create: {
                    args: Prisma.CategoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                createMany: {
                    args: Prisma.CategoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                delete: {
                    args: Prisma.CategoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                update: {
                    args: Prisma.CategoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                upsert: {
                    args: Prisma.CategoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoria>;
                };
                groupBy: {
                    args: Prisma.CategoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaCountAggregateOutputType> | number;
                };
            };
        };
        Producto: {
            payload: Prisma.$ProductoPayload<ExtArgs>;
            fields: Prisma.ProductoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                findFirst: {
                    args: Prisma.ProductoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                findMany: {
                    args: Prisma.ProductoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                create: {
                    args: Prisma.ProductoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                createMany: {
                    args: Prisma.ProductoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                delete: {
                    args: Prisma.ProductoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                update: {
                    args: Prisma.ProductoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                upsert: {
                    args: Prisma.ProductoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                aggregate: {
                    args: Prisma.ProductoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducto>;
                };
                groupBy: {
                    args: Prisma.ProductoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoCountAggregateOutputType> | number;
                };
            };
        };
        Inventario: {
            payload: Prisma.$InventarioPayload<ExtArgs>;
            fields: Prisma.InventarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InventarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                findFirst: {
                    args: Prisma.InventarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                findMany: {
                    args: Prisma.InventarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                create: {
                    args: Prisma.InventarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                createMany: {
                    args: Prisma.InventarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InventarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                delete: {
                    args: Prisma.InventarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                update: {
                    args: Prisma.InventarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                deleteMany: {
                    args: Prisma.InventarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InventarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InventarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>[];
                };
                upsert: {
                    args: Prisma.InventarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InventarioPayload>;
                };
                aggregate: {
                    args: Prisma.InventarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventario>;
                };
                groupBy: {
                    args: Prisma.InventarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InventarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InventarioCountAggregateOutputType> | number;
                };
            };
        };
        MovimientoInventario: {
            payload: Prisma.$MovimientoInventarioPayload<ExtArgs>;
            fields: Prisma.MovimientoInventarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                findFirst: {
                    args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                findMany: {
                    args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                create: {
                    args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                createMany: {
                    args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                delete: {
                    args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                update: {
                    args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                deleteMany: {
                    args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                upsert: {
                    args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                aggregate: {
                    args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovimientoInventario>;
                };
                groupBy: {
                    args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoInventarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MovimientoInventarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoInventarioCountAggregateOutputType> | number;
                };
            };
        };
        Descuento: {
            payload: Prisma.$DescuentoPayload<ExtArgs>;
            fields: Prisma.DescuentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DescuentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DescuentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                findFirst: {
                    args: Prisma.DescuentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DescuentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                findMany: {
                    args: Prisma.DescuentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                create: {
                    args: Prisma.DescuentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                createMany: {
                    args: Prisma.DescuentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DescuentoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                delete: {
                    args: Prisma.DescuentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                update: {
                    args: Prisma.DescuentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                deleteMany: {
                    args: Prisma.DescuentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DescuentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DescuentoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                upsert: {
                    args: Prisma.DescuentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                aggregate: {
                    args: Prisma.DescuentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDescuento>;
                };
                groupBy: {
                    args: Prisma.DescuentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescuentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DescuentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescuentoCountAggregateOutputType> | number;
                };
            };
        };
        ProductoDescuento: {
            payload: Prisma.$ProductoDescuentoPayload<ExtArgs>;
            fields: Prisma.ProductoDescuentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductoDescuentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductoDescuentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                findFirst: {
                    args: Prisma.ProductoDescuentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductoDescuentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                findMany: {
                    args: Prisma.ProductoDescuentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>[];
                };
                create: {
                    args: Prisma.ProductoDescuentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                createMany: {
                    args: Prisma.ProductoDescuentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductoDescuentoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>[];
                };
                delete: {
                    args: Prisma.ProductoDescuentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                update: {
                    args: Prisma.ProductoDescuentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductoDescuentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductoDescuentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductoDescuentoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>[];
                };
                upsert: {
                    args: Prisma.ProductoDescuentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoDescuentoPayload>;
                };
                aggregate: {
                    args: Prisma.ProductoDescuentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductoDescuento>;
                };
                groupBy: {
                    args: Prisma.ProductoDescuentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoDescuentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductoDescuentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoDescuentoCountAggregateOutputType> | number;
                };
            };
        };
        Carrito: {
            payload: Prisma.$CarritoPayload<ExtArgs>;
            fields: Prisma.CarritoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CarritoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                findFirst: {
                    args: Prisma.CarritoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                findMany: {
                    args: Prisma.CarritoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>[];
                };
                create: {
                    args: Prisma.CarritoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                createMany: {
                    args: Prisma.CarritoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CarritoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>[];
                };
                delete: {
                    args: Prisma.CarritoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                update: {
                    args: Prisma.CarritoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                deleteMany: {
                    args: Prisma.CarritoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CarritoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CarritoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>[];
                };
                upsert: {
                    args: Prisma.CarritoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CarritoPayload>;
                };
                aggregate: {
                    args: Prisma.CarritoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarrito>;
                };
                groupBy: {
                    args: Prisma.CarritoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarritoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CarritoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarritoCountAggregateOutputType> | number;
                };
            };
        };
        DetalleCarrito: {
            payload: Prisma.$DetalleCarritoPayload<ExtArgs>;
            fields: Prisma.DetalleCarritoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetalleCarritoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetalleCarritoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                findFirst: {
                    args: Prisma.DetalleCarritoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetalleCarritoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                findMany: {
                    args: Prisma.DetalleCarritoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>[];
                };
                create: {
                    args: Prisma.DetalleCarritoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                createMany: {
                    args: Prisma.DetalleCarritoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetalleCarritoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>[];
                };
                delete: {
                    args: Prisma.DetalleCarritoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                update: {
                    args: Prisma.DetalleCarritoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                deleteMany: {
                    args: Prisma.DetalleCarritoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetalleCarritoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetalleCarritoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>[];
                };
                upsert: {
                    args: Prisma.DetalleCarritoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>;
                };
                aggregate: {
                    args: Prisma.DetalleCarritoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalleCarrito>;
                };
                groupBy: {
                    args: Prisma.DetalleCarritoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleCarritoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetalleCarritoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleCarritoCountAggregateOutputType> | number;
                };
            };
        };
        Pedido: {
            payload: Prisma.$PedidoPayload<ExtArgs>;
            fields: Prisma.PedidoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PedidoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                findFirst: {
                    args: Prisma.PedidoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                findMany: {
                    args: Prisma.PedidoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>[];
                };
                create: {
                    args: Prisma.PedidoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                createMany: {
                    args: Prisma.PedidoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>[];
                };
                delete: {
                    args: Prisma.PedidoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                update: {
                    args: Prisma.PedidoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                deleteMany: {
                    args: Prisma.PedidoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PedidoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>[];
                };
                upsert: {
                    args: Prisma.PedidoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PedidoPayload>;
                };
                aggregate: {
                    args: Prisma.PedidoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePedido>;
                };
                groupBy: {
                    args: Prisma.PedidoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PedidoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PedidoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PedidoCountAggregateOutputType> | number;
                };
            };
        };
        DetallePedido: {
            payload: Prisma.$DetallePedidoPayload<ExtArgs>;
            fields: Prisma.DetallePedidoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetallePedidoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetallePedidoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                findFirst: {
                    args: Prisma.DetallePedidoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetallePedidoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                findMany: {
                    args: Prisma.DetallePedidoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>[];
                };
                create: {
                    args: Prisma.DetallePedidoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                createMany: {
                    args: Prisma.DetallePedidoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetallePedidoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>[];
                };
                delete: {
                    args: Prisma.DetallePedidoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                update: {
                    args: Prisma.DetallePedidoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                deleteMany: {
                    args: Prisma.DetallePedidoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetallePedidoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetallePedidoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>[];
                };
                upsert: {
                    args: Prisma.DetallePedidoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePedidoPayload>;
                };
                aggregate: {
                    args: Prisma.DetallePedidoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetallePedido>;
                };
                groupBy: {
                    args: Prisma.DetallePedidoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetallePedidoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetallePedidoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetallePedidoCountAggregateOutputType> | number;
                };
            };
        };
        Caja: {
            payload: Prisma.$CajaPayload<ExtArgs>;
            fields: Prisma.CajaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CajaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CajaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                findFirst: {
                    args: Prisma.CajaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CajaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                findMany: {
                    args: Prisma.CajaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                create: {
                    args: Prisma.CajaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                createMany: {
                    args: Prisma.CajaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CajaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                delete: {
                    args: Prisma.CajaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                update: {
                    args: Prisma.CajaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                deleteMany: {
                    args: Prisma.CajaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CajaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CajaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                upsert: {
                    args: Prisma.CajaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                aggregate: {
                    args: Prisma.CajaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCaja>;
                };
                groupBy: {
                    args: Prisma.CajaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CajaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CajaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CajaCountAggregateOutputType> | number;
                };
            };
        };
        Venta: {
            payload: Prisma.$VentaPayload<ExtArgs>;
            fields: Prisma.VentaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VentaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                findFirst: {
                    args: Prisma.VentaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                findMany: {
                    args: Prisma.VentaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                create: {
                    args: Prisma.VentaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                createMany: {
                    args: Prisma.VentaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                delete: {
                    args: Prisma.VentaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                update: {
                    args: Prisma.VentaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                deleteMany: {
                    args: Prisma.VentaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VentaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                upsert: {
                    args: Prisma.VentaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                aggregate: {
                    args: Prisma.VentaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenta>;
                };
                groupBy: {
                    args: Prisma.VentaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VentaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VentaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VentaCountAggregateOutputType> | number;
                };
            };
        };
        DetalleVenta: {
            payload: Prisma.$DetalleVentaPayload<ExtArgs>;
            fields: Prisma.DetalleVentaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetalleVentaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetalleVentaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                findFirst: {
                    args: Prisma.DetalleVentaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetalleVentaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                findMany: {
                    args: Prisma.DetalleVentaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                create: {
                    args: Prisma.DetalleVentaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                createMany: {
                    args: Prisma.DetalleVentaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetalleVentaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                delete: {
                    args: Prisma.DetalleVentaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                update: {
                    args: Prisma.DetalleVentaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                deleteMany: {
                    args: Prisma.DetalleVentaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetalleVentaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetalleVentaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                upsert: {
                    args: Prisma.DetalleVentaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                aggregate: {
                    args: Prisma.DetalleVentaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalleVenta>;
                };
                groupBy: {
                    args: Prisma.DetalleVentaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleVentaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetalleVentaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleVentaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly apellido: "apellido";
    readonly email: "email";
    readonly password: "password";
    readonly rol: "rol";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly nombre: "nombre";
    readonly apellido: "apellido";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const DireccionScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly calle: "calle";
    readonly numero: "numero";
    readonly referencia: "referencia";
    readonly ciudad: "ciudad";
    readonly codigoPostal: "codigoPostal";
    readonly activa: "activa";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activa: "activa";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const ProductoScalarFieldEnum: {
    readonly id: "id";
    readonly categoriaId: "categoriaId";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly costoAdquisicion: "costoAdquisicion";
    readonly precioVenta: "precioVenta";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const InventarioScalarFieldEnum: {
    readonly id: "id";
    readonly productoId: "productoId";
    readonly stock: "stock";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum];
export declare const MovimientoInventarioScalarFieldEnum: {
    readonly id: "id";
    readonly inventarioId: "inventarioId";
    readonly usuarioId: "usuarioId";
    readonly detalleVentaId: "detalleVentaId";
    readonly tipo: "tipo";
    readonly cantidad: "cantidad";
    readonly motivo: "motivo";
    readonly referencia: "referencia";
    readonly fecha: "fecha";
    readonly creadoEn: "creadoEn";
};
export type MovimientoInventarioScalarFieldEnum = (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum];
export declare const DescuentoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly tipo: "tipo";
    readonly porcentaje: "porcentaje";
    readonly monto: "monto";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type DescuentoScalarFieldEnum = (typeof DescuentoScalarFieldEnum)[keyof typeof DescuentoScalarFieldEnum];
export declare const ProductoDescuentoScalarFieldEnum: {
    readonly id: "id";
    readonly productoId: "productoId";
    readonly descuentoId: "descuentoId";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type ProductoDescuentoScalarFieldEnum = (typeof ProductoDescuentoScalarFieldEnum)[keyof typeof ProductoDescuentoScalarFieldEnum];
export declare const CarritoScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly activo: "activo";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum];
export declare const DetalleCarritoScalarFieldEnum: {
    readonly id: "id";
    readonly carritoId: "carritoId";
    readonly productoId: "productoId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type DetalleCarritoScalarFieldEnum = (typeof DetalleCarritoScalarFieldEnum)[keyof typeof DetalleCarritoScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly direccionId: "direccionId";
    readonly estado: "estado";
    readonly total: "total";
    readonly metodoPago: "metodoPago";
    readonly observaciones: "observaciones";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const DetallePedidoScalarFieldEnum: {
    readonly id: "id";
    readonly pedidoId: "pedidoId";
    readonly productoId: "productoId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly descuento: "descuento";
    readonly subtotal: "subtotal";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type DetallePedidoScalarFieldEnum = (typeof DetallePedidoScalarFieldEnum)[keyof typeof DetallePedidoScalarFieldEnum];
export declare const CajaScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly fechaApertura: "fechaApertura";
    readonly fechaCierre: "fechaCierre";
    readonly montoInicial: "montoInicial";
    readonly montoEsperado: "montoEsperado";
    readonly montoContado: "montoContado";
    readonly diferencia: "diferencia";
    readonly estado: "estado";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type CajaScalarFieldEnum = (typeof CajaScalarFieldEnum)[keyof typeof CajaScalarFieldEnum];
export declare const VentaScalarFieldEnum: {
    readonly id: "id";
    readonly cajaId: "cajaId";
    readonly usuarioId: "usuarioId";
    readonly clienteId: "clienteId";
    readonly fecha: "fecha";
    readonly subtotal: "subtotal";
    readonly descuento: "descuento";
    readonly total: "total";
    readonly metodoPago: "metodoPago";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum];
export declare const DetalleVentaScalarFieldEnum: {
    readonly id: "id";
    readonly ventaId: "ventaId";
    readonly productoId: "productoId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly descuento: "descuento";
    readonly subtotal: "subtotal";
    readonly creadoEn: "creadoEn";
    readonly actualizadoEn: "actualizadoEn";
};
export type DetalleVentaScalarFieldEnum = (typeof DetalleVentaScalarFieldEnum)[keyof typeof DetalleVentaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>;
export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento'>;
export type ListEnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento[]'>;
export type EnumTipoDescuentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDescuento'>;
export type ListEnumTipoDescuentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDescuento[]'>;
export type EnumEstadoPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPedido'>;
export type ListEnumEstadoPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPedido[]'>;
export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>;
export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>;
export type EnumEstadoCajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCaja'>;
export type ListEnumEstadoCajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCaja[]'>;
export type EnumEstadoVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVenta'>;
export type ListEnumEstadoVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVenta[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    cliente?: Prisma.ClienteOmit;
    direccion?: Prisma.DireccionOmit;
    categoria?: Prisma.CategoriaOmit;
    producto?: Prisma.ProductoOmit;
    inventario?: Prisma.InventarioOmit;
    movimientoInventario?: Prisma.MovimientoInventarioOmit;
    descuento?: Prisma.DescuentoOmit;
    productoDescuento?: Prisma.ProductoDescuentoOmit;
    carrito?: Prisma.CarritoOmit;
    detalleCarrito?: Prisma.DetalleCarritoOmit;
    pedido?: Prisma.PedidoOmit;
    detallePedido?: Prisma.DetallePedidoOmit;
    caja?: Prisma.CajaOmit;
    venta?: Prisma.VentaOmit;
    detalleVenta?: Prisma.DetalleVentaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
