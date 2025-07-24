/**
 * Tenant Table Schema
 */

import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid
} from "drizzle-orm/pg-core";

import contactTable from "@/database/schema/contact";

const tenantTable = pgTable("tenant", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  contactId: uuid("contact_id").references(() => contactTable.id),
});

export default tenantTable;
