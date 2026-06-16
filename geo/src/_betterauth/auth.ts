import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import drizzleClient from "../_drizzle/client";

export const auth = betterAuth({
  // Database
  database: drizzleAdapter(drizzleClient, {
    provider: "pg",
  }),
  // Schema
  user: {
    modelName: "betterauth_user",
  },
  session: {
    modelName: "betterauth_session",
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 Minute
    }
  },
  account: {
    modelName: "betterauth_account",
  },
  verification: {
    modelName: "betterauth_verification",
  },
  // Authentication Method
  emailAndPassword: {
    enabled: true,
  },
  // Plugin
  plugins: [tanstackStartCookies()],
});
