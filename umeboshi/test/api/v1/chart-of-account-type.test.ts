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

  describe.concurrent("Retrieve", () => {
    test("Retrieve Chart of Account Type", async () => {
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
    });
    test("Retrieve Chart of Account Type Expand", async () => {
      console.info("Test Retrieve Chart of Account Type Expand");

      const data = await chartOfAccountType.retrieve({
        expand: true
      });
      // console.debug("Chart of Account Type Data:", data);

      // Validate Type
      expect(data).toBeInstanceOf(Array);

      // Validate Data
      expect(data.length).toBeGreaterThanOrEqual(6);

      // Validate Relation Data
      for (const entry of data) {
        expect(entry).toHaveProperty("chartOfAccountList");
      }
    });
    test("Retrieve Chart of Account Type by UUID", async () => {
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
    });
    test("Create Chart of Account Type", async () => {
      console.info("Test Create Chart of Account Type");


    });
  });

  // test(
  //   "Create Chart of Account Type Mock",
  //   async () => {
  //     console.info("Test Create Chart of Account Type Mock");

  //     // Mock data for create Chart of Account Type
  //     const mockData = {
  //       name: "create-test",
  //       displayName: "Create Test",
  //       description: "A create test Chart of Account Type",
  //     };

  //     // Mock response (simulate what the request would return)
  //     const mockRecord: ChartOfAccountType = {
  //       id: "52a3c11b-381d-42ce-9c08-a47028c833eb",
  //       ...mockData,
  //     };

  //     // Spy on the create function and mock the implementation
  //     const createSpy = vi.spyOn(chartOfAccountType, "create")
  //       .mockResolvedValueOnce(mockRecord);

  //     // Call the create function test candidate
  //     const result = await chartOfAccountType.create({
  //       data: mockData as ChartOfAccountType
  //     });

  //     // Validate the create function was called with the correct data
  //     // expect(createSpy).toHaveBeenCalled();
  //     expect(createSpy).toHaveBeenCalledWith({ data: mockData });

  //     // Validate the result record
  //     expect(result).toBeDefined();
  //     expect(result).toEqual(mockRecord);
  //     expect(result?.id).toBe(mockRecord.id);
  //     expect(result?.name).toBe(mockData.name);
  //     expect(result?.displayName).toBe(mockData.displayName);
  //     expect(result?.description).toBe(mockData.description);

  //     // Return to the initial state
  //     // Restore the original descriptor of spied-on object
  //     createSpy.mockRestore();
  //   }
  // );

  // test(
  //   "Update Chart of Account Type Mock",
  //   async () => {
  //     console.info("Test Update Chart of Account Type Mock");

  //     // Mock data for creating a new Chart of Account Type
  //     const mockData = {
  //       name: "update-test-initial",
  //       displayName: "Update Test Initial",
  //       description: "An update test initial Chart of Account Type",
  //     };

  //     // Mock response (simulating what the database would return)
  //     const mockRecord: ChartOfAccountType = {
  //       id: "37f76493-b7fb-4cdf-9ce4-59ca52957415",
  //       ...mockData,
  //     };

  //     // Spy on the create function and mock its implementation
  //     const createSpy = vi.spyOn(chartOfAccountType, "create")
  //       .mockResolvedValueOnce(mockRecord);

  //     // Call the create function
  //     const result = await chartOfAccountType.create({
  //       data: mockData as ChartOfAccountType
  //     });

  //     // Validate the create function was called with the correct data
  //     expect(createSpy).toHaveBeenCalled();
  //     // expect(createSpy).toHaveBeenCalledWith({ data: mockData });

  //     // Validate the result record
  //     expect(result).toBeDefined();
  //     expect(result).toEqual(mockRecord);
  //     expect(result?.id).toBe(mockRecord.id);
  //     expect(result?.name).toBe(mockData.name);
  //     expect(result?.displayName).toBe(mockData.displayName);
  //     expect(result?.description).toBe(mockData.description);

  //     // Return to the initial state
  //     // Restore the original descriptor of spied-on object
  //     createSpy.mockRestore();
  //   }
  // )
});
