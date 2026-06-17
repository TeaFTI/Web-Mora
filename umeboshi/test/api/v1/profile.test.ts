/**
 * Profile API (Application Programming Interface) Test
 */

import {
  test as baseTest,
  describe,
  expect,
} from "vitest";

/**
 * Automatic Fixture
 */
const test = baseTest.extend<{}>({

});

describe("Profile API v1 Test", () => {
  console.info("Test Profile API (Application Programming Interface) Version 1");

  test.concurrent(
    "Alpha",
    async () => {
      expect(1 + 1).toBe(2);
    }
  );
});
