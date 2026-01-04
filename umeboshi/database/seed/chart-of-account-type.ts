/**
 * Database Seed Chart of Account Type
 */

import DrizzleClient from "@/database";
import chartOfAccountTypeTable from "@/database/schema/chart-of-account-type";

import chartOfAccountTypeList from "./data/chart-of-account-type.json";

async function seed(drizzleClient: DrizzleClient) {
  await drizzleClient.insert(chartOfAccountTypeTable)
    .values(chartOfAccountTypeList);
}

export default seed;
export { seed };
