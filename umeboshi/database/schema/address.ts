/**
 * Address Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import cityTable from "./city";

const addressTable = pgTable(`${TABLE_PREFIX}address`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  cityId: uuid("city_id").notNull().references(() => cityTable.id),
  street: text("street").notNull(),
  premise: text("premise"),
  postalCode: text("postal_code").notNull(),
});

const addressRelationList = relations(addressTable, ({ one }) => ({
  city: one(cityTable, {
    fields: [addressTable.cityId],
    references: [cityTable.id],
  }),
}));

export default addressTable;
export { addressRelationList, addressTable };
