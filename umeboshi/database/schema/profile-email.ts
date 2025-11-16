/**
 * Profile Email Table Schema
 */

import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import emailTable from "./email";
import profileTable from "./profile";

const profileEmailTable = pgTable(
  "profile_email",
  {
    profileId: uuid("profile_id").notNull().references(() => profileTable.id),
    emailId: uuid("email_id").notNull().references(() => emailTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.profileId, table.emailId],
    })
  ],
);

const profileEmailRelationList = relations(
  profileEmailTable,
  ({ one }) => ({
    profile: one(profileTable, {
      fields: [profileEmailTable.profileId],
      references: [profileTable.id],
    }),
    email: one(emailTable, {
      fields: [profileEmailTable.profileId],
      references: [emailTable.id],
    }),
  })
);

export default profileEmailTable;
export { profileEmailRelationList, profileEmailTable };
