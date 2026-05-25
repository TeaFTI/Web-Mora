/**
 * Database Seed Chart of Account Type
 */

import { DrizzleClient } from "~/_drizzle";
import chartOfAccountTypeTable from "~/_drizzle/schema/chart-of-account-type";

import chartOfAccountTypeList from "./data/chart-of-account-type.json";

async function seed(drizzleClient: DrizzleClient) {
  await drizzleClient.insert(chartOfAccountTypeTable)
    .values(chartOfAccountTypeList);
}

export default seed;
export { seed };
