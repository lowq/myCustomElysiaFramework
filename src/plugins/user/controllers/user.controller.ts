import { OAuth2Client } from "google-auth-library";
import prismaClient from "../../../base/config/prismaClient";
import { AUTHENTICATE_ERROR } from "../errors/AUTHENTICATE_ERROR";
import { JWT } from "../utils/jwt";
import { UserForCreate } from "../types/user.types";
import { Mailer } from "../../../base/Mailer";
import { NewAccountMail } from "../mails/newAccount";
import bearer from '@elysiajs/bearer';
import { userFromBearer } from "../utils/userFromBearer";

export class User {
  async signUp(user: UserForCreate) {
    try {
      const createdUser = await prismaClient.user.create({
        data: {
          email: user.email,
          name: user.name,
          surname: user.surname,
          password: Bun.password.hashSync(user.password),
        },
      });

      if (createdUser) {
        const verifyToken = crypto.randomUUID();
        await prismaClient.user.update({
          where: {
            id: createdUser.id,
          },
          data: {
            verifyToken: verifyToken,
          },
        });
        Mailer.sendMail(
          user.email,
          "Welcome to our platform",
          "Welcome",
          NewAccountMail({
            username: user.name,
            surname: user.surname,
            verifyToken,
          })
        );
        return true;
      };

    } catch (error) {
      throw new AUTHENTICATE_ERROR("User not created", error);
    }
  }

  async login(email: string, password: string) {
    try {
      const loginUser = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });
      if (!loginUser) {
        throw new AUTHENTICATE_ERROR("User not found", []);
      } else {
        if (Bun.password.verifySync(password, loginUser.password)) {
          const token = JWT.sign(loginUser.id);
          const { password, ...user } = loginUser;
          return { user: user, token: token };
        } else {
          throw new AUTHENTICATE_ERROR("Wrong password", []);
        }
      }
    } catch (error) {
      throw new AUTHENTICATE_ERROR("User not found", error);
    }
  }

  async changeUserPassword(
    userId: number,
    oldPassword: string,
    newPassword: string
  ) {
    try {
      await prismaClient.user.update({
        where: {
          id: userId,
          password: Bun.password.hashSync(oldPassword),
        },
        data: {
          password: Bun.password.hashSync(newPassword),
        },
      });
      return true;
    } catch (error) {
      throw new AUTHENTICATE_ERROR("Wrong old password", error);
    }
  }

  googleCallback = async (clientToken: string) => {
    try {
      const randomPassword = Math.random().toString(36).slice(-10);

      const oauth2Client = new OAuth2Client(
        Bun.env.GOOGLE_CLIENT_ID,
        Bun.env.GOOGLE_CLIENT_SECRET
      );

      const ticket = await oauth2Client.verifyIdToken({
        idToken: clientToken,
        audience: Bun.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      if (!payload) {
        throw new AUTHENTICATE_ERROR("Google user not found", "");
      }

      let user = await prismaClient.user.findFirst({
        where: {
          email: payload.email
        },
      });
      if (!user) {
        user = await prismaClient.user.create({
          data: {
            email: payload.email!,
            name: payload.given_name!,
            surname: payload.family_name!,
            password: Bun.password.hashSync(randomPassword),
            activated: true,
          },
        });
      } 

      await prismaClient.user.update({
        where: {
          id: user.id,
        },
        data: {
          activated: true,
        },
      });

      const token = JWT.sign(user.id);
      const { password, ...userWithoutPassword } = user;
      return { user: userWithoutPassword, token: token };
    } catch (error: any) {
      throw new AUTHENTICATE_ERROR("Google auth error", error);
    }
  };

  activateUser = async (verifyToken: string) => {
    try {
      await prismaClient.user.update({
        where: {
          verifyToken,
        },
        data: {
          activated: true,
        },
      });
      return true;
    } catch (error) {
      throw new AUTHENTICATE_ERROR("User not activated", error);
    }
  }

  userInfo = async (bearer: string) => {
    try {
      const user = await userFromBearer(bearer);

      if(!user) {
        throw new AUTHENTICATE_ERROR("User not found", "");
      }
      
      return {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        activated: user.activated,
      };
    } catch (error) {
      throw new AUTHENTICATE_ERROR("User not found", error);
    }
  }
}

export default new User();
