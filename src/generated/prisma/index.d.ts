
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Campanha
 * 
 */
export type Campanha = $Result.DefaultSelection<Prisma.$CampanhaPayload>
/**
 * Model Doacao
 * 
 */
export type Doacao = $Result.DefaultSelection<Prisma.$DoacaoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Local
 * 
 */
export type Local = $Result.DefaultSelection<Prisma.$LocalPayload>
/**
 * Model UsuarioDoacao
 * 
 */
export type UsuarioDoacao = $Result.DefaultSelection<Prisma.$UsuarioDoacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoProduto: {
  ANIMAL: 'ANIMAL',
  LIVRO: 'LIVRO',
  ROUPA: 'ROUPA',
  LUGAR: 'LUGAR',
  ELETRONICO: 'ELETRONICO'
};

export type TipoProduto = (typeof TipoProduto)[keyof typeof TipoProduto]


export const StatusDoacao: {
  PENDENTE: 'PENDENTE',
  FEITA: 'FEITA'
};

export type StatusDoacao = (typeof StatusDoacao)[keyof typeof StatusDoacao]

}

export type TipoProduto = $Enums.TipoProduto

export const TipoProduto: typeof $Enums.TipoProduto

export type StatusDoacao = $Enums.StatusDoacao

export const StatusDoacao: typeof $Enums.StatusDoacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campanha`: Exposes CRUD operations for the **Campanha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campanhas
    * const campanhas = await prisma.campanha.findMany()
    * ```
    */
  get campanha(): Prisma.CampanhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doacao`: Exposes CRUD operations for the **Doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doacaos
    * const doacaos = await prisma.doacao.findMany()
    * ```
    */
  get doacao(): Prisma.DoacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.local`: Exposes CRUD operations for the **Local** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locals
    * const locals = await prisma.local.findMany()
    * ```
    */
  get local(): Prisma.LocalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioDoacao`: Exposes CRUD operations for the **UsuarioDoacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioDoacaos
    * const usuarioDoacaos = await prisma.usuarioDoacao.findMany()
    * ```
    */
  get usuarioDoacao(): Prisma.UsuarioDoacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Campanha: 'Campanha',
    Doacao: 'Doacao',
    Categoria: 'Categoria',
    Local: 'Local',
    UsuarioDoacao: 'UsuarioDoacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "campanha" | "doacao" | "categoria" | "local" | "usuarioDoacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Campanha: {
        payload: Prisma.$CampanhaPayload<ExtArgs>
        fields: Prisma.CampanhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampanhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampanhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findFirst: {
            args: Prisma.CampanhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampanhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findMany: {
            args: Prisma.CampanhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          create: {
            args: Prisma.CampanhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          createMany: {
            args: Prisma.CampanhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampanhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          delete: {
            args: Prisma.CampanhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          update: {
            args: Prisma.CampanhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          deleteMany: {
            args: Prisma.CampanhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampanhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampanhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          upsert: {
            args: Prisma.CampanhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          aggregate: {
            args: Prisma.CampanhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampanha>
          }
          groupBy: {
            args: Prisma.CampanhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampanhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampanhaCountArgs<ExtArgs>
            result: $Utils.Optional<CampanhaCountAggregateOutputType> | number
          }
        }
      }
      Doacao: {
        payload: Prisma.$DoacaoPayload<ExtArgs>
        fields: Prisma.DoacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findFirst: {
            args: Prisma.DoacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findMany: {
            args: Prisma.DoacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          create: {
            args: Prisma.DoacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          createMany: {
            args: Prisma.DoacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          delete: {
            args: Prisma.DoacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          update: {
            args: Prisma.DoacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          deleteMany: {
            args: Prisma.DoacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          upsert: {
            args: Prisma.DoacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          aggregate: {
            args: Prisma.DoacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoacao>
          }
          groupBy: {
            args: Prisma.DoacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoacaoCountArgs<ExtArgs>
            result: $Utils.Optional<DoacaoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Local: {
        payload: Prisma.$LocalPayload<ExtArgs>
        fields: Prisma.LocalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findFirst: {
            args: Prisma.LocalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findMany: {
            args: Prisma.LocalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          create: {
            args: Prisma.LocalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          createMany: {
            args: Prisma.LocalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          delete: {
            args: Prisma.LocalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          update: {
            args: Prisma.LocalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          deleteMany: {
            args: Prisma.LocalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          upsert: {
            args: Prisma.LocalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          aggregate: {
            args: Prisma.LocalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocal>
          }
          groupBy: {
            args: Prisma.LocalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalCountArgs<ExtArgs>
            result: $Utils.Optional<LocalCountAggregateOutputType> | number
          }
        }
      }
      UsuarioDoacao: {
        payload: Prisma.$UsuarioDoacaoPayload<ExtArgs>
        fields: Prisma.UsuarioDoacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioDoacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioDoacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          findFirst: {
            args: Prisma.UsuarioDoacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioDoacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          findMany: {
            args: Prisma.UsuarioDoacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>[]
          }
          create: {
            args: Prisma.UsuarioDoacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          createMany: {
            args: Prisma.UsuarioDoacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioDoacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDoacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          update: {
            args: Prisma.UsuarioDoacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDoacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioDoacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioDoacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioDoacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDoacaoPayload>
          }
          aggregate: {
            args: Prisma.UsuarioDoacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioDoacao>
          }
          groupBy: {
            args: Prisma.UsuarioDoacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDoacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioDoacaoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDoacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    campanha?: CampanhaOmit
    doacao?: DoacaoOmit
    categoria?: CategoriaOmit
    local?: LocalOmit
    usuarioDoacao?: UsuarioDoacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    doacoes: number
    campanhas: number
    usuarioDoacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | UsuarioCountOutputTypeCountDoacoesArgs
    campanhas?: boolean | UsuarioCountOutputTypeCountCampanhasArgs
    usuarioDoacoes?: boolean | UsuarioCountOutputTypeCountUsuarioDoacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuarioDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDoacaoWhereInput
  }


  /**
   * Count Type CampanhaCountOutputType
   */

  export type CampanhaCountOutputType = {
    doacoes: number
  }

  export type CampanhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | CampanhaCountOutputTypeCountDoacoesArgs
  }

  // Custom InputTypes
  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaCountOutputType
     */
    select?: CampanhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }


  /**
   * Count Type DoacaoCountOutputType
   */

  export type DoacaoCountOutputType = {
    usuarioDoacoes: number
  }

  export type DoacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioDoacoes?: boolean | DoacaoCountOutputTypeCountUsuarioDoacoesArgs
  }

  // Custom InputTypes
  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoacaoCountOutputType
     */
    select?: DoacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeCountUsuarioDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDoacaoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    doacoes: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | CategoriaCountOutputTypeCountDoacoesArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }


  /**
   * Count Type LocalCountOutputType
   */

  export type LocalCountOutputType = {
    doacoes: number
  }

  export type LocalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | LocalCountOutputTypeCountDoacoesArgs
  }

  // Custom InputTypes
  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalCountOutputType
     */
    select?: LocalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    doacoes?: boolean | Usuario$doacoesArgs<ExtArgs>
    campanhas?: boolean | Usuario$campanhasArgs<ExtArgs>
    usuarioDoacoes?: boolean | Usuario$usuarioDoacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | Usuario$doacoesArgs<ExtArgs>
    campanhas?: boolean | Usuario$campanhasArgs<ExtArgs>
    usuarioDoacoes?: boolean | Usuario$usuarioDoacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
      campanhas: Prisma.$CampanhaPayload<ExtArgs>[]
      usuarioDoacoes: Prisma.$UsuarioDoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacoes<T extends Usuario$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campanhas<T extends Usuario$campanhasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$campanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarioDoacoes<T extends Usuario$usuarioDoacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$usuarioDoacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.doacoes
   */
  export type Usuario$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Usuario.campanhas
   */
  export type Usuario$campanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    where?: CampanhaWhereInput
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    cursor?: CampanhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Usuario.usuarioDoacoes
   */
  export type Usuario$usuarioDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    where?: UsuarioDoacaoWhereInput
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    cursor?: UsuarioDoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDoacaoScalarFieldEnum | UsuarioDoacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Campanha
   */

  export type AggregateCampanha = {
    _count: CampanhaCountAggregateOutputType | null
    _avg: CampanhaAvgAggregateOutputType | null
    _sum: CampanhaSumAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  export type CampanhaAvgAggregateOutputType = {
    meta: number | null
  }

  export type CampanhaSumAggregateOutputType = {
    meta: number | null
  }

  export type CampanhaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    meta: number | null
    criadaEm: Date | null
    criadorId: string | null
  }

  export type CampanhaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    meta: number | null
    criadaEm: Date | null
    criadorId: string | null
  }

  export type CampanhaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    meta: number
    criadaEm: number
    criadorId: number
    _all: number
  }


  export type CampanhaAvgAggregateInputType = {
    meta?: true
  }

  export type CampanhaSumAggregateInputType = {
    meta?: true
  }

  export type CampanhaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    meta?: true
    criadaEm?: true
    criadorId?: true
  }

  export type CampanhaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    meta?: true
    criadaEm?: true
    criadorId?: true
  }

  export type CampanhaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    meta?: true
    criadaEm?: true
    criadorId?: true
    _all?: true
  }

  export type CampanhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanha to aggregate.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campanhas
    **/
    _count?: true | CampanhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampanhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampanhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaMaxAggregateInputType
  }

  export type GetCampanhaAggregateType<T extends CampanhaAggregateArgs> = {
        [P in keyof T & keyof AggregateCampanha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampanha[P]>
      : GetScalarType<T[P], AggregateCampanha[P]>
  }




  export type CampanhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaWhereInput
    orderBy?: CampanhaOrderByWithAggregationInput | CampanhaOrderByWithAggregationInput[]
    by: CampanhaScalarFieldEnum[] | CampanhaScalarFieldEnum
    having?: CampanhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampanhaCountAggregateInputType | true
    _avg?: CampanhaAvgAggregateInputType
    _sum?: CampanhaSumAggregateInputType
    _min?: CampanhaMinAggregateInputType
    _max?: CampanhaMaxAggregateInputType
  }

  export type CampanhaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    meta: number
    criadaEm: Date
    criadorId: string
    _count: CampanhaCountAggregateOutputType | null
    _avg: CampanhaAvgAggregateOutputType | null
    _sum: CampanhaSumAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  type GetCampanhaGroupByPayload<T extends CampanhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampanhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampanhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
            : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
        }
      >
    >


  export type CampanhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    meta?: boolean
    criadaEm?: boolean
    criadorId?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacoes?: boolean | Campanha$doacoesArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    meta?: boolean
    criadaEm?: boolean
    criadorId?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    meta?: boolean
    criadaEm?: boolean
    criadorId?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    meta?: boolean
    criadaEm?: boolean
    criadorId?: boolean
  }

  export type CampanhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "meta" | "criadaEm" | "criadorId", ExtArgs["result"]["campanha"]>
  export type CampanhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacoes?: boolean | Campanha$doacoesArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampanhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CampanhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CampanhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campanha"
    objects: {
      criador: Prisma.$UsuarioPayload<ExtArgs>
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      meta: number
      criadaEm: Date
      criadorId: string
    }, ExtArgs["result"]["campanha"]>
    composites: {}
  }

  type CampanhaGetPayload<S extends boolean | null | undefined | CampanhaDefaultArgs> = $Result.GetResult<Prisma.$CampanhaPayload, S>

  type CampanhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampanhaCountAggregateInputType | true
    }

  export interface CampanhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campanha'], meta: { name: 'Campanha' } }
    /**
     * Find zero or one Campanha that matches the filter.
     * @param {CampanhaFindUniqueArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaFindUniqueArgs>(args: SelectSubset<T, CampanhaFindUniqueArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaFindUniqueOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaFindUniqueOrThrowArgs>(args: SelectSubset<T, CampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaFindFirstArgs>(args?: SelectSubset<T, CampanhaFindFirstArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaFindFirstOrThrowArgs>(args?: SelectSubset<T, CampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campanhas
     * const campanhas = await prisma.campanha.findMany()
     * 
     * // Get first 10 Campanhas
     * const campanhas = await prisma.campanha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campanhaWithIdOnly = await prisma.campanha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampanhaFindManyArgs>(args?: SelectSubset<T, CampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campanha.
     * @param {CampanhaCreateArgs} args - Arguments to create a Campanha.
     * @example
     * // Create one Campanha
     * const Campanha = await prisma.campanha.create({
     *   data: {
     *     // ... data to create a Campanha
     *   }
     * })
     * 
     */
    create<T extends CampanhaCreateArgs>(args: SelectSubset<T, CampanhaCreateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campanhas.
     * @param {CampanhaCreateManyArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampanhaCreateManyArgs>(args?: SelectSubset<T, CampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campanhas and returns the data saved in the database.
     * @param {CampanhaCreateManyAndReturnArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampanhaCreateManyAndReturnArgs>(args?: SelectSubset<T, CampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campanha.
     * @param {CampanhaDeleteArgs} args - Arguments to delete one Campanha.
     * @example
     * // Delete one Campanha
     * const Campanha = await prisma.campanha.delete({
     *   where: {
     *     // ... filter to delete one Campanha
     *   }
     * })
     * 
     */
    delete<T extends CampanhaDeleteArgs>(args: SelectSubset<T, CampanhaDeleteArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campanha.
     * @param {CampanhaUpdateArgs} args - Arguments to update one Campanha.
     * @example
     * // Update one Campanha
     * const campanha = await prisma.campanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampanhaUpdateArgs>(args: SelectSubset<T, CampanhaUpdateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campanhas.
     * @param {CampanhaDeleteManyArgs} args - Arguments to filter Campanhas to delete.
     * @example
     * // Delete a few Campanhas
     * const { count } = await prisma.campanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampanhaDeleteManyArgs>(args?: SelectSubset<T, CampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampanhaUpdateManyArgs>(args: SelectSubset<T, CampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas and returns the data updated in the database.
     * @param {CampanhaUpdateManyAndReturnArgs} args - Arguments to update many Campanhas.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampanhaUpdateManyAndReturnArgs>(args: SelectSubset<T, CampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campanha.
     * @param {CampanhaUpsertArgs} args - Arguments to update or create a Campanha.
     * @example
     * // Update or create a Campanha
     * const campanha = await prisma.campanha.upsert({
     *   create: {
     *     // ... data to create a Campanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campanha we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaUpsertArgs>(args: SelectSubset<T, CampanhaUpsertArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaCountArgs} args - Arguments to filter Campanhas to count.
     * @example
     * // Count the number of Campanhas
     * const count = await prisma.campanha.count({
     *   where: {
     *     // ... the filter for the Campanhas we want to count
     *   }
     * })
    **/
    count<T extends CampanhaCountArgs>(
      args?: Subset<T, CampanhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampanhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampanhaAggregateArgs>(args: Subset<T, CampanhaAggregateArgs>): Prisma.PrismaPromise<GetCampanhaAggregateType<T>>

    /**
     * Group by Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampanhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampanhaGroupByArgs['orderBy'] }
        : { orderBy?: CampanhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campanha model
   */
  readonly fields: CampanhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campanha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampanhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doacoes<T extends Campanha$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Campanha$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campanha model
   */
  interface CampanhaFieldRefs {
    readonly id: FieldRef<"Campanha", 'String'>
    readonly titulo: FieldRef<"Campanha", 'String'>
    readonly descricao: FieldRef<"Campanha", 'String'>
    readonly meta: FieldRef<"Campanha", 'Float'>
    readonly criadaEm: FieldRef<"Campanha", 'DateTime'>
    readonly criadorId: FieldRef<"Campanha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campanha findUnique
   */
  export type CampanhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findUniqueOrThrow
   */
  export type CampanhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findFirst
   */
  export type CampanhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findFirstOrThrow
   */
  export type CampanhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findMany
   */
  export type CampanhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanhas to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha create
   */
  export type CampanhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Campanha.
     */
    data: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
  }

  /**
   * Campanha createMany
   */
  export type CampanhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campanha createManyAndReturn
   */
  export type CampanhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campanha update
   */
  export type CampanhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Campanha.
     */
    data: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
    /**
     * Choose, which Campanha to update.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha updateMany
   */
  export type CampanhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
  }

  /**
   * Campanha updateManyAndReturn
   */
  export type CampanhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campanha upsert
   */
  export type CampanhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Campanha to update in case it exists.
     */
    where: CampanhaWhereUniqueInput
    /**
     * In case the Campanha found by the `where` argument doesn't exist, create a new Campanha with this data.
     */
    create: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
    /**
     * In case the Campanha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
  }

  /**
   * Campanha delete
   */
  export type CampanhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter which Campanha to delete.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha deleteMany
   */
  export type CampanhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanhas to delete
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to delete.
     */
    limit?: number
  }

  /**
   * Campanha.doacoes
   */
  export type Campanha$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Campanha without action
   */
  export type CampanhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
  }


  /**
   * Model Doacao
   */

  export type AggregateDoacao = {
    _count: DoacaoCountAggregateOutputType | null
    _avg: DoacaoAvgAggregateOutputType | null
    _sum: DoacaoSumAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  export type DoacaoAvgAggregateOutputType = {
    valor: number | null
  }

  export type DoacaoSumAggregateOutputType = {
    valor: number | null
  }

  export type DoacaoMinAggregateOutputType = {
    id: string | null
    valor: number | null
    data: Date | null
    tipoProduto: $Enums.TipoProduto | null
    produto: string | null
    usuarioId: string | null
    campanhaId: string | null
    categoriaId: string | null
    status: $Enums.StatusDoacao | null
    localId: string | null
  }

  export type DoacaoMaxAggregateOutputType = {
    id: string | null
    valor: number | null
    data: Date | null
    tipoProduto: $Enums.TipoProduto | null
    produto: string | null
    usuarioId: string | null
    campanhaId: string | null
    categoriaId: string | null
    status: $Enums.StatusDoacao | null
    localId: string | null
  }

  export type DoacaoCountAggregateOutputType = {
    id: number
    valor: number
    data: number
    tipoProduto: number
    produto: number
    usuarioId: number
    campanhaId: number
    categoriaId: number
    status: number
    localId: number
    _all: number
  }


  export type DoacaoAvgAggregateInputType = {
    valor?: true
  }

  export type DoacaoSumAggregateInputType = {
    valor?: true
  }

  export type DoacaoMinAggregateInputType = {
    id?: true
    valor?: true
    data?: true
    tipoProduto?: true
    produto?: true
    usuarioId?: true
    campanhaId?: true
    categoriaId?: true
    status?: true
    localId?: true
  }

  export type DoacaoMaxAggregateInputType = {
    id?: true
    valor?: true
    data?: true
    tipoProduto?: true
    produto?: true
    usuarioId?: true
    campanhaId?: true
    categoriaId?: true
    status?: true
    localId?: true
  }

  export type DoacaoCountAggregateInputType = {
    id?: true
    valor?: true
    data?: true
    tipoProduto?: true
    produto?: true
    usuarioId?: true
    campanhaId?: true
    categoriaId?: true
    status?: true
    localId?: true
    _all?: true
  }

  export type DoacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacao to aggregate.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doacaos
    **/
    _count?: true | DoacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoacaoMaxAggregateInputType
  }

  export type GetDoacaoAggregateType<T extends DoacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDoacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoacao[P]>
      : GetScalarType<T[P], AggregateDoacao[P]>
  }




  export type DoacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithAggregationInput | DoacaoOrderByWithAggregationInput[]
    by: DoacaoScalarFieldEnum[] | DoacaoScalarFieldEnum
    having?: DoacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoacaoCountAggregateInputType | true
    _avg?: DoacaoAvgAggregateInputType
    _sum?: DoacaoSumAggregateInputType
    _min?: DoacaoMinAggregateInputType
    _max?: DoacaoMaxAggregateInputType
  }

  export type DoacaoGroupByOutputType = {
    id: string
    valor: number
    data: Date
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status: $Enums.StatusDoacao
    localId: string
    _count: DoacaoCountAggregateOutputType | null
    _avg: DoacaoAvgAggregateOutputType | null
    _sum: DoacaoSumAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  type GetDoacaoGroupByPayload<T extends DoacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
            : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
        }
      >
    >


  export type DoacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    data?: boolean
    tipoProduto?: boolean
    produto?: boolean
    usuarioId?: boolean
    campanhaId?: boolean
    categoriaId?: boolean
    status?: boolean
    localId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
    usuarioDoacoes?: boolean | Doacao$usuarioDoacoesArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    data?: boolean
    tipoProduto?: boolean
    produto?: boolean
    usuarioId?: boolean
    campanhaId?: boolean
    categoriaId?: boolean
    status?: boolean
    localId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    data?: boolean
    tipoProduto?: boolean
    produto?: boolean
    usuarioId?: boolean
    campanhaId?: boolean
    categoriaId?: boolean
    status?: boolean
    localId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectScalar = {
    id?: boolean
    valor?: boolean
    data?: boolean
    tipoProduto?: boolean
    produto?: boolean
    usuarioId?: boolean
    campanhaId?: boolean
    categoriaId?: boolean
    status?: boolean
    localId?: boolean
  }

  export type DoacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "data" | "tipoProduto" | "produto" | "usuarioId" | "campanhaId" | "categoriaId" | "status" | "localId", ExtArgs["result"]["doacao"]>
  export type DoacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
    usuarioDoacoes?: boolean | Doacao$usuarioDoacoesArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    local?: boolean | LocalDefaultArgs<ExtArgs>
  }

  export type $DoacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      campanha: Prisma.$CampanhaPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      local: Prisma.$LocalPayload<ExtArgs>
      usuarioDoacoes: Prisma.$UsuarioDoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      valor: number
      data: Date
      tipoProduto: $Enums.TipoProduto
      produto: string
      usuarioId: string
      campanhaId: string
      categoriaId: string
      status: $Enums.StatusDoacao
      localId: string
    }, ExtArgs["result"]["doacao"]>
    composites: {}
  }

  type DoacaoGetPayload<S extends boolean | null | undefined | DoacaoDefaultArgs> = $Result.GetResult<Prisma.$DoacaoPayload, S>

  type DoacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoacaoCountAggregateInputType | true
    }

  export interface DoacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doacao'], meta: { name: 'Doacao' } }
    /**
     * Find zero or one Doacao that matches the filter.
     * @param {DoacaoFindUniqueArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoacaoFindUniqueArgs>(args: SelectSubset<T, DoacaoFindUniqueArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoacaoFindUniqueOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DoacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoacaoFindFirstArgs>(args?: SelectSubset<T, DoacaoFindFirstArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DoacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doacaos
     * const doacaos = await prisma.doacao.findMany()
     * 
     * // Get first 10 Doacaos
     * const doacaos = await prisma.doacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doacaoWithIdOnly = await prisma.doacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoacaoFindManyArgs>(args?: SelectSubset<T, DoacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doacao.
     * @param {DoacaoCreateArgs} args - Arguments to create a Doacao.
     * @example
     * // Create one Doacao
     * const Doacao = await prisma.doacao.create({
     *   data: {
     *     // ... data to create a Doacao
     *   }
     * })
     * 
     */
    create<T extends DoacaoCreateArgs>(args: SelectSubset<T, DoacaoCreateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doacaos.
     * @param {DoacaoCreateManyArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoacaoCreateManyArgs>(args?: SelectSubset<T, DoacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doacaos and returns the data saved in the database.
     * @param {DoacaoCreateManyAndReturnArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DoacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doacao.
     * @param {DoacaoDeleteArgs} args - Arguments to delete one Doacao.
     * @example
     * // Delete one Doacao
     * const Doacao = await prisma.doacao.delete({
     *   where: {
     *     // ... filter to delete one Doacao
     *   }
     * })
     * 
     */
    delete<T extends DoacaoDeleteArgs>(args: SelectSubset<T, DoacaoDeleteArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doacao.
     * @param {DoacaoUpdateArgs} args - Arguments to update one Doacao.
     * @example
     * // Update one Doacao
     * const doacao = await prisma.doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoacaoUpdateArgs>(args: SelectSubset<T, DoacaoUpdateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doacaos.
     * @param {DoacaoDeleteManyArgs} args - Arguments to filter Doacaos to delete.
     * @example
     * // Delete a few Doacaos
     * const { count } = await prisma.doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoacaoDeleteManyArgs>(args?: SelectSubset<T, DoacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoacaoUpdateManyArgs>(args: SelectSubset<T, DoacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos and returns the data updated in the database.
     * @param {DoacaoUpdateManyAndReturnArgs} args - Arguments to update many Doacaos.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DoacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doacao.
     * @param {DoacaoUpsertArgs} args - Arguments to update or create a Doacao.
     * @example
     * // Update or create a Doacao
     * const doacao = await prisma.doacao.upsert({
     *   create: {
     *     // ... data to create a Doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doacao we want to update
     *   }
     * })
     */
    upsert<T extends DoacaoUpsertArgs>(args: SelectSubset<T, DoacaoUpsertArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoCountArgs} args - Arguments to filter Doacaos to count.
     * @example
     * // Count the number of Doacaos
     * const count = await prisma.doacao.count({
     *   where: {
     *     // ... the filter for the Doacaos we want to count
     *   }
     * })
    **/
    count<T extends DoacaoCountArgs>(
      args?: Subset<T, DoacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoacaoAggregateArgs>(args: Subset<T, DoacaoAggregateArgs>): Prisma.PrismaPromise<GetDoacaoAggregateType<T>>

    /**
     * Group by Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoacaoGroupByArgs['orderBy'] }
        : { orderBy?: DoacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doacao model
   */
  readonly fields: DoacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campanha<T extends CampanhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampanhaDefaultArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    local<T extends LocalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalDefaultArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarioDoacoes<T extends Doacao$usuarioDoacoesArgs<ExtArgs> = {}>(args?: Subset<T, Doacao$usuarioDoacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doacao model
   */
  interface DoacaoFieldRefs {
    readonly id: FieldRef<"Doacao", 'String'>
    readonly valor: FieldRef<"Doacao", 'Float'>
    readonly data: FieldRef<"Doacao", 'DateTime'>
    readonly tipoProduto: FieldRef<"Doacao", 'TipoProduto'>
    readonly produto: FieldRef<"Doacao", 'String'>
    readonly usuarioId: FieldRef<"Doacao", 'String'>
    readonly campanhaId: FieldRef<"Doacao", 'String'>
    readonly categoriaId: FieldRef<"Doacao", 'String'>
    readonly status: FieldRef<"Doacao", 'StatusDoacao'>
    readonly localId: FieldRef<"Doacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doacao findUnique
   */
  export type DoacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findUniqueOrThrow
   */
  export type DoacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findFirst
   */
  export type DoacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findFirstOrThrow
   */
  export type DoacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findMany
   */
  export type DoacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacaos to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao create
   */
  export type DoacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Doacao.
     */
    data: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
  }

  /**
   * Doacao createMany
   */
  export type DoacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doacao createManyAndReturn
   */
  export type DoacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao update
   */
  export type DoacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Doacao.
     */
    data: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
    /**
     * Choose, which Doacao to update.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao updateMany
   */
  export type DoacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
  }

  /**
   * Doacao updateManyAndReturn
   */
  export type DoacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao upsert
   */
  export type DoacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Doacao to update in case it exists.
     */
    where: DoacaoWhereUniqueInput
    /**
     * In case the Doacao found by the `where` argument doesn't exist, create a new Doacao with this data.
     */
    create: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
    /**
     * In case the Doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
  }

  /**
   * Doacao delete
   */
  export type DoacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter which Doacao to delete.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao deleteMany
   */
  export type DoacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacaos to delete
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to delete.
     */
    limit?: number
  }

  /**
   * Doacao.usuarioDoacoes
   */
  export type Doacao$usuarioDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    where?: UsuarioDoacaoWhereInput
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    cursor?: UsuarioDoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDoacaoScalarFieldEnum | UsuarioDoacaoScalarFieldEnum[]
  }

  /**
   * Doacao without action
   */
  export type DoacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nome: string
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    doacoes?: boolean | Categoria$doacoesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | Categoria$doacoesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacoes<T extends Categoria$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nome: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.doacoes
   */
  export type Categoria$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Local
   */

  export type AggregateLocal = {
    _count: LocalCountAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  export type LocalMinAggregateOutputType = {
    id: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
  }

  export type LocalMaxAggregateOutputType = {
    id: string | null
    cidade: string | null
    estado: string | null
    pais: string | null
  }

  export type LocalCountAggregateOutputType = {
    id: number
    cidade: number
    estado: number
    pais: number
    _all: number
  }


  export type LocalMinAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    pais?: true
  }

  export type LocalMaxAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    pais?: true
  }

  export type LocalCountAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    pais?: true
    _all?: true
  }

  export type LocalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Local to aggregate.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locals
    **/
    _count?: true | LocalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalMaxAggregateInputType
  }

  export type GetLocalAggregateType<T extends LocalAggregateArgs> = {
        [P in keyof T & keyof AggregateLocal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocal[P]>
      : GetScalarType<T[P], AggregateLocal[P]>
  }




  export type LocalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalWhereInput
    orderBy?: LocalOrderByWithAggregationInput | LocalOrderByWithAggregationInput[]
    by: LocalScalarFieldEnum[] | LocalScalarFieldEnum
    having?: LocalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalCountAggregateInputType | true
    _min?: LocalMinAggregateInputType
    _max?: LocalMaxAggregateInputType
  }

  export type LocalGroupByOutputType = {
    id: string
    cidade: string
    estado: string
    pais: string
    _count: LocalCountAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  type GetLocalGroupByPayload<T extends LocalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalGroupByOutputType[P]>
            : GetScalarType<T[P], LocalGroupByOutputType[P]>
        }
      >
    >


  export type LocalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
    doacoes?: boolean | Local$doacoesArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local"]>

  export type LocalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
  }, ExtArgs["result"]["local"]>

  export type LocalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
  }, ExtArgs["result"]["local"]>

  export type LocalSelectScalar = {
    id?: boolean
    cidade?: boolean
    estado?: boolean
    pais?: boolean
  }

  export type LocalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cidade" | "estado" | "pais", ExtArgs["result"]["local"]>
  export type LocalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | Local$doacoesArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Local"
    objects: {
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cidade: string
      estado: string
      pais: string
    }, ExtArgs["result"]["local"]>
    composites: {}
  }

  type LocalGetPayload<S extends boolean | null | undefined | LocalDefaultArgs> = $Result.GetResult<Prisma.$LocalPayload, S>

  type LocalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalCountAggregateInputType | true
    }

  export interface LocalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Local'], meta: { name: 'Local' } }
    /**
     * Find zero or one Local that matches the filter.
     * @param {LocalFindUniqueArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalFindUniqueArgs>(args: SelectSubset<T, LocalFindUniqueArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Local that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalFindUniqueOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalFindFirstArgs>(args?: SelectSubset<T, LocalFindFirstArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locals
     * const locals = await prisma.local.findMany()
     * 
     * // Get first 10 Locals
     * const locals = await prisma.local.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localWithIdOnly = await prisma.local.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalFindManyArgs>(args?: SelectSubset<T, LocalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Local.
     * @param {LocalCreateArgs} args - Arguments to create a Local.
     * @example
     * // Create one Local
     * const Local = await prisma.local.create({
     *   data: {
     *     // ... data to create a Local
     *   }
     * })
     * 
     */
    create<T extends LocalCreateArgs>(args: SelectSubset<T, LocalCreateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locals.
     * @param {LocalCreateManyArgs} args - Arguments to create many Locals.
     * @example
     * // Create many Locals
     * const local = await prisma.local.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalCreateManyArgs>(args?: SelectSubset<T, LocalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locals and returns the data saved in the database.
     * @param {LocalCreateManyAndReturnArgs} args - Arguments to create many Locals.
     * @example
     * // Create many Locals
     * const local = await prisma.local.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locals and only return the `id`
     * const localWithIdOnly = await prisma.local.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Local.
     * @param {LocalDeleteArgs} args - Arguments to delete one Local.
     * @example
     * // Delete one Local
     * const Local = await prisma.local.delete({
     *   where: {
     *     // ... filter to delete one Local
     *   }
     * })
     * 
     */
    delete<T extends LocalDeleteArgs>(args: SelectSubset<T, LocalDeleteArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Local.
     * @param {LocalUpdateArgs} args - Arguments to update one Local.
     * @example
     * // Update one Local
     * const local = await prisma.local.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalUpdateArgs>(args: SelectSubset<T, LocalUpdateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locals.
     * @param {LocalDeleteManyArgs} args - Arguments to filter Locals to delete.
     * @example
     * // Delete a few Locals
     * const { count } = await prisma.local.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalDeleteManyArgs>(args?: SelectSubset<T, LocalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalUpdateManyArgs>(args: SelectSubset<T, LocalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals and returns the data updated in the database.
     * @param {LocalUpdateManyAndReturnArgs} args - Arguments to update many Locals.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locals and only return the `id`
     * const localWithIdOnly = await prisma.local.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Local.
     * @param {LocalUpsertArgs} args - Arguments to update or create a Local.
     * @example
     * // Update or create a Local
     * const local = await prisma.local.upsert({
     *   create: {
     *     // ... data to create a Local
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Local we want to update
     *   }
     * })
     */
    upsert<T extends LocalUpsertArgs>(args: SelectSubset<T, LocalUpsertArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalCountArgs} args - Arguments to filter Locals to count.
     * @example
     * // Count the number of Locals
     * const count = await prisma.local.count({
     *   where: {
     *     // ... the filter for the Locals we want to count
     *   }
     * })
    **/
    count<T extends LocalCountArgs>(
      args?: Subset<T, LocalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalAggregateArgs>(args: Subset<T, LocalAggregateArgs>): Prisma.PrismaPromise<GetLocalAggregateType<T>>

    /**
     * Group by Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalGroupByArgs['orderBy'] }
        : { orderBy?: LocalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Local model
   */
  readonly fields: LocalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Local.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacoes<T extends Local$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Local$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Local model
   */
  interface LocalFieldRefs {
    readonly id: FieldRef<"Local", 'String'>
    readonly cidade: FieldRef<"Local", 'String'>
    readonly estado: FieldRef<"Local", 'String'>
    readonly pais: FieldRef<"Local", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Local findUnique
   */
  export type LocalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findUniqueOrThrow
   */
  export type LocalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findFirst
   */
  export type LocalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findFirstOrThrow
   */
  export type LocalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findMany
   */
  export type LocalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Locals to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local create
   */
  export type LocalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to create a Local.
     */
    data: XOR<LocalCreateInput, LocalUncheckedCreateInput>
  }

  /**
   * Local createMany
   */
  export type LocalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locals.
     */
    data: LocalCreateManyInput | LocalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Local createManyAndReturn
   */
  export type LocalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * The data used to create many Locals.
     */
    data: LocalCreateManyInput | LocalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Local update
   */
  export type LocalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to update a Local.
     */
    data: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
    /**
     * Choose, which Local to update.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local updateMany
   */
  export type LocalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locals.
     */
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to update.
     */
    limit?: number
  }

  /**
   * Local updateManyAndReturn
   */
  export type LocalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * The data used to update Locals.
     */
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to update.
     */
    limit?: number
  }

  /**
   * Local upsert
   */
  export type LocalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The filter to search for the Local to update in case it exists.
     */
    where: LocalWhereUniqueInput
    /**
     * In case the Local found by the `where` argument doesn't exist, create a new Local with this data.
     */
    create: XOR<LocalCreateInput, LocalUncheckedCreateInput>
    /**
     * In case the Local was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
  }

  /**
   * Local delete
   */
  export type LocalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter which Local to delete.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local deleteMany
   */
  export type LocalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locals to delete
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to delete.
     */
    limit?: number
  }

  /**
   * Local.doacoes
   */
  export type Local$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Local without action
   */
  export type LocalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioDoacao
   */

  export type AggregateUsuarioDoacao = {
    _count: UsuarioDoacaoCountAggregateOutputType | null
    _min: UsuarioDoacaoMinAggregateOutputType | null
    _max: UsuarioDoacaoMaxAggregateOutputType | null
  }

  export type UsuarioDoacaoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    doacaoId: string | null
    data: Date | null
  }

  export type UsuarioDoacaoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    doacaoId: string | null
    data: Date | null
  }

  export type UsuarioDoacaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    doacaoId: number
    data: number
    _all: number
  }


  export type UsuarioDoacaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    doacaoId?: true
    data?: true
  }

  export type UsuarioDoacaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    doacaoId?: true
    data?: true
  }

  export type UsuarioDoacaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    doacaoId?: true
    data?: true
    _all?: true
  }

  export type UsuarioDoacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDoacao to aggregate.
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDoacaos to fetch.
     */
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioDoacaos
    **/
    _count?: true | UsuarioDoacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioDoacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioDoacaoMaxAggregateInputType
  }

  export type GetUsuarioDoacaoAggregateType<T extends UsuarioDoacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioDoacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioDoacao[P]>
      : GetScalarType<T[P], AggregateUsuarioDoacao[P]>
  }




  export type UsuarioDoacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDoacaoWhereInput
    orderBy?: UsuarioDoacaoOrderByWithAggregationInput | UsuarioDoacaoOrderByWithAggregationInput[]
    by: UsuarioDoacaoScalarFieldEnum[] | UsuarioDoacaoScalarFieldEnum
    having?: UsuarioDoacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioDoacaoCountAggregateInputType | true
    _min?: UsuarioDoacaoMinAggregateInputType
    _max?: UsuarioDoacaoMaxAggregateInputType
  }

  export type UsuarioDoacaoGroupByOutputType = {
    id: string
    usuarioId: string
    doacaoId: string
    data: Date
    _count: UsuarioDoacaoCountAggregateOutputType | null
    _min: UsuarioDoacaoMinAggregateOutputType | null
    _max: UsuarioDoacaoMaxAggregateOutputType | null
  }

  type GetUsuarioDoacaoGroupByPayload<T extends UsuarioDoacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioDoacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioDoacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioDoacaoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioDoacaoGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioDoacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    doacaoId?: boolean
    data?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDoacao"]>

  export type UsuarioDoacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    doacaoId?: boolean
    data?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDoacao"]>

  export type UsuarioDoacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    doacaoId?: boolean
    data?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDoacao"]>

  export type UsuarioDoacaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    doacaoId?: boolean
    data?: boolean
  }

  export type UsuarioDoacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "doacaoId" | "data", ExtArgs["result"]["usuarioDoacao"]>
  export type UsuarioDoacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }
  export type UsuarioDoacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }
  export type UsuarioDoacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
  }

  export type $UsuarioDoacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioDoacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      doacao: Prisma.$DoacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      doacaoId: string
      data: Date
    }, ExtArgs["result"]["usuarioDoacao"]>
    composites: {}
  }

  type UsuarioDoacaoGetPayload<S extends boolean | null | undefined | UsuarioDoacaoDefaultArgs> = $Result.GetResult<Prisma.$UsuarioDoacaoPayload, S>

  type UsuarioDoacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioDoacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioDoacaoCountAggregateInputType | true
    }

  export interface UsuarioDoacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioDoacao'], meta: { name: 'UsuarioDoacao' } }
    /**
     * Find zero or one UsuarioDoacao that matches the filter.
     * @param {UsuarioDoacaoFindUniqueArgs} args - Arguments to find a UsuarioDoacao
     * @example
     * // Get one UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioDoacaoFindUniqueArgs>(args: SelectSubset<T, UsuarioDoacaoFindUniqueArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioDoacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioDoacaoFindUniqueOrThrowArgs} args - Arguments to find a UsuarioDoacao
     * @example
     * // Get one UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioDoacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioDoacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDoacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoFindFirstArgs} args - Arguments to find a UsuarioDoacao
     * @example
     * // Get one UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioDoacaoFindFirstArgs>(args?: SelectSubset<T, UsuarioDoacaoFindFirstArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDoacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoFindFirstOrThrowArgs} args - Arguments to find a UsuarioDoacao
     * @example
     * // Get one UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioDoacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioDoacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioDoacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioDoacaos
     * const usuarioDoacaos = await prisma.usuarioDoacao.findMany()
     * 
     * // Get first 10 UsuarioDoacaos
     * const usuarioDoacaos = await prisma.usuarioDoacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioDoacaoWithIdOnly = await prisma.usuarioDoacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioDoacaoFindManyArgs>(args?: SelectSubset<T, UsuarioDoacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioDoacao.
     * @param {UsuarioDoacaoCreateArgs} args - Arguments to create a UsuarioDoacao.
     * @example
     * // Create one UsuarioDoacao
     * const UsuarioDoacao = await prisma.usuarioDoacao.create({
     *   data: {
     *     // ... data to create a UsuarioDoacao
     *   }
     * })
     * 
     */
    create<T extends UsuarioDoacaoCreateArgs>(args: SelectSubset<T, UsuarioDoacaoCreateArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioDoacaos.
     * @param {UsuarioDoacaoCreateManyArgs} args - Arguments to create many UsuarioDoacaos.
     * @example
     * // Create many UsuarioDoacaos
     * const usuarioDoacao = await prisma.usuarioDoacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioDoacaoCreateManyArgs>(args?: SelectSubset<T, UsuarioDoacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioDoacaos and returns the data saved in the database.
     * @param {UsuarioDoacaoCreateManyAndReturnArgs} args - Arguments to create many UsuarioDoacaos.
     * @example
     * // Create many UsuarioDoacaos
     * const usuarioDoacao = await prisma.usuarioDoacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioDoacaos and only return the `id`
     * const usuarioDoacaoWithIdOnly = await prisma.usuarioDoacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioDoacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioDoacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioDoacao.
     * @param {UsuarioDoacaoDeleteArgs} args - Arguments to delete one UsuarioDoacao.
     * @example
     * // Delete one UsuarioDoacao
     * const UsuarioDoacao = await prisma.usuarioDoacao.delete({
     *   where: {
     *     // ... filter to delete one UsuarioDoacao
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDoacaoDeleteArgs>(args: SelectSubset<T, UsuarioDoacaoDeleteArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioDoacao.
     * @param {UsuarioDoacaoUpdateArgs} args - Arguments to update one UsuarioDoacao.
     * @example
     * // Update one UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioDoacaoUpdateArgs>(args: SelectSubset<T, UsuarioDoacaoUpdateArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioDoacaos.
     * @param {UsuarioDoacaoDeleteManyArgs} args - Arguments to filter UsuarioDoacaos to delete.
     * @example
     * // Delete a few UsuarioDoacaos
     * const { count } = await prisma.usuarioDoacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDoacaoDeleteManyArgs>(args?: SelectSubset<T, UsuarioDoacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDoacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioDoacaos
     * const usuarioDoacao = await prisma.usuarioDoacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioDoacaoUpdateManyArgs>(args: SelectSubset<T, UsuarioDoacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDoacaos and returns the data updated in the database.
     * @param {UsuarioDoacaoUpdateManyAndReturnArgs} args - Arguments to update many UsuarioDoacaos.
     * @example
     * // Update many UsuarioDoacaos
     * const usuarioDoacao = await prisma.usuarioDoacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioDoacaos and only return the `id`
     * const usuarioDoacaoWithIdOnly = await prisma.usuarioDoacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioDoacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioDoacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioDoacao.
     * @param {UsuarioDoacaoUpsertArgs} args - Arguments to update or create a UsuarioDoacao.
     * @example
     * // Update or create a UsuarioDoacao
     * const usuarioDoacao = await prisma.usuarioDoacao.upsert({
     *   create: {
     *     // ... data to create a UsuarioDoacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioDoacao we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioDoacaoUpsertArgs>(args: SelectSubset<T, UsuarioDoacaoUpsertArgs<ExtArgs>>): Prisma__UsuarioDoacaoClient<$Result.GetResult<Prisma.$UsuarioDoacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioDoacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoCountArgs} args - Arguments to filter UsuarioDoacaos to count.
     * @example
     * // Count the number of UsuarioDoacaos
     * const count = await prisma.usuarioDoacao.count({
     *   where: {
     *     // ... the filter for the UsuarioDoacaos we want to count
     *   }
     * })
    **/
    count<T extends UsuarioDoacaoCountArgs>(
      args?: Subset<T, UsuarioDoacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioDoacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioDoacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioDoacaoAggregateArgs>(args: Subset<T, UsuarioDoacaoAggregateArgs>): Prisma.PrismaPromise<GetUsuarioDoacaoAggregateType<T>>

    /**
     * Group by UsuarioDoacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDoacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioDoacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioDoacaoGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioDoacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioDoacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioDoacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioDoacao model
   */
  readonly fields: UsuarioDoacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioDoacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioDoacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doacao<T extends DoacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoacaoDefaultArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioDoacao model
   */
  interface UsuarioDoacaoFieldRefs {
    readonly id: FieldRef<"UsuarioDoacao", 'String'>
    readonly usuarioId: FieldRef<"UsuarioDoacao", 'String'>
    readonly doacaoId: FieldRef<"UsuarioDoacao", 'String'>
    readonly data: FieldRef<"UsuarioDoacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioDoacao findUnique
   */
  export type UsuarioDoacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDoacao to fetch.
     */
    where: UsuarioDoacaoWhereUniqueInput
  }

  /**
   * UsuarioDoacao findUniqueOrThrow
   */
  export type UsuarioDoacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDoacao to fetch.
     */
    where: UsuarioDoacaoWhereUniqueInput
  }

  /**
   * UsuarioDoacao findFirst
   */
  export type UsuarioDoacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDoacao to fetch.
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDoacaos to fetch.
     */
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDoacaos.
     */
    cursor?: UsuarioDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDoacaos.
     */
    distinct?: UsuarioDoacaoScalarFieldEnum | UsuarioDoacaoScalarFieldEnum[]
  }

  /**
   * UsuarioDoacao findFirstOrThrow
   */
  export type UsuarioDoacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDoacao to fetch.
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDoacaos to fetch.
     */
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDoacaos.
     */
    cursor?: UsuarioDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDoacaos.
     */
    distinct?: UsuarioDoacaoScalarFieldEnum | UsuarioDoacaoScalarFieldEnum[]
  }

  /**
   * UsuarioDoacao findMany
   */
  export type UsuarioDoacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDoacaos to fetch.
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDoacaos to fetch.
     */
    orderBy?: UsuarioDoacaoOrderByWithRelationInput | UsuarioDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioDoacaos.
     */
    cursor?: UsuarioDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDoacaos.
     */
    skip?: number
    distinct?: UsuarioDoacaoScalarFieldEnum | UsuarioDoacaoScalarFieldEnum[]
  }

  /**
   * UsuarioDoacao create
   */
  export type UsuarioDoacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioDoacao.
     */
    data: XOR<UsuarioDoacaoCreateInput, UsuarioDoacaoUncheckedCreateInput>
  }

  /**
   * UsuarioDoacao createMany
   */
  export type UsuarioDoacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioDoacaos.
     */
    data: UsuarioDoacaoCreateManyInput | UsuarioDoacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioDoacao createManyAndReturn
   */
  export type UsuarioDoacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioDoacaos.
     */
    data: UsuarioDoacaoCreateManyInput | UsuarioDoacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDoacao update
   */
  export type UsuarioDoacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioDoacao.
     */
    data: XOR<UsuarioDoacaoUpdateInput, UsuarioDoacaoUncheckedUpdateInput>
    /**
     * Choose, which UsuarioDoacao to update.
     */
    where: UsuarioDoacaoWhereUniqueInput
  }

  /**
   * UsuarioDoacao updateMany
   */
  export type UsuarioDoacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioDoacaos.
     */
    data: XOR<UsuarioDoacaoUpdateManyMutationInput, UsuarioDoacaoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDoacaos to update
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * Limit how many UsuarioDoacaos to update.
     */
    limit?: number
  }

  /**
   * UsuarioDoacao updateManyAndReturn
   */
  export type UsuarioDoacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioDoacaos.
     */
    data: XOR<UsuarioDoacaoUpdateManyMutationInput, UsuarioDoacaoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDoacaos to update
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * Limit how many UsuarioDoacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDoacao upsert
   */
  export type UsuarioDoacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioDoacao to update in case it exists.
     */
    where: UsuarioDoacaoWhereUniqueInput
    /**
     * In case the UsuarioDoacao found by the `where` argument doesn't exist, create a new UsuarioDoacao with this data.
     */
    create: XOR<UsuarioDoacaoCreateInput, UsuarioDoacaoUncheckedCreateInput>
    /**
     * In case the UsuarioDoacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioDoacaoUpdateInput, UsuarioDoacaoUncheckedUpdateInput>
  }

  /**
   * UsuarioDoacao delete
   */
  export type UsuarioDoacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
    /**
     * Filter which UsuarioDoacao to delete.
     */
    where: UsuarioDoacaoWhereUniqueInput
  }

  /**
   * UsuarioDoacao deleteMany
   */
  export type UsuarioDoacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDoacaos to delete
     */
    where?: UsuarioDoacaoWhereInput
    /**
     * Limit how many UsuarioDoacaos to delete.
     */
    limit?: number
  }

  /**
   * UsuarioDoacao without action
   */
  export type UsuarioDoacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDoacao
     */
    select?: UsuarioDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDoacao
     */
    omit?: UsuarioDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDoacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CampanhaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    meta: 'meta',
    criadaEm: 'criadaEm',
    criadorId: 'criadorId'
  };

  export type CampanhaScalarFieldEnum = (typeof CampanhaScalarFieldEnum)[keyof typeof CampanhaScalarFieldEnum]


  export const DoacaoScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    data: 'data',
    tipoProduto: 'tipoProduto',
    produto: 'produto',
    usuarioId: 'usuarioId',
    campanhaId: 'campanhaId',
    categoriaId: 'categoriaId',
    status: 'status',
    localId: 'localId'
  };

  export type DoacaoScalarFieldEnum = (typeof DoacaoScalarFieldEnum)[keyof typeof DoacaoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const LocalScalarFieldEnum: {
    id: 'id',
    cidade: 'cidade',
    estado: 'estado',
    pais: 'pais'
  };

  export type LocalScalarFieldEnum = (typeof LocalScalarFieldEnum)[keyof typeof LocalScalarFieldEnum]


  export const UsuarioDoacaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    doacaoId: 'doacaoId',
    data: 'data'
  };

  export type UsuarioDoacaoScalarFieldEnum = (typeof UsuarioDoacaoScalarFieldEnum)[keyof typeof UsuarioDoacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoProduto'
   */
  export type EnumTipoProdutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProduto'>
    


  /**
   * Reference to a field of type 'TipoProduto[]'
   */
  export type ListEnumTipoProdutoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProduto[]'>
    


  /**
   * Reference to a field of type 'StatusDoacao'
   */
  export type EnumStatusDoacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDoacao'>
    


  /**
   * Reference to a field of type 'StatusDoacao[]'
   */
  export type ListEnumStatusDoacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDoacao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    doacoes?: DoacaoListRelationFilter
    campanhas?: CampanhaListRelationFilter
    usuarioDoacoes?: UsuarioDoacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    doacoes?: DoacaoOrderByRelationAggregateInput
    campanhas?: CampanhaOrderByRelationAggregateInput
    usuarioDoacoes?: UsuarioDoacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    doacoes?: DoacaoListRelationFilter
    campanhas?: CampanhaListRelationFilter
    usuarioDoacoes?: UsuarioDoacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CampanhaWhereInput = {
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    id?: StringFilter<"Campanha"> | string
    titulo?: StringFilter<"Campanha"> | string
    descricao?: StringFilter<"Campanha"> | string
    meta?: FloatFilter<"Campanha"> | number
    criadaEm?: DateTimeFilter<"Campanha"> | Date | string
    criadorId?: StringFilter<"Campanha"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    doacoes?: DoacaoListRelationFilter
  }

  export type CampanhaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    meta?: SortOrder
    criadaEm?: SortOrder
    criadorId?: SortOrder
    criador?: UsuarioOrderByWithRelationInput
    doacoes?: DoacaoOrderByRelationAggregateInput
  }

  export type CampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    titulo?: StringFilter<"Campanha"> | string
    descricao?: StringFilter<"Campanha"> | string
    meta?: FloatFilter<"Campanha"> | number
    criadaEm?: DateTimeFilter<"Campanha"> | Date | string
    criadorId?: StringFilter<"Campanha"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    doacoes?: DoacaoListRelationFilter
  }, "id">

  export type CampanhaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    meta?: SortOrder
    criadaEm?: SortOrder
    criadorId?: SortOrder
    _count?: CampanhaCountOrderByAggregateInput
    _avg?: CampanhaAvgOrderByAggregateInput
    _max?: CampanhaMaxOrderByAggregateInput
    _min?: CampanhaMinOrderByAggregateInput
    _sum?: CampanhaSumOrderByAggregateInput
  }

  export type CampanhaScalarWhereWithAggregatesInput = {
    AND?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    OR?: CampanhaScalarWhereWithAggregatesInput[]
    NOT?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campanha"> | string
    titulo?: StringWithAggregatesFilter<"Campanha"> | string
    descricao?: StringWithAggregatesFilter<"Campanha"> | string
    meta?: FloatWithAggregatesFilter<"Campanha"> | number
    criadaEm?: DateTimeWithAggregatesFilter<"Campanha"> | Date | string
    criadorId?: StringWithAggregatesFilter<"Campanha"> | string
  }

  export type DoacaoWhereInput = {
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    id?: StringFilter<"Doacao"> | string
    valor?: FloatFilter<"Doacao"> | number
    data?: DateTimeFilter<"Doacao"> | Date | string
    tipoProduto?: EnumTipoProdutoFilter<"Doacao"> | $Enums.TipoProduto
    produto?: StringFilter<"Doacao"> | string
    usuarioId?: StringFilter<"Doacao"> | string
    campanhaId?: StringFilter<"Doacao"> | string
    categoriaId?: StringFilter<"Doacao"> | string
    status?: EnumStatusDoacaoFilter<"Doacao"> | $Enums.StatusDoacao
    localId?: StringFilter<"Doacao"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    local?: XOR<LocalScalarRelationFilter, LocalWhereInput>
    usuarioDoacoes?: UsuarioDoacaoListRelationFilter
  }

  export type DoacaoOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    tipoProduto?: SortOrder
    produto?: SortOrder
    usuarioId?: SortOrder
    campanhaId?: SortOrder
    categoriaId?: SortOrder
    status?: SortOrder
    localId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    campanha?: CampanhaOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    local?: LocalOrderByWithRelationInput
    usuarioDoacoes?: UsuarioDoacaoOrderByRelationAggregateInput
  }

  export type DoacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    valor?: FloatFilter<"Doacao"> | number
    data?: DateTimeFilter<"Doacao"> | Date | string
    tipoProduto?: EnumTipoProdutoFilter<"Doacao"> | $Enums.TipoProduto
    produto?: StringFilter<"Doacao"> | string
    usuarioId?: StringFilter<"Doacao"> | string
    campanhaId?: StringFilter<"Doacao"> | string
    categoriaId?: StringFilter<"Doacao"> | string
    status?: EnumStatusDoacaoFilter<"Doacao"> | $Enums.StatusDoacao
    localId?: StringFilter<"Doacao"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    local?: XOR<LocalScalarRelationFilter, LocalWhereInput>
    usuarioDoacoes?: UsuarioDoacaoListRelationFilter
  }, "id">

  export type DoacaoOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    tipoProduto?: SortOrder
    produto?: SortOrder
    usuarioId?: SortOrder
    campanhaId?: SortOrder
    categoriaId?: SortOrder
    status?: SortOrder
    localId?: SortOrder
    _count?: DoacaoCountOrderByAggregateInput
    _avg?: DoacaoAvgOrderByAggregateInput
    _max?: DoacaoMaxOrderByAggregateInput
    _min?: DoacaoMinOrderByAggregateInput
    _sum?: DoacaoSumOrderByAggregateInput
  }

  export type DoacaoScalarWhereWithAggregatesInput = {
    AND?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    OR?: DoacaoScalarWhereWithAggregatesInput[]
    NOT?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doacao"> | string
    valor?: FloatWithAggregatesFilter<"Doacao"> | number
    data?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
    tipoProduto?: EnumTipoProdutoWithAggregatesFilter<"Doacao"> | $Enums.TipoProduto
    produto?: StringWithAggregatesFilter<"Doacao"> | string
    usuarioId?: StringWithAggregatesFilter<"Doacao"> | string
    campanhaId?: StringWithAggregatesFilter<"Doacao"> | string
    categoriaId?: StringWithAggregatesFilter<"Doacao"> | string
    status?: EnumStatusDoacaoWithAggregatesFilter<"Doacao"> | $Enums.StatusDoacao
    localId?: StringWithAggregatesFilter<"Doacao"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nome?: StringFilter<"Categoria"> | string
    doacoes?: DoacaoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    doacoes?: DoacaoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    doacoes?: DoacaoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    nome?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type LocalWhereInput = {
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    id?: StringFilter<"Local"> | string
    cidade?: StringFilter<"Local"> | string
    estado?: StringFilter<"Local"> | string
    pais?: StringFilter<"Local"> | string
    doacoes?: DoacaoListRelationFilter
  }

  export type LocalOrderByWithRelationInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    doacoes?: DoacaoOrderByRelationAggregateInput
  }

  export type LocalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    cidade?: StringFilter<"Local"> | string
    estado?: StringFilter<"Local"> | string
    pais?: StringFilter<"Local"> | string
    doacoes?: DoacaoListRelationFilter
  }, "id">

  export type LocalOrderByWithAggregationInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
    _count?: LocalCountOrderByAggregateInput
    _max?: LocalMaxOrderByAggregateInput
    _min?: LocalMinOrderByAggregateInput
  }

  export type LocalScalarWhereWithAggregatesInput = {
    AND?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    OR?: LocalScalarWhereWithAggregatesInput[]
    NOT?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Local"> | string
    cidade?: StringWithAggregatesFilter<"Local"> | string
    estado?: StringWithAggregatesFilter<"Local"> | string
    pais?: StringWithAggregatesFilter<"Local"> | string
  }

  export type UsuarioDoacaoWhereInput = {
    AND?: UsuarioDoacaoWhereInput | UsuarioDoacaoWhereInput[]
    OR?: UsuarioDoacaoWhereInput[]
    NOT?: UsuarioDoacaoWhereInput | UsuarioDoacaoWhereInput[]
    id?: StringFilter<"UsuarioDoacao"> | string
    usuarioId?: StringFilter<"UsuarioDoacao"> | string
    doacaoId?: StringFilter<"UsuarioDoacao"> | string
    data?: DateTimeFilter<"UsuarioDoacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
  }

  export type UsuarioDoacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    doacaoId?: SortOrder
    data?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    doacao?: DoacaoOrderByWithRelationInput
  }

  export type UsuarioDoacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsuarioDoacaoWhereInput | UsuarioDoacaoWhereInput[]
    OR?: UsuarioDoacaoWhereInput[]
    NOT?: UsuarioDoacaoWhereInput | UsuarioDoacaoWhereInput[]
    usuarioId?: StringFilter<"UsuarioDoacao"> | string
    doacaoId?: StringFilter<"UsuarioDoacao"> | string
    data?: DateTimeFilter<"UsuarioDoacao"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
  }, "id">

  export type UsuarioDoacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    doacaoId?: SortOrder
    data?: SortOrder
    _count?: UsuarioDoacaoCountOrderByAggregateInput
    _max?: UsuarioDoacaoMaxOrderByAggregateInput
    _min?: UsuarioDoacaoMinOrderByAggregateInput
  }

  export type UsuarioDoacaoScalarWhereWithAggregatesInput = {
    AND?: UsuarioDoacaoScalarWhereWithAggregatesInput | UsuarioDoacaoScalarWhereWithAggregatesInput[]
    OR?: UsuarioDoacaoScalarWhereWithAggregatesInput[]
    NOT?: UsuarioDoacaoScalarWhereWithAggregatesInput | UsuarioDoacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsuarioDoacao"> | string
    usuarioId?: StringWithAggregatesFilter<"UsuarioDoacao"> | string
    doacaoId?: StringWithAggregatesFilter<"UsuarioDoacao"> | string
    data?: DateTimeWithAggregatesFilter<"UsuarioDoacao"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutUsuarioInput
    campanhas?: CampanhaCreateNestedManyWithoutCriadorInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutUsuarioInput
    campanhas?: CampanhaUncheckedCreateNestedManyWithoutCriadorInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutUsuarioNestedInput
    campanhas?: CampanhaUpdateManyWithoutCriadorNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    campanhas?: CampanhaUncheckedUpdateManyWithoutCriadorNestedInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanhaCreateInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    criador: UsuarioCreateNestedOneWithoutCampanhasInput
    doacoes?: DoacaoCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    criadorId: string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: UsuarioUpdateOneRequiredWithoutCampanhasNestedInput
    doacoes?: DoacaoUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    criadorId: string
  }

  export type CampanhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoacaoCreateInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    usuario: UsuarioCreateNestedOneWithoutDoacoesInput
    campanha: CampanhaCreateNestedOneWithoutDoacoesInput
    categoria: CategoriaCreateNestedOneWithoutDoacoesInput
    local: LocalCreateNestedOneWithoutDoacoesInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuario?: UsuarioUpdateOneRequiredWithoutDoacoesNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutDoacoesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutDoacoesNestedInput
    local?: LocalUpdateOneRequiredWithoutDoacoesNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoCreateManyInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
  }

  export type DoacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
  }

  export type DoacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    id?: string
    nome: string
    doacoes?: DoacaoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nome: string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nome: string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalCreateInput = {
    id?: string
    cidade: string
    estado: string
    pais: string
    doacoes?: DoacaoCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateInput = {
    id?: string
    cidade: string
    estado: string
    pais: string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUpdateManyWithoutLocalNestedInput
  }

  export type LocalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutLocalNestedInput
  }

  export type LocalCreateManyInput = {
    id?: string
    cidade: string
    estado: string
    pais: string
  }

  export type LocalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioDoacaoCreateInput = {
    id?: string
    data?: Date | string
    usuario: UsuarioCreateNestedOneWithoutUsuarioDoacoesInput
    doacao: DoacaoCreateNestedOneWithoutUsuarioDoacoesInput
  }

  export type UsuarioDoacaoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    doacaoId: string
    data?: Date | string
  }

  export type UsuarioDoacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioDoacoesNestedInput
    doacao?: DoacaoUpdateOneRequiredWithoutUsuarioDoacoesNestedInput
  }

  export type UsuarioDoacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    doacaoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioDoacaoCreateManyInput = {
    id?: string
    usuarioId: string
    doacaoId: string
    data?: Date | string
  }

  export type UsuarioDoacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioDoacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    doacaoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoacaoListRelationFilter = {
    every?: DoacaoWhereInput
    some?: DoacaoWhereInput
    none?: DoacaoWhereInput
  }

  export type CampanhaListRelationFilter = {
    every?: CampanhaWhereInput
    some?: CampanhaWhereInput
    none?: CampanhaWhereInput
  }

  export type UsuarioDoacaoListRelationFilter = {
    every?: UsuarioDoacaoWhereInput
    some?: UsuarioDoacaoWhereInput
    none?: UsuarioDoacaoWhereInput
  }

  export type DoacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampanhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioDoacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CampanhaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    meta?: SortOrder
    criadaEm?: SortOrder
    criadorId?: SortOrder
  }

  export type CampanhaAvgOrderByAggregateInput = {
    meta?: SortOrder
  }

  export type CampanhaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    meta?: SortOrder
    criadaEm?: SortOrder
    criadorId?: SortOrder
  }

  export type CampanhaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    meta?: SortOrder
    criadaEm?: SortOrder
    criadorId?: SortOrder
  }

  export type CampanhaSumOrderByAggregateInput = {
    meta?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTipoProdutoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProduto | EnumTipoProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProdutoFilter<$PrismaModel> | $Enums.TipoProduto
  }

  export type EnumStatusDoacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDoacao | EnumStatusDoacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDoacaoFilter<$PrismaModel> | $Enums.StatusDoacao
  }

  export type CampanhaScalarRelationFilter = {
    is?: CampanhaWhereInput
    isNot?: CampanhaWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type LocalScalarRelationFilter = {
    is?: LocalWhereInput
    isNot?: LocalWhereInput
  }

  export type DoacaoCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    tipoProduto?: SortOrder
    produto?: SortOrder
    usuarioId?: SortOrder
    campanhaId?: SortOrder
    categoriaId?: SortOrder
    status?: SortOrder
    localId?: SortOrder
  }

  export type DoacaoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DoacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    tipoProduto?: SortOrder
    produto?: SortOrder
    usuarioId?: SortOrder
    campanhaId?: SortOrder
    categoriaId?: SortOrder
    status?: SortOrder
    localId?: SortOrder
  }

  export type DoacaoMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    data?: SortOrder
    tipoProduto?: SortOrder
    produto?: SortOrder
    usuarioId?: SortOrder
    campanhaId?: SortOrder
    categoriaId?: SortOrder
    status?: SortOrder
    localId?: SortOrder
  }

  export type DoacaoSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type EnumTipoProdutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProduto | EnumTipoProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProdutoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProduto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProdutoFilter<$PrismaModel>
    _max?: NestedEnumTipoProdutoFilter<$PrismaModel>
  }

  export type EnumStatusDoacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDoacao | EnumStatusDoacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDoacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusDoacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDoacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusDoacaoFilter<$PrismaModel>
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type LocalCountOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type LocalMaxOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type LocalMinOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    pais?: SortOrder
  }

  export type DoacaoScalarRelationFilter = {
    is?: DoacaoWhereInput
    isNot?: DoacaoWhereInput
  }

  export type UsuarioDoacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    doacaoId?: SortOrder
    data?: SortOrder
  }

  export type UsuarioDoacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    doacaoId?: SortOrder
    data?: SortOrder
  }

  export type UsuarioDoacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    doacaoId?: SortOrder
    data?: SortOrder
  }

  export type DoacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput> | DoacaoCreateWithoutUsuarioInput[] | DoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioInput | DoacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DoacaoCreateManyUsuarioInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type CampanhaCreateNestedManyWithoutCriadorInput = {
    create?: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput> | CampanhaCreateWithoutCriadorInput[] | CampanhaUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutCriadorInput | CampanhaCreateOrConnectWithoutCriadorInput[]
    createMany?: CampanhaCreateManyCriadorInputEnvelope
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
  }

  export type UsuarioDoacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput> | UsuarioDoacaoCreateWithoutUsuarioInput[] | UsuarioDoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutUsuarioInput | UsuarioDoacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDoacaoCreateManyUsuarioInputEnvelope
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput> | DoacaoCreateWithoutUsuarioInput[] | DoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioInput | DoacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DoacaoCreateManyUsuarioInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type CampanhaUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput> | CampanhaCreateWithoutCriadorInput[] | CampanhaUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutCriadorInput | CampanhaCreateOrConnectWithoutCriadorInput[]
    createMany?: CampanhaCreateManyCriadorInputEnvelope
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
  }

  export type UsuarioDoacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput> | UsuarioDoacaoCreateWithoutUsuarioInput[] | UsuarioDoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutUsuarioInput | UsuarioDoacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDoacaoCreateManyUsuarioInputEnvelope
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput> | DoacaoCreateWithoutUsuarioInput[] | DoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioInput | DoacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutUsuarioInput | DoacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DoacaoCreateManyUsuarioInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutUsuarioInput | DoacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutUsuarioInput | DoacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type CampanhaUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput> | CampanhaCreateWithoutCriadorInput[] | CampanhaUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutCriadorInput | CampanhaCreateOrConnectWithoutCriadorInput[]
    upsert?: CampanhaUpsertWithWhereUniqueWithoutCriadorInput | CampanhaUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: CampanhaCreateManyCriadorInputEnvelope
    set?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    disconnect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    delete?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    update?: CampanhaUpdateWithWhereUniqueWithoutCriadorInput | CampanhaUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: CampanhaUpdateManyWithWhereWithoutCriadorInput | CampanhaUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
  }

  export type UsuarioDoacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput> | UsuarioDoacaoCreateWithoutUsuarioInput[] | UsuarioDoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutUsuarioInput | UsuarioDoacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDoacaoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDoacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDoacaoCreateManyUsuarioInputEnvelope
    set?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    disconnect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    delete?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    update?: UsuarioDoacaoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDoacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDoacaoUpdateManyWithWhereWithoutUsuarioInput | UsuarioDoacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput> | DoacaoCreateWithoutUsuarioInput[] | DoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioInput | DoacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutUsuarioInput | DoacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DoacaoCreateManyUsuarioInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutUsuarioInput | DoacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutUsuarioInput | DoacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type CampanhaUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput> | CampanhaCreateWithoutCriadorInput[] | CampanhaUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutCriadorInput | CampanhaCreateOrConnectWithoutCriadorInput[]
    upsert?: CampanhaUpsertWithWhereUniqueWithoutCriadorInput | CampanhaUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: CampanhaCreateManyCriadorInputEnvelope
    set?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    disconnect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    delete?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    update?: CampanhaUpdateWithWhereUniqueWithoutCriadorInput | CampanhaUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: CampanhaUpdateManyWithWhereWithoutCriadorInput | CampanhaUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
  }

  export type UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput> | UsuarioDoacaoCreateWithoutUsuarioInput[] | UsuarioDoacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutUsuarioInput | UsuarioDoacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDoacaoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDoacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDoacaoCreateManyUsuarioInputEnvelope
    set?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    disconnect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    delete?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    update?: UsuarioDoacaoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDoacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDoacaoUpdateManyWithWhereWithoutUsuarioInput | UsuarioDoacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCampanhasInput = {
    create?: XOR<UsuarioCreateWithoutCampanhasInput, UsuarioUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCampanhasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DoacaoCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput> | DoacaoCreateWithoutCampanhaInput[] | DoacaoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCampanhaInput | DoacaoCreateOrConnectWithoutCampanhaInput[]
    createMany?: DoacaoCreateManyCampanhaInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput> | DoacaoCreateWithoutCampanhaInput[] | DoacaoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCampanhaInput | DoacaoCreateOrConnectWithoutCampanhaInput[]
    createMany?: DoacaoCreateManyCampanhaInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutCampanhasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCampanhasInput, UsuarioUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCampanhasInput
    upsert?: UsuarioUpsertWithoutCampanhasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCampanhasInput, UsuarioUpdateWithoutCampanhasInput>, UsuarioUncheckedUpdateWithoutCampanhasInput>
  }

  export type DoacaoUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput> | DoacaoCreateWithoutCampanhaInput[] | DoacaoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCampanhaInput | DoacaoCreateOrConnectWithoutCampanhaInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCampanhaInput | DoacaoUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: DoacaoCreateManyCampanhaInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCampanhaInput | DoacaoUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCampanhaInput | DoacaoUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput> | DoacaoCreateWithoutCampanhaInput[] | DoacaoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCampanhaInput | DoacaoCreateOrConnectWithoutCampanhaInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCampanhaInput | DoacaoUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: DoacaoCreateManyCampanhaInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCampanhaInput | DoacaoUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCampanhaInput | DoacaoUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<UsuarioCreateWithoutDoacoesInput, UsuarioUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDoacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CampanhaCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<CampanhaCreateWithoutDoacoesInput, CampanhaUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutDoacoesInput
    connect?: CampanhaWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<CategoriaCreateWithoutDoacoesInput, CategoriaUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutDoacoesInput
    connect?: CategoriaWhereUniqueInput
  }

  export type LocalCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<LocalCreateWithoutDoacoesInput, LocalUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: LocalCreateOrConnectWithoutDoacoesInput
    connect?: LocalWhereUniqueInput
  }

  export type UsuarioDoacaoCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput> | UsuarioDoacaoCreateWithoutDoacaoInput[] | UsuarioDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutDoacaoInput | UsuarioDoacaoCreateOrConnectWithoutDoacaoInput[]
    createMany?: UsuarioDoacaoCreateManyDoacaoInputEnvelope
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
  }

  export type UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput> | UsuarioDoacaoCreateWithoutDoacaoInput[] | UsuarioDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutDoacaoInput | UsuarioDoacaoCreateOrConnectWithoutDoacaoInput[]
    createMany?: UsuarioDoacaoCreateManyDoacaoInputEnvelope
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
  }

  export type EnumTipoProdutoFieldUpdateOperationsInput = {
    set?: $Enums.TipoProduto
  }

  export type EnumStatusDoacaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusDoacao
  }

  export type UsuarioUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutDoacoesInput, UsuarioUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDoacoesInput
    upsert?: UsuarioUpsertWithoutDoacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDoacoesInput, UsuarioUpdateWithoutDoacoesInput>, UsuarioUncheckedUpdateWithoutDoacoesInput>
  }

  export type CampanhaUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<CampanhaCreateWithoutDoacoesInput, CampanhaUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutDoacoesInput
    upsert?: CampanhaUpsertWithoutDoacoesInput
    connect?: CampanhaWhereUniqueInput
    update?: XOR<XOR<CampanhaUpdateToOneWithWhereWithoutDoacoesInput, CampanhaUpdateWithoutDoacoesInput>, CampanhaUncheckedUpdateWithoutDoacoesInput>
  }

  export type CategoriaUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<CategoriaCreateWithoutDoacoesInput, CategoriaUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutDoacoesInput
    upsert?: CategoriaUpsertWithoutDoacoesInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutDoacoesInput, CategoriaUpdateWithoutDoacoesInput>, CategoriaUncheckedUpdateWithoutDoacoesInput>
  }

  export type LocalUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<LocalCreateWithoutDoacoesInput, LocalUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: LocalCreateOrConnectWithoutDoacoesInput
    upsert?: LocalUpsertWithoutDoacoesInput
    connect?: LocalWhereUniqueInput
    update?: XOR<XOR<LocalUpdateToOneWithWhereWithoutDoacoesInput, LocalUpdateWithoutDoacoesInput>, LocalUncheckedUpdateWithoutDoacoesInput>
  }

  export type UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput> | UsuarioDoacaoCreateWithoutDoacaoInput[] | UsuarioDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutDoacaoInput | UsuarioDoacaoCreateOrConnectWithoutDoacaoInput[]
    upsert?: UsuarioDoacaoUpsertWithWhereUniqueWithoutDoacaoInput | UsuarioDoacaoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: UsuarioDoacaoCreateManyDoacaoInputEnvelope
    set?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    disconnect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    delete?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    update?: UsuarioDoacaoUpdateWithWhereUniqueWithoutDoacaoInput | UsuarioDoacaoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: UsuarioDoacaoUpdateManyWithWhereWithoutDoacaoInput | UsuarioDoacaoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
  }

  export type UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput> | UsuarioDoacaoCreateWithoutDoacaoInput[] | UsuarioDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: UsuarioDoacaoCreateOrConnectWithoutDoacaoInput | UsuarioDoacaoCreateOrConnectWithoutDoacaoInput[]
    upsert?: UsuarioDoacaoUpsertWithWhereUniqueWithoutDoacaoInput | UsuarioDoacaoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: UsuarioDoacaoCreateManyDoacaoInputEnvelope
    set?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    disconnect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    delete?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    connect?: UsuarioDoacaoWhereUniqueInput | UsuarioDoacaoWhereUniqueInput[]
    update?: UsuarioDoacaoUpdateWithWhereUniqueWithoutDoacaoInput | UsuarioDoacaoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: UsuarioDoacaoUpdateManyWithWhereWithoutDoacaoInput | UsuarioDoacaoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
  }

  export type DoacaoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput> | DoacaoCreateWithoutCategoriaInput[] | DoacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCategoriaInput | DoacaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: DoacaoCreateManyCategoriaInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput> | DoacaoCreateWithoutCategoriaInput[] | DoacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCategoriaInput | DoacaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: DoacaoCreateManyCategoriaInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DoacaoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput> | DoacaoCreateWithoutCategoriaInput[] | DoacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCategoriaInput | DoacaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCategoriaInput | DoacaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: DoacaoCreateManyCategoriaInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCategoriaInput | DoacaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCategoriaInput | DoacaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput> | DoacaoCreateWithoutCategoriaInput[] | DoacaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutCategoriaInput | DoacaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutCategoriaInput | DoacaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: DoacaoCreateManyCategoriaInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutCategoriaInput | DoacaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutCategoriaInput | DoacaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DoacaoCreateNestedManyWithoutLocalInput = {
    create?: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput> | DoacaoCreateWithoutLocalInput[] | DoacaoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutLocalInput | DoacaoCreateOrConnectWithoutLocalInput[]
    createMany?: DoacaoCreateManyLocalInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput> | DoacaoCreateWithoutLocalInput[] | DoacaoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutLocalInput | DoacaoCreateOrConnectWithoutLocalInput[]
    createMany?: DoacaoCreateManyLocalInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DoacaoUpdateManyWithoutLocalNestedInput = {
    create?: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput> | DoacaoCreateWithoutLocalInput[] | DoacaoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutLocalInput | DoacaoCreateOrConnectWithoutLocalInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutLocalInput | DoacaoUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: DoacaoCreateManyLocalInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutLocalInput | DoacaoUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutLocalInput | DoacaoUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DoacaoUncheckedUpdateManyWithoutLocalNestedInput = {
    create?: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput> | DoacaoCreateWithoutLocalInput[] | DoacaoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutLocalInput | DoacaoCreateOrConnectWithoutLocalInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutLocalInput | DoacaoUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: DoacaoCreateManyLocalInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutLocalInput | DoacaoUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutLocalInput | DoacaoUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutUsuarioDoacoesInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioDoacoesInput, UsuarioUncheckedCreateWithoutUsuarioDoacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioDoacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DoacaoCreateNestedOneWithoutUsuarioDoacoesInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioDoacoesInput, DoacaoUncheckedCreateWithoutUsuarioDoacoesInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioDoacoesInput
    connect?: DoacaoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutUsuarioDoacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioDoacoesInput, UsuarioUncheckedCreateWithoutUsuarioDoacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioDoacoesInput
    upsert?: UsuarioUpsertWithoutUsuarioDoacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutUsuarioDoacoesInput, UsuarioUpdateWithoutUsuarioDoacoesInput>, UsuarioUncheckedUpdateWithoutUsuarioDoacoesInput>
  }

  export type DoacaoUpdateOneRequiredWithoutUsuarioDoacoesNestedInput = {
    create?: XOR<DoacaoCreateWithoutUsuarioDoacoesInput, DoacaoUncheckedCreateWithoutUsuarioDoacoesInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutUsuarioDoacoesInput
    upsert?: DoacaoUpsertWithoutUsuarioDoacoesInput
    connect?: DoacaoWhereUniqueInput
    update?: XOR<XOR<DoacaoUpdateToOneWithWhereWithoutUsuarioDoacoesInput, DoacaoUpdateWithoutUsuarioDoacoesInput>, DoacaoUncheckedUpdateWithoutUsuarioDoacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTipoProdutoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProduto | EnumTipoProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProdutoFilter<$PrismaModel> | $Enums.TipoProduto
  }

  export type NestedEnumStatusDoacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDoacao | EnumStatusDoacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDoacaoFilter<$PrismaModel> | $Enums.StatusDoacao
  }

  export type NestedEnumTipoProdutoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProduto | EnumTipoProdutoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProduto[] | ListEnumTipoProdutoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProdutoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProduto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProdutoFilter<$PrismaModel>
    _max?: NestedEnumTipoProdutoFilter<$PrismaModel>
  }

  export type NestedEnumStatusDoacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDoacao | EnumStatusDoacaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDoacao[] | ListEnumStatusDoacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDoacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusDoacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDoacaoFilter<$PrismaModel>
    _max?: NestedEnumStatusDoacaoFilter<$PrismaModel>
  }

  export type DoacaoCreateWithoutUsuarioInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    campanha: CampanhaCreateNestedOneWithoutDoacoesInput
    categoria: CategoriaCreateNestedOneWithoutDoacoesInput
    local: LocalCreateNestedOneWithoutDoacoesInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutUsuarioInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type DoacaoCreateManyUsuarioInputEnvelope = {
    data: DoacaoCreateManyUsuarioInput | DoacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CampanhaCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutCriadorInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput>
  }

  export type CampanhaCreateManyCriadorInputEnvelope = {
    data: CampanhaCreateManyCriadorInput | CampanhaCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioDoacaoCreateWithoutUsuarioInput = {
    id?: string
    data?: Date | string
    doacao: DoacaoCreateNestedOneWithoutUsuarioDoacoesInput
  }

  export type UsuarioDoacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    doacaoId: string
    data?: Date | string
  }

  export type UsuarioDoacaoCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioDoacaoWhereUniqueInput
    create: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDoacaoCreateManyUsuarioInputEnvelope = {
    data: UsuarioDoacaoCreateManyUsuarioInput | UsuarioDoacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DoacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutUsuarioInput, DoacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DoacaoCreateWithoutUsuarioInput, DoacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutUsuarioInput, DoacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DoacaoScalarWhereInput = {
    AND?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    OR?: DoacaoScalarWhereInput[]
    NOT?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    id?: StringFilter<"Doacao"> | string
    valor?: FloatFilter<"Doacao"> | number
    data?: DateTimeFilter<"Doacao"> | Date | string
    tipoProduto?: EnumTipoProdutoFilter<"Doacao"> | $Enums.TipoProduto
    produto?: StringFilter<"Doacao"> | string
    usuarioId?: StringFilter<"Doacao"> | string
    campanhaId?: StringFilter<"Doacao"> | string
    categoriaId?: StringFilter<"Doacao"> | string
    status?: EnumStatusDoacaoFilter<"Doacao"> | $Enums.StatusDoacao
    localId?: StringFilter<"Doacao"> | string
  }

  export type CampanhaUpsertWithWhereUniqueWithoutCriadorInput = {
    where: CampanhaWhereUniqueInput
    update: XOR<CampanhaUpdateWithoutCriadorInput, CampanhaUncheckedUpdateWithoutCriadorInput>
    create: XOR<CampanhaCreateWithoutCriadorInput, CampanhaUncheckedCreateWithoutCriadorInput>
  }

  export type CampanhaUpdateWithWhereUniqueWithoutCriadorInput = {
    where: CampanhaWhereUniqueInput
    data: XOR<CampanhaUpdateWithoutCriadorInput, CampanhaUncheckedUpdateWithoutCriadorInput>
  }

  export type CampanhaUpdateManyWithWhereWithoutCriadorInput = {
    where: CampanhaScalarWhereInput
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyWithoutCriadorInput>
  }

  export type CampanhaScalarWhereInput = {
    AND?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
    OR?: CampanhaScalarWhereInput[]
    NOT?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
    id?: StringFilter<"Campanha"> | string
    titulo?: StringFilter<"Campanha"> | string
    descricao?: StringFilter<"Campanha"> | string
    meta?: FloatFilter<"Campanha"> | number
    criadaEm?: DateTimeFilter<"Campanha"> | Date | string
    criadorId?: StringFilter<"Campanha"> | string
  }

  export type UsuarioDoacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDoacaoWhereUniqueInput
    update: XOR<UsuarioDoacaoUpdateWithoutUsuarioInput, UsuarioDoacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioDoacaoCreateWithoutUsuarioInput, UsuarioDoacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDoacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDoacaoWhereUniqueInput
    data: XOR<UsuarioDoacaoUpdateWithoutUsuarioInput, UsuarioDoacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioDoacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioDoacaoScalarWhereInput
    data: XOR<UsuarioDoacaoUpdateManyMutationInput, UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioDoacaoScalarWhereInput = {
    AND?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
    OR?: UsuarioDoacaoScalarWhereInput[]
    NOT?: UsuarioDoacaoScalarWhereInput | UsuarioDoacaoScalarWhereInput[]
    id?: StringFilter<"UsuarioDoacao"> | string
    usuarioId?: StringFilter<"UsuarioDoacao"> | string
    doacaoId?: StringFilter<"UsuarioDoacao"> | string
    data?: DateTimeFilter<"UsuarioDoacao"> | Date | string
  }

  export type UsuarioCreateWithoutCampanhasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutUsuarioInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCampanhasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutUsuarioInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCampanhasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCampanhasInput, UsuarioUncheckedCreateWithoutCampanhasInput>
  }

  export type DoacaoCreateWithoutCampanhaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    usuario: UsuarioCreateNestedOneWithoutDoacoesInput
    categoria: CategoriaCreateNestedOneWithoutDoacoesInput
    local: LocalCreateNestedOneWithoutDoacoesInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutCampanhaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutCampanhaInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput>
  }

  export type DoacaoCreateManyCampanhaInputEnvelope = {
    data: DoacaoCreateManyCampanhaInput | DoacaoCreateManyCampanhaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCampanhasInput = {
    update: XOR<UsuarioUpdateWithoutCampanhasInput, UsuarioUncheckedUpdateWithoutCampanhasInput>
    create: XOR<UsuarioCreateWithoutCampanhasInput, UsuarioUncheckedCreateWithoutCampanhasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCampanhasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCampanhasInput, UsuarioUncheckedUpdateWithoutCampanhasInput>
  }

  export type UsuarioUpdateWithoutCampanhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutUsuarioNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCampanhasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DoacaoUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutCampanhaInput, DoacaoUncheckedUpdateWithoutCampanhaInput>
    create: XOR<DoacaoCreateWithoutCampanhaInput, DoacaoUncheckedCreateWithoutCampanhaInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutCampanhaInput, DoacaoUncheckedUpdateWithoutCampanhaInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutCampanhaInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutCampanhaInput>
  }

  export type UsuarioCreateWithoutDoacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    campanhas?: CampanhaCreateNestedManyWithoutCriadorInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDoacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    campanhas?: CampanhaUncheckedCreateNestedManyWithoutCriadorInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDoacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDoacoesInput, UsuarioUncheckedCreateWithoutDoacoesInput>
  }

  export type CampanhaCreateWithoutDoacoesInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    criador: UsuarioCreateNestedOneWithoutCampanhasInput
  }

  export type CampanhaUncheckedCreateWithoutDoacoesInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
    criadorId: string
  }

  export type CampanhaCreateOrConnectWithoutDoacoesInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutDoacoesInput, CampanhaUncheckedCreateWithoutDoacoesInput>
  }

  export type CategoriaCreateWithoutDoacoesInput = {
    id?: string
    nome: string
  }

  export type CategoriaUncheckedCreateWithoutDoacoesInput = {
    id?: string
    nome: string
  }

  export type CategoriaCreateOrConnectWithoutDoacoesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutDoacoesInput, CategoriaUncheckedCreateWithoutDoacoesInput>
  }

  export type LocalCreateWithoutDoacoesInput = {
    id?: string
    cidade: string
    estado: string
    pais: string
  }

  export type LocalUncheckedCreateWithoutDoacoesInput = {
    id?: string
    cidade: string
    estado: string
    pais: string
  }

  export type LocalCreateOrConnectWithoutDoacoesInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutDoacoesInput, LocalUncheckedCreateWithoutDoacoesInput>
  }

  export type UsuarioDoacaoCreateWithoutDoacaoInput = {
    id?: string
    data?: Date | string
    usuario: UsuarioCreateNestedOneWithoutUsuarioDoacoesInput
  }

  export type UsuarioDoacaoUncheckedCreateWithoutDoacaoInput = {
    id?: string
    usuarioId: string
    data?: Date | string
  }

  export type UsuarioDoacaoCreateOrConnectWithoutDoacaoInput = {
    where: UsuarioDoacaoWhereUniqueInput
    create: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput>
  }

  export type UsuarioDoacaoCreateManyDoacaoInputEnvelope = {
    data: UsuarioDoacaoCreateManyDoacaoInput | UsuarioDoacaoCreateManyDoacaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDoacoesInput = {
    update: XOR<UsuarioUpdateWithoutDoacoesInput, UsuarioUncheckedUpdateWithoutDoacoesInput>
    create: XOR<UsuarioCreateWithoutDoacoesInput, UsuarioUncheckedCreateWithoutDoacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDoacoesInput, UsuarioUncheckedUpdateWithoutDoacoesInput>
  }

  export type UsuarioUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    campanhas?: CampanhaUpdateManyWithoutCriadorNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    campanhas?: CampanhaUncheckedUpdateManyWithoutCriadorNestedInput
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CampanhaUpsertWithoutDoacoesInput = {
    update: XOR<CampanhaUpdateWithoutDoacoesInput, CampanhaUncheckedUpdateWithoutDoacoesInput>
    create: XOR<CampanhaCreateWithoutDoacoesInput, CampanhaUncheckedCreateWithoutDoacoesInput>
    where?: CampanhaWhereInput
  }

  export type CampanhaUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: CampanhaWhereInput
    data: XOR<CampanhaUpdateWithoutDoacoesInput, CampanhaUncheckedUpdateWithoutDoacoesInput>
  }

  export type CampanhaUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: UsuarioUpdateOneRequiredWithoutCampanhasNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUpsertWithoutDoacoesInput = {
    update: XOR<CategoriaUpdateWithoutDoacoesInput, CategoriaUncheckedUpdateWithoutDoacoesInput>
    create: XOR<CategoriaCreateWithoutDoacoesInput, CategoriaUncheckedCreateWithoutDoacoesInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutDoacoesInput, CategoriaUncheckedUpdateWithoutDoacoesInput>
  }

  export type CategoriaUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUpsertWithoutDoacoesInput = {
    update: XOR<LocalUpdateWithoutDoacoesInput, LocalUncheckedUpdateWithoutDoacoesInput>
    create: XOR<LocalCreateWithoutDoacoesInput, LocalUncheckedCreateWithoutDoacoesInput>
    where?: LocalWhereInput
  }

  export type LocalUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: LocalWhereInput
    data: XOR<LocalUpdateWithoutDoacoesInput, LocalUncheckedUpdateWithoutDoacoesInput>
  }

  export type LocalUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUncheckedUpdateWithoutDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioDoacaoUpsertWithWhereUniqueWithoutDoacaoInput = {
    where: UsuarioDoacaoWhereUniqueInput
    update: XOR<UsuarioDoacaoUpdateWithoutDoacaoInput, UsuarioDoacaoUncheckedUpdateWithoutDoacaoInput>
    create: XOR<UsuarioDoacaoCreateWithoutDoacaoInput, UsuarioDoacaoUncheckedCreateWithoutDoacaoInput>
  }

  export type UsuarioDoacaoUpdateWithWhereUniqueWithoutDoacaoInput = {
    where: UsuarioDoacaoWhereUniqueInput
    data: XOR<UsuarioDoacaoUpdateWithoutDoacaoInput, UsuarioDoacaoUncheckedUpdateWithoutDoacaoInput>
  }

  export type UsuarioDoacaoUpdateManyWithWhereWithoutDoacaoInput = {
    where: UsuarioDoacaoScalarWhereInput
    data: XOR<UsuarioDoacaoUpdateManyMutationInput, UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoInput>
  }

  export type DoacaoCreateWithoutCategoriaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    usuario: UsuarioCreateNestedOneWithoutDoacoesInput
    campanha: CampanhaCreateNestedOneWithoutDoacoesInput
    local: LocalCreateNestedOneWithoutDoacoesInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    status?: $Enums.StatusDoacao
    localId: string
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutCategoriaInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput>
  }

  export type DoacaoCreateManyCategoriaInputEnvelope = {
    data: DoacaoCreateManyCategoriaInput | DoacaoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type DoacaoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutCategoriaInput, DoacaoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<DoacaoCreateWithoutCategoriaInput, DoacaoUncheckedCreateWithoutCategoriaInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutCategoriaInput, DoacaoUncheckedUpdateWithoutCategoriaInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutCategoriaInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type DoacaoCreateWithoutLocalInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    usuario: UsuarioCreateNestedOneWithoutDoacoesInput
    campanha: CampanhaCreateNestedOneWithoutDoacoesInput
    categoria: CategoriaCreateNestedOneWithoutDoacoesInput
    usuarioDoacoes?: UsuarioDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutLocalInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    usuarioDoacoes?: UsuarioDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutLocalInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput>
  }

  export type DoacaoCreateManyLocalInputEnvelope = {
    data: DoacaoCreateManyLocalInput | DoacaoCreateManyLocalInput[]
    skipDuplicates?: boolean
  }

  export type DoacaoUpsertWithWhereUniqueWithoutLocalInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutLocalInput, DoacaoUncheckedUpdateWithoutLocalInput>
    create: XOR<DoacaoCreateWithoutLocalInput, DoacaoUncheckedCreateWithoutLocalInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutLocalInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutLocalInput, DoacaoUncheckedUpdateWithoutLocalInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutLocalInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutLocalInput>
  }

  export type UsuarioCreateWithoutUsuarioDoacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutUsuarioInput
    campanhas?: CampanhaCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioUncheckedCreateWithoutUsuarioDoacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutUsuarioInput
    campanhas?: CampanhaUncheckedCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioCreateOrConnectWithoutUsuarioDoacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUsuarioDoacoesInput, UsuarioUncheckedCreateWithoutUsuarioDoacoesInput>
  }

  export type DoacaoCreateWithoutUsuarioDoacoesInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    status?: $Enums.StatusDoacao
    usuario: UsuarioCreateNestedOneWithoutDoacoesInput
    campanha: CampanhaCreateNestedOneWithoutDoacoesInput
    categoria: CategoriaCreateNestedOneWithoutDoacoesInput
    local: LocalCreateNestedOneWithoutDoacoesInput
  }

  export type DoacaoUncheckedCreateWithoutUsuarioDoacoesInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
  }

  export type DoacaoCreateOrConnectWithoutUsuarioDoacoesInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutUsuarioDoacoesInput, DoacaoUncheckedCreateWithoutUsuarioDoacoesInput>
  }

  export type UsuarioUpsertWithoutUsuarioDoacoesInput = {
    update: XOR<UsuarioUpdateWithoutUsuarioDoacoesInput, UsuarioUncheckedUpdateWithoutUsuarioDoacoesInput>
    create: XOR<UsuarioCreateWithoutUsuarioDoacoesInput, UsuarioUncheckedCreateWithoutUsuarioDoacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutUsuarioDoacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutUsuarioDoacoesInput, UsuarioUncheckedUpdateWithoutUsuarioDoacoesInput>
  }

  export type UsuarioUpdateWithoutUsuarioDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutUsuarioNestedInput
    campanhas?: CampanhaUpdateManyWithoutCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutUsuarioDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    campanhas?: CampanhaUncheckedUpdateManyWithoutCriadorNestedInput
  }

  export type DoacaoUpsertWithoutUsuarioDoacoesInput = {
    update: XOR<DoacaoUpdateWithoutUsuarioDoacoesInput, DoacaoUncheckedUpdateWithoutUsuarioDoacoesInput>
    create: XOR<DoacaoCreateWithoutUsuarioDoacoesInput, DoacaoUncheckedCreateWithoutUsuarioDoacoesInput>
    where?: DoacaoWhereInput
  }

  export type DoacaoUpdateToOneWithWhereWithoutUsuarioDoacoesInput = {
    where?: DoacaoWhereInput
    data: XOR<DoacaoUpdateWithoutUsuarioDoacoesInput, DoacaoUncheckedUpdateWithoutUsuarioDoacoesInput>
  }

  export type DoacaoUpdateWithoutUsuarioDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuario?: UsuarioUpdateOneRequiredWithoutDoacoesNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutDoacoesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutDoacoesNestedInput
    local?: LocalUpdateOneRequiredWithoutDoacoesNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutUsuarioDoacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
  }

  export type DoacaoCreateManyUsuarioInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
  }

  export type CampanhaCreateManyCriadorInput = {
    id?: string
    titulo: string
    descricao: string
    meta: number
    criadaEm?: Date | string
  }

  export type UsuarioDoacaoCreateManyUsuarioInput = {
    id?: string
    doacaoId: string
    data?: Date | string
  }

  export type DoacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    campanha?: CampanhaUpdateOneRequiredWithoutDoacoesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutDoacoesNestedInput
    local?: LocalUpdateOneRequiredWithoutDoacoesNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
  }

  export type CampanhaUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateManyWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    meta?: FloatFieldUpdateOperationsInput | number
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioDoacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    doacao?: DoacaoUpdateOneRequiredWithoutUsuarioDoacoesNestedInput
  }

  export type UsuarioDoacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    doacaoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioDoacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    doacaoId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoCreateManyCampanhaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
    localId: string
  }

  export type DoacaoUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuario?: UsuarioUpdateOneRequiredWithoutDoacoesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutDoacoesNestedInput
    local?: LocalUpdateOneRequiredWithoutDoacoesNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutCampanhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioDoacaoCreateManyDoacaoInput = {
    id?: string
    usuarioId: string
    data?: Date | string
  }

  export type UsuarioDoacaoUpdateWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioDoacoesNestedInput
  }

  export type UsuarioDoacaoUncheckedUpdateWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoCreateManyCategoriaInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    status?: $Enums.StatusDoacao
    localId: string
  }

  export type DoacaoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuario?: UsuarioUpdateOneRequiredWithoutDoacoesNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutDoacoesNestedInput
    local?: LocalUpdateOneRequiredWithoutDoacoesNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    localId?: StringFieldUpdateOperationsInput | string
  }

  export type DoacaoCreateManyLocalInput = {
    id?: string
    valor: number
    data?: Date | string
    tipoProduto: $Enums.TipoProduto
    produto: string
    usuarioId: string
    campanhaId: string
    categoriaId: string
    status?: $Enums.StatusDoacao
  }

  export type DoacaoUpdateWithoutLocalInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuario?: UsuarioUpdateOneRequiredWithoutDoacoesNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutDoacoesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutDoacoesNestedInput
    usuarioDoacoes?: UsuarioDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutLocalInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
    usuarioDoacoes?: UsuarioDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutLocalInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoProduto?: EnumTipoProdutoFieldUpdateOperationsInput | $Enums.TipoProduto
    produto?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    campanhaId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDoacaoFieldUpdateOperationsInput | $Enums.StatusDoacao
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}