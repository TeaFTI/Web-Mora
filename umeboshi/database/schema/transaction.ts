/**
 * Transaction Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { AnyPgColumn, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import transactionTypeTable from "./transaction-type";

const transactionTable = pgTable("transaction", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  transactionTypeId: uuid("transaction_type_id")
    .references(() => transactionTypeTable.id),
  reverseTransactionId: uuid("reverse_transaction_id")
    .references((): AnyPgColumn => transactionTable.id),
  description: text("description"),
  created: timestamp("created", { withTimezone: true })
    .default(sql`now()`),
  completed: timestamp("completed", { withTimezone: true })
    .default(sql`now()`),
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

