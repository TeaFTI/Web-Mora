/**
 * Email Table Schema
 */

import { sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "../../configuration/global";

const emailTable = pgTable(`${TABLE_PREFIX}email`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  email: text("email").notNull().unique(),
});

export type EmailType = typeof emailTable.$inferSelect;
export { emailTable };
