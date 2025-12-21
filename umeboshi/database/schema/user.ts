/**
 * User Table Schema
 */

import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import profileTable from "./profile";

const userTable = pgTable(`${TABLE_PREFIX}user`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  profileId: uuid("profile_id").references(() => profileTable.id),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  salt: text("salt").notNull(),
});

const userRelationList = relations(userTable, ({ one }) => ({
  profile: one(profileTable, {
    fields: [userTable.profileId],
    references: [profileTable.id],
  }),
}));

export default userTable;
export { userRelationList, userTable };
