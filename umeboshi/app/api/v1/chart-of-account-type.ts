/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1
 */

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
  return drizzleClient.query.chartOfAccountTypeTable.findMany();
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
    where: { id: uuid }
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
    where: { name: name }
  });
}

async function create({
  data,
}: {
  data: ChartOfAccountType;
}) {
  const chartOfAccountTypeData = await retrieveByName({
    name: data.name,
  });

  if (!chartOfAccountTypeData) {
    return await drizzleClient
      .insert(chartOfAccountTypeTable)
      .values(data)
      .returning()
      .then((result) => result[0]);
  }

  return chartOfAccountTypeData;
}

export {
  create,
  retrieve,
  retrieveByName,
  retrieveByUuid
};

