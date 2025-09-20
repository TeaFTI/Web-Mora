/**
 * Database
 */

import * as schema from "@/database/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

console.debug(`Database URI: ${process.env.DATABASE_URI}`);

const pgClient = new Client({
  connectionString: process.env.DATABASE_URI,
});

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URI,
  max: 5,
})

export const drizzleClient = drizzle({
  client: pgPool,
  schema: schema,
  logger: true,
});

export { pgClient, pgPool };
export type DrizzleClient = typeof drizzleClient;
export default DrizzleClient;
