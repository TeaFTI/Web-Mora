/**
 * Account Table Schema
 */

import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import accountTypeTable from "./account-type";

const accountTable = pgTable("account", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  accountTypeId: uuid("account_type_id").references(() => accountTypeTable.id),
  name: text("name").notNull(),
  description: text("description"),
});

const accountRelationList = relations(accountTable, ({ one }) => ({
  accountType: one(accountTypeTable, {
    fields: [accountTable.accountTypeId],
    references: [accountTypeTable.id],
  }),
}));

export default accountTable;
export { accountRelationList, accountTable };

