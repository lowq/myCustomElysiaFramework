import prismaClient from "../../../base/config/prismaClient";
import { AUTHENTICATE_ERROR } from "../errors/AUTHENTICATE_ERROR";
import { JWT } from "../utils/jwt";

export const authenticate = async (bearer?: string) => {
  if (!bearer) {
    throw new AUTHENTICATE_ERROR("Not provided token", {
      access_token_invalid: true,
    });
  }
  const token = JWT.verify(bearer);
  if (!token) {
    throw new AUTHENTICATE_ERROR("Unauthorized", {
      access_token_invalid: true,
    });
  }
  const id = token.sub ? +token.sub : 0;

  const user = await prismaClient.user.findFirst({
    where: {
      id: id,
    },
  });


  if (!user) {
    throw new AUTHENTICATE_ERROR("Unauthorized", "User not found in database");
  }
};
