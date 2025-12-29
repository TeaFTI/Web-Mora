/**
 * Contract Item Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { AnyPgColumn, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import contractTable from "./contract";
import propertyTable from "./property";

const contractItemTable = pgTable(`${TABLE_PREFIX}contract_item`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  parentId: uuid("parent_id")
    .references((): AnyPgColumn => contractItemTable.id),
  contractId: uuid("contract_id")
    .references(() => contractTable.id),
  productId: uuid("product_id")
    .references(() => propertyTable.id),
  name: uuid("name"),
  displayName: uuid("display_name"),
  description: uuid("description"),
  startDate: timestamp("start_date", { withTimezone: true }),
  endDate: timestamp("end_date", { withTimezone: true }),
});

const contractItemRelationList = relations(contractItemTable,
  ({ one, many }) => ({
    parentContractItem: one(contractItemTable, {
      fields: [contractItemTable.parentId],
      references: [contractItemTable.id],
      relationName: "childContractItem",
    }),
    childContractItemList: many(contractItemTable, {
      relationName: "childContractItem",
    }),
    contract: one(contractTable, {
      fields: [contractItemTable.contractId],
      references: [contractTable.id],
    }),
    property: one(propertyTable, {
      fields: [contractItemTable.productId],
      references: [propertyTable.id],
    }),
  })
);

export default contractItemTable;
export { contractItemRelationList, contractItemTable };
