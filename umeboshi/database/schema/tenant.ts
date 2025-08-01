/**
 * Tenant Table Schema
 */

import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid
} from "drizzle-orm/pg-core";

import contactTable from "@/database/schema/contact";
import propertyTable from "@/database/schema/property";

const tenantTable = pgTable("tenant", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  contactId: uuid("contact_id").references(() => contactTable.id),
  propertyId: uuid("property_id").references(() => propertyTable.id),
});

export default tenantTable;
