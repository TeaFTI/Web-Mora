/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1
 */

import drizzleClient from "@/database";
import {
  ChartOfAccountType,
} from "@/database/schema";

async function retrieve({
  expand = false,
}: {
  expand?: boolean;
} = {}): Promise<ChartOfAccountType[]> {
  return drizzleClient.query.chartOfAccountTypeTable.findMany();
}

async function retrieveByUuid({
  uuid
}: {
  uuid: string;
}): Promise<ChartOfAccountType | undefined> {
  return await drizzleClient.query.chartOfAccountTypeTable.findFirst({
    where: { id: uuid }
  });
}

export {
  retrieve,
  retrieveByUuid
};
