/**
 * User Table Schema
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

import contactTable from "./contact";

const userTable = pgTable("user", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  contactId: uuid("contact_id").references(() => contactTable.id),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  salt: text("salt").notNull(),
});

const userRelation = relations(userTable, ({ one }) => ({
  contactTable: one(contactTable, {
    fields: [userTable.contactId],
    references: [contactTable.id],
  }),
}));

export default userTable;
export { userRelation };
