/**
 * Validate UUID (Universal Unique IDentifier) Utility
 */

function isValidUuid(uuid: string, isNil: boolean = false): boolean {
  // Will match Nil UUID (RFC 4122, Version 1-5)
  const uuidNilRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  // Avoid match Nil UUID
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  return isNil ? uuidNilRegex.test(uuid) : uuidRegex.test(uuid);
};

export { isValidUuid };
