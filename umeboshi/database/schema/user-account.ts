/**
 * User Account Table Schema
 */

import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { accountTable } from "./account";
import { userTable } from "./user";

const userAccountTable = pgTable(`${TABLE_PREFIX}user_account`,
  {
    userId: uuid("user_id").notNull()
      .references(() => userTable.id),
    accountId: uuid("account_id").notNull()
      .references(() => accountTable.id),
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
