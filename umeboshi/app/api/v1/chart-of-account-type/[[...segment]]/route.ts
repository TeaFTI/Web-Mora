/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1 Route
 */

import { NextRequest } from "next/server";

import { chartOfAccountType } from "@api/v1";

import { isValidUuid } from "@/library/validate-uuid";

/**
 * The GET Request Handler, Retrieve.
 *
 * @param request - The request object is a NextRequest object, which is
 * an extension of the Web Request API.
 * @param params - A promise that resolves to an object containing the
 * dynamic route parameters for the current route.
 * @returns The promise response resolve to the data for the route.
 */
async function GET(request: NextRequest, {
  params
}: {
  params: Promise<{ segment?: string[] }>
}) {
  // Parse Identifier
  const segmentList = (await params).segment;
  console.debug("Segment List:", segmentList);

  try {
    const expandRelation = segmentList?.at(-1) === "expand";
    const identifier = segmentList?.[0] !== "expand"
      ? segmentList?.[0] : undefined;

    if (!identifier) {
      return Response.json(await chartOfAccountType.retrieve({
        expand: expandRelation
      }));
    }

    if (isValidUuid(identifier)) {
      return Response.json(await chartOfAccountType.retrieveByUuid({
        uuid: identifier,
        expand: expandRelation,
      }));
    }

    return Response.json(await chartOfAccountType.retrieveByName({
      name: identifier,
      expand: expandRelation,
    }));
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to retrieve Chart of Account Type.",
      { status: 500 }
    );
  }
}

/**
 * The POST Request Handler, Create.
 *
 * @param request - The request object is a NextRequest object, which is
 * an extension of the Web Request API.
 * @returns The promise response resolve to the data for the route.
 */
async function POST(request: NextRequest) {
  try {
    return Response.json(
      await chartOfAccountType.create({ data: await request.json() }),
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to create Chart of Account Type.",
      { status: 500 }
    );
  }
}

export { GET, POST };
