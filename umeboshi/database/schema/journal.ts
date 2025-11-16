/**
 * Journal Table Schema
 */

import { sql } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

const journalTable = pgTable("journal", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),

});
