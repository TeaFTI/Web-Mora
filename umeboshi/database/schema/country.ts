/**
 * Country Table Schema
 */

import { sql } from "drizzle-orm";
import { char, pgTable, text, uuid } from "drizzle-orm/pg-core";

const countryTable = pgTable("country", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  officialStateName: text("official_state_name"),
  iso31661Alpha2: char("iso_3166_1_alpha_2", { length: 2 }).notNull().unique(),
  iso31661Alpha3: char("iso_3166_1_alpha_3", { length: 3 }).notNull().unique(),
  iso31661Numeric: char("iso_3166_1_numeric", { length: 3 }).notNull().unique(),
});

export default countryTable;
export { countryTable };
