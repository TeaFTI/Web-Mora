/**
 * Database Seed User
 */

import type DrizzleClient from "@/database";
import userTable from "@/database/schema/user";
import userList from "./data/user.json";

async function seed(drizzleClient: DrizzleClient) {
  await drizzleClient.insert(userTable).values(userList);
};

const userSeed = { seed };
export default userSeed;
