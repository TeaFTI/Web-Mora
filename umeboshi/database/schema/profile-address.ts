/**
 * Profile Address Table Schema
 */

import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import addressTable from "./address";
import profileTable from "./profile";

const profileAddressTable = pgTable(`${TABLE_PREFIX}profile_address`,
  {
    profileId: uuid("profile_id").notNull()
      .references(() => profileTable.id),
    addressId: uuid("address_id").notNull()
      .references(() => addressTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.profileId, table.addressId],
    })
  ],
);

const profileAddressRelationList = relations(
  profileAddressTable,
  ({ one }) => ({
    profile: one(profileTable, {
      fields: [profileAddressTable.profileId],
      references: [profileTable.id],
    }),
    address: one(addressTable, {
      fields: [profileAddressTable.addressId],
      references: [addressTable.id],
    }),
  })
);

export default profileAddressTable;
export { profileAddressRelationList, profileAddressTable };
