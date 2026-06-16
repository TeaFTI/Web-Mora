/**
 * Tenant Table Schema
 */

import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid
} from "drizzle-orm/pg-core";

import { TABLE_PREFIX } from "../../configuration/global";

const tenantTable = pgTable(`${TABLE_PREFIX}tenant`, {
  id: uuid("id").primaryKey().default(sql`uuidv7()`),
});

export { tenantTable };
