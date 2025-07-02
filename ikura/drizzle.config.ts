/**
 * drizzle Configuration
 */

import { defineConfig } from 'drizzle-kit';

import { PostgreSQLConfiguration } from '~/configuration/database';

const DATABASE_SCHEME = PostgreSQLConfiguration.DATABASE_SCHEME;
const DATABASE_USERNAME = PostgreSQLConfiguration.DATABASE_USERNAME;
const DATABASE_PASSWORD = PostgreSQLConfiguration.DATABASE_PASSWORD;
const DATABASE_HOST = PostgreSQLConfiguration.DATABASE_HOST;
const DATABASE_PORT = PostgreSQLConfiguration.DATABASE_PORT;
const DATABASE_NAME = PostgreSQLConfiguration.DATABASE_NAME;
const DATABASE_URI = `${DATABASE_SCHEME}://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

export default defineConfig({
  out: "./src/database/migration",
  schema: "./src/database/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URI,
  },
  verbose: true,
  strict: true,
});
