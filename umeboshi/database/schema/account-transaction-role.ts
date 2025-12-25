/**
 * Account Transaction Role Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import accountTransactionTable from "./account-transaction";

const accountTransactionRoleTable = pgTable(
  `${TABLE_PREFIX}account_transaction_role`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    name: text("name").notNull().unique(),
    displayName: text("display_name"),
    description: text("description"),
  },
);

const accountTransactionRoleRelationList = relations(
  accountTransactionRoleTable, ({ many }) => ({
    accountTransactionList: many(accountTransactionTable),
  })
);

export default accountTransactionRoleTable;
export {
  accountTransactionRoleRelationList,
  accountTransactionRoleTable
};
