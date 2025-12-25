/**
 * Contact Telephone Number Table Schema
 */

import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

import { TABLE_PREFIX } from "@/configuration/database";

import profileTable from "./profile";
import telephoneNumberTable from "./telephone-number";


const profileTelephoneNumberTable = pgTable(
  `${TABLE_PREFIX}profile_telephone_number`,
  {
    profileId: uuid("profile_id")
      .references(() => profileTable.id),
    telephoneNumberId: uuid("telephone_number_id")
      .references(() => telephoneNumberTable.id),
  },
  (table) => [
    primaryKey({ columns: [table.profileId, table.telephoneNumberId] })
  ],
);

const profileTelephoneNumberRelation = relations(
  profileTelephoneNumberTable,
  ({ one }) => ({
    profileTable: one(profileTable, {
      fields: [profileTelephoneNumberTable.profileId],
      references: [profileTable.id],
    }),
    telephoneNumberTable: one(telephoneNumberTable, {
      fields: [profileTelephoneNumberTable.telephoneNumberId],
      references: [telephoneNumberTable.id],
    }),
  })
);

export default profileTelephoneNumberTable;
export { profileTelephoneNumberRelation };
