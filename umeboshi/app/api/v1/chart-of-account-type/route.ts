/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1 Route
 */

import drizzleClient from "@/database";
import { ChartOfAccountType } from "@/database/schema";

async function GET(request: Request) {
  try {
    return Response.json(await retrieve());
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to retrieve Chart of Account Type data.",
      { status: 500 }
    );
  }
}

async function retrieve(): Promise<ChartOfAccountType[]> {
  return drizzleClient.query.chartOfAccountTypeTable.findMany();
}

export { GET };
