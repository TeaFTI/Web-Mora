import { drizzleClient } from "../client";
import { Email } from "../schema/email";

/**
 * Retrieve and return the list of email(s).
 *
 * @returns {Promise<Email[]>} A promise that resolve to an array of
 * Email object(s).
 */
async function retrieve(): Promise<Email[]> {
  return await drizzleClient.query.emailTable.findMany();
}

/**
 * Retrieve and return an email with the given Universally Unique
 * IDentifier (UUID).
 *
 * @returns {Promise<Email | undefined>} A promise that resolve to a
 * Email object or undefined.
 */
async function retrieveById({
  id,
}: {
  id: string;
}): Promise<Email | undefined> {
  return await drizzleClient.query.emailTable.findFirst({
    where: { id: id },
  });
}

export {
  retrieve,
  retrieveById
};

