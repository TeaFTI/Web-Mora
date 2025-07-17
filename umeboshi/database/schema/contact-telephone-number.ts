/**
 * Contact Telephone Number Table Schema
 */

import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

import contactTable from "./contact";
import telephoneNumberTable from "./telephone-number";


const contactTelephoneNumberTable = pgTable(
  "contact_telephone_number",
  {
    contactId: uuid("contact_id").notNull().references(() => contactTable.id),
    telephoneNumberId: uuid("telephone_number_id").notNull().references(() => telephoneNumberTable.id),
  },
  (t) => [
    primaryKey({ columns: [t.contactId, t.telephoneNumberId] })
  ],
);

const contactTelephoneNumberRelation = relations(contactTelephoneNumberTable, ({ one }) => ({
  contactTable: one(contactTable, {
    fields: [contactTelephoneNumberTable.contactId],
    references: [contactTable.id],
  }),
  telephoneNumberTable: one(telephoneNumberTable, {
    fields: [contactTelephoneNumberTable.telephoneNumberId],
    references: [telephoneNumberTable.id],
  }),
}));

export default contactTelephoneNumberTable;
export { contactTelephoneNumberRelation };
