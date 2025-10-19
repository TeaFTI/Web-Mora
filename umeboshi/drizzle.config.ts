/**
 * drizzle Configuration
 */

import { defineConfig } from "drizzle-kit";

import PostgreSQLConfiguration from "@/configuration/database";

const DATABASE_URI = PostgreSQLConfiguration.DATABASE_URI;

export default defineConfig({
  out: "./database/migration",
  schema: "./database/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URI,
  },
  verbose: true,
  strict: true,
});
