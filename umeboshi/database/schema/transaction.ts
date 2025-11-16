/**
 * Transaction Table Schema
 */

import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const transaction = pgTable("transaction", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  description: text("description"),
  created: timestamp("created", { withTimezone: true }).default(sql`now()`),
  completed: timestamp("completed", { withTimezone: true }).default(sql`now()`),
});

export default transaction;
export { transaction };
