/**
 * Chart of Account Table Schema
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

import chartOfAccountTypeTable from "./chart-of-account-type";

const chartOfAccountTable = pgTable("chart_of_account",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    parentId: uuid("parent_id")
      .references((): AnyPgColumn => chartOfAccountTable.id),
    typeId: uuid("type_id")
      .references(() => chartOfAccountTypeTable.id),
    name: text("name").notNull(),
    description: text("description").notNull(),
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

const chartOfAccountRelation = relations(chartOfAccountTable,
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
export { chartOfAccountRelation, chartOfAccountTable };

