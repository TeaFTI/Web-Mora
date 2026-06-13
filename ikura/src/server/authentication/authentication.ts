import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import * as session from "~/_drizzle/database/session.server";
import * as user from "~/_drizzle/database/user.server";
import { generateSalt, hashPassword } from "./password";
import { registerSchema } from "./schema";
import { readSessionToken, setSessionCookie } from "./session";

const SESSION_TTL_MS = 1000 * 60 * 60 * 24; // 1 Day

const registerFn = createServerFn({ method: "POST" })
  .validator(registerSchema)
  .handler(async ({ data }) => {
    const retrieveUser = await user.retrieveByEmail({ email: data.email });
    if (retrieveUser) {
      return { error: "User Already Exist." as const };
    }

    const userSalt = generateSalt();
    const userData = {
      username: data.username,
      password: await hashPassword(data.password, userSalt),
      email: data.email,
      salt: userSalt,
    }
    // console.debug("User Data: ", userData);

    const createUser = await user.create({ data: userData });
    // console.debug("Create User: ", createUser);

    const sessionData = {
      userId: createUser.id,
      token: crypto.randomUUID(),
      expiration: new Date(Date.now() + SESSION_TTL_MS),
    }

    const createSession = await session.create({ data: sessionData });
    setSessionCookie(createSession.token);
    throw redirect({ to: "/main" })
  });

const getCurrentUserFn = createServerFn({ method: "GET" })
  .handler(async () => {
    const sessionToken = readSessionToken();
    if (!sessionToken) return null;

    const sessionUser = await session.retrieveByToken({
      token: sessionToken,
      expand: true,
    });

    return sessionUser || null;
  });

export {
  getCurrentUserFn,
  registerFn
};
