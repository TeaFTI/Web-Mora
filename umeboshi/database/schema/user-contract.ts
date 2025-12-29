/**
 * User Contract Table Schema
 */

import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { relations } from "drizzle-orm";
import contractTable from "./contract";
import userTable from "./user";

const userContractTable = pgTable(`${TABLE_PREFIX}user_contract`,
  {
    userId: uuid("user_id").notNull()
      .references(() => userTable.id),
    contractId: uuid("contract_id").notNull()
      .references(() => contractTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.userId, table.contractId],
    })
  ],
);

const userContractRelationList = relations(
  userContractTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [userContractTable.userId],
      references: [userTable.id],
    }),
    contract: one(contractTable, {
      fields: [userContractTable.contractId],
      references: [contractTable.id],
    }),
  })
);

export default userContractTable;
export { userContractTable };
