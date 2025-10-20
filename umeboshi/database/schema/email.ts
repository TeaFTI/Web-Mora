/**
 * Email Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import profileEmailTable from "./profile-email";

const emailTable = pgTable("email", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
});

const emailRelationshipList = relations(emailTable, ({ many }) => ({
  profileEmailList: many(profileEmailTable),
}));

export default emailTable;
export { emailRelationshipList, emailTable };
