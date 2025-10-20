/**
 * Contact Table Schema
 */

import {
  sql
} from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

const contactTable = pgTable("contact", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  prefix: text("prefix"),
  firstName: text("first_name").notNull(),
  middleName: text("middle_name"),
  lastName: text("last_name"),
  suffix: text("suffix"),
  phoneticFirstName: text("phonetic_first_name"),
  phoneticMiddleName: text("phonetic_middle_name"),
  phoneticLastName: text("phonetic_last_name"),
  nickname: text("nickname"),
  company: text("company"),
});

export default contactTable;
