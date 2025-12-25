/**
 * Division Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import countryTable from "./country";

const divisionTable = pgTable(`${TABLE_PREFIX}division`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  countryId: uuid("country_id").notNull()
    .references(() => countryTable.id),
  name: text("name").notNull(),
  displayName: text("display_name"),
  iso31662: text("iso_3166_2"),
});

const divisionRelationList = relations(divisionTable, ({ one }) => ({
  country: one(countryTable, {
    fields: [divisionTable.countryId],
    references: [countryTable.id],
  }),
}));

export default divisionTable;
export { divisionRelationList, divisionTable };
