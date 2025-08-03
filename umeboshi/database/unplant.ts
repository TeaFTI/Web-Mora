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

    for (const [tableName, table] of tableList) {
      try {
        const databaseTableName = getTableName(table as PgTable);
        console.debug(`Table Name: ${databaseTableName}`);
      } catch (error) {
        console.error(`Error For Table ${tableName}: ${error}`);
      }
    }

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
