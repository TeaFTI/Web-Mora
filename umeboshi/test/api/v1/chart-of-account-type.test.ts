/**
 * Chart of Account Type API (Application Programming Interface) Test
 */

import {
  test as baseTest,
  describe,
  expect
} from "vitest";

import { chartOfAccountType } from "@/app/api/v1";

/**
 * Automatic Fixture
 */
const test = baseTest.extend<{}>({

});

describe("Chart of Account Type API v1 Test", () => {
  console.info("Test Chart of Account Type API (Application Programming Interface) Version 1");

  test.concurrent(
    "Retrieve Chart of Account Type",
    async () => {
      console.info("Test Retrieve Chart of Account Type");

      const chartOfAccountTypeList = await chartOfAccountType.retrieve();
      // console.debug("Chart of Account Type List:", chartOfAccountTypeList);

      // Validate Type
      expect(chartOfAccountTypeList).toBeInstanceOf(Array);

      // Validate Data
      expect(chartOfAccountTypeList.length).toBeGreaterThanOrEqual(6);
    }
  );
});
