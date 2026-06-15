/**
 * drizzle Configuration
 */

import "@dotenvx/dotenvx/config";

import { defineConfig } from "drizzle-kit";

import { DATABASE_URI } from "./src/configuration/drizzle";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URI,
  },
  out: "./src/_drizzle/migration",
  schema: "./src/_drizzle/schema/index.ts",
  verbose: true,
  strict: true,
});
