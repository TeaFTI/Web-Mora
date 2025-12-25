/**
 * Contract Table Schema
 */

import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";
import contractStatusTable from "./contract-status";
import propertyTable from "./property";

const contractTable = pgTable(`${TABLE_PREFIX}contract`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  contractStatusId: uuid("contract_status_id")
    .references(() => contractStatusTable.id),
  propertyId: uuid("property_id")
    .references(() => propertyTable.id),
  name: text("name"),
  displayName: text("display_name"),
  activateDate: timestamp("activate_date", { withTimezone: true }),
  startDate: timestamp("start_date", { withTimezone: true }),
  endDate: timestamp("end_date", { withTimezone: true }),
});

export default contractTable;
export { contractTable };
