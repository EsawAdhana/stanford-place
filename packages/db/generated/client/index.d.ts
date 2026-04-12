
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Placement
 * 
 */
export type Placement = $Result.DefaultSelection<Prisma.$PlacementPayload>
/**
 * Model CurrentPixel
 * 
 */
export type CurrentPixel = $Result.DefaultSelection<Prisma.$CurrentPixelPayload>
/**
 * Model Suspension
 * 
 */
export type Suspension = $Result.DefaultSelection<Prisma.$SuspensionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placement`: Exposes CRUD operations for the **Placement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Placements
    * const placements = await prisma.placement.findMany()
    * ```
    */
  get placement(): Prisma.PlacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currentPixel`: Exposes CRUD operations for the **CurrentPixel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrentPixels
    * const currentPixels = await prisma.currentPixel.findMany()
    * ```
    */
  get currentPixel(): Prisma.CurrentPixelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suspension`: Exposes CRUD operations for the **Suspension** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suspensions
    * const suspensions = await prisma.suspension.findMany()
    * ```
    */
  get suspension(): Prisma.SuspensionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Placement: 'Placement',
    CurrentPixel: 'CurrentPixel',
    Suspension: 'Suspension'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "placement" | "currentPixel" | "suspension"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Placement: {
        payload: Prisma.$PlacementPayload<ExtArgs>
        fields: Prisma.PlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findFirst: {
            args: Prisma.PlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          findMany: {
            args: Prisma.PlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          create: {
            args: Prisma.PlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          createMany: {
            args: Prisma.PlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          delete: {
            args: Prisma.PlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          update: {
            args: Prisma.PlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          deleteMany: {
            args: Prisma.PlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>[]
          }
          upsert: {
            args: Prisma.PlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacementPayload>
          }
          aggregate: {
            args: Prisma.PlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlacement>
          }
          groupBy: {
            args: Prisma.PlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacementCountArgs<ExtArgs>
            result: $Utils.Optional<PlacementCountAggregateOutputType> | number
          }
        }
      }
      CurrentPixel: {
        payload: Prisma.$CurrentPixelPayload<ExtArgs>
        fields: Prisma.CurrentPixelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrentPixelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrentPixelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          findFirst: {
            args: Prisma.CurrentPixelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrentPixelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          findMany: {
            args: Prisma.CurrentPixelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>[]
          }
          create: {
            args: Prisma.CurrentPixelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          createMany: {
            args: Prisma.CurrentPixelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrentPixelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>[]
          }
          delete: {
            args: Prisma.CurrentPixelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          update: {
            args: Prisma.CurrentPixelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          deleteMany: {
            args: Prisma.CurrentPixelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrentPixelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrentPixelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>[]
          }
          upsert: {
            args: Prisma.CurrentPixelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentPixelPayload>
          }
          aggregate: {
            args: Prisma.CurrentPixelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrentPixel>
          }
          groupBy: {
            args: Prisma.CurrentPixelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrentPixelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrentPixelCountArgs<ExtArgs>
            result: $Utils.Optional<CurrentPixelCountAggregateOutputType> | number
          }
        }
      }
      Suspension: {
        payload: Prisma.$SuspensionPayload<ExtArgs>
        fields: Prisma.SuspensionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuspensionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuspensionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          findFirst: {
            args: Prisma.SuspensionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuspensionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          findMany: {
            args: Prisma.SuspensionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>[]
          }
          create: {
            args: Prisma.SuspensionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          createMany: {
            args: Prisma.SuspensionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuspensionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>[]
          }
          delete: {
            args: Prisma.SuspensionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          update: {
            args: Prisma.SuspensionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          deleteMany: {
            args: Prisma.SuspensionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuspensionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuspensionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>[]
          }
          upsert: {
            args: Prisma.SuspensionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspensionPayload>
          }
          aggregate: {
            args: Prisma.SuspensionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuspension>
          }
          groupBy: {
            args: Prisma.SuspensionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuspensionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuspensionCountArgs<ExtArgs>
            result: $Utils.Optional<SuspensionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    placement?: PlacementOmit
    currentPixel?: CurrentPixelOmit
    suspension?: SuspensionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    placements: number
    suspensions: number
    currentEdits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placements?: boolean | UserCountOutputTypeCountPlacementsArgs
    suspensions?: boolean | UserCountOutputTypeCountSuspensionsArgs
    currentEdits?: boolean | UserCountOutputTypeCountCurrentEditsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuspensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuspensionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCurrentEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentPixelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleSub: string | null
    email: string | null
    displayName: string | null
    image: string | null
    isAdmin: boolean | null
    nextPlaceAt: Date | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleSub: string | null
    email: string | null
    displayName: string | null
    image: string | null
    isAdmin: boolean | null
    nextPlaceAt: Date | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleSub: number
    email: number
    displayName: number
    image: number
    isAdmin: number
    nextPlaceAt: number
    createdAt: number
    lastSeenAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleSub?: true
    email?: true
    displayName?: true
    image?: true
    isAdmin?: true
    nextPlaceAt?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleSub?: true
    email?: true
    displayName?: true
    image?: true
    isAdmin?: true
    nextPlaceAt?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleSub?: true
    email?: true
    displayName?: true
    image?: true
    isAdmin?: true
    nextPlaceAt?: true
    createdAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleSub: string
    email: string
    displayName: string | null
    image: string | null
    isAdmin: boolean
    nextPlaceAt: Date | null
    createdAt: Date
    lastSeenAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleSub?: boolean
    email?: boolean
    displayName?: boolean
    image?: boolean
    isAdmin?: boolean
    nextPlaceAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    placements?: boolean | User$placementsArgs<ExtArgs>
    suspensions?: boolean | User$suspensionsArgs<ExtArgs>
    currentEdits?: boolean | User$currentEditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleSub?: boolean
    email?: boolean
    displayName?: boolean
    image?: boolean
    isAdmin?: boolean
    nextPlaceAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleSub?: boolean
    email?: boolean
    displayName?: boolean
    image?: boolean
    isAdmin?: boolean
    nextPlaceAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    googleSub?: boolean
    email?: boolean
    displayName?: boolean
    image?: boolean
    isAdmin?: boolean
    nextPlaceAt?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleSub" | "email" | "displayName" | "image" | "isAdmin" | "nextPlaceAt" | "createdAt" | "lastSeenAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placements?: boolean | User$placementsArgs<ExtArgs>
    suspensions?: boolean | User$suspensionsArgs<ExtArgs>
    currentEdits?: boolean | User$currentEditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      placements: Prisma.$PlacementPayload<ExtArgs>[]
      suspensions: Prisma.$SuspensionPayload<ExtArgs>[]
      currentEdits: Prisma.$CurrentPixelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleSub: string
      email: string
      displayName: string | null
      image: string | null
      isAdmin: boolean
      nextPlaceAt: Date | null
      createdAt: Date
      lastSeenAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placements<T extends User$placementsArgs<ExtArgs> = {}>(args?: Subset<T, User$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suspensions<T extends User$suspensionsArgs<ExtArgs> = {}>(args?: Subset<T, User$suspensionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentEdits<T extends User$currentEditsArgs<ExtArgs> = {}>(args?: Subset<T, User$currentEditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly googleSub: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly nextPlaceAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastSeenAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.placements
   */
  export type User$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    cursor?: PlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * User.suspensions
   */
  export type User$suspensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    where?: SuspensionWhereInput
    orderBy?: SuspensionOrderByWithRelationInput | SuspensionOrderByWithRelationInput[]
    cursor?: SuspensionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuspensionScalarFieldEnum | SuspensionScalarFieldEnum[]
  }

  /**
   * User.currentEdits
   */
  export type User$currentEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    where?: CurrentPixelWhereInput
    orderBy?: CurrentPixelOrderByWithRelationInput | CurrentPixelOrderByWithRelationInput[]
    cursor?: CurrentPixelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurrentPixelScalarFieldEnum | CurrentPixelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Placement
   */

  export type AggregatePlacement = {
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  export type PlacementAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    color: number | null
  }

  export type PlacementSumAggregateOutputType = {
    id: bigint | null
    x: number | null
    y: number | null
    color: number | null
  }

  export type PlacementMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    x: number | null
    y: number | null
    color: number | null
    placedAt: Date | null
    ipHash: string | null
    userAgentHash: string | null
  }

  export type PlacementMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    x: number | null
    y: number | null
    color: number | null
    placedAt: Date | null
    ipHash: string | null
    userAgentHash: string | null
  }

  export type PlacementCountAggregateOutputType = {
    id: number
    userId: number
    x: number
    y: number
    color: number
    placedAt: number
    ipHash: number
    userAgentHash: number
    _all: number
  }


  export type PlacementAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
    color?: true
  }

  export type PlacementSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
    color?: true
  }

  export type PlacementMinAggregateInputType = {
    id?: true
    userId?: true
    x?: true
    y?: true
    color?: true
    placedAt?: true
    ipHash?: true
    userAgentHash?: true
  }

  export type PlacementMaxAggregateInputType = {
    id?: true
    userId?: true
    x?: true
    y?: true
    color?: true
    placedAt?: true
    ipHash?: true
    userAgentHash?: true
  }

  export type PlacementCountAggregateInputType = {
    id?: true
    userId?: true
    x?: true
    y?: true
    color?: true
    placedAt?: true
    ipHash?: true
    userAgentHash?: true
    _all?: true
  }

  export type PlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placement to aggregate.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Placements
    **/
    _count?: true | PlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacementMaxAggregateInputType
  }

  export type GetPlacementAggregateType<T extends PlacementAggregateArgs> = {
        [P in keyof T & keyof AggregatePlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlacement[P]>
      : GetScalarType<T[P], AggregatePlacement[P]>
  }




  export type PlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacementWhereInput
    orderBy?: PlacementOrderByWithAggregationInput | PlacementOrderByWithAggregationInput[]
    by: PlacementScalarFieldEnum[] | PlacementScalarFieldEnum
    having?: PlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacementCountAggregateInputType | true
    _avg?: PlacementAvgAggregateInputType
    _sum?: PlacementSumAggregateInputType
    _min?: PlacementMinAggregateInputType
    _max?: PlacementMaxAggregateInputType
  }

  export type PlacementGroupByOutputType = {
    id: bigint
    userId: string
    x: number
    y: number
    color: number
    placedAt: Date
    ipHash: string | null
    userAgentHash: string | null
    _count: PlacementCountAggregateOutputType | null
    _avg: PlacementAvgAggregateOutputType | null
    _sum: PlacementSumAggregateOutputType | null
    _min: PlacementMinAggregateOutputType | null
    _max: PlacementMaxAggregateOutputType | null
  }

  type GetPlacementGroupByPayload<T extends PlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacementGroupByOutputType[P]>
            : GetScalarType<T[P], PlacementGroupByOutputType[P]>
        }
      >
    >


  export type PlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
    placedAt?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
    placedAt?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
    placedAt?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placement"]>

  export type PlacementSelectScalar = {
    id?: boolean
    userId?: boolean
    x?: boolean
    y?: boolean
    color?: boolean
    placedAt?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
  }

  export type PlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "x" | "y" | "color" | "placedAt" | "ipHash" | "userAgentHash", ExtArgs["result"]["placement"]>
  export type PlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Placement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: string
      x: number
      y: number
      color: number
      placedAt: Date
      ipHash: string | null
      userAgentHash: string | null
    }, ExtArgs["result"]["placement"]>
    composites: {}
  }

  type PlacementGetPayload<S extends boolean | null | undefined | PlacementDefaultArgs> = $Result.GetResult<Prisma.$PlacementPayload, S>

  type PlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlacementCountAggregateInputType | true
    }

  export interface PlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Placement'], meta: { name: 'Placement' } }
    /**
     * Find zero or one Placement that matches the filter.
     * @param {PlacementFindUniqueArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacementFindUniqueArgs>(args: SelectSubset<T, PlacementFindUniqueArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Placement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlacementFindUniqueOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacementFindFirstArgs>(args?: SelectSubset<T, PlacementFindFirstArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Placement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindFirstOrThrowArgs} args - Arguments to find a Placement
     * @example
     * // Get one Placement
     * const placement = await prisma.placement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Placements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Placements
     * const placements = await prisma.placement.findMany()
     * 
     * // Get first 10 Placements
     * const placements = await prisma.placement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placementWithIdOnly = await prisma.placement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacementFindManyArgs>(args?: SelectSubset<T, PlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Placement.
     * @param {PlacementCreateArgs} args - Arguments to create a Placement.
     * @example
     * // Create one Placement
     * const Placement = await prisma.placement.create({
     *   data: {
     *     // ... data to create a Placement
     *   }
     * })
     * 
     */
    create<T extends PlacementCreateArgs>(args: SelectSubset<T, PlacementCreateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Placements.
     * @param {PlacementCreateManyArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacementCreateManyArgs>(args?: SelectSubset<T, PlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Placements and returns the data saved in the database.
     * @param {PlacementCreateManyAndReturnArgs} args - Arguments to create many Placements.
     * @example
     * // Create many Placements
     * const placement = await prisma.placement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Placement.
     * @param {PlacementDeleteArgs} args - Arguments to delete one Placement.
     * @example
     * // Delete one Placement
     * const Placement = await prisma.placement.delete({
     *   where: {
     *     // ... filter to delete one Placement
     *   }
     * })
     * 
     */
    delete<T extends PlacementDeleteArgs>(args: SelectSubset<T, PlacementDeleteArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Placement.
     * @param {PlacementUpdateArgs} args - Arguments to update one Placement.
     * @example
     * // Update one Placement
     * const placement = await prisma.placement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacementUpdateArgs>(args: SelectSubset<T, PlacementUpdateArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Placements.
     * @param {PlacementDeleteManyArgs} args - Arguments to filter Placements to delete.
     * @example
     * // Delete a few Placements
     * const { count } = await prisma.placement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacementDeleteManyArgs>(args?: SelectSubset<T, PlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacementUpdateManyArgs>(args: SelectSubset<T, PlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Placements and returns the data updated in the database.
     * @param {PlacementUpdateManyAndReturnArgs} args - Arguments to update many Placements.
     * @example
     * // Update many Placements
     * const placement = await prisma.placement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Placements and only return the `id`
     * const placementWithIdOnly = await prisma.placement.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, PlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Placement.
     * @param {PlacementUpsertArgs} args - Arguments to update or create a Placement.
     * @example
     * // Update or create a Placement
     * const placement = await prisma.placement.upsert({
     *   create: {
     *     // ... data to create a Placement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Placement we want to update
     *   }
     * })
     */
    upsert<T extends PlacementUpsertArgs>(args: SelectSubset<T, PlacementUpsertArgs<ExtArgs>>): Prisma__PlacementClient<$Result.GetResult<Prisma.$PlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Placements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementCountArgs} args - Arguments to filter Placements to count.
     * @example
     * // Count the number of Placements
     * const count = await prisma.placement.count({
     *   where: {
     *     // ... the filter for the Placements we want to count
     *   }
     * })
    **/
    count<T extends PlacementCountArgs>(
      args?: Subset<T, PlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlacementAggregateArgs>(args: Subset<T, PlacementAggregateArgs>): Prisma.PrismaPromise<GetPlacementAggregateType<T>>

    /**
     * Group by Placement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacementGroupByArgs} args - Group by arguments.
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
      T extends PlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacementGroupByArgs['orderBy'] }
        : { orderBy?: PlacementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Placement model
   */
  readonly fields: PlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Placement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Placement model
   */
  interface PlacementFieldRefs {
    readonly id: FieldRef<"Placement", 'BigInt'>
    readonly userId: FieldRef<"Placement", 'String'>
    readonly x: FieldRef<"Placement", 'Int'>
    readonly y: FieldRef<"Placement", 'Int'>
    readonly color: FieldRef<"Placement", 'Int'>
    readonly placedAt: FieldRef<"Placement", 'DateTime'>
    readonly ipHash: FieldRef<"Placement", 'String'>
    readonly userAgentHash: FieldRef<"Placement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Placement findUnique
   */
  export type PlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findUniqueOrThrow
   */
  export type PlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement findFirst
   */
  export type PlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findFirstOrThrow
   */
  export type PlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placement to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement findMany
   */
  export type PlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter, which Placements to fetch.
     */
    where?: PlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Placements to fetch.
     */
    orderBy?: PlacementOrderByWithRelationInput | PlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Placements.
     */
    cursor?: PlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Placements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Placements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Placements.
     */
    distinct?: PlacementScalarFieldEnum | PlacementScalarFieldEnum[]
  }

  /**
   * Placement create
   */
  export type PlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a Placement.
     */
    data: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
  }

  /**
   * Placement createMany
   */
  export type PlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Placement createManyAndReturn
   */
  export type PlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to create many Placements.
     */
    data: PlacementCreateManyInput | PlacementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement update
   */
  export type PlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a Placement.
     */
    data: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
    /**
     * Choose, which Placement to update.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement updateMany
   */
  export type PlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
  }

  /**
   * Placement updateManyAndReturn
   */
  export type PlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * The data used to update Placements.
     */
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyInput>
    /**
     * Filter which Placements to update
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Placement upsert
   */
  export type PlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the Placement to update in case it exists.
     */
    where: PlacementWhereUniqueInput
    /**
     * In case the Placement found by the `where` argument doesn't exist, create a new Placement with this data.
     */
    create: XOR<PlacementCreateInput, PlacementUncheckedCreateInput>
    /**
     * In case the Placement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacementUpdateInput, PlacementUncheckedUpdateInput>
  }

  /**
   * Placement delete
   */
  export type PlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
    /**
     * Filter which Placement to delete.
     */
    where: PlacementWhereUniqueInput
  }

  /**
   * Placement deleteMany
   */
  export type PlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Placements to delete
     */
    where?: PlacementWhereInput
    /**
     * Limit how many Placements to delete.
     */
    limit?: number
  }

  /**
   * Placement without action
   */
  export type PlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Placement
     */
    select?: PlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Placement
     */
    omit?: PlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacementInclude<ExtArgs> | null
  }


  /**
   * Model CurrentPixel
   */

  export type AggregateCurrentPixel = {
    _count: CurrentPixelCountAggregateOutputType | null
    _avg: CurrentPixelAvgAggregateOutputType | null
    _sum: CurrentPixelSumAggregateOutputType | null
    _min: CurrentPixelMinAggregateOutputType | null
    _max: CurrentPixelMaxAggregateOutputType | null
  }

  export type CurrentPixelAvgAggregateOutputType = {
    x: number | null
    y: number | null
    color: number | null
  }

  export type CurrentPixelSumAggregateOutputType = {
    x: number | null
    y: number | null
    color: number | null
  }

  export type CurrentPixelMinAggregateOutputType = {
    x: number | null
    y: number | null
    color: number | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CurrentPixelMaxAggregateOutputType = {
    x: number | null
    y: number | null
    color: number | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CurrentPixelCountAggregateOutputType = {
    x: number
    y: number
    color: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type CurrentPixelAvgAggregateInputType = {
    x?: true
    y?: true
    color?: true
  }

  export type CurrentPixelSumAggregateInputType = {
    x?: true
    y?: true
    color?: true
  }

  export type CurrentPixelMinAggregateInputType = {
    x?: true
    y?: true
    color?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CurrentPixelMaxAggregateInputType = {
    x?: true
    y?: true
    color?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CurrentPixelCountAggregateInputType = {
    x?: true
    y?: true
    color?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type CurrentPixelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentPixel to aggregate.
     */
    where?: CurrentPixelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentPixels to fetch.
     */
    orderBy?: CurrentPixelOrderByWithRelationInput | CurrentPixelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrentPixelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentPixels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentPixels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrentPixels
    **/
    _count?: true | CurrentPixelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrentPixelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrentPixelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrentPixelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrentPixelMaxAggregateInputType
  }

  export type GetCurrentPixelAggregateType<T extends CurrentPixelAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrentPixel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrentPixel[P]>
      : GetScalarType<T[P], AggregateCurrentPixel[P]>
  }




  export type CurrentPixelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentPixelWhereInput
    orderBy?: CurrentPixelOrderByWithAggregationInput | CurrentPixelOrderByWithAggregationInput[]
    by: CurrentPixelScalarFieldEnum[] | CurrentPixelScalarFieldEnum
    having?: CurrentPixelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrentPixelCountAggregateInputType | true
    _avg?: CurrentPixelAvgAggregateInputType
    _sum?: CurrentPixelSumAggregateInputType
    _min?: CurrentPixelMinAggregateInputType
    _max?: CurrentPixelMaxAggregateInputType
  }

  export type CurrentPixelGroupByOutputType = {
    x: number
    y: number
    color: number
    updatedAt: Date
    updatedBy: string
    _count: CurrentPixelCountAggregateOutputType | null
    _avg: CurrentPixelAvgAggregateOutputType | null
    _sum: CurrentPixelSumAggregateOutputType | null
    _min: CurrentPixelMinAggregateOutputType | null
    _max: CurrentPixelMaxAggregateOutputType | null
  }

  type GetCurrentPixelGroupByPayload<T extends CurrentPixelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrentPixelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrentPixelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrentPixelGroupByOutputType[P]>
            : GetScalarType<T[P], CurrentPixelGroupByOutputType[P]>
        }
      >
    >


  export type CurrentPixelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    x?: boolean
    y?: boolean
    color?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentPixel"]>

  export type CurrentPixelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    x?: boolean
    y?: boolean
    color?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentPixel"]>

  export type CurrentPixelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    x?: boolean
    y?: boolean
    color?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentPixel"]>

  export type CurrentPixelSelectScalar = {
    x?: boolean
    y?: boolean
    color?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type CurrentPixelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"x" | "y" | "color" | "updatedAt" | "updatedBy", ExtArgs["result"]["currentPixel"]>
  export type CurrentPixelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurrentPixelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurrentPixelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CurrentPixelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrentPixel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      x: number
      y: number
      color: number
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["currentPixel"]>
    composites: {}
  }

  type CurrentPixelGetPayload<S extends boolean | null | undefined | CurrentPixelDefaultArgs> = $Result.GetResult<Prisma.$CurrentPixelPayload, S>

  type CurrentPixelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrentPixelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrentPixelCountAggregateInputType | true
    }

  export interface CurrentPixelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrentPixel'], meta: { name: 'CurrentPixel' } }
    /**
     * Find zero or one CurrentPixel that matches the filter.
     * @param {CurrentPixelFindUniqueArgs} args - Arguments to find a CurrentPixel
     * @example
     * // Get one CurrentPixel
     * const currentPixel = await prisma.currentPixel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrentPixelFindUniqueArgs>(args: SelectSubset<T, CurrentPixelFindUniqueArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurrentPixel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrentPixelFindUniqueOrThrowArgs} args - Arguments to find a CurrentPixel
     * @example
     * // Get one CurrentPixel
     * const currentPixel = await prisma.currentPixel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrentPixelFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrentPixelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrentPixel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelFindFirstArgs} args - Arguments to find a CurrentPixel
     * @example
     * // Get one CurrentPixel
     * const currentPixel = await prisma.currentPixel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrentPixelFindFirstArgs>(args?: SelectSubset<T, CurrentPixelFindFirstArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrentPixel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelFindFirstOrThrowArgs} args - Arguments to find a CurrentPixel
     * @example
     * // Get one CurrentPixel
     * const currentPixel = await prisma.currentPixel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrentPixelFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrentPixelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrentPixels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrentPixels
     * const currentPixels = await prisma.currentPixel.findMany()
     * 
     * // Get first 10 CurrentPixels
     * const currentPixels = await prisma.currentPixel.findMany({ take: 10 })
     * 
     * // Only select the `x`
     * const currentPixelWithXOnly = await prisma.currentPixel.findMany({ select: { x: true } })
     * 
     */
    findMany<T extends CurrentPixelFindManyArgs>(args?: SelectSubset<T, CurrentPixelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurrentPixel.
     * @param {CurrentPixelCreateArgs} args - Arguments to create a CurrentPixel.
     * @example
     * // Create one CurrentPixel
     * const CurrentPixel = await prisma.currentPixel.create({
     *   data: {
     *     // ... data to create a CurrentPixel
     *   }
     * })
     * 
     */
    create<T extends CurrentPixelCreateArgs>(args: SelectSubset<T, CurrentPixelCreateArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurrentPixels.
     * @param {CurrentPixelCreateManyArgs} args - Arguments to create many CurrentPixels.
     * @example
     * // Create many CurrentPixels
     * const currentPixel = await prisma.currentPixel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrentPixelCreateManyArgs>(args?: SelectSubset<T, CurrentPixelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurrentPixels and returns the data saved in the database.
     * @param {CurrentPixelCreateManyAndReturnArgs} args - Arguments to create many CurrentPixels.
     * @example
     * // Create many CurrentPixels
     * const currentPixel = await prisma.currentPixel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurrentPixels and only return the `x`
     * const currentPixelWithXOnly = await prisma.currentPixel.createManyAndReturn({
     *   select: { x: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrentPixelCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrentPixelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurrentPixel.
     * @param {CurrentPixelDeleteArgs} args - Arguments to delete one CurrentPixel.
     * @example
     * // Delete one CurrentPixel
     * const CurrentPixel = await prisma.currentPixel.delete({
     *   where: {
     *     // ... filter to delete one CurrentPixel
     *   }
     * })
     * 
     */
    delete<T extends CurrentPixelDeleteArgs>(args: SelectSubset<T, CurrentPixelDeleteArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurrentPixel.
     * @param {CurrentPixelUpdateArgs} args - Arguments to update one CurrentPixel.
     * @example
     * // Update one CurrentPixel
     * const currentPixel = await prisma.currentPixel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrentPixelUpdateArgs>(args: SelectSubset<T, CurrentPixelUpdateArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurrentPixels.
     * @param {CurrentPixelDeleteManyArgs} args - Arguments to filter CurrentPixels to delete.
     * @example
     * // Delete a few CurrentPixels
     * const { count } = await prisma.currentPixel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrentPixelDeleteManyArgs>(args?: SelectSubset<T, CurrentPixelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrentPixels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrentPixels
     * const currentPixel = await prisma.currentPixel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrentPixelUpdateManyArgs>(args: SelectSubset<T, CurrentPixelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrentPixels and returns the data updated in the database.
     * @param {CurrentPixelUpdateManyAndReturnArgs} args - Arguments to update many CurrentPixels.
     * @example
     * // Update many CurrentPixels
     * const currentPixel = await prisma.currentPixel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurrentPixels and only return the `x`
     * const currentPixelWithXOnly = await prisma.currentPixel.updateManyAndReturn({
     *   select: { x: true },
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
    updateManyAndReturn<T extends CurrentPixelUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrentPixelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurrentPixel.
     * @param {CurrentPixelUpsertArgs} args - Arguments to update or create a CurrentPixel.
     * @example
     * // Update or create a CurrentPixel
     * const currentPixel = await prisma.currentPixel.upsert({
     *   create: {
     *     // ... data to create a CurrentPixel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrentPixel we want to update
     *   }
     * })
     */
    upsert<T extends CurrentPixelUpsertArgs>(args: SelectSubset<T, CurrentPixelUpsertArgs<ExtArgs>>): Prisma__CurrentPixelClient<$Result.GetResult<Prisma.$CurrentPixelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurrentPixels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelCountArgs} args - Arguments to filter CurrentPixels to count.
     * @example
     * // Count the number of CurrentPixels
     * const count = await prisma.currentPixel.count({
     *   where: {
     *     // ... the filter for the CurrentPixels we want to count
     *   }
     * })
    **/
    count<T extends CurrentPixelCountArgs>(
      args?: Subset<T, CurrentPixelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrentPixelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrentPixel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrentPixelAggregateArgs>(args: Subset<T, CurrentPixelAggregateArgs>): Prisma.PrismaPromise<GetCurrentPixelAggregateType<T>>

    /**
     * Group by CurrentPixel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentPixelGroupByArgs} args - Group by arguments.
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
      T extends CurrentPixelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrentPixelGroupByArgs['orderBy'] }
        : { orderBy?: CurrentPixelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrentPixelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrentPixelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrentPixel model
   */
  readonly fields: CurrentPixelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrentPixel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrentPixelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CurrentPixel model
   */
  interface CurrentPixelFieldRefs {
    readonly x: FieldRef<"CurrentPixel", 'Int'>
    readonly y: FieldRef<"CurrentPixel", 'Int'>
    readonly color: FieldRef<"CurrentPixel", 'Int'>
    readonly updatedAt: FieldRef<"CurrentPixel", 'DateTime'>
    readonly updatedBy: FieldRef<"CurrentPixel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CurrentPixel findUnique
   */
  export type CurrentPixelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter, which CurrentPixel to fetch.
     */
    where: CurrentPixelWhereUniqueInput
  }

  /**
   * CurrentPixel findUniqueOrThrow
   */
  export type CurrentPixelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter, which CurrentPixel to fetch.
     */
    where: CurrentPixelWhereUniqueInput
  }

  /**
   * CurrentPixel findFirst
   */
  export type CurrentPixelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter, which CurrentPixel to fetch.
     */
    where?: CurrentPixelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentPixels to fetch.
     */
    orderBy?: CurrentPixelOrderByWithRelationInput | CurrentPixelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentPixels.
     */
    cursor?: CurrentPixelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentPixels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentPixels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentPixels.
     */
    distinct?: CurrentPixelScalarFieldEnum | CurrentPixelScalarFieldEnum[]
  }

  /**
   * CurrentPixel findFirstOrThrow
   */
  export type CurrentPixelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter, which CurrentPixel to fetch.
     */
    where?: CurrentPixelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentPixels to fetch.
     */
    orderBy?: CurrentPixelOrderByWithRelationInput | CurrentPixelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentPixels.
     */
    cursor?: CurrentPixelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentPixels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentPixels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentPixels.
     */
    distinct?: CurrentPixelScalarFieldEnum | CurrentPixelScalarFieldEnum[]
  }

  /**
   * CurrentPixel findMany
   */
  export type CurrentPixelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter, which CurrentPixels to fetch.
     */
    where?: CurrentPixelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentPixels to fetch.
     */
    orderBy?: CurrentPixelOrderByWithRelationInput | CurrentPixelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrentPixels.
     */
    cursor?: CurrentPixelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentPixels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentPixels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentPixels.
     */
    distinct?: CurrentPixelScalarFieldEnum | CurrentPixelScalarFieldEnum[]
  }

  /**
   * CurrentPixel create
   */
  export type CurrentPixelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * The data needed to create a CurrentPixel.
     */
    data: XOR<CurrentPixelCreateInput, CurrentPixelUncheckedCreateInput>
  }

  /**
   * CurrentPixel createMany
   */
  export type CurrentPixelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrentPixels.
     */
    data: CurrentPixelCreateManyInput | CurrentPixelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrentPixel createManyAndReturn
   */
  export type CurrentPixelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * The data used to create many CurrentPixels.
     */
    data: CurrentPixelCreateManyInput | CurrentPixelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurrentPixel update
   */
  export type CurrentPixelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * The data needed to update a CurrentPixel.
     */
    data: XOR<CurrentPixelUpdateInput, CurrentPixelUncheckedUpdateInput>
    /**
     * Choose, which CurrentPixel to update.
     */
    where: CurrentPixelWhereUniqueInput
  }

  /**
   * CurrentPixel updateMany
   */
  export type CurrentPixelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrentPixels.
     */
    data: XOR<CurrentPixelUpdateManyMutationInput, CurrentPixelUncheckedUpdateManyInput>
    /**
     * Filter which CurrentPixels to update
     */
    where?: CurrentPixelWhereInput
    /**
     * Limit how many CurrentPixels to update.
     */
    limit?: number
  }

  /**
   * CurrentPixel updateManyAndReturn
   */
  export type CurrentPixelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * The data used to update CurrentPixels.
     */
    data: XOR<CurrentPixelUpdateManyMutationInput, CurrentPixelUncheckedUpdateManyInput>
    /**
     * Filter which CurrentPixels to update
     */
    where?: CurrentPixelWhereInput
    /**
     * Limit how many CurrentPixels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurrentPixel upsert
   */
  export type CurrentPixelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * The filter to search for the CurrentPixel to update in case it exists.
     */
    where: CurrentPixelWhereUniqueInput
    /**
     * In case the CurrentPixel found by the `where` argument doesn't exist, create a new CurrentPixel with this data.
     */
    create: XOR<CurrentPixelCreateInput, CurrentPixelUncheckedCreateInput>
    /**
     * In case the CurrentPixel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrentPixelUpdateInput, CurrentPixelUncheckedUpdateInput>
  }

  /**
   * CurrentPixel delete
   */
  export type CurrentPixelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
    /**
     * Filter which CurrentPixel to delete.
     */
    where: CurrentPixelWhereUniqueInput
  }

  /**
   * CurrentPixel deleteMany
   */
  export type CurrentPixelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentPixels to delete
     */
    where?: CurrentPixelWhereInput
    /**
     * Limit how many CurrentPixels to delete.
     */
    limit?: number
  }

  /**
   * CurrentPixel without action
   */
  export type CurrentPixelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentPixel
     */
    select?: CurrentPixelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentPixel
     */
    omit?: CurrentPixelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentPixelInclude<ExtArgs> | null
  }


  /**
   * Model Suspension
   */

  export type AggregateSuspension = {
    _count: SuspensionCountAggregateOutputType | null
    _min: SuspensionMinAggregateOutputType | null
    _max: SuspensionMaxAggregateOutputType | null
  }

  export type SuspensionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    startsAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type SuspensionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    startsAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type SuspensionCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    startsAt: number
    expiresAt: number
    revokedAt: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type SuspensionMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    startsAt?: true
    expiresAt?: true
    revokedAt?: true
    createdBy?: true
    createdAt?: true
  }

  export type SuspensionMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    startsAt?: true
    expiresAt?: true
    revokedAt?: true
    createdBy?: true
    createdAt?: true
  }

  export type SuspensionCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    startsAt?: true
    expiresAt?: true
    revokedAt?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type SuspensionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suspension to aggregate.
     */
    where?: SuspensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suspensions to fetch.
     */
    orderBy?: SuspensionOrderByWithRelationInput | SuspensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuspensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suspensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suspensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suspensions
    **/
    _count?: true | SuspensionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuspensionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuspensionMaxAggregateInputType
  }

  export type GetSuspensionAggregateType<T extends SuspensionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuspension]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuspension[P]>
      : GetScalarType<T[P], AggregateSuspension[P]>
  }




  export type SuspensionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuspensionWhereInput
    orderBy?: SuspensionOrderByWithAggregationInput | SuspensionOrderByWithAggregationInput[]
    by: SuspensionScalarFieldEnum[] | SuspensionScalarFieldEnum
    having?: SuspensionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuspensionCountAggregateInputType | true
    _min?: SuspensionMinAggregateInputType
    _max?: SuspensionMaxAggregateInputType
  }

  export type SuspensionGroupByOutputType = {
    id: string
    userId: string
    reason: string
    startsAt: Date
    expiresAt: Date | null
    revokedAt: Date | null
    createdBy: string | null
    createdAt: Date
    _count: SuspensionCountAggregateOutputType | null
    _min: SuspensionMinAggregateOutputType | null
    _max: SuspensionMaxAggregateOutputType | null
  }

  type GetSuspensionGroupByPayload<T extends SuspensionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuspensionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuspensionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuspensionGroupByOutputType[P]>
            : GetScalarType<T[P], SuspensionGroupByOutputType[P]>
        }
      >
    >


  export type SuspensionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspension"]>

  export type SuspensionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspension"]>

  export type SuspensionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suspension"]>

  export type SuspensionSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type SuspensionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason" | "startsAt" | "expiresAt" | "revokedAt" | "createdBy" | "createdAt", ExtArgs["result"]["suspension"]>
  export type SuspensionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SuspensionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SuspensionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SuspensionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suspension"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reason: string
      startsAt: Date
      expiresAt: Date | null
      revokedAt: Date | null
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["suspension"]>
    composites: {}
  }

  type SuspensionGetPayload<S extends boolean | null | undefined | SuspensionDefaultArgs> = $Result.GetResult<Prisma.$SuspensionPayload, S>

  type SuspensionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuspensionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuspensionCountAggregateInputType | true
    }

  export interface SuspensionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suspension'], meta: { name: 'Suspension' } }
    /**
     * Find zero or one Suspension that matches the filter.
     * @param {SuspensionFindUniqueArgs} args - Arguments to find a Suspension
     * @example
     * // Get one Suspension
     * const suspension = await prisma.suspension.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuspensionFindUniqueArgs>(args: SelectSubset<T, SuspensionFindUniqueArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suspension that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuspensionFindUniqueOrThrowArgs} args - Arguments to find a Suspension
     * @example
     * // Get one Suspension
     * const suspension = await prisma.suspension.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuspensionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuspensionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suspension that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionFindFirstArgs} args - Arguments to find a Suspension
     * @example
     * // Get one Suspension
     * const suspension = await prisma.suspension.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuspensionFindFirstArgs>(args?: SelectSubset<T, SuspensionFindFirstArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suspension that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionFindFirstOrThrowArgs} args - Arguments to find a Suspension
     * @example
     * // Get one Suspension
     * const suspension = await prisma.suspension.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuspensionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuspensionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suspensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suspensions
     * const suspensions = await prisma.suspension.findMany()
     * 
     * // Get first 10 Suspensions
     * const suspensions = await prisma.suspension.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suspensionWithIdOnly = await prisma.suspension.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuspensionFindManyArgs>(args?: SelectSubset<T, SuspensionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suspension.
     * @param {SuspensionCreateArgs} args - Arguments to create a Suspension.
     * @example
     * // Create one Suspension
     * const Suspension = await prisma.suspension.create({
     *   data: {
     *     // ... data to create a Suspension
     *   }
     * })
     * 
     */
    create<T extends SuspensionCreateArgs>(args: SelectSubset<T, SuspensionCreateArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suspensions.
     * @param {SuspensionCreateManyArgs} args - Arguments to create many Suspensions.
     * @example
     * // Create many Suspensions
     * const suspension = await prisma.suspension.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuspensionCreateManyArgs>(args?: SelectSubset<T, SuspensionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suspensions and returns the data saved in the database.
     * @param {SuspensionCreateManyAndReturnArgs} args - Arguments to create many Suspensions.
     * @example
     * // Create many Suspensions
     * const suspension = await prisma.suspension.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suspensions and only return the `id`
     * const suspensionWithIdOnly = await prisma.suspension.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuspensionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuspensionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suspension.
     * @param {SuspensionDeleteArgs} args - Arguments to delete one Suspension.
     * @example
     * // Delete one Suspension
     * const Suspension = await prisma.suspension.delete({
     *   where: {
     *     // ... filter to delete one Suspension
     *   }
     * })
     * 
     */
    delete<T extends SuspensionDeleteArgs>(args: SelectSubset<T, SuspensionDeleteArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suspension.
     * @param {SuspensionUpdateArgs} args - Arguments to update one Suspension.
     * @example
     * // Update one Suspension
     * const suspension = await prisma.suspension.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuspensionUpdateArgs>(args: SelectSubset<T, SuspensionUpdateArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suspensions.
     * @param {SuspensionDeleteManyArgs} args - Arguments to filter Suspensions to delete.
     * @example
     * // Delete a few Suspensions
     * const { count } = await prisma.suspension.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuspensionDeleteManyArgs>(args?: SelectSubset<T, SuspensionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suspensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suspensions
     * const suspension = await prisma.suspension.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuspensionUpdateManyArgs>(args: SelectSubset<T, SuspensionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suspensions and returns the data updated in the database.
     * @param {SuspensionUpdateManyAndReturnArgs} args - Arguments to update many Suspensions.
     * @example
     * // Update many Suspensions
     * const suspension = await prisma.suspension.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suspensions and only return the `id`
     * const suspensionWithIdOnly = await prisma.suspension.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuspensionUpdateManyAndReturnArgs>(args: SelectSubset<T, SuspensionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suspension.
     * @param {SuspensionUpsertArgs} args - Arguments to update or create a Suspension.
     * @example
     * // Update or create a Suspension
     * const suspension = await prisma.suspension.upsert({
     *   create: {
     *     // ... data to create a Suspension
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suspension we want to update
     *   }
     * })
     */
    upsert<T extends SuspensionUpsertArgs>(args: SelectSubset<T, SuspensionUpsertArgs<ExtArgs>>): Prisma__SuspensionClient<$Result.GetResult<Prisma.$SuspensionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suspensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionCountArgs} args - Arguments to filter Suspensions to count.
     * @example
     * // Count the number of Suspensions
     * const count = await prisma.suspension.count({
     *   where: {
     *     // ... the filter for the Suspensions we want to count
     *   }
     * })
    **/
    count<T extends SuspensionCountArgs>(
      args?: Subset<T, SuspensionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuspensionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suspension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuspensionAggregateArgs>(args: Subset<T, SuspensionAggregateArgs>): Prisma.PrismaPromise<GetSuspensionAggregateType<T>>

    /**
     * Group by Suspension.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspensionGroupByArgs} args - Group by arguments.
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
      T extends SuspensionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuspensionGroupByArgs['orderBy'] }
        : { orderBy?: SuspensionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuspensionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuspensionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suspension model
   */
  readonly fields: SuspensionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suspension.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuspensionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Suspension model
   */
  interface SuspensionFieldRefs {
    readonly id: FieldRef<"Suspension", 'String'>
    readonly userId: FieldRef<"Suspension", 'String'>
    readonly reason: FieldRef<"Suspension", 'String'>
    readonly startsAt: FieldRef<"Suspension", 'DateTime'>
    readonly expiresAt: FieldRef<"Suspension", 'DateTime'>
    readonly revokedAt: FieldRef<"Suspension", 'DateTime'>
    readonly createdBy: FieldRef<"Suspension", 'String'>
    readonly createdAt: FieldRef<"Suspension", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suspension findUnique
   */
  export type SuspensionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter, which Suspension to fetch.
     */
    where: SuspensionWhereUniqueInput
  }

  /**
   * Suspension findUniqueOrThrow
   */
  export type SuspensionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter, which Suspension to fetch.
     */
    where: SuspensionWhereUniqueInput
  }

  /**
   * Suspension findFirst
   */
  export type SuspensionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter, which Suspension to fetch.
     */
    where?: SuspensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suspensions to fetch.
     */
    orderBy?: SuspensionOrderByWithRelationInput | SuspensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suspensions.
     */
    cursor?: SuspensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suspensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suspensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suspensions.
     */
    distinct?: SuspensionScalarFieldEnum | SuspensionScalarFieldEnum[]
  }

  /**
   * Suspension findFirstOrThrow
   */
  export type SuspensionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter, which Suspension to fetch.
     */
    where?: SuspensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suspensions to fetch.
     */
    orderBy?: SuspensionOrderByWithRelationInput | SuspensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suspensions.
     */
    cursor?: SuspensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suspensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suspensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suspensions.
     */
    distinct?: SuspensionScalarFieldEnum | SuspensionScalarFieldEnum[]
  }

  /**
   * Suspension findMany
   */
  export type SuspensionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter, which Suspensions to fetch.
     */
    where?: SuspensionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suspensions to fetch.
     */
    orderBy?: SuspensionOrderByWithRelationInput | SuspensionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suspensions.
     */
    cursor?: SuspensionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suspensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suspensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suspensions.
     */
    distinct?: SuspensionScalarFieldEnum | SuspensionScalarFieldEnum[]
  }

  /**
   * Suspension create
   */
  export type SuspensionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suspension.
     */
    data: XOR<SuspensionCreateInput, SuspensionUncheckedCreateInput>
  }

  /**
   * Suspension createMany
   */
  export type SuspensionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suspensions.
     */
    data: SuspensionCreateManyInput | SuspensionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suspension createManyAndReturn
   */
  export type SuspensionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * The data used to create many Suspensions.
     */
    data: SuspensionCreateManyInput | SuspensionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suspension update
   */
  export type SuspensionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suspension.
     */
    data: XOR<SuspensionUpdateInput, SuspensionUncheckedUpdateInput>
    /**
     * Choose, which Suspension to update.
     */
    where: SuspensionWhereUniqueInput
  }

  /**
   * Suspension updateMany
   */
  export type SuspensionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suspensions.
     */
    data: XOR<SuspensionUpdateManyMutationInput, SuspensionUncheckedUpdateManyInput>
    /**
     * Filter which Suspensions to update
     */
    where?: SuspensionWhereInput
    /**
     * Limit how many Suspensions to update.
     */
    limit?: number
  }

  /**
   * Suspension updateManyAndReturn
   */
  export type SuspensionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * The data used to update Suspensions.
     */
    data: XOR<SuspensionUpdateManyMutationInput, SuspensionUncheckedUpdateManyInput>
    /**
     * Filter which Suspensions to update
     */
    where?: SuspensionWhereInput
    /**
     * Limit how many Suspensions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suspension upsert
   */
  export type SuspensionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suspension to update in case it exists.
     */
    where: SuspensionWhereUniqueInput
    /**
     * In case the Suspension found by the `where` argument doesn't exist, create a new Suspension with this data.
     */
    create: XOR<SuspensionCreateInput, SuspensionUncheckedCreateInput>
    /**
     * In case the Suspension was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuspensionUpdateInput, SuspensionUncheckedUpdateInput>
  }

  /**
   * Suspension delete
   */
  export type SuspensionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
    /**
     * Filter which Suspension to delete.
     */
    where: SuspensionWhereUniqueInput
  }

  /**
   * Suspension deleteMany
   */
  export type SuspensionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suspensions to delete
     */
    where?: SuspensionWhereInput
    /**
     * Limit how many Suspensions to delete.
     */
    limit?: number
  }

  /**
   * Suspension without action
   */
  export type SuspensionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suspension
     */
    select?: SuspensionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suspension
     */
    omit?: SuspensionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuspensionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    googleSub: 'googleSub',
    email: 'email',
    displayName: 'displayName',
    image: 'image',
    isAdmin: 'isAdmin',
    nextPlaceAt: 'nextPlaceAt',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlacementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    x: 'x',
    y: 'y',
    color: 'color',
    placedAt: 'placedAt',
    ipHash: 'ipHash',
    userAgentHash: 'userAgentHash'
  };

  export type PlacementScalarFieldEnum = (typeof PlacementScalarFieldEnum)[keyof typeof PlacementScalarFieldEnum]


  export const CurrentPixelScalarFieldEnum: {
    x: 'x',
    y: 'y',
    color: 'color',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type CurrentPixelScalarFieldEnum = (typeof CurrentPixelScalarFieldEnum)[keyof typeof CurrentPixelScalarFieldEnum]


  export const SuspensionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type SuspensionScalarFieldEnum = (typeof SuspensionScalarFieldEnum)[keyof typeof SuspensionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    googleSub?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    nextPlaceAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastSeenAt?: DateTimeFilter<"User"> | Date | string
    placements?: PlacementListRelationFilter
    suspensions?: SuspensionListRelationFilter
    currentEdits?: CurrentPixelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleSub?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    nextPlaceAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    placements?: PlacementOrderByRelationAggregateInput
    suspensions?: SuspensionOrderByRelationAggregateInput
    currentEdits?: CurrentPixelOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleSub?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    nextPlaceAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastSeenAt?: DateTimeFilter<"User"> | Date | string
    placements?: PlacementListRelationFilter
    suspensions?: SuspensionListRelationFilter
    currentEdits?: CurrentPixelListRelationFilter
  }, "id" | "googleSub" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleSub?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    nextPlaceAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    googleSub?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    nextPlaceAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlacementWhereInput = {
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    id?: BigIntFilter<"Placement"> | bigint | number
    userId?: UuidFilter<"Placement"> | string
    x?: IntFilter<"Placement"> | number
    y?: IntFilter<"Placement"> | number
    color?: IntFilter<"Placement"> | number
    placedAt?: DateTimeFilter<"Placement"> | Date | string
    ipHash?: StringNullableFilter<"Placement"> | string | null
    userAgentHash?: StringNullableFilter<"Placement"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlacementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    placedAt?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgentHash?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PlacementWhereInput | PlacementWhereInput[]
    OR?: PlacementWhereInput[]
    NOT?: PlacementWhereInput | PlacementWhereInput[]
    userId?: UuidFilter<"Placement"> | string
    x?: IntFilter<"Placement"> | number
    y?: IntFilter<"Placement"> | number
    color?: IntFilter<"Placement"> | number
    placedAt?: DateTimeFilter<"Placement"> | Date | string
    ipHash?: StringNullableFilter<"Placement"> | string | null
    userAgentHash?: StringNullableFilter<"Placement"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlacementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    placedAt?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgentHash?: SortOrderInput | SortOrder
    _count?: PlacementCountOrderByAggregateInput
    _avg?: PlacementAvgOrderByAggregateInput
    _max?: PlacementMaxOrderByAggregateInput
    _min?: PlacementMinOrderByAggregateInput
    _sum?: PlacementSumOrderByAggregateInput
  }

  export type PlacementScalarWhereWithAggregatesInput = {
    AND?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    OR?: PlacementScalarWhereWithAggregatesInput[]
    NOT?: PlacementScalarWhereWithAggregatesInput | PlacementScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Placement"> | bigint | number
    userId?: UuidWithAggregatesFilter<"Placement"> | string
    x?: IntWithAggregatesFilter<"Placement"> | number
    y?: IntWithAggregatesFilter<"Placement"> | number
    color?: IntWithAggregatesFilter<"Placement"> | number
    placedAt?: DateTimeWithAggregatesFilter<"Placement"> | Date | string
    ipHash?: StringNullableWithAggregatesFilter<"Placement"> | string | null
    userAgentHash?: StringNullableWithAggregatesFilter<"Placement"> | string | null
  }

  export type CurrentPixelWhereInput = {
    AND?: CurrentPixelWhereInput | CurrentPixelWhereInput[]
    OR?: CurrentPixelWhereInput[]
    NOT?: CurrentPixelWhereInput | CurrentPixelWhereInput[]
    x?: IntFilter<"CurrentPixel"> | number
    y?: IntFilter<"CurrentPixel"> | number
    color?: IntFilter<"CurrentPixel"> | number
    updatedAt?: DateTimeFilter<"CurrentPixel"> | Date | string
    updatedBy?: UuidFilter<"CurrentPixel"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CurrentPixelOrderByWithRelationInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CurrentPixelWhereUniqueInput = Prisma.AtLeast<{
    x_y?: CurrentPixelXYCompoundUniqueInput
    AND?: CurrentPixelWhereInput | CurrentPixelWhereInput[]
    OR?: CurrentPixelWhereInput[]
    NOT?: CurrentPixelWhereInput | CurrentPixelWhereInput[]
    x?: IntFilter<"CurrentPixel"> | number
    y?: IntFilter<"CurrentPixel"> | number
    color?: IntFilter<"CurrentPixel"> | number
    updatedAt?: DateTimeFilter<"CurrentPixel"> | Date | string
    updatedBy?: UuidFilter<"CurrentPixel"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "x_y">

  export type CurrentPixelOrderByWithAggregationInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: CurrentPixelCountOrderByAggregateInput
    _avg?: CurrentPixelAvgOrderByAggregateInput
    _max?: CurrentPixelMaxOrderByAggregateInput
    _min?: CurrentPixelMinOrderByAggregateInput
    _sum?: CurrentPixelSumOrderByAggregateInput
  }

  export type CurrentPixelScalarWhereWithAggregatesInput = {
    AND?: CurrentPixelScalarWhereWithAggregatesInput | CurrentPixelScalarWhereWithAggregatesInput[]
    OR?: CurrentPixelScalarWhereWithAggregatesInput[]
    NOT?: CurrentPixelScalarWhereWithAggregatesInput | CurrentPixelScalarWhereWithAggregatesInput[]
    x?: IntWithAggregatesFilter<"CurrentPixel"> | number
    y?: IntWithAggregatesFilter<"CurrentPixel"> | number
    color?: IntWithAggregatesFilter<"CurrentPixel"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"CurrentPixel"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"CurrentPixel"> | string
  }

  export type SuspensionWhereInput = {
    AND?: SuspensionWhereInput | SuspensionWhereInput[]
    OR?: SuspensionWhereInput[]
    NOT?: SuspensionWhereInput | SuspensionWhereInput[]
    id?: UuidFilter<"Suspension"> | string
    userId?: UuidFilter<"Suspension"> | string
    reason?: StringFilter<"Suspension"> | string
    startsAt?: DateTimeFilter<"Suspension"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    createdBy?: StringNullableFilter<"Suspension"> | string | null
    createdAt?: DateTimeFilter<"Suspension"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SuspensionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SuspensionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuspensionWhereInput | SuspensionWhereInput[]
    OR?: SuspensionWhereInput[]
    NOT?: SuspensionWhereInput | SuspensionWhereInput[]
    userId?: UuidFilter<"Suspension"> | string
    reason?: StringFilter<"Suspension"> | string
    startsAt?: DateTimeFilter<"Suspension"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    createdBy?: StringNullableFilter<"Suspension"> | string | null
    createdAt?: DateTimeFilter<"Suspension"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SuspensionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SuspensionCountOrderByAggregateInput
    _max?: SuspensionMaxOrderByAggregateInput
    _min?: SuspensionMinOrderByAggregateInput
  }

  export type SuspensionScalarWhereWithAggregatesInput = {
    AND?: SuspensionScalarWhereWithAggregatesInput | SuspensionScalarWhereWithAggregatesInput[]
    OR?: SuspensionScalarWhereWithAggregatesInput[]
    NOT?: SuspensionScalarWhereWithAggregatesInput | SuspensionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Suspension"> | string
    userId?: UuidWithAggregatesFilter<"Suspension"> | string
    reason?: StringWithAggregatesFilter<"Suspension"> | string
    startsAt?: DateTimeWithAggregatesFilter<"Suspension"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Suspension"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"Suspension"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Suspension"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Suspension"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementCreateNestedManyWithoutUserInput
    suspensions?: SuspensionCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementUncheckedCreateNestedManyWithoutUserInput
    suspensions?: SuspensionUncheckedCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUpdateManyWithoutUserNestedInput
    suspensions?: SuspensionUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUncheckedUpdateManyWithoutUserNestedInput
    suspensions?: SuspensionUncheckedUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlacementCreateInput = {
    id?: bigint | number
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
    user: UserCreateNestedOneWithoutPlacementsInput
  }

  export type PlacementUncheckedCreateInput = {
    id?: bigint | number
    userId: string
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
  }

  export type PlacementUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type PlacementUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacementCreateManyInput = {
    id?: bigint | number
    userId: string
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
  }

  export type PlacementUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacementUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrentPixelCreateInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCurrentEditsInput
  }

  export type CurrentPixelUncheckedCreateInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
    updatedBy: string
  }

  export type CurrentPixelUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCurrentEditsNestedInput
  }

  export type CurrentPixelUncheckedUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CurrentPixelCreateManyInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
    updatedBy: string
  }

  export type CurrentPixelUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentPixelUncheckedUpdateManyInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SuspensionCreateInput = {
    id?: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSuspensionsInput
  }

  export type SuspensionUncheckedCreateInput = {
    id?: string
    userId: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type SuspensionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSuspensionsNestedInput
  }

  export type SuspensionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspensionCreateManyInput = {
    id?: string
    userId: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type SuspensionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspensionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type PlacementListRelationFilter = {
    every?: PlacementWhereInput
    some?: PlacementWhereInput
    none?: PlacementWhereInput
  }

  export type SuspensionListRelationFilter = {
    every?: SuspensionWhereInput
    some?: SuspensionWhereInput
    none?: SuspensionWhereInput
  }

  export type CurrentPixelListRelationFilter = {
    every?: CurrentPixelWhereInput
    some?: CurrentPixelWhereInput
    none?: CurrentPixelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuspensionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrentPixelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleSub?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
    nextPlaceAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleSub?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
    nextPlaceAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleSub?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
    nextPlaceAt?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlacementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    placedAt?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
  }

  export type PlacementAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type PlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    placedAt?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
  }

  export type PlacementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    placedAt?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
  }

  export type PlacementSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CurrentPixelXYCompoundUniqueInput = {
    x: number
    y: number
  }

  export type CurrentPixelCountOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CurrentPixelAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type CurrentPixelMaxOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CurrentPixelMinOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CurrentPixelSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    color?: SortOrder
  }

  export type SuspensionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SuspensionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SuspensionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PlacementCreateNestedManyWithoutUserInput = {
    create?: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput> | PlacementCreateWithoutUserInput[] | PlacementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutUserInput | PlacementCreateOrConnectWithoutUserInput[]
    createMany?: PlacementCreateManyUserInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type SuspensionCreateNestedManyWithoutUserInput = {
    create?: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput> | SuspensionCreateWithoutUserInput[] | SuspensionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspensionCreateOrConnectWithoutUserInput | SuspensionCreateOrConnectWithoutUserInput[]
    createMany?: SuspensionCreateManyUserInputEnvelope
    connect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
  }

  export type CurrentPixelCreateNestedManyWithoutUserInput = {
    create?: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput> | CurrentPixelCreateWithoutUserInput[] | CurrentPixelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentPixelCreateOrConnectWithoutUserInput | CurrentPixelCreateOrConnectWithoutUserInput[]
    createMany?: CurrentPixelCreateManyUserInputEnvelope
    connect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
  }

  export type PlacementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput> | PlacementCreateWithoutUserInput[] | PlacementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutUserInput | PlacementCreateOrConnectWithoutUserInput[]
    createMany?: PlacementCreateManyUserInputEnvelope
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
  }

  export type SuspensionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput> | SuspensionCreateWithoutUserInput[] | SuspensionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspensionCreateOrConnectWithoutUserInput | SuspensionCreateOrConnectWithoutUserInput[]
    createMany?: SuspensionCreateManyUserInputEnvelope
    connect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
  }

  export type CurrentPixelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput> | CurrentPixelCreateWithoutUserInput[] | CurrentPixelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentPixelCreateOrConnectWithoutUserInput | CurrentPixelCreateOrConnectWithoutUserInput[]
    createMany?: CurrentPixelCreateManyUserInputEnvelope
    connect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlacementUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput> | PlacementCreateWithoutUserInput[] | PlacementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutUserInput | PlacementCreateOrConnectWithoutUserInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutUserInput | PlacementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlacementCreateManyUserInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutUserInput | PlacementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutUserInput | PlacementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type SuspensionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput> | SuspensionCreateWithoutUserInput[] | SuspensionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspensionCreateOrConnectWithoutUserInput | SuspensionCreateOrConnectWithoutUserInput[]
    upsert?: SuspensionUpsertWithWhereUniqueWithoutUserInput | SuspensionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuspensionCreateManyUserInputEnvelope
    set?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    disconnect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    delete?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    connect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    update?: SuspensionUpdateWithWhereUniqueWithoutUserInput | SuspensionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuspensionUpdateManyWithWhereWithoutUserInput | SuspensionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuspensionScalarWhereInput | SuspensionScalarWhereInput[]
  }

  export type CurrentPixelUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput> | CurrentPixelCreateWithoutUserInput[] | CurrentPixelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentPixelCreateOrConnectWithoutUserInput | CurrentPixelCreateOrConnectWithoutUserInput[]
    upsert?: CurrentPixelUpsertWithWhereUniqueWithoutUserInput | CurrentPixelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurrentPixelCreateManyUserInputEnvelope
    set?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    disconnect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    delete?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    connect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    update?: CurrentPixelUpdateWithWhereUniqueWithoutUserInput | CurrentPixelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurrentPixelUpdateManyWithWhereWithoutUserInput | CurrentPixelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurrentPixelScalarWhereInput | CurrentPixelScalarWhereInput[]
  }

  export type PlacementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput> | PlacementCreateWithoutUserInput[] | PlacementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlacementCreateOrConnectWithoutUserInput | PlacementCreateOrConnectWithoutUserInput[]
    upsert?: PlacementUpsertWithWhereUniqueWithoutUserInput | PlacementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlacementCreateManyUserInputEnvelope
    set?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    disconnect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    delete?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    connect?: PlacementWhereUniqueInput | PlacementWhereUniqueInput[]
    update?: PlacementUpdateWithWhereUniqueWithoutUserInput | PlacementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlacementUpdateManyWithWhereWithoutUserInput | PlacementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
  }

  export type SuspensionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput> | SuspensionCreateWithoutUserInput[] | SuspensionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SuspensionCreateOrConnectWithoutUserInput | SuspensionCreateOrConnectWithoutUserInput[]
    upsert?: SuspensionUpsertWithWhereUniqueWithoutUserInput | SuspensionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SuspensionCreateManyUserInputEnvelope
    set?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    disconnect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    delete?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    connect?: SuspensionWhereUniqueInput | SuspensionWhereUniqueInput[]
    update?: SuspensionUpdateWithWhereUniqueWithoutUserInput | SuspensionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SuspensionUpdateManyWithWhereWithoutUserInput | SuspensionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SuspensionScalarWhereInput | SuspensionScalarWhereInput[]
  }

  export type CurrentPixelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput> | CurrentPixelCreateWithoutUserInput[] | CurrentPixelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentPixelCreateOrConnectWithoutUserInput | CurrentPixelCreateOrConnectWithoutUserInput[]
    upsert?: CurrentPixelUpsertWithWhereUniqueWithoutUserInput | CurrentPixelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurrentPixelCreateManyUserInputEnvelope
    set?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    disconnect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    delete?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    connect?: CurrentPixelWhereUniqueInput | CurrentPixelWhereUniqueInput[]
    update?: CurrentPixelUpdateWithWhereUniqueWithoutUserInput | CurrentPixelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurrentPixelUpdateManyWithWhereWithoutUserInput | CurrentPixelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurrentPixelScalarWhereInput | CurrentPixelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<UserCreateWithoutPlacementsInput, UserUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlacementsInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<UserCreateWithoutPlacementsInput, UserUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlacementsInput
    upsert?: UserUpsertWithoutPlacementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlacementsInput, UserUpdateWithoutPlacementsInput>, UserUncheckedUpdateWithoutPlacementsInput>
  }

  export type UserCreateNestedOneWithoutCurrentEditsInput = {
    create?: XOR<UserCreateWithoutCurrentEditsInput, UserUncheckedCreateWithoutCurrentEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentEditsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCurrentEditsNestedInput = {
    create?: XOR<UserCreateWithoutCurrentEditsInput, UserUncheckedCreateWithoutCurrentEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurrentEditsInput
    upsert?: UserUpsertWithoutCurrentEditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurrentEditsInput, UserUpdateWithoutCurrentEditsInput>, UserUncheckedUpdateWithoutCurrentEditsInput>
  }

  export type UserCreateNestedOneWithoutSuspensionsInput = {
    create?: XOR<UserCreateWithoutSuspensionsInput, UserUncheckedCreateWithoutSuspensionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspensionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSuspensionsNestedInput = {
    create?: XOR<UserCreateWithoutSuspensionsInput, UserUncheckedCreateWithoutSuspensionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuspensionsInput
    upsert?: UserUpsertWithoutSuspensionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuspensionsInput, UserUpdateWithoutSuspensionsInput>, UserUncheckedUpdateWithoutSuspensionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PlacementCreateWithoutUserInput = {
    id?: bigint | number
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
  }

  export type PlacementUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
  }

  export type PlacementCreateOrConnectWithoutUserInput = {
    where: PlacementWhereUniqueInput
    create: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput>
  }

  export type PlacementCreateManyUserInputEnvelope = {
    data: PlacementCreateManyUserInput | PlacementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SuspensionCreateWithoutUserInput = {
    id?: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type SuspensionUncheckedCreateWithoutUserInput = {
    id?: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type SuspensionCreateOrConnectWithoutUserInput = {
    where: SuspensionWhereUniqueInput
    create: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput>
  }

  export type SuspensionCreateManyUserInputEnvelope = {
    data: SuspensionCreateManyUserInput | SuspensionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CurrentPixelCreateWithoutUserInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
  }

  export type CurrentPixelUncheckedCreateWithoutUserInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
  }

  export type CurrentPixelCreateOrConnectWithoutUserInput = {
    where: CurrentPixelWhereUniqueInput
    create: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput>
  }

  export type CurrentPixelCreateManyUserInputEnvelope = {
    data: CurrentPixelCreateManyUserInput | CurrentPixelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlacementUpsertWithWhereUniqueWithoutUserInput = {
    where: PlacementWhereUniqueInput
    update: XOR<PlacementUpdateWithoutUserInput, PlacementUncheckedUpdateWithoutUserInput>
    create: XOR<PlacementCreateWithoutUserInput, PlacementUncheckedCreateWithoutUserInput>
  }

  export type PlacementUpdateWithWhereUniqueWithoutUserInput = {
    where: PlacementWhereUniqueInput
    data: XOR<PlacementUpdateWithoutUserInput, PlacementUncheckedUpdateWithoutUserInput>
  }

  export type PlacementUpdateManyWithWhereWithoutUserInput = {
    where: PlacementScalarWhereInput
    data: XOR<PlacementUpdateManyMutationInput, PlacementUncheckedUpdateManyWithoutUserInput>
  }

  export type PlacementScalarWhereInput = {
    AND?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    OR?: PlacementScalarWhereInput[]
    NOT?: PlacementScalarWhereInput | PlacementScalarWhereInput[]
    id?: BigIntFilter<"Placement"> | bigint | number
    userId?: UuidFilter<"Placement"> | string
    x?: IntFilter<"Placement"> | number
    y?: IntFilter<"Placement"> | number
    color?: IntFilter<"Placement"> | number
    placedAt?: DateTimeFilter<"Placement"> | Date | string
    ipHash?: StringNullableFilter<"Placement"> | string | null
    userAgentHash?: StringNullableFilter<"Placement"> | string | null
  }

  export type SuspensionUpsertWithWhereUniqueWithoutUserInput = {
    where: SuspensionWhereUniqueInput
    update: XOR<SuspensionUpdateWithoutUserInput, SuspensionUncheckedUpdateWithoutUserInput>
    create: XOR<SuspensionCreateWithoutUserInput, SuspensionUncheckedCreateWithoutUserInput>
  }

  export type SuspensionUpdateWithWhereUniqueWithoutUserInput = {
    where: SuspensionWhereUniqueInput
    data: XOR<SuspensionUpdateWithoutUserInput, SuspensionUncheckedUpdateWithoutUserInput>
  }

  export type SuspensionUpdateManyWithWhereWithoutUserInput = {
    where: SuspensionScalarWhereInput
    data: XOR<SuspensionUpdateManyMutationInput, SuspensionUncheckedUpdateManyWithoutUserInput>
  }

  export type SuspensionScalarWhereInput = {
    AND?: SuspensionScalarWhereInput | SuspensionScalarWhereInput[]
    OR?: SuspensionScalarWhereInput[]
    NOT?: SuspensionScalarWhereInput | SuspensionScalarWhereInput[]
    id?: UuidFilter<"Suspension"> | string
    userId?: UuidFilter<"Suspension"> | string
    reason?: StringFilter<"Suspension"> | string
    startsAt?: DateTimeFilter<"Suspension"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"Suspension"> | Date | string | null
    createdBy?: StringNullableFilter<"Suspension"> | string | null
    createdAt?: DateTimeFilter<"Suspension"> | Date | string
  }

  export type CurrentPixelUpsertWithWhereUniqueWithoutUserInput = {
    where: CurrentPixelWhereUniqueInput
    update: XOR<CurrentPixelUpdateWithoutUserInput, CurrentPixelUncheckedUpdateWithoutUserInput>
    create: XOR<CurrentPixelCreateWithoutUserInput, CurrentPixelUncheckedCreateWithoutUserInput>
  }

  export type CurrentPixelUpdateWithWhereUniqueWithoutUserInput = {
    where: CurrentPixelWhereUniqueInput
    data: XOR<CurrentPixelUpdateWithoutUserInput, CurrentPixelUncheckedUpdateWithoutUserInput>
  }

  export type CurrentPixelUpdateManyWithWhereWithoutUserInput = {
    where: CurrentPixelScalarWhereInput
    data: XOR<CurrentPixelUpdateManyMutationInput, CurrentPixelUncheckedUpdateManyWithoutUserInput>
  }

  export type CurrentPixelScalarWhereInput = {
    AND?: CurrentPixelScalarWhereInput | CurrentPixelScalarWhereInput[]
    OR?: CurrentPixelScalarWhereInput[]
    NOT?: CurrentPixelScalarWhereInput | CurrentPixelScalarWhereInput[]
    x?: IntFilter<"CurrentPixel"> | number
    y?: IntFilter<"CurrentPixel"> | number
    color?: IntFilter<"CurrentPixel"> | number
    updatedAt?: DateTimeFilter<"CurrentPixel"> | Date | string
    updatedBy?: UuidFilter<"CurrentPixel"> | string
  }

  export type UserCreateWithoutPlacementsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    suspensions?: SuspensionCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlacementsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    suspensions?: SuspensionUncheckedCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlacementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlacementsInput, UserUncheckedCreateWithoutPlacementsInput>
  }

  export type UserUpsertWithoutPlacementsInput = {
    update: XOR<UserUpdateWithoutPlacementsInput, UserUncheckedUpdateWithoutPlacementsInput>
    create: XOR<UserCreateWithoutPlacementsInput, UserUncheckedCreateWithoutPlacementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlacementsInput, UserUncheckedUpdateWithoutPlacementsInput>
  }

  export type UserUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suspensions?: SuspensionUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suspensions?: SuspensionUncheckedUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCurrentEditsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementCreateNestedManyWithoutUserInput
    suspensions?: SuspensionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCurrentEditsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementUncheckedCreateNestedManyWithoutUserInput
    suspensions?: SuspensionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCurrentEditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentEditsInput, UserUncheckedCreateWithoutCurrentEditsInput>
  }

  export type UserUpsertWithoutCurrentEditsInput = {
    update: XOR<UserUpdateWithoutCurrentEditsInput, UserUncheckedUpdateWithoutCurrentEditsInput>
    create: XOR<UserCreateWithoutCurrentEditsInput, UserUncheckedCreateWithoutCurrentEditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurrentEditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurrentEditsInput, UserUncheckedUpdateWithoutCurrentEditsInput>
  }

  export type UserUpdateWithoutCurrentEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUpdateManyWithoutUserNestedInput
    suspensions?: SuspensionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUncheckedUpdateManyWithoutUserNestedInput
    suspensions?: SuspensionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSuspensionsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSuspensionsInput = {
    id?: string
    googleSub: string
    email: string
    displayName?: string | null
    image?: string | null
    isAdmin?: boolean
    nextPlaceAt?: Date | string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    placements?: PlacementUncheckedCreateNestedManyWithoutUserInput
    currentEdits?: CurrentPixelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSuspensionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuspensionsInput, UserUncheckedCreateWithoutSuspensionsInput>
  }

  export type UserUpsertWithoutSuspensionsInput = {
    update: XOR<UserUpdateWithoutSuspensionsInput, UserUncheckedUpdateWithoutSuspensionsInput>
    create: XOR<UserCreateWithoutSuspensionsInput, UserUncheckedCreateWithoutSuspensionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuspensionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuspensionsInput, UserUncheckedUpdateWithoutSuspensionsInput>
  }

  export type UserUpdateWithoutSuspensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSuspensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSub?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    nextPlaceAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placements?: PlacementUncheckedUpdateManyWithoutUserNestedInput
    currentEdits?: CurrentPixelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlacementCreateManyUserInput = {
    id?: bigint | number
    x: number
    y: number
    color: number
    placedAt?: Date | string
    ipHash?: string | null
    userAgentHash?: string | null
  }

  export type SuspensionCreateManyUserInput = {
    id?: string
    reason: string
    startsAt?: Date | string
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type CurrentPixelCreateManyUserInput = {
    x: number
    y: number
    color: number
    updatedAt?: Date | string
  }

  export type PlacementUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacementUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacementUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgentHash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuspensionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspensionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspensionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentPixelUpdateWithoutUserInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentPixelUncheckedUpdateWithoutUserInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentPixelUncheckedUpdateManyWithoutUserInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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