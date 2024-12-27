import { PrismaClient } from "../../../prisma/client";
import Events from "../Events";

const prismaClient = new PrismaClient().$extends({
  query: {
    async $allOperations({ model, operation, args, query }) {
      const result = await query(args); // Execute the operation

      // Fire an event only for create operations
      const eventName = `${model}.${operation}`;
      Events.fire(eventName, result);

      return result;
    },
  },
});

export default prismaClient;
