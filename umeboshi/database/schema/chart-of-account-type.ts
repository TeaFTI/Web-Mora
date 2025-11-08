/**
 * Chart of Account Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { chartOfAccountTable } from "./chart-of-account";

const chartOfAccountTypeTable = pgTable("chart_of_account_type",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    name: text("name").unique().notNull(),
  },
);

const chartOfAccountTypeRelation = relations(chartOfAccountTypeTable,
  ({ many }) => ({
    chartOfAccountList: many(chartOfAccountTable),
  })
);

export default chartOfAccountTypeTable;
export { chartOfAccountTypeRelation, chartOfAccountTypeTable };

