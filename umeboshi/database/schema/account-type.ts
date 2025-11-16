/**
 * Account Type Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import accountTable from "./account";

const accountTypeTable = pgTable("account_type", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
});

const accountTypeRelationList = relations(
  accountTypeTable, ({ many }) => ({
    accountList: many(accountTable),
  })
);

export default accountTypeTable;
export { accountTypeRelationList, accountTypeTable };
