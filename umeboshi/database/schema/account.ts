/**
 * Account Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import accountTypeTable from "./account-type";
import userAccountTable from "./user-account";

const accountTable = pgTable(`${TABLE_PREFIX}account`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  accountTypeId: uuid("account_type_id")
    .references(() => accountTypeTable.id),
  name: text("name").notNull(),
  displayName: text("display_name"),
  description: text("description"),
});

const accountRelationList = relations(accountTable,
  ({ one, many }) => ({
    accountType: one(accountTypeTable, {
      fields: [accountTable.accountTypeId],
      references: [accountTypeTable.id],
    }),
    userAccountList: many(userAccountTable),
  }));

export default accountTable;
export { accountRelationList, accountTable };
