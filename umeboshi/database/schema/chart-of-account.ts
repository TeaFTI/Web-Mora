/**
 * Chart of Account Table Schema
 * Asset, Liability, Equity, Revenue, Expense, Other
 */

import { relations, sql } from "drizzle-orm";
import {
  AnyPgColumn,
  boolean,
  // foreignKey,
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { chartOfAccountTypeTable } from "./chart-of-account-type";

const chartOfAccountTable = pgTable(`${TABLE_PREFIX}chart_of_account`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    parentId: uuid("parent_id")
      .references((): AnyPgColumn => chartOfAccountTable.id),
    typeId: uuid("chart_of_account_type_id")
      .references(() => chartOfAccountTypeTable.id),
    name: text("name").notNull(),
    displayName: text("display_name"),
    description: text("description"),
    active: boolean("active").default(true),
  },
  // (table) => [
  //   foreignKey({
  //     columns: [table.parentId],
  //     foreignColumns: [table.id],
  //     name: "chart_of_account_parent_id_fk",
  //   })
  // ]
);

const chartOfAccountRelationList = relations(chartOfAccountTable,
  ({ one, many }) => ({
    parentChartOfAccount: one(chartOfAccountTable, {
      fields: [chartOfAccountTable.parentId],
      references: [chartOfAccountTable.id],
      relationName: "childChartOfAccount",
    }),
    childChartOfAccountList: many(chartOfAccountTable, {
      relationName: "childChartOfAccount",
    }),
    chartOfAccountType: one(chartOfAccountTypeTable, {
      fields: [chartOfAccountTable.typeId],
      references: [chartOfAccountTypeTable.id],
    }),
  })
);

export default chartOfAccountTable;
export { chartOfAccountRelationList, chartOfAccountTable };

