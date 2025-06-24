/**
 * User Table Schema
 */

import {
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

const userTable = pgTable("user", {
  id: uuid("id").primaryKey().generatedAlwaysAs("gen_random_uuid()"),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export default userTable;
