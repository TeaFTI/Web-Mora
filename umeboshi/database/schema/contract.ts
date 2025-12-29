/**
 * Contract Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import contractItemTable from "./contract-item";
import contractStatusTable from "./contract-status";
import userContractTable from "./user-contract";

const contractTable = pgTable(`${TABLE_PREFIX}contract`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  contractStatusId: uuid("contract_status_id")
    .references(() => contractStatusTable.id),
  name: text("name"),
  displayName: text("display_name"),
  activateDate: timestamp("activate_date", { withTimezone: true }),
  startDate: timestamp("start_date", { withTimezone: true }),
  endDate: timestamp("end_date", { withTimezone: true }),
});

const contractRelationList = relations(contractTable,
  ({ one, many }) => ({
    contractStatus: one(contractStatusTable, {
      fields: [contractTable.contractStatusId],
      references: [contractStatusTable.id],
    }),
    contractItemList: many(contractItemTable),
    userContractList: many(userContractTable),
  })
);

export default contractTable;
export { contractRelationList, contractTable };
