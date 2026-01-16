/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1
 */

import { eq } from "drizzle-orm";

import drizzleClient from "@/database";
import {
  ChartOfAccountType,
  chartOfAccountTypeTable,
} from "@/database/schema";

/**
 * Retrieve and return all Chart of Account Type.
 *
 * @returns A promise that resolve to an array of Chart of Account Type
 * object(s).
 */
async function retrieve({
  expand = false,
}: {
  expand?: boolean;
} = {}): Promise<ChartOfAccountType[]> {
  console.debug("Expand:", expand);

  const result = await drizzleClient.query.chartOfAccountTypeTable.findMany({
    with: {
      chartOfAccountList: expand,
    }
  });

  return result;
}

/**
 * Retrieve and return the Chart of Account Type by UUID (Universal
 * Unique IDentifier).
 *
 * @param uuid - The UUID (Universal Unique IDentifier) of the Chart of
 * Account Type.
 * @param expand - Whether to expand the Chart of Account Type relation
 * data.
 * @returns A promise that resolve to a Chart of Account Type object.
 */
async function retrieveByUuid({
  uuid,
  expand = false,
}: {
  uuid: string;
  expand?: boolean;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient.query.chartOfAccountTypeTable.findFirst({
    where: { id: uuid },
    with: expand ? { chartOfAccountList: true } : undefined,
  });
}

/**
 * Retrieve and return the Chart of Account Type by Name.
 *
 * @param name - The name of the Chart of Account Type.
 * @param expand - Whether to expand the Chart of Account Type relation
 * data.
 * @returns A promise that resolve to a Chart of Account Type object.
 */
async function retrieveByName({
  name,
  expand = false,
}: {
  name: string;
  expand?: boolean;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient.query.chartOfAccountTypeTable.findFirst({
    where: { name: name },
    with: expand ? { chartOfAccountList: true } : undefined,
  });
}

/**
 * Create and return the new Chart of Account Type.
 *
 * @param data - The data for the new Chart of Account Type.
 * @returns A promise that resolve to the created Chart of Account Type
 * object.
 */
async function create({
  data,
}: {
  data: ChartOfAccountType;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient
    .insert(chartOfAccountTypeTable)
    .values(data)
    .returning()
    .then((result) => result[0]);
}

/**
 * Update and return the Chart of Account Type by UUID.
 *
 * @param uuid - The UUID (Universal Unique IDentifier) of the Chart of
 * Account Type.
 * @param data - The data for the Chart of Account Type.
 * @returns A promise that resolve to the updated Chart of Account Type
 * object.
 */
async function updateByUuid({
  uuid,
  data,
}: {
  uuid: string;
  data: ChartOfAccountType;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient
    .update(chartOfAccountTypeTable)
    .set(data)
    .where(eq(chartOfAccountTypeTable.id, uuid))
    .returning()
    .then((result) => result[0]);
}

/**
 * Delete and return the Chart of Account Type by UUID.
 *
 * @param uuid - The UUID (Universal Unique IDentifier) of the Chart of
 * Account Type.
 * @returns A promise that resolve to the deleted Chart of Account Type
 * object.
 */
async function deleteByUuid({
  uuid,
}: {
  uuid: string;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient
    .delete(chartOfAccountTypeTable)
    .where(eq(chartOfAccountTypeTable.id, uuid))
    .returning()
    .then((result) => result[0]);
}

export {
  create,
  deleteByUuid,
  retrieve,
  retrieveByName,
  retrieveByUuid,
  updateByUuid
};

