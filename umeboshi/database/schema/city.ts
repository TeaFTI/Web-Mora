/**
 * City Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { divisionTable } from "./division";

const cityTable = pgTable(`${TABLE_PREFIX}city`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  divisionId: uuid("division_id").notNull()
    .references(() => divisionTable.id),
  name: text("name").notNull(),
  displayName: text("display_name"),
});

const cityRelationList = relations(cityTable, ({ one }) => ({
  division: one(divisionTable, {
    fields: [cityTable.divisionId],
    references: [divisionTable.id],
  }),
}));

export default cityTable;
export { cityRelationList, cityTable };
