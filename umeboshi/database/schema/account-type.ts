/**
 * Account Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import accountTable from "./account";

const accountTypeTable = pgTable(`${TABLE_PREFIX}account_type`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
  name: text("name").notNull().unique(),
  displayName: text("display_name"),
  description: text("description"),
});

const accountTypeRelationList = relations(
  accountTypeTable, ({ many }) => ({
    accountList: many(accountTable),
  })
);

export default accountTypeTable;
export { accountTypeRelationList, accountTypeTable };
