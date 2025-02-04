import { t } from "elysia";

export const userCreateValidation = {
  body: t.Object({
    name: t.String(),
    surname: t.String(),
    email: t.String({
      format: "email",
      error: "Invalid email :(",
    }),
    password: t.String({
      minLength: 6,
      maxLength: 255,
    }),
  }),
};

export const userLoginValidation = {
  body: t.Object({
    email: t.String({
      format: "email",
      error: "Invalid email :(",
    }),
    password: t.String({
      minLength: 6,
      maxLength: 255,
    }),
  }),
};

export const userPasswordChange = {
  body: t.Object({
    oldPassword: t.String({
      minLength: 6,
      maxLength: 255,
    }),
    newPassword: t.String({
      minLength: 6,
      maxLength: 255,
    }),
  }),
  query: t.Object({
    userId: t.Numeric(),
  }),
};

export const googleCallback = {
  query: t.Object({
    token: t.String(),
  }),
};

export const userVerifyEmail = {
  query: t.Object({
    verifyToken: t.String(),
  }),
};