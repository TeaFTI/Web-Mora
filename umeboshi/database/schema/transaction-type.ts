/**
 * Transaction Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import transactionTable from "./transaction";

const transactionTypeTable = pgTable("transaction_type", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
});

const transactionTypeRelationList = relations(
  transactionTypeTable, ({ many }) => ({
    transactions: many(transactionTable),
  }));

export default transactionTypeTable;
export { transactionTypeRelationList, transactionTypeTable };

