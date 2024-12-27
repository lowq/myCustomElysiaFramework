
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
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Migrations
 * 
 */
export type Migrations = $Result.DefaultSelection<Prisma.$MigrationsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model UsersTrips
 * 
 */
export type UsersTrips = $Result.DefaultSelection<Prisma.$UsersTripsPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Itinenary
 * 
 */
export type Itinenary = $Result.DefaultSelection<Prisma.$ItinenaryPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>
/**
 * Model TimelineItem
 * 
 */
export type TimelineItem = $Result.DefaultSelection<Prisma.$TimelineItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TripType: {
  ADVENTURE: 'ADVENTURE',
  ROAD_TRIP: 'ROAD_TRIP',
  BEACH_VACATION: 'BEACH_VACATION',
  CULTURAL: 'CULTURAL',
  BUSINESS: 'BUSINESS',
  FAMILY: 'FAMILY',
  SOLO: 'SOLO',
  GROUP: 'GROUP',
  ROMANTIC: 'ROMANTIC',
  ECO_TOURISM: 'ECO_TOURISM',
  CITY_BREAK: 'CITY_BREAK',
  CRUISE: 'CRUISE',
  BACKPACKING: 'BACKPACKING',
  LUXURY: 'LUXURY',
  FESTIVAL_EVENT: 'FESTIVAL_EVENT',
  WELLNESS_RETREAT: 'WELLNESS_RETREAT'
};

export type TripType = (typeof TripType)[keyof typeof TripType]


export const TripPermission: {
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type TripPermission = (typeof TripPermission)[keyof typeof TripPermission]

}

export type TripType = $Enums.TripType

export const TripType: typeof $Enums.TripType

export type TripPermission = $Enums.TripPermission

export const TripPermission: typeof $Enums.TripPermission

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SystemLogs
 * const systemLogs = await prisma.systemLog.findMany()
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
   * // Fetch zero or more SystemLogs
   * const systemLogs = await prisma.systemLog.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **Migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.MigrationsDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.usersTrips`: Exposes CRUD operations for the **UsersTrips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersTrips
    * const usersTrips = await prisma.usersTrips.findMany()
    * ```
    */
  get usersTrips(): Prisma.UsersTripsDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.itinenary`: Exposes CRUD operations for the **Itinenary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itinenaries
    * const itinenaries = await prisma.itinenary.findMany()
    * ```
    */
  get itinenary(): Prisma.ItinenaryDelegate<ExtArgs>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs>;

  /**
   * `prisma.timelineItem`: Exposes CRUD operations for the **TimelineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineItems
    * const timelineItems = await prisma.timelineItem.findMany()
    * ```
    */
  get timelineItem(): Prisma.TimelineItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    SystemLog: 'SystemLog',
    Job: 'Job',
    Migrations: 'Migrations',
    User: 'User',
    Profile: 'Profile',
    Trip: 'Trip',
    UsersTrips: 'UsersTrips',
    Review: 'Review',
    Itinenary: 'Itinenary',
    Place: 'Place',
    Timeline: 'Timeline',
    TimelineItem: 'TimelineItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "systemLog" | "job" | "migrations" | "user" | "profile" | "trip" | "usersTrips" | "review" | "itinenary" | "place" | "timeline" | "timelineItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Migrations: {
        payload: Prisma.$MigrationsPayload<ExtArgs>
        fields: Prisma.MigrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MigrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MigrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          findFirst: {
            args: Prisma.MigrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MigrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          findMany: {
            args: Prisma.MigrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>[]
          }
          create: {
            args: Prisma.MigrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          createMany: {
            args: Prisma.MigrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MigrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          update: {
            args: Prisma.MigrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          deleteMany: {
            args: Prisma.MigrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MigrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MigrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MigrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.MigrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MigrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      UsersTrips: {
        payload: Prisma.$UsersTripsPayload<ExtArgs>
        fields: Prisma.UsersTripsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersTripsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersTripsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          findFirst: {
            args: Prisma.UsersTripsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersTripsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          findMany: {
            args: Prisma.UsersTripsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>[]
          }
          create: {
            args: Prisma.UsersTripsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          createMany: {
            args: Prisma.UsersTripsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersTripsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          update: {
            args: Prisma.UsersTripsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          deleteMany: {
            args: Prisma.UsersTripsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersTripsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersTripsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTripsPayload>
          }
          aggregate: {
            args: Prisma.UsersTripsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersTrips>
          }
          groupBy: {
            args: Prisma.UsersTripsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersTripsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersTripsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersTripsCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Itinenary: {
        payload: Prisma.$ItinenaryPayload<ExtArgs>
        fields: Prisma.ItinenaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItinenaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItinenaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          findFirst: {
            args: Prisma.ItinenaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItinenaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          findMany: {
            args: Prisma.ItinenaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>[]
          }
          create: {
            args: Prisma.ItinenaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          createMany: {
            args: Prisma.ItinenaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItinenaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          update: {
            args: Prisma.ItinenaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          deleteMany: {
            args: Prisma.ItinenaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItinenaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItinenaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinenaryPayload>
          }
          aggregate: {
            args: Prisma.ItinenaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinenary>
          }
          groupBy: {
            args: Prisma.ItinenaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItinenaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItinenaryCountArgs<ExtArgs>
            result: $Utils.Optional<ItinenaryCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
      TimelineItem: {
        payload: Prisma.$TimelineItemPayload<ExtArgs>
        fields: Prisma.TimelineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          findFirst: {
            args: Prisma.TimelineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          findMany: {
            args: Prisma.TimelineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>[]
          }
          create: {
            args: Prisma.TimelineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          createMany: {
            args: Prisma.TimelineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TimelineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          update: {
            args: Prisma.TimelineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          deleteMany: {
            args: Prisma.TimelineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimelineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          aggregate: {
            args: Prisma.TimelineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineItem>
          }
          groupBy: {
            args: Prisma.TimelineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineItemCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineItemCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trips: number
    createdTrips: number
    Review: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    createdTrips?: boolean | UserCountOutputTypeCountCreatedTripsArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
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
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTripsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    users: number
    Review: number
    Itinenary: number
    Place: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TripCountOutputTypeCountUsersArgs
    Review?: boolean | TripCountOutputTypeCountReviewArgs
    Itinenary?: boolean | TripCountOutputTypeCountItinenaryArgs
    Place?: boolean | TripCountOutputTypeCountPlaceArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTripsWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountItinenaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItinenaryWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPlaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    Itinenary: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Itinenary?: boolean | PlaceCountOutputTypeCountItinenaryArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountItinenaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItinenaryWhereInput
  }


  /**
   * Count Type TimelineCountOutputType
   */

  export type TimelineCountOutputType = {
    TimelineItem: number
  }

  export type TimelineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TimelineItem?: boolean | TimelineCountOutputTypeCountTimelineItemArgs
  }

  // Custom InputTypes
  /**
   * TimelineCountOutputType without action
   */
  export type TimelineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineCountOutputType
     */
    select?: TimelineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimelineCountOutputType without action
   */
  export type TimelineCountOutputTypeCountTimelineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    type: string | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    type: string | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    createdAt: number
    message: number
    type: number
    _all: number
  }


  export type SystemLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    type?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    type?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    type?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: string
    createdAt: Date
    message: string
    type: string
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    message?: boolean
    type?: boolean
  }, ExtArgs["result"]["systemLog"]>


  export type SystemLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    message?: boolean
    type?: boolean
  }


  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      message: string
      type: string
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
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
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SystemLog model
   */ 
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'String'>
    readonly createdAt: FieldRef<"SystemLog", 'DateTime'>
    readonly message: FieldRef<"SystemLog", 'String'>
    readonly type: FieldRef<"SystemLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastExecuted: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastExecuted: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    name: number
    lastExecuted: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    name?: true
    lastExecuted?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    name?: true
    lastExecuted?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    name?: true
    lastExecuted?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    name: string
    lastExecuted: Date | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastExecuted?: boolean
  }, ExtArgs["result"]["job"]>


  export type JobSelectScalar = {
    id?: boolean
    name?: boolean
    lastExecuted?: boolean
  }


  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastExecuted: Date | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly name: FieldRef<"Job", 'String'>
    readonly lastExecuted: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
  }


  /**
   * Model Migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Migrations to aggregate.
     */
    where?: MigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationsOrderByWithRelationInput | MigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type MigrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MigrationsWhereInput
    orderBy?: MigrationsOrderByWithAggregationInput | MigrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: MigrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends MigrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type MigrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["migrations"]>


  export type MigrationsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }


  export type $MigrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type MigrationsGetPayload<S extends boolean | null | undefined | MigrationsDefaultArgs> = $Result.GetResult<Prisma.$MigrationsPayload, S>

  type MigrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MigrationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface MigrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Migrations'], meta: { name: 'Migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {MigrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MigrationsFindUniqueArgs>(args: SelectSubset<T, MigrationsFindUniqueArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MigrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MigrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, MigrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MigrationsFindFirstArgs>(args?: SelectSubset<T, MigrationsFindFirstArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MigrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, MigrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MigrationsFindManyArgs>(args?: SelectSubset<T, MigrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Migrations.
     * @param {MigrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends MigrationsCreateArgs>(args: SelectSubset<T, MigrationsCreateArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Migrations.
     * @param {MigrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MigrationsCreateManyArgs>(args?: SelectSubset<T, MigrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {MigrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends MigrationsDeleteArgs>(args: SelectSubset<T, MigrationsDeleteArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Migrations.
     * @param {MigrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MigrationsUpdateArgs>(args: SelectSubset<T, MigrationsUpdateArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Migrations.
     * @param {MigrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MigrationsDeleteManyArgs>(args?: SelectSubset<T, MigrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MigrationsUpdateManyArgs>(args: SelectSubset<T, MigrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {MigrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends MigrationsUpsertArgs>(args: SelectSubset<T, MigrationsUpsertArgs<ExtArgs>>): Prisma__MigrationsClient<$Result.GetResult<Prisma.$MigrationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends MigrationsCountArgs>(
      args?: Subset<T, MigrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsGroupByArgs} args - Group by arguments.
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
      T extends MigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationsGroupByArgs['orderBy'] }
        : { orderBy?: MigrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Migrations model
   */
  readonly fields: MigrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MigrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Migrations model
   */ 
  interface MigrationsFieldRefs {
    readonly id: FieldRef<"Migrations", 'Int'>
    readonly name: FieldRef<"Migrations", 'String'>
    readonly createdAt: FieldRef<"Migrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Migrations findUnique
   */
  export type MigrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where: MigrationsWhereUniqueInput
  }

  /**
   * Migrations findUniqueOrThrow
   */
  export type MigrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where: MigrationsWhereUniqueInput
  }

  /**
   * Migrations findFirst
   */
  export type MigrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where?: MigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationsOrderByWithRelationInput | MigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Migrations.
     */
    cursor?: MigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * Migrations findFirstOrThrow
   */
  export type MigrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where?: MigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationsOrderByWithRelationInput | MigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Migrations.
     */
    cursor?: MigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * Migrations findMany
   */
  export type MigrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter, which Migrations to fetch.
     */
    where?: MigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Migrations to fetch.
     */
    orderBy?: MigrationsOrderByWithRelationInput | MigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Migrations.
     */
    cursor?: MigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * Migrations create
   */
  export type MigrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * The data needed to create a Migrations.
     */
    data: XOR<MigrationsCreateInput, MigrationsUncheckedCreateInput>
  }

  /**
   * Migrations createMany
   */
  export type MigrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Migrations.
     */
    data: MigrationsCreateManyInput | MigrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Migrations update
   */
  export type MigrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * The data needed to update a Migrations.
     */
    data: XOR<MigrationsUpdateInput, MigrationsUncheckedUpdateInput>
    /**
     * Choose, which Migrations to update.
     */
    where: MigrationsWhereUniqueInput
  }

  /**
   * Migrations updateMany
   */
  export type MigrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Migrations.
     */
    data: XOR<MigrationsUpdateManyMutationInput, MigrationsUncheckedUpdateManyInput>
    /**
     * Filter which Migrations to update
     */
    where?: MigrationsWhereInput
  }

  /**
   * Migrations upsert
   */
  export type MigrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * The filter to search for the Migrations to update in case it exists.
     */
    where: MigrationsWhereUniqueInput
    /**
     * In case the Migrations found by the `where` argument doesn't exist, create a new Migrations with this data.
     */
    create: XOR<MigrationsCreateInput, MigrationsUncheckedCreateInput>
    /**
     * In case the Migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MigrationsUpdateInput, MigrationsUncheckedUpdateInput>
  }

  /**
   * Migrations delete
   */
  export type MigrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
    /**
     * Filter which Migrations to delete.
     */
    where: MigrationsWhereUniqueInput
  }

  /**
   * Migrations deleteMany
   */
  export type MigrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Migrations to delete
     */
    where?: MigrationsWhereInput
  }

  /**
   * Migrations without action
   */
  export type MigrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migrations
     */
    select?: MigrationsSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    activated: boolean | null
    verifyToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    activated: boolean | null
    verifyToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    surname: number
    password: number
    activated: number
    verifyToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    activated?: true
    verifyToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    activated?: true
    verifyToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    activated?: true
    verifyToken?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    surname: string
    password: string
    activated: boolean
    verifyToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    activated?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    activated?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$UsersTripsPayload<ExtArgs>[]
      createdTrips: Prisma.$TripPayload<ExtArgs>[]
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      surname: string
      password: string
      activated: boolean
      verifyToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findMany"> | Null>
    createdTrips<T extends User$createdTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany"> | Null>
    Profile<T extends User$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly activated: FieldRef<"User", 'Boolean'>
    readonly verifyToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }

  /**
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    where?: UsersTripsWhereInput
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    cursor?: UsersTripsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersTripsScalarFieldEnum | UsersTripsScalarFieldEnum[]
  }

  /**
   * User.createdTrips
   */
  export type User$createdTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.Profile
   */
  export type User$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: number
    firstName: string
    lastName: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>


  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      firstName: string
      lastName: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.TripType | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: number | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.TripType | null
    public: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: number | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    type: number
    public: number
    createdAt: number
    updatedAt: number
    creatorId: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    type?: true
    public?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    type?: true
    public?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    type?: true
    public?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    name: string
    description: string
    startDate: Date
    endDate: Date | null
    type: $Enums.TripType
    public: boolean
    createdAt: Date
    updatedAt: Date
    creatorId: number
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    users?: boolean | Trip$usersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    Review?: boolean | Trip$ReviewArgs<ExtArgs>
    Itinenary?: boolean | Trip$ItinenaryArgs<ExtArgs>
    Place?: boolean | Trip$PlaceArgs<ExtArgs>
    Timeline?: boolean | Trip$TimelineArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>


  export type TripSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    public?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Trip$usersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    Review?: boolean | Trip$ReviewArgs<ExtArgs>
    Itinenary?: boolean | Trip$ItinenaryArgs<ExtArgs>
    Place?: boolean | Trip$PlaceArgs<ExtArgs>
    Timeline?: boolean | Trip$TimelineArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      users: Prisma.$UsersTripsPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      Itinenary: Prisma.$ItinenaryPayload<ExtArgs>[]
      Place: Prisma.$PlacePayload<ExtArgs>[]
      Timeline: Prisma.$TimelinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startDate: Date
      endDate: Date | null
      type: $Enums.TripType
      public: boolean
      createdAt: Date
      updatedAt: Date
      creatorId: number
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Trip$usersArgs<ExtArgs> = {}>(args?: Subset<T, Trip$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findMany"> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Review<T extends Trip$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Trip$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    Itinenary<T extends Trip$ItinenaryArgs<ExtArgs> = {}>(args?: Subset<T, Trip$ItinenaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findMany"> | Null>
    Place<T extends Trip$PlaceArgs<ExtArgs> = {}>(args?: Subset<T, Trip$PlaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany"> | Null>
    Timeline<T extends Trip$TimelineArgs<ExtArgs> = {}>(args?: Subset<T, Trip$TimelineArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly name: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly type: FieldRef<"Trip", 'TripType'>
    readonly public: FieldRef<"Trip", 'Boolean'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
    readonly creatorId: FieldRef<"Trip", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }

  /**
   * Trip.users
   */
  export type Trip$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    where?: UsersTripsWhereInput
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    cursor?: UsersTripsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersTripsScalarFieldEnum | UsersTripsScalarFieldEnum[]
  }

  /**
   * Trip.Review
   */
  export type Trip$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Trip.Itinenary
   */
  export type Trip$ItinenaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    where?: ItinenaryWhereInput
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    cursor?: ItinenaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinenaryScalarFieldEnum | ItinenaryScalarFieldEnum[]
  }

  /**
   * Trip.Place
   */
  export type Trip$PlaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    cursor?: PlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Trip.Timeline
   */
  export type Trip$TimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    where?: TimelineWhereInput
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model UsersTrips
   */

  export type AggregateUsersTrips = {
    _count: UsersTripsCountAggregateOutputType | null
    _avg: UsersTripsAvgAggregateOutputType | null
    _sum: UsersTripsSumAggregateOutputType | null
    _min: UsersTripsMinAggregateOutputType | null
    _max: UsersTripsMaxAggregateOutputType | null
  }

  export type UsersTripsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
  }

  export type UsersTripsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
  }

  export type UsersTripsMinAggregateOutputType = {
    id: number | null
    accepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    permission: $Enums.TripPermission | null
    userId: number | null
    tripId: number | null
  }

  export type UsersTripsMaxAggregateOutputType = {
    id: number | null
    accepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    permission: $Enums.TripPermission | null
    userId: number | null
    tripId: number | null
  }

  export type UsersTripsCountAggregateOutputType = {
    id: number
    accepted: number
    createdAt: number
    updatedAt: number
    permission: number
    userId: number
    tripId: number
    _all: number
  }


  export type UsersTripsAvgAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
  }

  export type UsersTripsSumAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
  }

  export type UsersTripsMinAggregateInputType = {
    id?: true
    accepted?: true
    createdAt?: true
    updatedAt?: true
    permission?: true
    userId?: true
    tripId?: true
  }

  export type UsersTripsMaxAggregateInputType = {
    id?: true
    accepted?: true
    createdAt?: true
    updatedAt?: true
    permission?: true
    userId?: true
    tripId?: true
  }

  export type UsersTripsCountAggregateInputType = {
    id?: true
    accepted?: true
    createdAt?: true
    updatedAt?: true
    permission?: true
    userId?: true
    tripId?: true
    _all?: true
  }

  export type UsersTripsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersTrips to aggregate.
     */
    where?: UsersTripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTrips to fetch.
     */
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersTripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersTrips
    **/
    _count?: true | UsersTripsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersTripsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersTripsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersTripsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersTripsMaxAggregateInputType
  }

  export type GetUsersTripsAggregateType<T extends UsersTripsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersTrips]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersTrips[P]>
      : GetScalarType<T[P], AggregateUsersTrips[P]>
  }




  export type UsersTripsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTripsWhereInput
    orderBy?: UsersTripsOrderByWithAggregationInput | UsersTripsOrderByWithAggregationInput[]
    by: UsersTripsScalarFieldEnum[] | UsersTripsScalarFieldEnum
    having?: UsersTripsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersTripsCountAggregateInputType | true
    _avg?: UsersTripsAvgAggregateInputType
    _sum?: UsersTripsSumAggregateInputType
    _min?: UsersTripsMinAggregateInputType
    _max?: UsersTripsMaxAggregateInputType
  }

  export type UsersTripsGroupByOutputType = {
    id: number
    accepted: boolean
    createdAt: Date
    updatedAt: Date
    permission: $Enums.TripPermission
    userId: number
    tripId: number
    _count: UsersTripsCountAggregateOutputType | null
    _avg: UsersTripsAvgAggregateOutputType | null
    _sum: UsersTripsSumAggregateOutputType | null
    _min: UsersTripsMinAggregateOutputType | null
    _max: UsersTripsMaxAggregateOutputType | null
  }

  type GetUsersTripsGroupByPayload<T extends UsersTripsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersTripsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersTripsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersTripsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersTripsGroupByOutputType[P]>
        }
      >
    >


  export type UsersTripsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean
    userId?: boolean
    tripId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersTrips"]>


  export type UsersTripsSelectScalar = {
    id?: boolean
    accepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean
    userId?: boolean
    tripId?: boolean
  }

  export type UsersTripsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $UsersTripsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersTrips"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accepted: boolean
      createdAt: Date
      updatedAt: Date
      permission: $Enums.TripPermission
      userId: number
      tripId: number
    }, ExtArgs["result"]["usersTrips"]>
    composites: {}
  }

  type UsersTripsGetPayload<S extends boolean | null | undefined | UsersTripsDefaultArgs> = $Result.GetResult<Prisma.$UsersTripsPayload, S>

  type UsersTripsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersTripsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersTripsCountAggregateInputType | true
    }

  export interface UsersTripsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersTrips'], meta: { name: 'UsersTrips' } }
    /**
     * Find zero or one UsersTrips that matches the filter.
     * @param {UsersTripsFindUniqueArgs} args - Arguments to find a UsersTrips
     * @example
     * // Get one UsersTrips
     * const usersTrips = await prisma.usersTrips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersTripsFindUniqueArgs>(args: SelectSubset<T, UsersTripsFindUniqueArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsersTrips that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersTripsFindUniqueOrThrowArgs} args - Arguments to find a UsersTrips
     * @example
     * // Get one UsersTrips
     * const usersTrips = await prisma.usersTrips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersTripsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersTripsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsersTrips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsFindFirstArgs} args - Arguments to find a UsersTrips
     * @example
     * // Get one UsersTrips
     * const usersTrips = await prisma.usersTrips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersTripsFindFirstArgs>(args?: SelectSubset<T, UsersTripsFindFirstArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsersTrips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsFindFirstOrThrowArgs} args - Arguments to find a UsersTrips
     * @example
     * // Get one UsersTrips
     * const usersTrips = await prisma.usersTrips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersTripsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersTripsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsersTrips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersTrips
     * const usersTrips = await prisma.usersTrips.findMany()
     * 
     * // Get first 10 UsersTrips
     * const usersTrips = await prisma.usersTrips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersTripsWithIdOnly = await prisma.usersTrips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersTripsFindManyArgs>(args?: SelectSubset<T, UsersTripsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsersTrips.
     * @param {UsersTripsCreateArgs} args - Arguments to create a UsersTrips.
     * @example
     * // Create one UsersTrips
     * const UsersTrips = await prisma.usersTrips.create({
     *   data: {
     *     // ... data to create a UsersTrips
     *   }
     * })
     * 
     */
    create<T extends UsersTripsCreateArgs>(args: SelectSubset<T, UsersTripsCreateArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsersTrips.
     * @param {UsersTripsCreateManyArgs} args - Arguments to create many UsersTrips.
     * @example
     * // Create many UsersTrips
     * const usersTrips = await prisma.usersTrips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersTripsCreateManyArgs>(args?: SelectSubset<T, UsersTripsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersTrips.
     * @param {UsersTripsDeleteArgs} args - Arguments to delete one UsersTrips.
     * @example
     * // Delete one UsersTrips
     * const UsersTrips = await prisma.usersTrips.delete({
     *   where: {
     *     // ... filter to delete one UsersTrips
     *   }
     * })
     * 
     */
    delete<T extends UsersTripsDeleteArgs>(args: SelectSubset<T, UsersTripsDeleteArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsersTrips.
     * @param {UsersTripsUpdateArgs} args - Arguments to update one UsersTrips.
     * @example
     * // Update one UsersTrips
     * const usersTrips = await prisma.usersTrips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersTripsUpdateArgs>(args: SelectSubset<T, UsersTripsUpdateArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsersTrips.
     * @param {UsersTripsDeleteManyArgs} args - Arguments to filter UsersTrips to delete.
     * @example
     * // Delete a few UsersTrips
     * const { count } = await prisma.usersTrips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersTripsDeleteManyArgs>(args?: SelectSubset<T, UsersTripsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersTrips
     * const usersTrips = await prisma.usersTrips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersTripsUpdateManyArgs>(args: SelectSubset<T, UsersTripsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersTrips.
     * @param {UsersTripsUpsertArgs} args - Arguments to update or create a UsersTrips.
     * @example
     * // Update or create a UsersTrips
     * const usersTrips = await prisma.usersTrips.upsert({
     *   create: {
     *     // ... data to create a UsersTrips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersTrips we want to update
     *   }
     * })
     */
    upsert<T extends UsersTripsUpsertArgs>(args: SelectSubset<T, UsersTripsUpsertArgs<ExtArgs>>): Prisma__UsersTripsClient<$Result.GetResult<Prisma.$UsersTripsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsersTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsCountArgs} args - Arguments to filter UsersTrips to count.
     * @example
     * // Count the number of UsersTrips
     * const count = await prisma.usersTrips.count({
     *   where: {
     *     // ... the filter for the UsersTrips we want to count
     *   }
     * })
    **/
    count<T extends UsersTripsCountArgs>(
      args?: Subset<T, UsersTripsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersTripsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersTripsAggregateArgs>(args: Subset<T, UsersTripsAggregateArgs>): Prisma.PrismaPromise<GetUsersTripsAggregateType<T>>

    /**
     * Group by UsersTrips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTripsGroupByArgs} args - Group by arguments.
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
      T extends UsersTripsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersTripsGroupByArgs['orderBy'] }
        : { orderBy?: UsersTripsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersTripsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersTripsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersTrips model
   */
  readonly fields: UsersTripsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersTrips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersTripsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UsersTrips model
   */ 
  interface UsersTripsFieldRefs {
    readonly id: FieldRef<"UsersTrips", 'Int'>
    readonly accepted: FieldRef<"UsersTrips", 'Boolean'>
    readonly createdAt: FieldRef<"UsersTrips", 'DateTime'>
    readonly updatedAt: FieldRef<"UsersTrips", 'DateTime'>
    readonly permission: FieldRef<"UsersTrips", 'TripPermission'>
    readonly userId: FieldRef<"UsersTrips", 'Int'>
    readonly tripId: FieldRef<"UsersTrips", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersTrips findUnique
   */
  export type UsersTripsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTrips to fetch.
     */
    where: UsersTripsWhereUniqueInput
  }

  /**
   * UsersTrips findUniqueOrThrow
   */
  export type UsersTripsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTrips to fetch.
     */
    where: UsersTripsWhereUniqueInput
  }

  /**
   * UsersTrips findFirst
   */
  export type UsersTripsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTrips to fetch.
     */
    where?: UsersTripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTrips to fetch.
     */
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersTrips.
     */
    cursor?: UsersTripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersTrips.
     */
    distinct?: UsersTripsScalarFieldEnum | UsersTripsScalarFieldEnum[]
  }

  /**
   * UsersTrips findFirstOrThrow
   */
  export type UsersTripsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTrips to fetch.
     */
    where?: UsersTripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTrips to fetch.
     */
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersTrips.
     */
    cursor?: UsersTripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTrips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersTrips.
     */
    distinct?: UsersTripsScalarFieldEnum | UsersTripsScalarFieldEnum[]
  }

  /**
   * UsersTrips findMany
   */
  export type UsersTripsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTrips to fetch.
     */
    where?: UsersTripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTrips to fetch.
     */
    orderBy?: UsersTripsOrderByWithRelationInput | UsersTripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersTrips.
     */
    cursor?: UsersTripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTrips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTrips.
     */
    skip?: number
    distinct?: UsersTripsScalarFieldEnum | UsersTripsScalarFieldEnum[]
  }

  /**
   * UsersTrips create
   */
  export type UsersTripsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersTrips.
     */
    data: XOR<UsersTripsCreateInput, UsersTripsUncheckedCreateInput>
  }

  /**
   * UsersTrips createMany
   */
  export type UsersTripsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersTrips.
     */
    data: UsersTripsCreateManyInput | UsersTripsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersTrips update
   */
  export type UsersTripsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersTrips.
     */
    data: XOR<UsersTripsUpdateInput, UsersTripsUncheckedUpdateInput>
    /**
     * Choose, which UsersTrips to update.
     */
    where: UsersTripsWhereUniqueInput
  }

  /**
   * UsersTrips updateMany
   */
  export type UsersTripsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersTrips.
     */
    data: XOR<UsersTripsUpdateManyMutationInput, UsersTripsUncheckedUpdateManyInput>
    /**
     * Filter which UsersTrips to update
     */
    where?: UsersTripsWhereInput
  }

  /**
   * UsersTrips upsert
   */
  export type UsersTripsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersTrips to update in case it exists.
     */
    where: UsersTripsWhereUniqueInput
    /**
     * In case the UsersTrips found by the `where` argument doesn't exist, create a new UsersTrips with this data.
     */
    create: XOR<UsersTripsCreateInput, UsersTripsUncheckedCreateInput>
    /**
     * In case the UsersTrips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersTripsUpdateInput, UsersTripsUncheckedUpdateInput>
  }

  /**
   * UsersTrips delete
   */
  export type UsersTripsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
    /**
     * Filter which UsersTrips to delete.
     */
    where: UsersTripsWhereUniqueInput
  }

  /**
   * UsersTrips deleteMany
   */
  export type UsersTripsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersTrips to delete
     */
    where?: UsersTripsWhereInput
  }

  /**
   * UsersTrips without action
   */
  export type UsersTripsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTrips
     */
    select?: UsersTripsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTripsInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    tripId: number | null
    userId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    tripId: number | null
    userId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
    userId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
    userId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    title: number
    body: number
    rating: number
    createdAt: number
    updatedAt: number
    tripId: number
    userId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    tripId?: true
    userId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    tripId?: true
    userId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    title: string
    body: string
    rating: number
    createdAt: Date
    updatedAt: Date
    tripId: number
    userId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    userId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>


  export type ReviewSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    userId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      rating: number
      createdAt: Date
      updatedAt: Date
      tripId: number
      userId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly body: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly tripId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Itinenary
   */

  export type AggregateItinenary = {
    _count: ItinenaryCountAggregateOutputType | null
    _avg: ItinenaryAvgAggregateOutputType | null
    _sum: ItinenarySumAggregateOutputType | null
    _min: ItinenaryMinAggregateOutputType | null
    _max: ItinenaryMaxAggregateOutputType | null
  }

  export type ItinenaryAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
    placeId: number | null
  }

  export type ItinenarySumAggregateOutputType = {
    id: number | null
    tripId: number | null
    placeId: number | null
  }

  export type ItinenaryMinAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
    placeId: number | null
  }

  export type ItinenaryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
    placeId: number | null
  }

  export type ItinenaryCountAggregateOutputType = {
    id: number
    name: number
    text: number
    createdAt: number
    updatedAt: number
    tripId: number
    placeId: number
    _all: number
  }


  export type ItinenaryAvgAggregateInputType = {
    id?: true
    tripId?: true
    placeId?: true
  }

  export type ItinenarySumAggregateInputType = {
    id?: true
    tripId?: true
    placeId?: true
  }

  export type ItinenaryMinAggregateInputType = {
    id?: true
    name?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    placeId?: true
  }

  export type ItinenaryMaxAggregateInputType = {
    id?: true
    name?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    placeId?: true
  }

  export type ItinenaryCountAggregateInputType = {
    id?: true
    name?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    placeId?: true
    _all?: true
  }

  export type ItinenaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itinenary to aggregate.
     */
    where?: ItinenaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itinenaries to fetch.
     */
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItinenaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itinenaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itinenaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Itinenaries
    **/
    _count?: true | ItinenaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItinenaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinenarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItinenaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItinenaryMaxAggregateInputType
  }

  export type GetItinenaryAggregateType<T extends ItinenaryAggregateArgs> = {
        [P in keyof T & keyof AggregateItinenary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinenary[P]>
      : GetScalarType<T[P], AggregateItinenary[P]>
  }




  export type ItinenaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItinenaryWhereInput
    orderBy?: ItinenaryOrderByWithAggregationInput | ItinenaryOrderByWithAggregationInput[]
    by: ItinenaryScalarFieldEnum[] | ItinenaryScalarFieldEnum
    having?: ItinenaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItinenaryCountAggregateInputType | true
    _avg?: ItinenaryAvgAggregateInputType
    _sum?: ItinenarySumAggregateInputType
    _min?: ItinenaryMinAggregateInputType
    _max?: ItinenaryMaxAggregateInputType
  }

  export type ItinenaryGroupByOutputType = {
    id: number
    name: string
    text: string
    createdAt: Date
    updatedAt: Date
    tripId: number
    placeId: number | null
    _count: ItinenaryCountAggregateOutputType | null
    _avg: ItinenaryAvgAggregateOutputType | null
    _sum: ItinenarySumAggregateOutputType | null
    _min: ItinenaryMinAggregateOutputType | null
    _max: ItinenaryMaxAggregateOutputType | null
  }

  type GetItinenaryGroupByPayload<T extends ItinenaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItinenaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItinenaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItinenaryGroupByOutputType[P]>
            : GetScalarType<T[P], ItinenaryGroupByOutputType[P]>
        }
      >
    >


  export type ItinenarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    placeId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    place?: boolean | Itinenary$placeArgs<ExtArgs>
  }, ExtArgs["result"]["itinenary"]>


  export type ItinenarySelectScalar = {
    id?: boolean
    name?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    placeId?: boolean
  }

  export type ItinenaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    place?: boolean | Itinenary$placeArgs<ExtArgs>
  }

  export type $ItinenaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Itinenary"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      text: string
      createdAt: Date
      updatedAt: Date
      tripId: number
      placeId: number | null
    }, ExtArgs["result"]["itinenary"]>
    composites: {}
  }

  type ItinenaryGetPayload<S extends boolean | null | undefined | ItinenaryDefaultArgs> = $Result.GetResult<Prisma.$ItinenaryPayload, S>

  type ItinenaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItinenaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItinenaryCountAggregateInputType | true
    }

  export interface ItinenaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Itinenary'], meta: { name: 'Itinenary' } }
    /**
     * Find zero or one Itinenary that matches the filter.
     * @param {ItinenaryFindUniqueArgs} args - Arguments to find a Itinenary
     * @example
     * // Get one Itinenary
     * const itinenary = await prisma.itinenary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItinenaryFindUniqueArgs>(args: SelectSubset<T, ItinenaryFindUniqueArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Itinenary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItinenaryFindUniqueOrThrowArgs} args - Arguments to find a Itinenary
     * @example
     * // Get one Itinenary
     * const itinenary = await prisma.itinenary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItinenaryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItinenaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Itinenary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryFindFirstArgs} args - Arguments to find a Itinenary
     * @example
     * // Get one Itinenary
     * const itinenary = await prisma.itinenary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItinenaryFindFirstArgs>(args?: SelectSubset<T, ItinenaryFindFirstArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Itinenary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryFindFirstOrThrowArgs} args - Arguments to find a Itinenary
     * @example
     * // Get one Itinenary
     * const itinenary = await prisma.itinenary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItinenaryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItinenaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Itinenaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itinenaries
     * const itinenaries = await prisma.itinenary.findMany()
     * 
     * // Get first 10 Itinenaries
     * const itinenaries = await prisma.itinenary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itinenaryWithIdOnly = await prisma.itinenary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItinenaryFindManyArgs>(args?: SelectSubset<T, ItinenaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Itinenary.
     * @param {ItinenaryCreateArgs} args - Arguments to create a Itinenary.
     * @example
     * // Create one Itinenary
     * const Itinenary = await prisma.itinenary.create({
     *   data: {
     *     // ... data to create a Itinenary
     *   }
     * })
     * 
     */
    create<T extends ItinenaryCreateArgs>(args: SelectSubset<T, ItinenaryCreateArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Itinenaries.
     * @param {ItinenaryCreateManyArgs} args - Arguments to create many Itinenaries.
     * @example
     * // Create many Itinenaries
     * const itinenary = await prisma.itinenary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItinenaryCreateManyArgs>(args?: SelectSubset<T, ItinenaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Itinenary.
     * @param {ItinenaryDeleteArgs} args - Arguments to delete one Itinenary.
     * @example
     * // Delete one Itinenary
     * const Itinenary = await prisma.itinenary.delete({
     *   where: {
     *     // ... filter to delete one Itinenary
     *   }
     * })
     * 
     */
    delete<T extends ItinenaryDeleteArgs>(args: SelectSubset<T, ItinenaryDeleteArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Itinenary.
     * @param {ItinenaryUpdateArgs} args - Arguments to update one Itinenary.
     * @example
     * // Update one Itinenary
     * const itinenary = await prisma.itinenary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItinenaryUpdateArgs>(args: SelectSubset<T, ItinenaryUpdateArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Itinenaries.
     * @param {ItinenaryDeleteManyArgs} args - Arguments to filter Itinenaries to delete.
     * @example
     * // Delete a few Itinenaries
     * const { count } = await prisma.itinenary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItinenaryDeleteManyArgs>(args?: SelectSubset<T, ItinenaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itinenaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itinenaries
     * const itinenary = await prisma.itinenary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItinenaryUpdateManyArgs>(args: SelectSubset<T, ItinenaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Itinenary.
     * @param {ItinenaryUpsertArgs} args - Arguments to update or create a Itinenary.
     * @example
     * // Update or create a Itinenary
     * const itinenary = await prisma.itinenary.upsert({
     *   create: {
     *     // ... data to create a Itinenary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinenary we want to update
     *   }
     * })
     */
    upsert<T extends ItinenaryUpsertArgs>(args: SelectSubset<T, ItinenaryUpsertArgs<ExtArgs>>): Prisma__ItinenaryClient<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Itinenaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryCountArgs} args - Arguments to filter Itinenaries to count.
     * @example
     * // Count the number of Itinenaries
     * const count = await prisma.itinenary.count({
     *   where: {
     *     // ... the filter for the Itinenaries we want to count
     *   }
     * })
    **/
    count<T extends ItinenaryCountArgs>(
      args?: Subset<T, ItinenaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItinenaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinenary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItinenaryAggregateArgs>(args: Subset<T, ItinenaryAggregateArgs>): Prisma.PrismaPromise<GetItinenaryAggregateType<T>>

    /**
     * Group by Itinenary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinenaryGroupByArgs} args - Group by arguments.
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
      T extends ItinenaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItinenaryGroupByArgs['orderBy'] }
        : { orderBy?: ItinenaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItinenaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinenaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Itinenary model
   */
  readonly fields: ItinenaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Itinenary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItinenaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    place<T extends Itinenary$placeArgs<ExtArgs> = {}>(args?: Subset<T, Itinenary$placeArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Itinenary model
   */ 
  interface ItinenaryFieldRefs {
    readonly id: FieldRef<"Itinenary", 'Int'>
    readonly name: FieldRef<"Itinenary", 'String'>
    readonly text: FieldRef<"Itinenary", 'String'>
    readonly createdAt: FieldRef<"Itinenary", 'DateTime'>
    readonly updatedAt: FieldRef<"Itinenary", 'DateTime'>
    readonly tripId: FieldRef<"Itinenary", 'Int'>
    readonly placeId: FieldRef<"Itinenary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Itinenary findUnique
   */
  export type ItinenaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter, which Itinenary to fetch.
     */
    where: ItinenaryWhereUniqueInput
  }

  /**
   * Itinenary findUniqueOrThrow
   */
  export type ItinenaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter, which Itinenary to fetch.
     */
    where: ItinenaryWhereUniqueInput
  }

  /**
   * Itinenary findFirst
   */
  export type ItinenaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter, which Itinenary to fetch.
     */
    where?: ItinenaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itinenaries to fetch.
     */
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itinenaries.
     */
    cursor?: ItinenaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itinenaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itinenaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itinenaries.
     */
    distinct?: ItinenaryScalarFieldEnum | ItinenaryScalarFieldEnum[]
  }

  /**
   * Itinenary findFirstOrThrow
   */
  export type ItinenaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter, which Itinenary to fetch.
     */
    where?: ItinenaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itinenaries to fetch.
     */
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itinenaries.
     */
    cursor?: ItinenaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itinenaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itinenaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itinenaries.
     */
    distinct?: ItinenaryScalarFieldEnum | ItinenaryScalarFieldEnum[]
  }

  /**
   * Itinenary findMany
   */
  export type ItinenaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter, which Itinenaries to fetch.
     */
    where?: ItinenaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itinenaries to fetch.
     */
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Itinenaries.
     */
    cursor?: ItinenaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itinenaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itinenaries.
     */
    skip?: number
    distinct?: ItinenaryScalarFieldEnum | ItinenaryScalarFieldEnum[]
  }

  /**
   * Itinenary create
   */
  export type ItinenaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Itinenary.
     */
    data: XOR<ItinenaryCreateInput, ItinenaryUncheckedCreateInput>
  }

  /**
   * Itinenary createMany
   */
  export type ItinenaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Itinenaries.
     */
    data: ItinenaryCreateManyInput | ItinenaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Itinenary update
   */
  export type ItinenaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Itinenary.
     */
    data: XOR<ItinenaryUpdateInput, ItinenaryUncheckedUpdateInput>
    /**
     * Choose, which Itinenary to update.
     */
    where: ItinenaryWhereUniqueInput
  }

  /**
   * Itinenary updateMany
   */
  export type ItinenaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Itinenaries.
     */
    data: XOR<ItinenaryUpdateManyMutationInput, ItinenaryUncheckedUpdateManyInput>
    /**
     * Filter which Itinenaries to update
     */
    where?: ItinenaryWhereInput
  }

  /**
   * Itinenary upsert
   */
  export type ItinenaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Itinenary to update in case it exists.
     */
    where: ItinenaryWhereUniqueInput
    /**
     * In case the Itinenary found by the `where` argument doesn't exist, create a new Itinenary with this data.
     */
    create: XOR<ItinenaryCreateInput, ItinenaryUncheckedCreateInput>
    /**
     * In case the Itinenary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItinenaryUpdateInput, ItinenaryUncheckedUpdateInput>
  }

  /**
   * Itinenary delete
   */
  export type ItinenaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    /**
     * Filter which Itinenary to delete.
     */
    where: ItinenaryWhereUniqueInput
  }

  /**
   * Itinenary deleteMany
   */
  export type ItinenaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itinenaries to delete
     */
    where?: ItinenaryWhereInput
  }

  /**
   * Itinenary.place
   */
  export type Itinenary$placeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
  }

  /**
   * Itinenary without action
   */
  export type ItinenaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    id: number | null
    order: number | null
    tripId: number | null
  }

  export type PlaceSumAggregateOutputType = {
    id: number | null
    order: number | null
    tripId: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    coordinates: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    coordinates: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coordinates: number
    order: number
    createdAt: number
    updatedAt: number
    tripId: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    id?: true
    order?: true
    tripId?: true
  }

  export type PlaceSumAggregateInputType = {
    id?: true
    order?: true
    tripId?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coordinates?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coordinates?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coordinates?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt: Date
    updatedAt: Date
    tripId: number
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    Itinenary?: boolean | Place$ItinenaryArgs<ExtArgs>
    TimelineItem?: boolean | Place$TimelineItemArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>


  export type PlaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
  }

  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    Itinenary?: boolean | Place$ItinenaryArgs<ExtArgs>
    TimelineItem?: boolean | Place$TimelineItemArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      Itinenary: Prisma.$ItinenaryPayload<ExtArgs>[]
      TimelineItem: Prisma.$TimelineItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      coordinates: string
      order: number
      createdAt: Date
      updatedAt: Date
      tripId: number
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
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
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Itinenary<T extends Place$ItinenaryArgs<ExtArgs> = {}>(args?: Subset<T, Place$ItinenaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinenaryPayload<ExtArgs>, T, "findMany"> | Null>
    TimelineItem<T extends Place$TimelineItemArgs<ExtArgs> = {}>(args?: Subset<T, Place$TimelineItemArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Place model
   */ 
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'Int'>
    readonly name: FieldRef<"Place", 'String'>
    readonly description: FieldRef<"Place", 'String'>
    readonly coordinates: FieldRef<"Place", 'String'>
    readonly order: FieldRef<"Place", 'Int'>
    readonly createdAt: FieldRef<"Place", 'DateTime'>
    readonly updatedAt: FieldRef<"Place", 'DateTime'>
    readonly tripId: FieldRef<"Place", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
  }

  /**
   * Place.Itinenary
   */
  export type Place$ItinenaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinenary
     */
    select?: ItinenarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinenaryInclude<ExtArgs> | null
    where?: ItinenaryWhereInput
    orderBy?: ItinenaryOrderByWithRelationInput | ItinenaryOrderByWithRelationInput[]
    cursor?: ItinenaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinenaryScalarFieldEnum | ItinenaryScalarFieldEnum[]
  }

  /**
   * Place.TimelineItem
   */
  export type Place$TimelineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    where?: TimelineItemWhereInput
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TimelineSumAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TimelineMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: number | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    tripId: number
    _all: number
  }


  export type TimelineAvgAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TimelineSumAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TimelineMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _avg?: TimelineAvgAggregateInputType
    _sum?: TimelineSumAggregateInputType
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    tripId: number
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    TimelineItem?: boolean | Timeline$TimelineItemArgs<ExtArgs>
    _count?: boolean | TimelineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>


  export type TimelineSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
  }

  export type TimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    TimelineItem?: boolean | Timeline$TimelineItemArgs<ExtArgs>
    _count?: boolean | TimelineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      TimelineItem: Prisma.$TimelineItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
      tripId: number
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }

  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineFindUniqueArgs>(args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timeline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineFindFirstArgs>(args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineFindManyArgs>(args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
     */
    create<T extends TimelineCreateArgs>(args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timelines.
     * @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineCreateManyArgs>(args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
     */
    delete<T extends TimelineDeleteArgs>(args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineUpdateArgs>(args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineDeleteManyArgs>(args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineUpdateManyArgs>(args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
     */
    upsert<T extends TimelineUpsertArgs>(args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
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
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    TimelineItem<T extends Timeline$TimelineItemArgs<ExtArgs> = {}>(args?: Subset<T, Timeline$TimelineItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Timeline model
   */ 
  interface TimelineFieldRefs {
    readonly id: FieldRef<"Timeline", 'Int'>
    readonly title: FieldRef<"Timeline", 'String'>
    readonly createdAt: FieldRef<"Timeline", 'DateTime'>
    readonly updatedAt: FieldRef<"Timeline", 'DateTime'>
    readonly tripId: FieldRef<"Timeline", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }

  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }

  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline.TimelineItem
   */
  export type Timeline$TimelineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    where?: TimelineItemWhereInput
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    cursor?: TimelineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
  }


  /**
   * Model TimelineItem
   */

  export type AggregateTimelineItem = {
    _count: TimelineItemCountAggregateOutputType | null
    _avg: TimelineItemAvgAggregateOutputType | null
    _sum: TimelineItemSumAggregateOutputType | null
    _min: TimelineItemMinAggregateOutputType | null
    _max: TimelineItemMaxAggregateOutputType | null
  }

  export type TimelineItemAvgAggregateOutputType = {
    id: number | null
    order: number | null
    timelineId: number | null
    placeId: number | null
  }

  export type TimelineItemSumAggregateOutputType = {
    id: number | null
    order: number | null
    timelineId: number | null
    placeId: number | null
  }

  export type TimelineItemMinAggregateOutputType = {
    id: number | null
    dateFrom: Date | null
    dateTo: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    timelineId: number | null
    placeId: number | null
  }

  export type TimelineItemMaxAggregateOutputType = {
    id: number | null
    dateFrom: Date | null
    dateTo: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    timelineId: number | null
    placeId: number | null
  }

  export type TimelineItemCountAggregateOutputType = {
    id: number
    dateFrom: number
    dateTo: number
    order: number
    createdAt: number
    updatedAt: number
    timelineId: number
    placeId: number
    _all: number
  }


  export type TimelineItemAvgAggregateInputType = {
    id?: true
    order?: true
    timelineId?: true
    placeId?: true
  }

  export type TimelineItemSumAggregateInputType = {
    id?: true
    order?: true
    timelineId?: true
    placeId?: true
  }

  export type TimelineItemMinAggregateInputType = {
    id?: true
    dateFrom?: true
    dateTo?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    timelineId?: true
    placeId?: true
  }

  export type TimelineItemMaxAggregateInputType = {
    id?: true
    dateFrom?: true
    dateTo?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    timelineId?: true
    placeId?: true
  }

  export type TimelineItemCountAggregateInputType = {
    id?: true
    dateFrom?: true
    dateTo?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    timelineId?: true
    placeId?: true
    _all?: true
  }

  export type TimelineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineItem to aggregate.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimelineItems
    **/
    _count?: true | TimelineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineItemMaxAggregateInputType
  }

  export type GetTimelineItemAggregateType<T extends TimelineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineItem[P]>
      : GetScalarType<T[P], AggregateTimelineItem[P]>
  }




  export type TimelineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineItemWhereInput
    orderBy?: TimelineItemOrderByWithAggregationInput | TimelineItemOrderByWithAggregationInput[]
    by: TimelineItemScalarFieldEnum[] | TimelineItemScalarFieldEnum
    having?: TimelineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineItemCountAggregateInputType | true
    _avg?: TimelineItemAvgAggregateInputType
    _sum?: TimelineItemSumAggregateInputType
    _min?: TimelineItemMinAggregateInputType
    _max?: TimelineItemMaxAggregateInputType
  }

  export type TimelineItemGroupByOutputType = {
    id: number
    dateFrom: Date | null
    dateTo: Date | null
    order: number
    createdAt: Date
    updatedAt: Date
    timelineId: number
    placeId: number | null
    _count: TimelineItemCountAggregateOutputType | null
    _avg: TimelineItemAvgAggregateOutputType | null
    _sum: TimelineItemSumAggregateOutputType | null
    _min: TimelineItemMinAggregateOutputType | null
    _max: TimelineItemMaxAggregateOutputType | null
  }

  type GetTimelineItemGroupByPayload<T extends TimelineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineItemGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineItemGroupByOutputType[P]>
        }
      >
    >


  export type TimelineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timelineId?: boolean
    placeId?: boolean
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    place?: boolean | TimelineItem$placeArgs<ExtArgs>
  }, ExtArgs["result"]["timelineItem"]>


  export type TimelineItemSelectScalar = {
    id?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timelineId?: boolean
    placeId?: boolean
  }

  export type TimelineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    place?: boolean | TimelineItem$placeArgs<ExtArgs>
  }

  export type $TimelineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimelineItem"
    objects: {
      timeline: Prisma.$TimelinePayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateFrom: Date | null
      dateTo: Date | null
      order: number
      createdAt: Date
      updatedAt: Date
      timelineId: number
      placeId: number | null
    }, ExtArgs["result"]["timelineItem"]>
    composites: {}
  }

  type TimelineItemGetPayload<S extends boolean | null | undefined | TimelineItemDefaultArgs> = $Result.GetResult<Prisma.$TimelineItemPayload, S>

  type TimelineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineItemCountAggregateInputType | true
    }

  export interface TimelineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimelineItem'], meta: { name: 'TimelineItem' } }
    /**
     * Find zero or one TimelineItem that matches the filter.
     * @param {TimelineItemFindUniqueArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineItemFindUniqueArgs>(args: SelectSubset<T, TimelineItemFindUniqueArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimelineItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimelineItemFindUniqueOrThrowArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimelineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindFirstArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineItemFindFirstArgs>(args?: SelectSubset<T, TimelineItemFindFirstArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimelineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindFirstOrThrowArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimelineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineItems
     * const timelineItems = await prisma.timelineItem.findMany()
     * 
     * // Get first 10 TimelineItems
     * const timelineItems = await prisma.timelineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineItemWithIdOnly = await prisma.timelineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineItemFindManyArgs>(args?: SelectSubset<T, TimelineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimelineItem.
     * @param {TimelineItemCreateArgs} args - Arguments to create a TimelineItem.
     * @example
     * // Create one TimelineItem
     * const TimelineItem = await prisma.timelineItem.create({
     *   data: {
     *     // ... data to create a TimelineItem
     *   }
     * })
     * 
     */
    create<T extends TimelineItemCreateArgs>(args: SelectSubset<T, TimelineItemCreateArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimelineItems.
     * @param {TimelineItemCreateManyArgs} args - Arguments to create many TimelineItems.
     * @example
     * // Create many TimelineItems
     * const timelineItem = await prisma.timelineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineItemCreateManyArgs>(args?: SelectSubset<T, TimelineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimelineItem.
     * @param {TimelineItemDeleteArgs} args - Arguments to delete one TimelineItem.
     * @example
     * // Delete one TimelineItem
     * const TimelineItem = await prisma.timelineItem.delete({
     *   where: {
     *     // ... filter to delete one TimelineItem
     *   }
     * })
     * 
     */
    delete<T extends TimelineItemDeleteArgs>(args: SelectSubset<T, TimelineItemDeleteArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimelineItem.
     * @param {TimelineItemUpdateArgs} args - Arguments to update one TimelineItem.
     * @example
     * // Update one TimelineItem
     * const timelineItem = await prisma.timelineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineItemUpdateArgs>(args: SelectSubset<T, TimelineItemUpdateArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimelineItems.
     * @param {TimelineItemDeleteManyArgs} args - Arguments to filter TimelineItems to delete.
     * @example
     * // Delete a few TimelineItems
     * const { count } = await prisma.timelineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineItemDeleteManyArgs>(args?: SelectSubset<T, TimelineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineItems
     * const timelineItem = await prisma.timelineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineItemUpdateManyArgs>(args: SelectSubset<T, TimelineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimelineItem.
     * @param {TimelineItemUpsertArgs} args - Arguments to update or create a TimelineItem.
     * @example
     * // Update or create a TimelineItem
     * const timelineItem = await prisma.timelineItem.upsert({
     *   create: {
     *     // ... data to create a TimelineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineItem we want to update
     *   }
     * })
     */
    upsert<T extends TimelineItemUpsertArgs>(args: SelectSubset<T, TimelineItemUpsertArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimelineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemCountArgs} args - Arguments to filter TimelineItems to count.
     * @example
     * // Count the number of TimelineItems
     * const count = await prisma.timelineItem.count({
     *   where: {
     *     // ... the filter for the TimelineItems we want to count
     *   }
     * })
    **/
    count<T extends TimelineItemCountArgs>(
      args?: Subset<T, TimelineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineItemAggregateArgs>(args: Subset<T, TimelineItemAggregateArgs>): Prisma.PrismaPromise<GetTimelineItemAggregateType<T>>

    /**
     * Group by TimelineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemGroupByArgs} args - Group by arguments.
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
      T extends TimelineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineItemGroupByArgs['orderBy'] }
        : { orderBy?: TimelineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimelineItem model
   */
  readonly fields: TimelineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimelineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeline<T extends TimelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimelineDefaultArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    place<T extends TimelineItem$placeArgs<ExtArgs> = {}>(args?: Subset<T, TimelineItem$placeArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the TimelineItem model
   */ 
  interface TimelineItemFieldRefs {
    readonly id: FieldRef<"TimelineItem", 'Int'>
    readonly dateFrom: FieldRef<"TimelineItem", 'DateTime'>
    readonly dateTo: FieldRef<"TimelineItem", 'DateTime'>
    readonly order: FieldRef<"TimelineItem", 'Int'>
    readonly createdAt: FieldRef<"TimelineItem", 'DateTime'>
    readonly updatedAt: FieldRef<"TimelineItem", 'DateTime'>
    readonly timelineId: FieldRef<"TimelineItem", 'Int'>
    readonly placeId: FieldRef<"TimelineItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TimelineItem findUnique
   */
  export type TimelineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem findUniqueOrThrow
   */
  export type TimelineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem findFirst
   */
  export type TimelineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineItems.
     */
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem findFirstOrThrow
   */
  export type TimelineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineItems.
     */
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem findMany
   */
  export type TimelineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItems to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem create
   */
  export type TimelineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TimelineItem.
     */
    data: XOR<TimelineItemCreateInput, TimelineItemUncheckedCreateInput>
  }

  /**
   * TimelineItem createMany
   */
  export type TimelineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineItems.
     */
    data: TimelineItemCreateManyInput | TimelineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineItem update
   */
  export type TimelineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TimelineItem.
     */
    data: XOR<TimelineItemUpdateInput, TimelineItemUncheckedUpdateInput>
    /**
     * Choose, which TimelineItem to update.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem updateMany
   */
  export type TimelineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineItems.
     */
    data: XOR<TimelineItemUpdateManyMutationInput, TimelineItemUncheckedUpdateManyInput>
    /**
     * Filter which TimelineItems to update
     */
    where?: TimelineItemWhereInput
  }

  /**
   * TimelineItem upsert
   */
  export type TimelineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TimelineItem to update in case it exists.
     */
    where: TimelineItemWhereUniqueInput
    /**
     * In case the TimelineItem found by the `where` argument doesn't exist, create a new TimelineItem with this data.
     */
    create: XOR<TimelineItemCreateInput, TimelineItemUncheckedCreateInput>
    /**
     * In case the TimelineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineItemUpdateInput, TimelineItemUncheckedUpdateInput>
  }

  /**
   * TimelineItem delete
   */
  export type TimelineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter which TimelineItem to delete.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem deleteMany
   */
  export type TimelineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineItems to delete
     */
    where?: TimelineItemWhereInput
  }

  /**
   * TimelineItem.place
   */
  export type TimelineItem$placeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
  }

  /**
   * TimelineItem without action
   */
  export type TimelineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
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


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    message: 'message',
    type: 'type'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastExecuted: 'lastExecuted'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    surname: 'surname',
    password: 'password',
    activated: 'activated',
    verifyToken: 'verifyToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    public: 'public',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const UsersTripsScalarFieldEnum: {
    id: 'id',
    accepted: 'accepted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    permission: 'permission',
    userId: 'userId',
    tripId: 'tripId'
  };

  export type UsersTripsScalarFieldEnum = (typeof UsersTripsScalarFieldEnum)[keyof typeof UsersTripsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tripId: 'tripId',
    userId: 'userId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ItinenaryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tripId: 'tripId',
    placeId: 'placeId'
  };

  export type ItinenaryScalarFieldEnum = (typeof ItinenaryScalarFieldEnum)[keyof typeof ItinenaryScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coordinates: 'coordinates',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tripId: 'tripId'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tripId: 'tripId'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  export const TimelineItemScalarFieldEnum: {
    id: 'id',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    timelineId: 'timelineId',
    placeId: 'placeId'
  };

  export type TimelineItemScalarFieldEnum = (typeof TimelineItemScalarFieldEnum)[keyof typeof TimelineItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TripType'
   */
  export type EnumTripTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripType'>
    


  /**
   * Reference to a field of type 'TripPermission'
   */
  export type EnumTripPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripPermission'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: StringFilter<"SystemLog"> | string
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    message?: StringFilter<"SystemLog"> | string
    type?: StringFilter<"SystemLog"> | string
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    type?: SortOrder
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    message?: StringFilter<"SystemLog"> | string
    type?: StringFilter<"SystemLog"> | string
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    type?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
    message?: StringWithAggregatesFilter<"SystemLog"> | string
    type?: StringWithAggregatesFilter<"SystemLog"> | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    name?: StringFilter<"Job"> | string
    lastExecuted?: DateTimeNullableFilter<"Job"> | Date | string | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastExecuted?: SortOrderInput | SortOrder
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    lastExecuted?: DateTimeNullableFilter<"Job"> | Date | string | null
  }, "id" | "name">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastExecuted?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    name?: StringWithAggregatesFilter<"Job"> | string
    lastExecuted?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
  }

  export type MigrationsWhereInput = {
    AND?: MigrationsWhereInput | MigrationsWhereInput[]
    OR?: MigrationsWhereInput[]
    NOT?: MigrationsWhereInput | MigrationsWhereInput[]
    id?: IntFilter<"Migrations"> | number
    name?: StringFilter<"Migrations"> | string
    createdAt?: DateTimeFilter<"Migrations"> | Date | string
  }

  export type MigrationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MigrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MigrationsWhereInput | MigrationsWhereInput[]
    OR?: MigrationsWhereInput[]
    NOT?: MigrationsWhereInput | MigrationsWhereInput[]
    createdAt?: DateTimeFilter<"Migrations"> | Date | string
  }, "id" | "name">

  export type MigrationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: MigrationsCountOrderByAggregateInput
    _avg?: MigrationsAvgOrderByAggregateInput
    _max?: MigrationsMaxOrderByAggregateInput
    _min?: MigrationsMinOrderByAggregateInput
    _sum?: MigrationsSumOrderByAggregateInput
  }

  export type MigrationsScalarWhereWithAggregatesInput = {
    AND?: MigrationsScalarWhereWithAggregatesInput | MigrationsScalarWhereWithAggregatesInput[]
    OR?: MigrationsScalarWhereWithAggregatesInput[]
    NOT?: MigrationsScalarWhereWithAggregatesInput | MigrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Migrations"> | number
    name?: StringWithAggregatesFilter<"Migrations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Migrations"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    activated?: BoolFilter<"User"> | boolean
    verifyToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: UsersTripsListRelationFilter
    createdTrips?: TripListRelationFilter
    Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    Review?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: UsersTripsOrderByRelationAggregateInput
    createdTrips?: TripOrderByRelationAggregateInput
    Profile?: ProfileOrderByWithRelationInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    verifyToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    activated?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: UsersTripsListRelationFilter
    createdTrips?: TripListRelationFilter
    Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    Review?: ReviewListRelationFilter
  }, "id" | "email" | "verifyToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    activated?: BoolWithAggregatesFilter<"User"> | boolean
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: IntFilter<"Profile"> | number
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    avatar?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    avatar?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: IntWithAggregatesFilter<"Profile"> | number
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    avatar?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    name?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    type?: EnumTripTypeFilter<"Trip"> | $Enums.TripType
    public?: BoolFilter<"Trip"> | boolean
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    creatorId?: IntFilter<"Trip"> | number
    users?: UsersTripsListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    Review?: ReviewListRelationFilter
    Itinenary?: ItinenaryListRelationFilter
    Place?: PlaceListRelationFilter
    Timeline?: XOR<TimelineNullableRelationFilter, TimelineWhereInput> | null
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    type?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    users?: UsersTripsOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    Review?: ReviewOrderByRelationAggregateInput
    Itinenary?: ItinenaryOrderByRelationAggregateInput
    Place?: PlaceOrderByRelationAggregateInput
    Timeline?: TimelineOrderByWithRelationInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    name?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    type?: EnumTripTypeFilter<"Trip"> | $Enums.TripType
    public?: BoolFilter<"Trip"> | boolean
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    creatorId?: IntFilter<"Trip"> | number
    users?: UsersTripsListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    Review?: ReviewListRelationFilter
    Itinenary?: ItinenaryListRelationFilter
    Place?: PlaceListRelationFilter
    Timeline?: XOR<TimelineNullableRelationFilter, TimelineWhereInput> | null
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    type?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    name?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    type?: EnumTripTypeWithAggregatesFilter<"Trip"> | $Enums.TripType
    public?: BoolWithAggregatesFilter<"Trip"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    creatorId?: IntWithAggregatesFilter<"Trip"> | number
  }

  export type UsersTripsWhereInput = {
    AND?: UsersTripsWhereInput | UsersTripsWhereInput[]
    OR?: UsersTripsWhereInput[]
    NOT?: UsersTripsWhereInput | UsersTripsWhereInput[]
    id?: IntFilter<"UsersTrips"> | number
    accepted?: BoolFilter<"UsersTrips"> | boolean
    createdAt?: DateTimeFilter<"UsersTrips"> | Date | string
    updatedAt?: DateTimeFilter<"UsersTrips"> | Date | string
    permission?: EnumTripPermissionFilter<"UsersTrips"> | $Enums.TripPermission
    userId?: IntFilter<"UsersTrips"> | number
    tripId?: IntFilter<"UsersTrips"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }

  export type UsersTripsOrderByWithRelationInput = {
    id?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type UsersTripsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersTripsWhereInput | UsersTripsWhereInput[]
    OR?: UsersTripsWhereInput[]
    NOT?: UsersTripsWhereInput | UsersTripsWhereInput[]
    accepted?: BoolFilter<"UsersTrips"> | boolean
    createdAt?: DateTimeFilter<"UsersTrips"> | Date | string
    updatedAt?: DateTimeFilter<"UsersTrips"> | Date | string
    permission?: EnumTripPermissionFilter<"UsersTrips"> | $Enums.TripPermission
    userId?: IntFilter<"UsersTrips"> | number
    tripId?: IntFilter<"UsersTrips"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    trip?: XOR<TripRelationFilter, TripWhereInput>
  }, "id">

  export type UsersTripsOrderByWithAggregationInput = {
    id?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    _count?: UsersTripsCountOrderByAggregateInput
    _avg?: UsersTripsAvgOrderByAggregateInput
    _max?: UsersTripsMaxOrderByAggregateInput
    _min?: UsersTripsMinOrderByAggregateInput
    _sum?: UsersTripsSumOrderByAggregateInput
  }

  export type UsersTripsScalarWhereWithAggregatesInput = {
    AND?: UsersTripsScalarWhereWithAggregatesInput | UsersTripsScalarWhereWithAggregatesInput[]
    OR?: UsersTripsScalarWhereWithAggregatesInput[]
    NOT?: UsersTripsScalarWhereWithAggregatesInput | UsersTripsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsersTrips"> | number
    accepted?: BoolWithAggregatesFilter<"UsersTrips"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UsersTrips"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsersTrips"> | Date | string
    permission?: EnumTripPermissionWithAggregatesFilter<"UsersTrips"> | $Enums.TripPermission
    userId?: IntWithAggregatesFilter<"UsersTrips"> | number
    tripId?: IntWithAggregatesFilter<"UsersTrips"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    title?: StringFilter<"Review"> | string
    body?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    tripId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    trip?: XOR<TripRelationFilter, TripWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    title?: StringFilter<"Review"> | string
    body?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    tripId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    trip?: XOR<TripRelationFilter, TripWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    title?: StringWithAggregatesFilter<"Review"> | string
    body?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    tripId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type ItinenaryWhereInput = {
    AND?: ItinenaryWhereInput | ItinenaryWhereInput[]
    OR?: ItinenaryWhereInput[]
    NOT?: ItinenaryWhereInput | ItinenaryWhereInput[]
    id?: IntFilter<"Itinenary"> | number
    name?: StringFilter<"Itinenary"> | string
    text?: StringFilter<"Itinenary"> | string
    createdAt?: DateTimeFilter<"Itinenary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinenary"> | Date | string
    tripId?: IntFilter<"Itinenary"> | number
    placeId?: IntNullableFilter<"Itinenary"> | number | null
    trip?: XOR<TripRelationFilter, TripWhereInput>
    place?: XOR<PlaceNullableRelationFilter, PlaceWhereInput> | null
  }

  export type ItinenaryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    trip?: TripOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
  }

  export type ItinenaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItinenaryWhereInput | ItinenaryWhereInput[]
    OR?: ItinenaryWhereInput[]
    NOT?: ItinenaryWhereInput | ItinenaryWhereInput[]
    name?: StringFilter<"Itinenary"> | string
    text?: StringFilter<"Itinenary"> | string
    createdAt?: DateTimeFilter<"Itinenary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinenary"> | Date | string
    tripId?: IntFilter<"Itinenary"> | number
    placeId?: IntNullableFilter<"Itinenary"> | number | null
    trip?: XOR<TripRelationFilter, TripWhereInput>
    place?: XOR<PlaceNullableRelationFilter, PlaceWhereInput> | null
  }, "id">

  export type ItinenaryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    _count?: ItinenaryCountOrderByAggregateInput
    _avg?: ItinenaryAvgOrderByAggregateInput
    _max?: ItinenaryMaxOrderByAggregateInput
    _min?: ItinenaryMinOrderByAggregateInput
    _sum?: ItinenarySumOrderByAggregateInput
  }

  export type ItinenaryScalarWhereWithAggregatesInput = {
    AND?: ItinenaryScalarWhereWithAggregatesInput | ItinenaryScalarWhereWithAggregatesInput[]
    OR?: ItinenaryScalarWhereWithAggregatesInput[]
    NOT?: ItinenaryScalarWhereWithAggregatesInput | ItinenaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Itinenary"> | number
    name?: StringWithAggregatesFilter<"Itinenary"> | string
    text?: StringWithAggregatesFilter<"Itinenary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Itinenary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Itinenary"> | Date | string
    tripId?: IntWithAggregatesFilter<"Itinenary"> | number
    placeId?: IntNullableWithAggregatesFilter<"Itinenary"> | number | null
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: IntFilter<"Place"> | number
    name?: StringFilter<"Place"> | string
    description?: StringFilter<"Place"> | string
    coordinates?: StringFilter<"Place"> | string
    order?: IntFilter<"Place"> | number
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    tripId?: IntFilter<"Place"> | number
    trip?: XOR<TripRelationFilter, TripWhereInput>
    Itinenary?: ItinenaryListRelationFilter
    TimelineItem?: XOR<TimelineItemNullableRelationFilter, TimelineItemWhereInput> | null
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    trip?: TripOrderByWithRelationInput
    Itinenary?: ItinenaryOrderByRelationAggregateInput
    TimelineItem?: TimelineItemOrderByWithRelationInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    name?: StringFilter<"Place"> | string
    description?: StringFilter<"Place"> | string
    coordinates?: StringFilter<"Place"> | string
    order?: IntFilter<"Place"> | number
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    tripId?: IntFilter<"Place"> | number
    trip?: XOR<TripRelationFilter, TripWhereInput>
    Itinenary?: ItinenaryListRelationFilter
    TimelineItem?: XOR<TimelineItemNullableRelationFilter, TimelineItemWhereInput> | null
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Place"> | number
    name?: StringWithAggregatesFilter<"Place"> | string
    description?: StringWithAggregatesFilter<"Place"> | string
    coordinates?: StringWithAggregatesFilter<"Place"> | string
    order?: IntWithAggregatesFilter<"Place"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    tripId?: IntWithAggregatesFilter<"Place"> | number
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    id?: IntFilter<"Timeline"> | number
    title?: StringFilter<"Timeline"> | string
    createdAt?: DateTimeFilter<"Timeline"> | Date | string
    updatedAt?: DateTimeFilter<"Timeline"> | Date | string
    tripId?: IntFilter<"Timeline"> | number
    trip?: XOR<TripRelationFilter, TripWhereInput>
    TimelineItem?: TimelineItemListRelationFilter
  }

  export type TimelineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    trip?: TripOrderByWithRelationInput
    TimelineItem?: TimelineItemOrderByRelationAggregateInput
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tripId?: number
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    title?: StringFilter<"Timeline"> | string
    createdAt?: DateTimeFilter<"Timeline"> | Date | string
    updatedAt?: DateTimeFilter<"Timeline"> | Date | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
    TimelineItem?: TimelineItemListRelationFilter
  }, "id" | "tripId">

  export type TimelineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _avg?: TimelineAvgOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
    _sum?: TimelineSumOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Timeline"> | number
    title?: StringWithAggregatesFilter<"Timeline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    tripId?: IntWithAggregatesFilter<"Timeline"> | number
  }

  export type TimelineItemWhereInput = {
    AND?: TimelineItemWhereInput | TimelineItemWhereInput[]
    OR?: TimelineItemWhereInput[]
    NOT?: TimelineItemWhereInput | TimelineItemWhereInput[]
    id?: IntFilter<"TimelineItem"> | number
    dateFrom?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    dateTo?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    order?: IntFilter<"TimelineItem"> | number
    createdAt?: DateTimeFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineItem"> | Date | string
    timelineId?: IntFilter<"TimelineItem"> | number
    placeId?: IntNullableFilter<"TimelineItem"> | number | null
    timeline?: XOR<TimelineRelationFilter, TimelineWhereInput>
    place?: XOR<PlaceNullableRelationFilter, PlaceWhereInput> | null
  }

  export type TimelineItemOrderByWithRelationInput = {
    id?: SortOrder
    dateFrom?: SortOrderInput | SortOrder
    dateTo?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    timeline?: TimelineOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
  }

  export type TimelineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placeId?: number
    AND?: TimelineItemWhereInput | TimelineItemWhereInput[]
    OR?: TimelineItemWhereInput[]
    NOT?: TimelineItemWhereInput | TimelineItemWhereInput[]
    dateFrom?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    dateTo?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    order?: IntFilter<"TimelineItem"> | number
    createdAt?: DateTimeFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineItem"> | Date | string
    timelineId?: IntFilter<"TimelineItem"> | number
    timeline?: XOR<TimelineRelationFilter, TimelineWhereInput>
    place?: XOR<PlaceNullableRelationFilter, PlaceWhereInput> | null
  }, "id" | "placeId">

  export type TimelineItemOrderByWithAggregationInput = {
    id?: SortOrder
    dateFrom?: SortOrderInput | SortOrder
    dateTo?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    _count?: TimelineItemCountOrderByAggregateInput
    _avg?: TimelineItemAvgOrderByAggregateInput
    _max?: TimelineItemMaxOrderByAggregateInput
    _min?: TimelineItemMinOrderByAggregateInput
    _sum?: TimelineItemSumOrderByAggregateInput
  }

  export type TimelineItemScalarWhereWithAggregatesInput = {
    AND?: TimelineItemScalarWhereWithAggregatesInput | TimelineItemScalarWhereWithAggregatesInput[]
    OR?: TimelineItemScalarWhereWithAggregatesInput[]
    NOT?: TimelineItemScalarWhereWithAggregatesInput | TimelineItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimelineItem"> | number
    dateFrom?: DateTimeNullableWithAggregatesFilter<"TimelineItem"> | Date | string | null
    dateTo?: DateTimeNullableWithAggregatesFilter<"TimelineItem"> | Date | string | null
    order?: IntWithAggregatesFilter<"TimelineItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimelineItem"> | Date | string
    timelineId?: IntWithAggregatesFilter<"TimelineItem"> | number
    placeId?: IntNullableWithAggregatesFilter<"TimelineItem"> | number | null
  }

  export type SystemLogCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    type: string
  }

  export type SystemLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    type: string
  }

  export type SystemLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SystemLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    message: string
    type: string
  }

  export type SystemLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateInput = {
    name: string
    lastExecuted?: Date | string | null
  }

  export type JobUncheckedCreateInput = {
    id?: number
    name: string
    lastExecuted?: Date | string | null
  }

  export type JobUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastExecuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastExecuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobCreateManyInput = {
    id?: number
    name: string
    lastExecuted?: Date | string | null
  }

  export type JobUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastExecuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastExecuted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MigrationsCreateInput = {
    name: string
    createdAt?: Date | string
  }

  export type MigrationsUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type MigrationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationsCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type MigrationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MigrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: number
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: number
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
  }

  export type TripUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTripsCreateInput = {
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    user: UserCreateNestedOneWithoutTripsInput
    trip: TripCreateNestedOneWithoutUsersInput
  }

  export type UsersTripsUncheckedCreateInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    userId: number
    tripId: number
  }

  export type UsersTripsUpdateInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    trip?: TripUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersTripsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    userId?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTripsCreateManyInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    userId: number
    tripId: number
  }

  export type UsersTripsUpdateManyMutationInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
  }

  export type UsersTripsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    userId?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    userId: number
  }

  export type ReviewUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    userId: number
  }

  export type ReviewUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ItinenaryCreateInput = {
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutItinenaryInput
    place?: PlaceCreateNestedOneWithoutItinenaryInput
  }

  export type ItinenaryUncheckedCreateInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    placeId?: number | null
  }

  export type ItinenaryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutItinenaryNestedInput
    place?: PlaceUpdateOneWithoutItinenaryNestedInput
  }

  export type ItinenaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItinenaryCreateManyInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    placeId?: number | null
  }

  export type ItinenaryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinenaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaceCreateInput = {
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPlaceInput
    Itinenary?: ItinenaryCreateNestedManyWithoutPlaceInput
    TimelineItem?: TimelineItemCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutPlaceInput
    TimelineItem?: TimelineItemUncheckedCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPlaceNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutPlaceNestedInput
    TimelineItem?: TimelineItemUpdateOneWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutPlaceNestedInput
    TimelineItem?: TimelineItemUncheckedUpdateOneWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type PlaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutTimelineInput
    TimelineItem?: TimelineItemCreateNestedManyWithoutTimelineInput
  }

  export type TimelineUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    TimelineItem?: TimelineItemUncheckedCreateNestedManyWithoutTimelineInput
  }

  export type TimelineUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTimelineNestedInput
    TimelineItem?: TimelineItemUpdateManyWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    TimelineItem?: TimelineItemUncheckedUpdateManyWithoutTimelineNestedInput
  }

  export type TimelineCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type TimelineUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineItemCreateInput = {
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline: TimelineCreateNestedOneWithoutTimelineItemInput
    place?: PlaceCreateNestedOneWithoutTimelineItemInput
  }

  export type TimelineItemUncheckedCreateInput = {
    id?: number
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineId: number
    placeId?: number | null
  }

  export type TimelineItemUpdateInput = {
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUpdateOneRequiredWithoutTimelineItemNestedInput
    place?: PlaceUpdateOneWithoutTimelineItemNestedInput
  }

  export type TimelineItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimelineItemCreateManyInput = {
    id?: number
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineId: number
    placeId?: number | null
  }

  export type TimelineItemUpdateManyMutationInput = {
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    type?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    type?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastExecuted?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastExecuted?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastExecuted?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MigrationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MigrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MigrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MigrationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MigrationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersTripsListRelationFilter = {
    every?: UsersTripsWhereInput
    some?: UsersTripsWhereInput
    none?: UsersTripsWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type UsersTripsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumTripTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TripType | EnumTripTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TripType[]
    notIn?: $Enums.TripType[]
    not?: NestedEnumTripTypeFilter<$PrismaModel> | $Enums.TripType
  }

  export type ItinenaryListRelationFilter = {
    every?: ItinenaryWhereInput
    some?: ItinenaryWhereInput
    none?: ItinenaryWhereInput
  }

  export type PlaceListRelationFilter = {
    every?: PlaceWhereInput
    some?: PlaceWhereInput
    none?: PlaceWhereInput
  }

  export type TimelineNullableRelationFilter = {
    is?: TimelineWhereInput | null
    isNot?: TimelineWhereInput | null
  }

  export type ItinenaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    public?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumTripTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripType | EnumTripTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TripType[]
    notIn?: $Enums.TripType[]
    not?: NestedEnumTripTypeWithAggregatesFilter<$PrismaModel> | $Enums.TripType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripTypeFilter<$PrismaModel>
    _max?: NestedEnumTripTypeFilter<$PrismaModel>
  }

  export type EnumTripPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.TripPermission | EnumTripPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.TripPermission[]
    notIn?: $Enums.TripPermission[]
    not?: NestedEnumTripPermissionFilter<$PrismaModel> | $Enums.TripPermission
  }

  export type TripRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type UsersTripsCountOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UsersTripsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UsersTripsMaxOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UsersTripsMinOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type UsersTripsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type EnumTripPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripPermission | EnumTripPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.TripPermission[]
    notIn?: $Enums.TripPermission[]
    not?: NestedEnumTripPermissionWithAggregatesFilter<$PrismaModel> | $Enums.TripPermission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripPermissionFilter<$PrismaModel>
    _max?: NestedEnumTripPermissionFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlaceNullableRelationFilter = {
    is?: PlaceWhereInput | null
    isNot?: PlaceWhereInput | null
  }

  export type ItinenaryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrder
  }

  export type ItinenaryAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrder
  }

  export type ItinenaryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrder
  }

  export type ItinenaryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrder
  }

  export type ItinenarySumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    placeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TimelineItemNullableRelationFilter = {
    is?: TimelineItemWhereInput | null
    isNot?: TimelineItemWhereInput | null
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    tripId?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineItemListRelationFilter = {
    every?: TimelineItemWhereInput
    some?: TimelineItemWhereInput
    none?: TimelineItemWhereInput
  }

  export type TimelineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type TimelineRelationFilter = {
    is?: TimelineWhereInput
    isNot?: TimelineWhereInput
  }

  export type TimelineItemCountOrderByAggregateInput = {
    id?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrder
  }

  export type TimelineItemAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrder
  }

  export type TimelineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrder
  }

  export type TimelineItemMinOrderByAggregateInput = {
    id?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrder
  }

  export type TimelineItemSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    timelineId?: SortOrder
    placeId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersTripsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput> | UsersTripsCreateWithoutUserInput[] | UsersTripsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutUserInput | UsersTripsCreateOrConnectWithoutUserInput[]
    createMany?: UsersTripsCreateManyUserInputEnvelope
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UsersTripsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput> | UsersTripsCreateWithoutUserInput[] | UsersTripsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutUserInput | UsersTripsCreateOrConnectWithoutUserInput[]
    createMany?: UsersTripsCreateManyUserInputEnvelope
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersTripsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput> | UsersTripsCreateWithoutUserInput[] | UsersTripsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutUserInput | UsersTripsCreateOrConnectWithoutUserInput[]
    upsert?: UsersTripsUpsertWithWhereUniqueWithoutUserInput | UsersTripsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersTripsCreateManyUserInputEnvelope
    set?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    disconnect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    delete?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    update?: UsersTripsUpdateWithWhereUniqueWithoutUserInput | UsersTripsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersTripsUpdateManyWithWhereWithoutUserInput | UsersTripsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
  }

  export type TripUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UsersTripsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput> | UsersTripsCreateWithoutUserInput[] | UsersTripsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutUserInput | UsersTripsCreateOrConnectWithoutUserInput[]
    upsert?: UsersTripsUpsertWithWhereUniqueWithoutUserInput | UsersTripsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersTripsCreateManyUserInputEnvelope
    set?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    disconnect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    delete?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    update?: UsersTripsUpdateWithWhereUniqueWithoutUserInput | UsersTripsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersTripsUpdateManyWithWhereWithoutUserInput | UsersTripsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UsersTripsCreateNestedManyWithoutTripInput = {
    create?: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput> | UsersTripsCreateWithoutTripInput[] | UsersTripsUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutTripInput | UsersTripsCreateOrConnectWithoutTripInput[]
    createMany?: UsersTripsCreateManyTripInputEnvelope
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTripsInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutTripInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    createMany?: ReviewCreateManyTripInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ItinenaryCreateNestedManyWithoutTripInput = {
    create?: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput> | ItinenaryCreateWithoutTripInput[] | ItinenaryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutTripInput | ItinenaryCreateOrConnectWithoutTripInput[]
    createMany?: ItinenaryCreateManyTripInputEnvelope
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
  }

  export type PlaceCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type TimelineCreateNestedOneWithoutTripInput = {
    create?: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTripInput
    connect?: TimelineWhereUniqueInput
  }

  export type UsersTripsUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput> | UsersTripsCreateWithoutTripInput[] | UsersTripsUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutTripInput | UsersTripsCreateOrConnectWithoutTripInput[]
    createMany?: UsersTripsCreateManyTripInputEnvelope
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    createMany?: ReviewCreateManyTripInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ItinenaryUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput> | ItinenaryCreateWithoutTripInput[] | ItinenaryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutTripInput | ItinenaryCreateOrConnectWithoutTripInput[]
    createMany?: ItinenaryCreateManyTripInputEnvelope
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
  }

  export type PlaceUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type TimelineUncheckedCreateNestedOneWithoutTripInput = {
    create?: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTripInput
    connect?: TimelineWhereUniqueInput
  }

  export type EnumTripTypeFieldUpdateOperationsInput = {
    set?: $Enums.TripType
  }

  export type UsersTripsUpdateManyWithoutTripNestedInput = {
    create?: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput> | UsersTripsCreateWithoutTripInput[] | UsersTripsUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutTripInput | UsersTripsCreateOrConnectWithoutTripInput[]
    upsert?: UsersTripsUpsertWithWhereUniqueWithoutTripInput | UsersTripsUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UsersTripsCreateManyTripInputEnvelope
    set?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    disconnect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    delete?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    update?: UsersTripsUpdateWithWhereUniqueWithoutTripInput | UsersTripsUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UsersTripsUpdateManyWithWhereWithoutTripInput | UsersTripsUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedTripsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    upsert?: UserUpsertWithoutCreatedTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTripsInput, UserUpdateWithoutCreatedTripsInput>, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type ReviewUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTripInput | ReviewUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ReviewCreateManyTripInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTripInput | ReviewUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTripInput | ReviewUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ItinenaryUpdateManyWithoutTripNestedInput = {
    create?: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput> | ItinenaryCreateWithoutTripInput[] | ItinenaryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutTripInput | ItinenaryCreateOrConnectWithoutTripInput[]
    upsert?: ItinenaryUpsertWithWhereUniqueWithoutTripInput | ItinenaryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ItinenaryCreateManyTripInputEnvelope
    set?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    disconnect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    delete?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    update?: ItinenaryUpdateWithWhereUniqueWithoutTripInput | ItinenaryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ItinenaryUpdateManyWithWhereWithoutTripInput | ItinenaryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
  }

  export type PlaceUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutTripInput | PlaceUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutTripInput | PlaceUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutTripInput | PlaceUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type TimelineUpdateOneWithoutTripNestedInput = {
    create?: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTripInput
    upsert?: TimelineUpsertWithoutTripInput
    disconnect?: TimelineWhereInput | boolean
    delete?: TimelineWhereInput | boolean
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutTripInput, TimelineUpdateWithoutTripInput>, TimelineUncheckedUpdateWithoutTripInput>
  }

  export type UsersTripsUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput> | UsersTripsCreateWithoutTripInput[] | UsersTripsUncheckedCreateWithoutTripInput[]
    connectOrCreate?: UsersTripsCreateOrConnectWithoutTripInput | UsersTripsCreateOrConnectWithoutTripInput[]
    upsert?: UsersTripsUpsertWithWhereUniqueWithoutTripInput | UsersTripsUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: UsersTripsCreateManyTripInputEnvelope
    set?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    disconnect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    delete?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    connect?: UsersTripsWhereUniqueInput | UsersTripsWhereUniqueInput[]
    update?: UsersTripsUpdateWithWhereUniqueWithoutTripInput | UsersTripsUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: UsersTripsUpdateManyWithWhereWithoutTripInput | UsersTripsUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput> | ReviewCreateWithoutTripInput[] | ReviewUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTripInput | ReviewCreateOrConnectWithoutTripInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTripInput | ReviewUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ReviewCreateManyTripInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTripInput | ReviewUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTripInput | ReviewUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ItinenaryUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput> | ItinenaryCreateWithoutTripInput[] | ItinenaryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutTripInput | ItinenaryCreateOrConnectWithoutTripInput[]
    upsert?: ItinenaryUpsertWithWhereUniqueWithoutTripInput | ItinenaryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ItinenaryCreateManyTripInputEnvelope
    set?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    disconnect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    delete?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    update?: ItinenaryUpdateWithWhereUniqueWithoutTripInput | ItinenaryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ItinenaryUpdateManyWithWhereWithoutTripInput | ItinenaryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
  }

  export type PlaceUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutTripInput | PlaceUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutTripInput | PlaceUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutTripInput | PlaceUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type TimelineUncheckedUpdateOneWithoutTripNestedInput = {
    create?: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTripInput
    upsert?: TimelineUpsertWithoutTripInput
    disconnect?: TimelineWhereInput | boolean
    delete?: TimelineWhereInput | boolean
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutTripInput, TimelineUpdateWithoutTripInput>, TimelineUncheckedUpdateWithoutTripInput>
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutUsersInput = {
    create?: XOR<TripCreateWithoutUsersInput, TripUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TripCreateOrConnectWithoutUsersInput
    connect?: TripWhereUniqueInput
  }

  export type EnumTripPermissionFieldUpdateOperationsInput = {
    set?: $Enums.TripPermission
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type TripUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TripCreateWithoutUsersInput, TripUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TripCreateOrConnectWithoutUsersInput
    upsert?: TripUpsertWithoutUsersInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutUsersInput, TripUpdateWithoutUsersInput>, TripUncheckedUpdateWithoutUsersInput>
  }

  export type TripCreateNestedOneWithoutReviewInput = {
    create?: XOR<TripCreateWithoutReviewInput, TripUncheckedCreateWithoutReviewInput>
    connectOrCreate?: TripCreateOrConnectWithoutReviewInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<TripCreateWithoutReviewInput, TripUncheckedCreateWithoutReviewInput>
    connectOrCreate?: TripCreateOrConnectWithoutReviewInput
    upsert?: TripUpsertWithoutReviewInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutReviewInput, TripUpdateWithoutReviewInput>, TripUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type TripCreateNestedOneWithoutItinenaryInput = {
    create?: XOR<TripCreateWithoutItinenaryInput, TripUncheckedCreateWithoutItinenaryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItinenaryInput
    connect?: TripWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutItinenaryInput = {
    create?: XOR<PlaceCreateWithoutItinenaryInput, PlaceUncheckedCreateWithoutItinenaryInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutItinenaryInput
    connect?: PlaceWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutItinenaryNestedInput = {
    create?: XOR<TripCreateWithoutItinenaryInput, TripUncheckedCreateWithoutItinenaryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItinenaryInput
    upsert?: TripUpsertWithoutItinenaryInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutItinenaryInput, TripUpdateWithoutItinenaryInput>, TripUncheckedUpdateWithoutItinenaryInput>
  }

  export type PlaceUpdateOneWithoutItinenaryNestedInput = {
    create?: XOR<PlaceCreateWithoutItinenaryInput, PlaceUncheckedCreateWithoutItinenaryInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutItinenaryInput
    upsert?: PlaceUpsertWithoutItinenaryInput
    disconnect?: PlaceWhereInput | boolean
    delete?: PlaceWhereInput | boolean
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutItinenaryInput, PlaceUpdateWithoutItinenaryInput>, PlaceUncheckedUpdateWithoutItinenaryInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripCreateNestedOneWithoutPlaceInput = {
    create?: XOR<TripCreateWithoutPlaceInput, TripUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlaceInput
    connect?: TripWhereUniqueInput
  }

  export type ItinenaryCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput> | ItinenaryCreateWithoutPlaceInput[] | ItinenaryUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutPlaceInput | ItinenaryCreateOrConnectWithoutPlaceInput[]
    createMany?: ItinenaryCreateManyPlaceInputEnvelope
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
  }

  export type TimelineItemCreateNestedOneWithoutPlaceInput = {
    create?: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutPlaceInput
    connect?: TimelineItemWhereUniqueInput
  }

  export type ItinenaryUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput> | ItinenaryCreateWithoutPlaceInput[] | ItinenaryUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutPlaceInput | ItinenaryCreateOrConnectWithoutPlaceInput[]
    createMany?: ItinenaryCreateManyPlaceInputEnvelope
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
  }

  export type TimelineItemUncheckedCreateNestedOneWithoutPlaceInput = {
    create?: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutPlaceInput
    connect?: TimelineItemWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutPlaceNestedInput = {
    create?: XOR<TripCreateWithoutPlaceInput, TripUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlaceInput
    upsert?: TripUpsertWithoutPlaceInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPlaceInput, TripUpdateWithoutPlaceInput>, TripUncheckedUpdateWithoutPlaceInput>
  }

  export type ItinenaryUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput> | ItinenaryCreateWithoutPlaceInput[] | ItinenaryUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutPlaceInput | ItinenaryCreateOrConnectWithoutPlaceInput[]
    upsert?: ItinenaryUpsertWithWhereUniqueWithoutPlaceInput | ItinenaryUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ItinenaryCreateManyPlaceInputEnvelope
    set?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    disconnect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    delete?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    update?: ItinenaryUpdateWithWhereUniqueWithoutPlaceInput | ItinenaryUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ItinenaryUpdateManyWithWhereWithoutPlaceInput | ItinenaryUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
  }

  export type TimelineItemUpdateOneWithoutPlaceNestedInput = {
    create?: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutPlaceInput
    upsert?: TimelineItemUpsertWithoutPlaceInput
    disconnect?: TimelineItemWhereInput | boolean
    delete?: TimelineItemWhereInput | boolean
    connect?: TimelineItemWhereUniqueInput
    update?: XOR<XOR<TimelineItemUpdateToOneWithWhereWithoutPlaceInput, TimelineItemUpdateWithoutPlaceInput>, TimelineItemUncheckedUpdateWithoutPlaceInput>
  }

  export type ItinenaryUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput> | ItinenaryCreateWithoutPlaceInput[] | ItinenaryUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ItinenaryCreateOrConnectWithoutPlaceInput | ItinenaryCreateOrConnectWithoutPlaceInput[]
    upsert?: ItinenaryUpsertWithWhereUniqueWithoutPlaceInput | ItinenaryUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ItinenaryCreateManyPlaceInputEnvelope
    set?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    disconnect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    delete?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    connect?: ItinenaryWhereUniqueInput | ItinenaryWhereUniqueInput[]
    update?: ItinenaryUpdateWithWhereUniqueWithoutPlaceInput | ItinenaryUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ItinenaryUpdateManyWithWhereWithoutPlaceInput | ItinenaryUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
  }

  export type TimelineItemUncheckedUpdateOneWithoutPlaceNestedInput = {
    create?: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutPlaceInput
    upsert?: TimelineItemUpsertWithoutPlaceInput
    disconnect?: TimelineItemWhereInput | boolean
    delete?: TimelineItemWhereInput | boolean
    connect?: TimelineItemWhereUniqueInput
    update?: XOR<XOR<TimelineItemUpdateToOneWithWhereWithoutPlaceInput, TimelineItemUpdateWithoutPlaceInput>, TimelineItemUncheckedUpdateWithoutPlaceInput>
  }

  export type TripCreateNestedOneWithoutTimelineInput = {
    create?: XOR<TripCreateWithoutTimelineInput, TripUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: TripCreateOrConnectWithoutTimelineInput
    connect?: TripWhereUniqueInput
  }

  export type TimelineItemCreateNestedManyWithoutTimelineInput = {
    create?: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput> | TimelineItemCreateWithoutTimelineInput[] | TimelineItemUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineItemCreateOrConnectWithoutTimelineInput | TimelineItemCreateOrConnectWithoutTimelineInput[]
    createMany?: TimelineItemCreateManyTimelineInputEnvelope
    connect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
  }

  export type TimelineItemUncheckedCreateNestedManyWithoutTimelineInput = {
    create?: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput> | TimelineItemCreateWithoutTimelineInput[] | TimelineItemUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineItemCreateOrConnectWithoutTimelineInput | TimelineItemCreateOrConnectWithoutTimelineInput[]
    createMany?: TimelineItemCreateManyTimelineInputEnvelope
    connect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<TripCreateWithoutTimelineInput, TripUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: TripCreateOrConnectWithoutTimelineInput
    upsert?: TripUpsertWithoutTimelineInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTimelineInput, TripUpdateWithoutTimelineInput>, TripUncheckedUpdateWithoutTimelineInput>
  }

  export type TimelineItemUpdateManyWithoutTimelineNestedInput = {
    create?: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput> | TimelineItemCreateWithoutTimelineInput[] | TimelineItemUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineItemCreateOrConnectWithoutTimelineInput | TimelineItemCreateOrConnectWithoutTimelineInput[]
    upsert?: TimelineItemUpsertWithWhereUniqueWithoutTimelineInput | TimelineItemUpsertWithWhereUniqueWithoutTimelineInput[]
    createMany?: TimelineItemCreateManyTimelineInputEnvelope
    set?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    disconnect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    delete?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    connect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    update?: TimelineItemUpdateWithWhereUniqueWithoutTimelineInput | TimelineItemUpdateWithWhereUniqueWithoutTimelineInput[]
    updateMany?: TimelineItemUpdateManyWithWhereWithoutTimelineInput | TimelineItemUpdateManyWithWhereWithoutTimelineInput[]
    deleteMany?: TimelineItemScalarWhereInput | TimelineItemScalarWhereInput[]
  }

  export type TimelineItemUncheckedUpdateManyWithoutTimelineNestedInput = {
    create?: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput> | TimelineItemCreateWithoutTimelineInput[] | TimelineItemUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineItemCreateOrConnectWithoutTimelineInput | TimelineItemCreateOrConnectWithoutTimelineInput[]
    upsert?: TimelineItemUpsertWithWhereUniqueWithoutTimelineInput | TimelineItemUpsertWithWhereUniqueWithoutTimelineInput[]
    createMany?: TimelineItemCreateManyTimelineInputEnvelope
    set?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    disconnect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    delete?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    connect?: TimelineItemWhereUniqueInput | TimelineItemWhereUniqueInput[]
    update?: TimelineItemUpdateWithWhereUniqueWithoutTimelineInput | TimelineItemUpdateWithWhereUniqueWithoutTimelineInput[]
    updateMany?: TimelineItemUpdateManyWithWhereWithoutTimelineInput | TimelineItemUpdateManyWithWhereWithoutTimelineInput[]
    deleteMany?: TimelineItemScalarWhereInput | TimelineItemScalarWhereInput[]
  }

  export type TimelineCreateNestedOneWithoutTimelineItemInput = {
    create?: XOR<TimelineCreateWithoutTimelineItemInput, TimelineUncheckedCreateWithoutTimelineItemInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTimelineItemInput
    connect?: TimelineWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutTimelineItemInput = {
    create?: XOR<PlaceCreateWithoutTimelineItemInput, PlaceUncheckedCreateWithoutTimelineItemInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutTimelineItemInput
    connect?: PlaceWhereUniqueInput
  }

  export type TimelineUpdateOneRequiredWithoutTimelineItemNestedInput = {
    create?: XOR<TimelineCreateWithoutTimelineItemInput, TimelineUncheckedCreateWithoutTimelineItemInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutTimelineItemInput
    upsert?: TimelineUpsertWithoutTimelineItemInput
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutTimelineItemInput, TimelineUpdateWithoutTimelineItemInput>, TimelineUncheckedUpdateWithoutTimelineItemInput>
  }

  export type PlaceUpdateOneWithoutTimelineItemNestedInput = {
    create?: XOR<PlaceCreateWithoutTimelineItemInput, PlaceUncheckedCreateWithoutTimelineItemInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutTimelineItemInput
    upsert?: PlaceUpsertWithoutTimelineItemInput
    disconnect?: PlaceWhereInput | boolean
    delete?: PlaceWhereInput | boolean
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutTimelineItemInput, PlaceUpdateWithoutTimelineItemInput>, PlaceUncheckedUpdateWithoutTimelineItemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedEnumTripTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TripType | EnumTripTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TripType[]
    notIn?: $Enums.TripType[]
    not?: NestedEnumTripTypeFilter<$PrismaModel> | $Enums.TripType
  }

  export type NestedEnumTripTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripType | EnumTripTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TripType[]
    notIn?: $Enums.TripType[]
    not?: NestedEnumTripTypeWithAggregatesFilter<$PrismaModel> | $Enums.TripType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripTypeFilter<$PrismaModel>
    _max?: NestedEnumTripTypeFilter<$PrismaModel>
  }

  export type NestedEnumTripPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.TripPermission | EnumTripPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.TripPermission[]
    notIn?: $Enums.TripPermission[]
    not?: NestedEnumTripPermissionFilter<$PrismaModel> | $Enums.TripPermission
  }

  export type NestedEnumTripPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripPermission | EnumTripPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.TripPermission[]
    notIn?: $Enums.TripPermission[]
    not?: NestedEnumTripPermissionWithAggregatesFilter<$PrismaModel> | $Enums.TripPermission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripPermissionFilter<$PrismaModel>
    _max?: NestedEnumTripPermissionFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersTripsCreateWithoutUserInput = {
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    trip: TripCreateNestedOneWithoutUsersInput
  }

  export type UsersTripsUncheckedCreateWithoutUserInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    tripId: number
  }

  export type UsersTripsCreateOrConnectWithoutUserInput = {
    where: UsersTripsWhereUniqueInput
    create: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput>
  }

  export type UsersTripsCreateManyUserInputEnvelope = {
    data: UsersTripsCreateManyUserInput | UsersTripsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutCreatorInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCreatorInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type TripCreateManyCreatorInputEnvelope = {
    data: TripCreateManyCreatorInput | TripCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersTripsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersTripsWhereUniqueInput
    update: XOR<UsersTripsUpdateWithoutUserInput, UsersTripsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersTripsCreateWithoutUserInput, UsersTripsUncheckedCreateWithoutUserInput>
  }

  export type UsersTripsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersTripsWhereUniqueInput
    data: XOR<UsersTripsUpdateWithoutUserInput, UsersTripsUncheckedUpdateWithoutUserInput>
  }

  export type UsersTripsUpdateManyWithWhereWithoutUserInput = {
    where: UsersTripsScalarWhereInput
    data: XOR<UsersTripsUpdateManyMutationInput, UsersTripsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersTripsScalarWhereInput = {
    AND?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
    OR?: UsersTripsScalarWhereInput[]
    NOT?: UsersTripsScalarWhereInput | UsersTripsScalarWhereInput[]
    id?: IntFilter<"UsersTrips"> | number
    accepted?: BoolFilter<"UsersTrips"> | boolean
    createdAt?: DateTimeFilter<"UsersTrips"> | Date | string
    updatedAt?: DateTimeFilter<"UsersTrips"> | Date | string
    permission?: EnumTripPermissionFilter<"UsersTrips"> | $Enums.TripPermission
    userId?: IntFilter<"UsersTrips"> | number
    tripId?: IntFilter<"UsersTrips"> | number
  }

  export type TripUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type TripUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
  }

  export type TripUpdateManyWithWhereWithoutCreatorInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    name?: StringFilter<"Trip"> | string
    description?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    type?: EnumTripTypeFilter<"Trip"> | $Enums.TripType
    public?: BoolFilter<"Trip"> | boolean
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    creatorId?: IntFilter<"Trip"> | number
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    title?: StringFilter<"Review"> | string
    body?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    tripId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersTripsCreateWithoutTripInput = {
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type UsersTripsUncheckedCreateWithoutTripInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    userId: number
  }

  export type UsersTripsCreateOrConnectWithoutTripInput = {
    where: UsersTripsWhereUniqueInput
    create: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput>
  }

  export type UsersTripsCreateManyTripInputEnvelope = {
    data: UsersTripsCreateManyTripInput | UsersTripsCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedTripsInput = {
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTripsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
  }

  export type ReviewCreateWithoutTripInput = {
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutTripInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ReviewCreateOrConnectWithoutTripInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput>
  }

  export type ReviewCreateManyTripInputEnvelope = {
    data: ReviewCreateManyTripInput | ReviewCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type ItinenaryCreateWithoutTripInput = {
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    place?: PlaceCreateNestedOneWithoutItinenaryInput
  }

  export type ItinenaryUncheckedCreateWithoutTripInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: number | null
  }

  export type ItinenaryCreateOrConnectWithoutTripInput = {
    where: ItinenaryWhereUniqueInput
    create: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput>
  }

  export type ItinenaryCreateManyTripInputEnvelope = {
    data: ItinenaryCreateManyTripInput | ItinenaryCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type PlaceCreateWithoutTripInput = {
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Itinenary?: ItinenaryCreateNestedManyWithoutPlaceInput
    TimelineItem?: TimelineItemCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutTripInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutPlaceInput
    TimelineItem?: TimelineItemUncheckedCreateNestedOneWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutTripInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput>
  }

  export type PlaceCreateManyTripInputEnvelope = {
    data: PlaceCreateManyTripInput | PlaceCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TimelineCreateWithoutTripInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TimelineItem?: TimelineItemCreateNestedManyWithoutTimelineInput
  }

  export type TimelineUncheckedCreateWithoutTripInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TimelineItem?: TimelineItemUncheckedCreateNestedManyWithoutTimelineInput
  }

  export type TimelineCreateOrConnectWithoutTripInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
  }

  export type UsersTripsUpsertWithWhereUniqueWithoutTripInput = {
    where: UsersTripsWhereUniqueInput
    update: XOR<UsersTripsUpdateWithoutTripInput, UsersTripsUncheckedUpdateWithoutTripInput>
    create: XOR<UsersTripsCreateWithoutTripInput, UsersTripsUncheckedCreateWithoutTripInput>
  }

  export type UsersTripsUpdateWithWhereUniqueWithoutTripInput = {
    where: UsersTripsWhereUniqueInput
    data: XOR<UsersTripsUpdateWithoutTripInput, UsersTripsUncheckedUpdateWithoutTripInput>
  }

  export type UsersTripsUpdateManyWithWhereWithoutTripInput = {
    where: UsersTripsScalarWhereInput
    data: XOR<UsersTripsUpdateManyMutationInput, UsersTripsUncheckedUpdateManyWithoutTripInput>
  }

  export type UserUpsertWithoutCreatedTripsInput = {
    update: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type UserUpdateWithoutCreatedTripsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutTripInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTripInput, ReviewUncheckedUpdateWithoutTripInput>
    create: XOR<ReviewCreateWithoutTripInput, ReviewUncheckedCreateWithoutTripInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTripInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTripInput, ReviewUncheckedUpdateWithoutTripInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTripInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTripInput>
  }

  export type ItinenaryUpsertWithWhereUniqueWithoutTripInput = {
    where: ItinenaryWhereUniqueInput
    update: XOR<ItinenaryUpdateWithoutTripInput, ItinenaryUncheckedUpdateWithoutTripInput>
    create: XOR<ItinenaryCreateWithoutTripInput, ItinenaryUncheckedCreateWithoutTripInput>
  }

  export type ItinenaryUpdateWithWhereUniqueWithoutTripInput = {
    where: ItinenaryWhereUniqueInput
    data: XOR<ItinenaryUpdateWithoutTripInput, ItinenaryUncheckedUpdateWithoutTripInput>
  }

  export type ItinenaryUpdateManyWithWhereWithoutTripInput = {
    where: ItinenaryScalarWhereInput
    data: XOR<ItinenaryUpdateManyMutationInput, ItinenaryUncheckedUpdateManyWithoutTripInput>
  }

  export type ItinenaryScalarWhereInput = {
    AND?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
    OR?: ItinenaryScalarWhereInput[]
    NOT?: ItinenaryScalarWhereInput | ItinenaryScalarWhereInput[]
    id?: IntFilter<"Itinenary"> | number
    name?: StringFilter<"Itinenary"> | string
    text?: StringFilter<"Itinenary"> | string
    createdAt?: DateTimeFilter<"Itinenary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinenary"> | Date | string
    tripId?: IntFilter<"Itinenary"> | number
    placeId?: IntNullableFilter<"Itinenary"> | number | null
  }

  export type PlaceUpsertWithWhereUniqueWithoutTripInput = {
    where: PlaceWhereUniqueInput
    update: XOR<PlaceUpdateWithoutTripInput, PlaceUncheckedUpdateWithoutTripInput>
    create: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput>
  }

  export type PlaceUpdateWithWhereUniqueWithoutTripInput = {
    where: PlaceWhereUniqueInput
    data: XOR<PlaceUpdateWithoutTripInput, PlaceUncheckedUpdateWithoutTripInput>
  }

  export type PlaceUpdateManyWithWhereWithoutTripInput = {
    where: PlaceScalarWhereInput
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyWithoutTripInput>
  }

  export type PlaceScalarWhereInput = {
    AND?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    OR?: PlaceScalarWhereInput[]
    NOT?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    id?: IntFilter<"Place"> | number
    name?: StringFilter<"Place"> | string
    description?: StringFilter<"Place"> | string
    coordinates?: StringFilter<"Place"> | string
    order?: IntFilter<"Place"> | number
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    tripId?: IntFilter<"Place"> | number
  }

  export type TimelineUpsertWithoutTripInput = {
    update: XOR<TimelineUpdateWithoutTripInput, TimelineUncheckedUpdateWithoutTripInput>
    create: XOR<TimelineCreateWithoutTripInput, TimelineUncheckedCreateWithoutTripInput>
    where?: TimelineWhereInput
  }

  export type TimelineUpdateToOneWithWhereWithoutTripInput = {
    where?: TimelineWhereInput
    data: XOR<TimelineUpdateWithoutTripInput, TimelineUncheckedUpdateWithoutTripInput>
  }

  export type TimelineUpdateWithoutTripInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TimelineItem?: TimelineItemUpdateManyWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TimelineItem?: TimelineItemUncheckedUpdateManyWithoutTimelineNestedInput
  }

  export type UserCreateWithoutTripsInput = {
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type TripCreateWithoutUsersInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUsersInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUsersInput, TripUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutUsersInput = {
    update: XOR<TripUpdateWithoutUsersInput, TripUncheckedUpdateWithoutUsersInput>
    create: XOR<TripCreateWithoutUsersInput, TripUncheckedCreateWithoutUsersInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutUsersInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutUsersInput, TripUncheckedUpdateWithoutUsersInput>
  }

  export type TripUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripCreateWithoutReviewInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutReviewInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutReviewInput, TripUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewInput = {
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    activated?: boolean
    verifyToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: UsersTripsUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type TripUpsertWithoutReviewInput = {
    update: XOR<TripUpdateWithoutReviewInput, TripUncheckedUpdateWithoutReviewInput>
    create: XOR<TripCreateWithoutReviewInput, TripUncheckedCreateWithoutReviewInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutReviewInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutReviewInput, TripUncheckedUpdateWithoutReviewInput>
  }

  export type TripUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: UsersTripsUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TripCreateWithoutItinenaryInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutItinenaryInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutItinenaryInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutItinenaryInput, TripUncheckedCreateWithoutItinenaryInput>
  }

  export type PlaceCreateWithoutItinenaryInput = {
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPlaceInput
    TimelineItem?: TimelineItemCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutItinenaryInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    TimelineItem?: TimelineItemUncheckedCreateNestedOneWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutItinenaryInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutItinenaryInput, PlaceUncheckedCreateWithoutItinenaryInput>
  }

  export type TripUpsertWithoutItinenaryInput = {
    update: XOR<TripUpdateWithoutItinenaryInput, TripUncheckedUpdateWithoutItinenaryInput>
    create: XOR<TripCreateWithoutItinenaryInput, TripUncheckedCreateWithoutItinenaryInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutItinenaryInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutItinenaryInput, TripUncheckedUpdateWithoutItinenaryInput>
  }

  export type TripUpdateWithoutItinenaryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutItinenaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type PlaceUpsertWithoutItinenaryInput = {
    update: XOR<PlaceUpdateWithoutItinenaryInput, PlaceUncheckedUpdateWithoutItinenaryInput>
    create: XOR<PlaceCreateWithoutItinenaryInput, PlaceUncheckedCreateWithoutItinenaryInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutItinenaryInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutItinenaryInput, PlaceUncheckedUpdateWithoutItinenaryInput>
  }

  export type PlaceUpdateWithoutItinenaryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPlaceNestedInput
    TimelineItem?: TimelineItemUpdateOneWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutItinenaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    TimelineItem?: TimelineItemUncheckedUpdateOneWithoutPlaceNestedInput
  }

  export type TripCreateWithoutPlaceInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Timeline?: TimelineCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPlaceInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Timeline?: TimelineUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPlaceInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPlaceInput, TripUncheckedCreateWithoutPlaceInput>
  }

  export type ItinenaryCreateWithoutPlaceInput = {
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutItinenaryInput
  }

  export type ItinenaryUncheckedCreateWithoutPlaceInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type ItinenaryCreateOrConnectWithoutPlaceInput = {
    where: ItinenaryWhereUniqueInput
    create: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput>
  }

  export type ItinenaryCreateManyPlaceInputEnvelope = {
    data: ItinenaryCreateManyPlaceInput | ItinenaryCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type TimelineItemCreateWithoutPlaceInput = {
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline: TimelineCreateNestedOneWithoutTimelineItemInput
  }

  export type TimelineItemUncheckedCreateWithoutPlaceInput = {
    id?: number
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineId: number
  }

  export type TimelineItemCreateOrConnectWithoutPlaceInput = {
    where: TimelineItemWhereUniqueInput
    create: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
  }

  export type TripUpsertWithoutPlaceInput = {
    update: XOR<TripUpdateWithoutPlaceInput, TripUncheckedUpdateWithoutPlaceInput>
    create: XOR<TripCreateWithoutPlaceInput, TripUncheckedCreateWithoutPlaceInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPlaceInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPlaceInput, TripUncheckedUpdateWithoutPlaceInput>
  }

  export type TripUpdateWithoutPlaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type ItinenaryUpsertWithWhereUniqueWithoutPlaceInput = {
    where: ItinenaryWhereUniqueInput
    update: XOR<ItinenaryUpdateWithoutPlaceInput, ItinenaryUncheckedUpdateWithoutPlaceInput>
    create: XOR<ItinenaryCreateWithoutPlaceInput, ItinenaryUncheckedCreateWithoutPlaceInput>
  }

  export type ItinenaryUpdateWithWhereUniqueWithoutPlaceInput = {
    where: ItinenaryWhereUniqueInput
    data: XOR<ItinenaryUpdateWithoutPlaceInput, ItinenaryUncheckedUpdateWithoutPlaceInput>
  }

  export type ItinenaryUpdateManyWithWhereWithoutPlaceInput = {
    where: ItinenaryScalarWhereInput
    data: XOR<ItinenaryUpdateManyMutationInput, ItinenaryUncheckedUpdateManyWithoutPlaceInput>
  }

  export type TimelineItemUpsertWithoutPlaceInput = {
    update: XOR<TimelineItemUpdateWithoutPlaceInput, TimelineItemUncheckedUpdateWithoutPlaceInput>
    create: XOR<TimelineItemCreateWithoutPlaceInput, TimelineItemUncheckedCreateWithoutPlaceInput>
    where?: TimelineItemWhereInput
  }

  export type TimelineItemUpdateToOneWithWhereWithoutPlaceInput = {
    where?: TimelineItemWhereInput
    data: XOR<TimelineItemUpdateWithoutPlaceInput, TimelineItemUncheckedUpdateWithoutPlaceInput>
  }

  export type TimelineItemUpdateWithoutPlaceInput = {
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUpdateOneRequiredWithoutTimelineItemNestedInput
  }

  export type TimelineItemUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineId?: IntFieldUpdateOperationsInput | number
  }

  export type TripCreateWithoutTimelineInput = {
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersTripsCreateNestedManyWithoutTripInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    Review?: ReviewCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryCreateNestedManyWithoutTripInput
    Place?: PlaceCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTimelineInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: number
    users?: UsersTripsUncheckedCreateNestedManyWithoutTripInput
    Review?: ReviewUncheckedCreateNestedManyWithoutTripInput
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutTripInput
    Place?: PlaceUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTimelineInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTimelineInput, TripUncheckedCreateWithoutTimelineInput>
  }

  export type TimelineItemCreateWithoutTimelineInput = {
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    place?: PlaceCreateNestedOneWithoutTimelineItemInput
  }

  export type TimelineItemUncheckedCreateWithoutTimelineInput = {
    id?: number
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: number | null
  }

  export type TimelineItemCreateOrConnectWithoutTimelineInput = {
    where: TimelineItemWhereUniqueInput
    create: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput>
  }

  export type TimelineItemCreateManyTimelineInputEnvelope = {
    data: TimelineItemCreateManyTimelineInput | TimelineItemCreateManyTimelineInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutTimelineInput = {
    update: XOR<TripUpdateWithoutTimelineInput, TripUncheckedUpdateWithoutTimelineInput>
    create: XOR<TripCreateWithoutTimelineInput, TripUncheckedCreateWithoutTimelineInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTimelineInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTimelineInput, TripUncheckedUpdateWithoutTimelineInput>
  }

  export type TripUpdateWithoutTimelineInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTimelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TimelineItemUpsertWithWhereUniqueWithoutTimelineInput = {
    where: TimelineItemWhereUniqueInput
    update: XOR<TimelineItemUpdateWithoutTimelineInput, TimelineItemUncheckedUpdateWithoutTimelineInput>
    create: XOR<TimelineItemCreateWithoutTimelineInput, TimelineItemUncheckedCreateWithoutTimelineInput>
  }

  export type TimelineItemUpdateWithWhereUniqueWithoutTimelineInput = {
    where: TimelineItemWhereUniqueInput
    data: XOR<TimelineItemUpdateWithoutTimelineInput, TimelineItemUncheckedUpdateWithoutTimelineInput>
  }

  export type TimelineItemUpdateManyWithWhereWithoutTimelineInput = {
    where: TimelineItemScalarWhereInput
    data: XOR<TimelineItemUpdateManyMutationInput, TimelineItemUncheckedUpdateManyWithoutTimelineInput>
  }

  export type TimelineItemScalarWhereInput = {
    AND?: TimelineItemScalarWhereInput | TimelineItemScalarWhereInput[]
    OR?: TimelineItemScalarWhereInput[]
    NOT?: TimelineItemScalarWhereInput | TimelineItemScalarWhereInput[]
    id?: IntFilter<"TimelineItem"> | number
    dateFrom?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    dateTo?: DateTimeNullableFilter<"TimelineItem"> | Date | string | null
    order?: IntFilter<"TimelineItem"> | number
    createdAt?: DateTimeFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineItem"> | Date | string
    timelineId?: IntFilter<"TimelineItem"> | number
    placeId?: IntNullableFilter<"TimelineItem"> | number | null
  }

  export type TimelineCreateWithoutTimelineItemInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutTimelineInput
  }

  export type TimelineUncheckedCreateWithoutTimelineItemInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type TimelineCreateOrConnectWithoutTimelineItemInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutTimelineItemInput, TimelineUncheckedCreateWithoutTimelineItemInput>
  }

  export type PlaceCreateWithoutTimelineItemInput = {
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPlaceInput
    Itinenary?: ItinenaryCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutTimelineItemInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
    Itinenary?: ItinenaryUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutTimelineItemInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutTimelineItemInput, PlaceUncheckedCreateWithoutTimelineItemInput>
  }

  export type TimelineUpsertWithoutTimelineItemInput = {
    update: XOR<TimelineUpdateWithoutTimelineItemInput, TimelineUncheckedUpdateWithoutTimelineItemInput>
    create: XOR<TimelineCreateWithoutTimelineItemInput, TimelineUncheckedCreateWithoutTimelineItemInput>
    where?: TimelineWhereInput
  }

  export type TimelineUpdateToOneWithWhereWithoutTimelineItemInput = {
    where?: TimelineWhereInput
    data: XOR<TimelineUpdateWithoutTimelineItemInput, TimelineUncheckedUpdateWithoutTimelineItemInput>
  }

  export type TimelineUpdateWithoutTimelineItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateWithoutTimelineItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaceUpsertWithoutTimelineItemInput = {
    update: XOR<PlaceUpdateWithoutTimelineItemInput, PlaceUncheckedUpdateWithoutTimelineItemInput>
    create: XOR<PlaceCreateWithoutTimelineItemInput, PlaceUncheckedCreateWithoutTimelineItemInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutTimelineItemInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutTimelineItemInput, PlaceUncheckedUpdateWithoutTimelineItemInput>
  }

  export type PlaceUpdateWithoutTimelineItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPlaceNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutTimelineItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type UsersTripsCreateManyUserInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    tripId: number
  }

  export type TripCreateManyCreatorInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    type: $Enums.TripType
    public?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type UsersTripsUpdateWithoutUserInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    trip?: TripUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersTripsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTripsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type TripUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUpdateManyWithoutTripNestedInput
    Review?: ReviewUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUpdateManyWithoutTripNestedInput
    Place?: PlaceUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTripsUncheckedUpdateManyWithoutTripNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutTripNestedInput
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutTripNestedInput
    Place?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    Timeline?: TimelineUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumTripTypeFieldUpdateOperationsInput | $Enums.TripType
    public?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTripsCreateManyTripInput = {
    id?: number
    accepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: $Enums.TripPermission
    userId: number
  }

  export type ReviewCreateManyTripInput = {
    id?: number
    title: string
    body: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ItinenaryCreateManyTripInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: number | null
  }

  export type PlaceCreateManyTripInput = {
    id?: number
    name: string
    description: string
    coordinates: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersTripsUpdateWithoutTripInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type UsersTripsUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersTripsUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumTripPermissionFieldUpdateOperationsInput | $Enums.TripPermission
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutTripInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ItinenaryUpdateWithoutTripInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneWithoutItinenaryNestedInput
  }

  export type ItinenaryUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItinenaryUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaceUpdateWithoutTripInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Itinenary?: ItinenaryUpdateManyWithoutPlaceNestedInput
    TimelineItem?: TimelineItemUpdateOneWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Itinenary?: ItinenaryUncheckedUpdateManyWithoutPlaceNestedInput
    TimelineItem?: TimelineItemUncheckedUpdateOneWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinenaryCreateManyPlaceInput = {
    id?: number
    name: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: number
  }

  export type ItinenaryUpdateWithoutPlaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutItinenaryNestedInput
  }

  export type ItinenaryUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type ItinenaryUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineItemCreateManyTimelineInput = {
    id?: number
    dateFrom?: Date | string | null
    dateTo?: Date | string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: number | null
  }

  export type TimelineItemUpdateWithoutTimelineInput = {
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneWithoutTimelineItemNestedInput
  }

  export type TimelineItemUncheckedUpdateWithoutTimelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimelineItemUncheckedUpdateManyWithoutTimelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripCountOutputTypeDefaultArgs instead
     */
    export type TripCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaceCountOutputTypeDefaultArgs instead
     */
    export type PlaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineCountOutputTypeDefaultArgs instead
     */
    export type TimelineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemLogDefaultArgs instead
     */
    export type SystemLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MigrationsDefaultArgs instead
     */
    export type MigrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MigrationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripDefaultArgs instead
     */
    export type TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersTripsDefaultArgs instead
     */
    export type UsersTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersTripsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItinenaryDefaultArgs instead
     */
    export type ItinenaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItinenaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaceDefaultArgs instead
     */
    export type PlaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineDefaultArgs instead
     */
    export type TimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineItemDefaultArgs instead
     */
    export type TimelineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineItemDefaultArgs<ExtArgs>

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