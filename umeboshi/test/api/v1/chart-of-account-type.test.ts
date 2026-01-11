/**
 * Chart of Account Type API (Application Programming Interface) Test
 */

import {
  test as baseTest,
  describe,
  expect
} from "vitest";

import chartOfAccountTypeList from "@/database/seed/data/chart-of-account-type.json";
import { chartOfAccountType } from "@api/v1";

/**
 * Automatic Fixture
 */
const test = baseTest.extend<{}>({

});

describe("Chart of Account Type API v1 Test", () => {
  console.info("Test Chart of Account Type API v1");

  test.concurrent(
    "Retrieve Chart of Account Type",
    async () => {
      console.info("Test Retrieve Chart of Account Type");

      const data = await chartOfAccountType.retrieve();
      // console.debug("Chart of Account Type List:", chartOfAccountTypeList);

      // Validate Type
      expect(data).toBeInstanceOf(Array);

      // Validate Seed Data
      expect(data.length).toBeGreaterThanOrEqual(6);

      // Validate Seed Data Content (Asymmetric Matcher)
      expect(data).toEqual(
        expect.arrayContaining(
          chartOfAccountTypeList.map((item) => expect.objectContaining(item))
        )
      );
    }
  );

  test.concurrent(
    "Retrieve Chart of Account Type Expand",
    async () => {
      console.info("Test Retrieve Chart of Account Type Expand");

      const data = await chartOfAccountType.retrieve({
        expand: true
      });
      // console.debug("Chart of Account Type List:", chartOfAccountTypeList);

      // Validate Type
      expect(data).toBeInstanceOf(Array);

      // Validate Data
      expect(data.length).toBeGreaterThanOrEqual(6);

      // Validate Relation Data
      // TODO: Validate Relation Data
    }
  );

  test.concurrent(
    "Retrieve Chart of Account Type by UUID",
    async () => {
      console.info("Test Retrieve Chart of Account Type by UUID");

      const data = await chartOfAccountType.retrieve();

      for (const entry of data) {
        const record = await chartOfAccountType.retrieveByUuid({
          uuid: entry.id
        });

        // Validate Record
        expect(record).toBeDefined();
        expect(record).toEqual(
          expect.objectContaining(entry)
        );
      }
    }
  );
});
