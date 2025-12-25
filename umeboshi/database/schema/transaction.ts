/**
 * Transaction Table Schema
 */

import { relations, sql } from "drizzle-orm";
import {
  AnyPgColumn,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import transactionTypeTable from "./transaction-type";

const transactionTable = pgTable(`${TABLE_PREFIX}transaction`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  transactionTypeId: uuid("transaction_type_id")
    .references(() => transactionTypeTable.id),
  reverseTransactionId: uuid("reverse_transaction_id")
    .references((): AnyPgColumn => transactionTable.id),
  description: text("description"),
  created: timestamp("created", { withTimezone: true })
    .defaultNow(),
  completed: timestamp("completed", { withTimezone: true })
    .defaultNow(),
});

const transactionRelationList = relations(
  transactionTable, ({ one, many }) => ({
    transactionType: one(transactionTypeTable, {
      fields: [transactionTable.transactionTypeId],
      references: [transactionTypeTable.id],
    }),
    baseTransaction: one(transactionTable, {
      fields: [transactionTable.reverseTransactionId],
      references: [transactionTable.id],
      relationName: "reverseTransaction",
    }),
    reverseTransactionList: many(transactionTable, {
      relationName: "reverseTransaction",
    }),
  })
);

export default transactionTable;
export { transactionRelationList, transactionTable };

