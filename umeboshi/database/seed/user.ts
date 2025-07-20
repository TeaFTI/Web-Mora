/**
 * Database Seed User
 */

import type DrizzleClient from "@/database";
import userTable from "@/database/schema/user";
import userList from "./data/user.json";

export default async function seed(drizzleClient: DrizzleClient) {
  await drizzleClient.insert(userTable).values(userList);
};
