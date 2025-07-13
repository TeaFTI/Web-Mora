/**
 * Contact Table Schema
 */

import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
} from "drizzle-orm/pg-core";

const contactTable = pgTable("contact", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
});

export default contactTable;
