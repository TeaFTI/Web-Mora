/**
 * Database Clear
 */

import { reset } from "drizzle-seed";
import { drizzleClient, pgClient } from "./client";

import * as schema from "./schema";

async function clean() {
  try {
    console.info("Cleaning Start");

    console.debug("Connecting to Database...");
    await pgClient.connect();
    console.debug("Connected to Database.");

    console.debug("Cleaning Database...");
    await reset(drizzleClient, schema);

    console.debug("Cleaning Database Complete.");
  } catch (error) {
    console.error(`Error Cleaning Database: ${error}`);
    process.exit(1);
  } finally {
    await pgClient.end();
    console.debug("Database Connection Closed.");
  }
}

// Make sure the function wait for the promise to complete
clean()
  .then(() => {
    console.info("Cleaning Finish");
    process.exit(0);
  })
  .catch((error) => {
    console.error(`Error Cleaning: ${error}`);
    process.exit(1);
  });
