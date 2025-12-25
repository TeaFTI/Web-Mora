/**
 * Country Currency Table Schema
 */

import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "@/configuration/database";

import { relations } from "drizzle-orm";
import countryTable from "./country";
import currencyTable from "./currency";

const countryCurrencyTable = pgTable(`${TABLE_PREFIX}country_currency`,
  {
    countryId: uuid("country_id").references(() => countryTable.id),
    currencyId: uuid("currency_id").references(() => currencyTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.countryId, table.currencyId],
    })
  ],
);

const countryCurrencyRelationList = relations(countryCurrencyTable,
  ({ one }) => ({
    country: one(countryTable, {
      fields: [countryCurrencyTable.countryId],
      references: [countryTable.id],
    }),
    currency: one(currencyTable, {
      fields: [countryCurrencyTable.currencyId],
      references: [currencyTable.id],
    }),
  })
);

export default countryCurrencyTable;
export { countryCurrencyRelationList, countryCurrencyTable };
