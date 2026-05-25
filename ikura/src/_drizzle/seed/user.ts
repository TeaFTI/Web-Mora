/**
 * Database Seed User
 */

import { DrizzleClient } from "~/_drizzle";
import userTable from "~/_drizzle/schema/user";

import userList from "./data/user.json";

async function seed(drizzleClient: DrizzleClient) {
  await drizzleClient.insert(userTable).values(userList);
}

export default seed;
export { seed };
