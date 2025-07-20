/**
 * Database
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

console.debug(`Database URI: ${process.env.DATABASE_URI}`);

const pgClient = new Client({
  connectionString: process.env.DATABASE_URI,
});

export const drizzleClient = drizzle({
  client: pgClient,
  schema: {},
  logger: true,
});

export { pgClient };
export type DrizzleClient = typeof drizzleClient;
export default DrizzleClient;
