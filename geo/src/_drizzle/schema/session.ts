/**
 * Session Table Schema
 */

import { sql } from "drizzle-orm";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "~/configuration/global";

const sessionTable = pgTable(`${TABLE_PREFIX}session`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  expiration: timestamp("expiration", { withTimezone: true }).notNull(),
});

export { sessionTable };
