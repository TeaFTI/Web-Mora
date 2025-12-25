/**
 * Chart of Account Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { chartOfAccountTable } from "./chart-of-account";

const chartOfAccountTypeTable = pgTable(
  `${TABLE_PREFIX}chart_of_account_type`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    name: text("name").unique().notNull(),
  },
);

const chartOfAccountTypeRelationList = relations(
  chartOfAccountTypeTable, ({ many }) => ({
    chartOfAccountList: many(chartOfAccountTable),
  })
);

export default chartOfAccountTypeTable;
export { chartOfAccountTypeRelationList, chartOfAccountTypeTable };

