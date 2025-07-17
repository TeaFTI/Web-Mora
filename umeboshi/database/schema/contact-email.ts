/**
 * Contact Email Table Schema
 */

import {
  pgTable,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

import contactTable from "./contact";
import emailTable from "./email";

const contactEmailTable = pgTable(
  "contact_email",
  {
    contactId: uuid("contact_id").notNull().references(() => contactTable.id),
    emailId: uuid("email_id").notNull().references(() => emailTable.id),
  },
  (t) => [
    primaryKey({ columns: [t.contactId, t.emailId] })
  ],
);

const contactEmailRelation = relations(contactEmailTable, ({ one }) => ({
  contactTable: one(contactTable, {
    fields: [contactEmailTable.contactId],
    references: [contactTable.id],
  }),
  emailTable: one(emailTable, {
    fields: [contactEmailTable.emailId],
    references: [emailTable.id],
  }),
}));

export default contactEmailTable;
export { contactEmailRelation };
