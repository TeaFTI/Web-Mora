/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1 Route
 */

import { chartOfAccountType } from "@api/v1";

async function GET(request: Request) {
  try {
    const expandRelation = /expand\/?$/.test(request.url);

    return Response.json(await chartOfAccountType.retrieve({
      expand: expandRelation,
    }));
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to retrieve Chart of Account Type data.",
      { status: 500 }
    );
  }
}

export { GET };
