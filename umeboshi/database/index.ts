/**
 * Database
 */

import PostgreSQLConfiguration from "@/configuration/database";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

import * as Schema from "./schema";

const DATABASE_URI = PostgreSQLConfiguration.DATABASE_URI;
console.debug(`Database URI: ${DATABASE_URI}`);

const pgClient = new Client({
  connectionString: process.env.DATABASE_URI,
});

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URI,
  max: 5,
})

export const drizzleClient = drizzle({
  client: pgPool,
  schema: Schema,
  logger: true,
});

export { pgClient, pgPool };
export type DrizzleClient = typeof drizzleClient;
export default DrizzleClient;
