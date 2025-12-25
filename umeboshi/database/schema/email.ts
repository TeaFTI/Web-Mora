/**
 * Email Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import profileEmailTable from "./profile-email";

const emailTable = pgTable(`${TABLE_PREFIX}email`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  email: text("email").notNull().unique(),
});

const emailRelationList = relations(emailTable, ({ many }) => ({
  profileEmailList: many(profileEmailTable),
}));

export default emailTable;
export { emailRelationList, emailTable };
