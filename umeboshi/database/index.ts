/**
 * Database
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

import PostgreSQLConfiguration from "@/configuration/database";
import * as schema from "./schema";
import {
  chartOfAccountRelationList,
} from "./schema";

const DATABASE_URI = PostgreSQLConfiguration.DATABASE_URI;
// console.debug(`Database URI: ${DATABASE_URI}`);

const pgClient = new Client({
  connectionString: DATABASE_URI,
});

const pgPool = new Pool({
  connectionString: DATABASE_URI,
  max: 5,
})

// Combined relations from schema exports
const schemaRelationList = {
  ...chartOfAccountRelationList,
};

export const drizzleClient = drizzle({
  client: pgPool,
  schema: schema,
  // Required For Relational Query
  relations: schemaRelationList,
  logger: true,
});

export { pgClient, pgPool };
export type DrizzleClient = typeof drizzleClient;
export default drizzleClient;
