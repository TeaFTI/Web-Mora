/**
 * Chart of Account Type API (Application Programming Interface) Test
 */

import {
  test as baseTest,
  describe,
  expect,
  vi
} from "vitest";

import type { ChartOfAccountType } from "@/database/schema";
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

  test.concurrent(
    "Create Chart of Account Type Mock",
    async () => {
      console.info("Test Create Chart of Account Type Mock");

      // Mock data for creating a new Chart of Account Type
      const mockData = {
        name: "test",
        displayName: "Test",
        description: "A test chart of account type",
      };

      // Mock response (simulating what the database would return)
      const mockRecord: ChartOfAccountType = {
        id: "01234567-89ab-cdef-0123-456789abcdef",
        ...mockData,
      };

      // Spy on the create function and mock its implementation
      const createSpy = vi.spyOn(chartOfAccountType, "create")
        .mockResolvedValueOnce(mockRecord);

      // Call the create function
      const result = await chartOfAccountType.create({
        data: mockData as ChartOfAccountType
      });

      // Validate the create function was called with the correct data
      expect(createSpy).toHaveBeenCalledOnce();
      expect(createSpy).toHaveBeenCalledWith({ data: mockData });

      // Validate the result record
      expect(result).toBeDefined();
      expect(result).toEqual(mockRecord);
      expect(result?.id).toBe(mockRecord.id);
      expect(result?.name).toBe(mockData.name);
      expect(result?.displayName).toBe(mockData.displayName);
      expect(result?.description).toBe(mockData.description);

      // Return to the initial state
      // Restore the original descriptor of spied-on object
      createSpy.mockRestore();
    }
  );
});
