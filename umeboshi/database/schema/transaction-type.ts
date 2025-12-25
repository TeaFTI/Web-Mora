/**
 * Transaction Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import transactionTable from "./transaction";

const transactionTypeTable = pgTable(`${TABLE_PREFIX}transaction_type`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    name: text("name").notNull(),
    displayName: text("display_name"),
    description: text("description"),
  }
);

const transactionTypeRelationList = relations(
  transactionTypeTable, ({ many }) => ({
    transactions: many(transactionTable),
  }));

export default transactionTypeTable;
export { transactionTypeRelationList, transactionTypeTable };

