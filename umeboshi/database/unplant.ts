/**
 * Database Unplant
 */

import { getTableName, is, Table } from "drizzle-orm";
import { isPgEnum, PgEnum, PgTable } from "drizzle-orm/pg-core";

import { pgClient } from ".";
import * as Schema from "./schema";

async function unplant() {
  try {
    console.info("Unplanting Start");

    console.debug("Connecting to Database...");
    await pgClient.connect();
    console.debug("Connected to Database.");

    console.debug("Unseeding Database...");

    // Filter Table
    const tableList = Object.entries(Schema)
      .filter(([, value]) => is(value, Table));
    // console.debug("Table List Length:", tableList.length);
    // console.debug("Table List:", tableList.map(([name]) => name));

    // Unseed (DROP) Table
    for (const [, tableValue] of tableList) {
      const tableName = getTableName(tableValue as PgTable);
      const query = `DROP TABLE IF EXISTS "${tableName}" CASCADE;`;
      await pgClient.query(query);
      console.debug(`Unseeding ${tableName} Table Complete.`);
    }

    // Filter Enum
    const typeList = Object.entries(Schema)
      .filter(([, value]) => isPgEnum(value));
    // console.debug("Enum List Length:", enumList.length);
    // console.debug("Enum List:", enumList.map(([name]) => name));

    // Unseed (DROP) Type
    for (const [, typeValue] of typeList) {
      const typeName = (
        typeValue as unknown as PgEnum<[string, ...string[]]>
      ).enumName;
      const query = `DROP TYPE IF EXISTS "${typeName}" CASCADE;`;
      await pgClient.query(query);
      console.debug(`Unseeding ${typeName} Type Complete.`);
    }

    // Unseed (DROP) drizzle Schema
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
