/**
 * Contact Table Schema
 */

import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import profileTable from "./profile";

const contactTable = pgTable(`${TABLE_PREFIX}contact`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  profileId: uuid("profile_id").references(() => profileTable.id),
  company: text("company"),
});

const contactRelationList = relations(contactTable, ({ one }) => ({
  profile: one(profileTable, {
    fields: [contactTable.profileId],
    references: [profileTable.id],
  }),
}));

export default contactTable;
export { contactRelationList, contactTable };
