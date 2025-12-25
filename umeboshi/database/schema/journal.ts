/**
 * Journal Table Schema
 */

import { relations, sql } from "drizzle-orm";
import {
  check,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { JournalType } from "@/type/journal";
import chartOfAccountTable from "./chart-of-account";
import currencyTable from "./currency";
import transactionTable from "./transaction";

const journalTypeEnum = pgEnum(
  "journal_type_enum",
  ["debit", "credit"] as const satisfies readonly JournalType[]
);

const journalTable = pgTable(`${TABLE_PREFIX}journal`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    transactionId: uuid("transaction_id")
      .references(() => transactionTable.id),
    chartOfAccountId: uuid("chart_of_account_id")
      .references(() => chartOfAccountTable.id),
    currencyId: uuid("currency_id").references(() => currencyTable.id),
    description: text("description"),
    type: journalTypeEnum("type").notNull(),
    amount: numeric("amount", { precision: 105, scale: 5 }).notNull(),
    created: timestamp("created", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    check("amount_check", sql`${table.amount} >= 0`),
  ]
);

const journalRelationList = relations(journalTable, ({ one }) => ({
  transaction: one(transactionTable, {
    fields: [journalTable.transactionId],
    references: [transactionTable.id],
  }),
  chartOfAccount: one(chartOfAccountTable, {
    fields: [journalTable.chartOfAccountId],
    references: [chartOfAccountTable.id],
  }),
  currency: one(currencyTable, {
    fields: [journalTable.currencyId],
    references: [currencyTable.id],
  }),
}));

export default journalTable;
export { journalRelationList, journalTable };

