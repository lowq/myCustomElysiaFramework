
import prismaClient from "../../../base/config/prismaClient";
import { JWT } from "./jwt";

export const userFromBearer = async (bearer: string) => {
  try {
    const token = JWT.verify(bearer ?? "");
    const userId = token!.sub ? +token!.sub : 0;

    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        activated: true,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
