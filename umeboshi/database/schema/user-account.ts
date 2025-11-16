/**
 * User Account Table Schema
 */

import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { accountTable } from "./account";
import { userTable } from "./user";

const userAccountTable = pgTable("user_account",
  {
    userId: uuid("user_id").notNull(),
    accountId: uuid("account_id").notNull(),
  },
  (table) => [
    primaryKey({
      columns: [table.userId, table.accountId],
    })
  ],
);

const userAccountRelationList = relations(
  userAccountTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [userAccountTable.userId],
      references: [userTable.id],
    }),
    account: one(accountTable, {
      fields: [userAccountTable.accountId],
      references: [accountTable.id],
    }),
  })
);

export default userAccountTable;
export { userAccountRelationList, userAccountTable };
