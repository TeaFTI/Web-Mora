import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import drizzleClient from "../_drizzle";

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
  },
  account: {
    modelName: "betterauth_account",
  },
  verification: {
    modelName: "betterauth_verification",
  }
});
