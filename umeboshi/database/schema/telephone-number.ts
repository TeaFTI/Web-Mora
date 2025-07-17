/**
 * Telephone Number Table Schema
 */

import {
  relations,
  sql,
} from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import contactTelephoneNumberTable from "./contact-telephone-number";

const telephoneNumberTable = pgTable("telephone_number", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  countryCode: text("country_code").notNull(),
  number: text("number").notNull(),
});

const telephoneNumberRelation = relations(telephoneNumberTable, ({ many }) => ({
  contactTelephoneNumberTable: many(contactTelephoneNumberTable),
}));

export default telephoneNumberTable;
export { telephoneNumberRelation };
