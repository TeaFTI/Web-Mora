/**
 * Database Test
 */

import {
  test as baseTest,
  describe,
  expect,
} from "vitest";

import drizzleClient from "@/database";

/**
 * Automatic Fixture
 */
const test = baseTest.extend<{}>({

});

describe("Database Test", () => {
  console.info("Test Database");

  test.concurrent(
    "Database Connection",
    async () => {
      // console.debug("Node Environment:", process.env.NODE_ENV);
      // console.debug("Drizzle Client:", drizzleClient);
      expect(drizzleClient).toBeDefined();
    }
  );
});
