import Elysia from "elysia";
import {
    googleCallback,
  userCreateValidation,
  userLoginValidation,
  userPasswordChange,
  userVerifyEmail,
} from "./validations/user.validation";
import userController from "./controllers/user.controller";
import { authenticate } from "./middlewares/authenticate";
import bearer from "@elysiajs/bearer";

export const routes = new Elysia()
  .post(
    "/signup",
    ({ body }) => {
      return userController.signUp(body);
    },
    {
      ...userCreateValidation,
      detail: {
        tags: ["User"],
        summary: "Create a new user.",
      },
    }
  )
  .post(
    "/login",
    ({ body }) => {
      return userController.login(body.email, body.password);
    },
    {
      ...userLoginValidation,
      detail: {
        tags: ["User"],
        summary: "Login a user.",
        description: "Login a user with email and password.",
      },
    }
  )
  .get(
    "/google",
    async ({ query }) => {
      return userController.googleCallback(query.token);
    },
    {
      ...googleCallback,
      detail: {
        tags: ["User"],
        summary: "Google auth callback",
        description: "Google auth callback",
      },
    }
  )
  .get("/verify-email", ({ query }) => { return userController.activateUser(query.verifyToken); },
    {
      ...userVerifyEmail,
      detail: {
        tags: ["User"],
        summary: "Activate user",
        description: "Activate user with verify code",}})
  .guard((app) =>
    app
      .use(bearer())
      .onBeforeHandle(({ bearer }) => authenticate(bearer))
      .put(
        "/password",
        ({ body, query }) => {
          return userController.changeUserPassword(
            query.userId,
            body.oldPassword,
            body.newPassword
          );
        },
        {
          ...userPasswordChange,
          detail: { tags: ["User"], summary: "Change user password." },
        }
      )
      .get("/info", ({bearer}) => {
        return userController.userInfo(bearer!);
      },
      {
        detail: { tags: ["User"], summary: "Get user info." },
      })
  );
