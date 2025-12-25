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

import { TABLE_PREFIX } from "@/configuration/database";

import contactTelephoneNumberTable from "./profile-telephone-number";

const telephoneNumberTable = pgTable(`${TABLE_PREFIX}telephone_number`,
  {
    id: uuid("id").primaryKey().default(sql`uuidv7()`),
    countryCode: text("country_code").notNull(),
    number: text("number").notNull(),
  }
);

const telephoneNumberRelation = relations(telephoneNumberTable,
  ({ many }) => ({
    contactTelephoneNumberTable: many(contactTelephoneNumberTable),
  })
);

export default telephoneNumberTable;
export { telephoneNumberRelation };
