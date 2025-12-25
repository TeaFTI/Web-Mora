/**
 * Account Transaction Table Schema
 */

import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import accountTable from "./account";
import accountTransactionRoleTable from "./account-transaction-role";
import transactionTable from "./transaction";

const accountTransactionTable = pgTable(
  `${TABLE_PREFIX}account_transaction`,
  {
    accountId: uuid("account_id").notNull()
      .references(() => accountTable.id),
    transactionId: uuid("transaction_id").notNull()
      .references(() => transactionTable.id),
    accountTransactionRoleId: uuid("account_transaction_role_id")
      .notNull()
      .references(() => accountTransactionRoleTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.accountId, table.transactionId],
    }),
  ],
);

const accountTransactionRelationList = relations(
  accountTransactionTable,
  ({ one, many }) => ({
    account: one(accountTable, {
      fields: [accountTransactionTable.accountId],
      references: [accountTable.id],
    }),
    transaction: one(transactionTable, {
      fields: [accountTransactionTable.transactionId],
      references: [transactionTable.id],
    }),
    accountTransactionRole: one(accountTransactionRoleTable, {
      fields: [accountTransactionTable.accountTransactionRoleId],
      references: [accountTransactionRoleTable.id],
    }),
  })
);

export default accountTransactionTable;
export { accountTransactionRelationList, accountTransactionTable };
