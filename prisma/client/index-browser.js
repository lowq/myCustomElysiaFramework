
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SystemLogScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  message: 'message',
  type: 'type'
};

exports.Prisma.JobScalarFieldEnum = {
  id: 'id',
  name: 'name',
  lastExecuted: 'lastExecuted'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TripScalarFieldEnum = {
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

exports.Prisma.UsersTripsScalarFieldEnum = {
  id: 'id',
  accepted: 'accepted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  permission: 'permission',
  userId: 'userId',
  tripId: 'tripId'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  title: 'title',
  body: 'body',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tripId: 'tripId',
  userId: 'userId'
};

exports.Prisma.ItinenaryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  text: 'text',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tripId: 'tripId',
  placeId: 'placeId'
};

exports.Prisma.PlaceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  coordinates: 'coordinates',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tripId: 'tripId'
};

exports.Prisma.TimelineScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tripId: 'tripId'
};

exports.Prisma.TimelineItemScalarFieldEnum = {
  id: 'id',
  dateFrom: 'dateFrom',
  dateTo: 'dateTo',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timelineId: 'timelineId',
  placeId: 'placeId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TripType = exports.$Enums.TripType = {
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

exports.TripPermission = exports.$Enums.TripPermission = {
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
