/**
 * Contact Telephone Number Table Schema
 */

import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

import profileTable from "./profile";
import telephoneNumberTable from "./telephone-number";


const profileTelephoneNumberTable = pgTable(
  "profile_telephone_number",
  {
    profileId: uuid("profile_id").notNull().references(() => profileTable.id),
    telephoneNumberId: uuid("telephone_number_id").notNull().references(() => telephoneNumberTable.id),
  },
  (t) => [
    primaryKey({ columns: [t.profileId, t.telephoneNumberId] })
  ],
);

const profileTelephoneNumberRelation = relations(profileTelephoneNumberTable, ({ one }) => ({
  profileTable: one(profileTable, {
    fields: [profileTelephoneNumberTable.profileId],
    references: [profileTable.id],
  }),
  telephoneNumberTable: one(telephoneNumberTable, {
    fields: [profileTelephoneNumberTable.telephoneNumberId],
    references: [telephoneNumberTable.id],
  }),
}));

export default profileTelephoneNumberTable;
export { profileTelephoneNumberRelation };
