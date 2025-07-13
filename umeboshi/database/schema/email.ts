/**
 * Email Table Schema
 */

import {
  relations,
  sql,
} from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import contactEmailTable from "./contactemail";

const emailTable = pgTable("email", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
});

const emailRelation = relations(emailTable, ({ many }) => ({
  contactEmailTable: many(contactEmailTable),
}));

export default emailTable;
export { emailRelation };
