/**
 * Database Unplant
 */

import { getTableName } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";

import { pgClient } from "@/database";

import * as schema from "@/database/schema";

async function unplant() {
  try {
    console.info("Unplanting Start");

    console.debug("Connecting to Database...");
    await pgClient.connect();
    console.debug("Connected to Database.");

    console.debug("Unseeding Database...");

    const tableList = Object.entries(schema)
      .filter(([key]) => key.endsWith("Table"))
      .filter(([, value]) => value && typeof value === "object" && "getSQL" in value);
    console.debug(`Table List Length: ${tableList.length}`);

    for (const [, tableValue] of tableList) {
      const tableName = getTableName(tableValue as PgTable);
      const query = `DROP TABLE IF EXISTS "${tableName}" CASCADE;`;
      await pgClient.query(query);
      console.debug(`Unseeding ${tableName} Table Complete.`);
    }

    await pgClient.query(`DROP SCHEMA IF EXISTS "drizzle" CASCADE;`);
    console.debug(`Unseeding drizzle Schema Complete.`);

    console.debug("Unseeding Database Complete.");
  } catch (error) {
    console.error(`Error Unseeding Database: ${error}`);
    process.exit(1);
  } finally {
    await pgClient.end();
    console.debug("Database Connection Closed.");
  }
}

// Make sure the function wait for the promise to complete
unplant()
  .then(() => {
    console.info("Unplanting Finish");
    process.exit(0);
  })
  .catch((error) => {
    console.error(`Error Unplanting: ${error}`);
    process.exit(1);
  });
