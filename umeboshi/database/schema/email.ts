/**
 * Email Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import profileEmailTable from "./profile-email";

const emailTable = pgTable("email", {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  email: text("email").notNull().unique(),
});

const emailRelationList = relations(emailTable, ({ many }) => ({
  profileEmailList: many(profileEmailTable),
}));

export default emailTable;
export { emailRelationList, emailTable };
