/**
 * Database Plant
 */

import { drizzleClient, pgClient } from ".";
import {
  user,
} from "./seed";

async function plant() {
  try {
    console.info("Planting Start");

    console.debug("Connecting to Database...");
    await pgClient.connect();
    console.debug("Connected to Database.");

    console.debug("Seeding Database...");

    await user.seed(drizzleClient);
    console.debug("Seeding user Complete.");

    console.debug("Seeding Database Complete.");
  } catch (error) {
    console.error(`Error Seeding Database: ${error}`);
    process.exit(1);
  } finally {
    await pgClient.end();
    console.debug("Database Connection Closed.");
  }
}

// Make sure the function wait for the promise to complete
plant()
  .then(() => {
    console.info("Planting Finish");
    process.exit(0);
  })
  .catch((error) => {
    console.error(`Error Planting: ${error}`);
    process.exit(1);
  });
