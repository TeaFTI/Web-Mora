/**
 * Chart of Account Type
 * API (Application Programming Interface) Version 1 Route
 */

async function GET(
  request: Request,
  {
    params
  }: {
    params: Promise<{
      chartOfAccountTypeId?: string
    }>
  }
) {
  console.debug("Request:", request);
  console.debug("Parameter:", await params);

  const { chartOfAccountTypeId } = await params;

  try {
    const expandRelation = /expand\/?$/.test(request.url);
    console.debug("Expand Relation:", expandRelation);

    if (chartOfAccountTypeId) {
      return new Response(
        `Chart of Account Type By UUID: ${chartOfAccountTypeId?.[0]}`,
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      "Failed to retrieve Chart of Account Type data.",
      { status: 500 }
    );
  }
}

export { GET };
