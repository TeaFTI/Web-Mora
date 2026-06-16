import { drizzleClient } from "../client";
import { EmailType } from "../schema";

/**
 * Retrieve and return the list of email(s).
 *
 * @returns {Promise<EmailType[]>} A promise that resolve to an array of
 * EmailType object(s).
 */
async function retrieve(): Promise<EmailType[]> {
  return await drizzleClient.query.emailTable.findMany();
}

/**
 * Retrieve and return an email with the given Universally Unique
 * IDentifier (UUID).
 *
 * @returns {Promise<EmailType | undefined>} A promise that resolve to a
 * EmailType object or undefined.
 */
async function retrieveById({
  id,
}: {
  id: string;
}): Promise<EmailType | undefined> {
  return await drizzleClient.query.emailTable.findFirst({
    where: { id: id },
  });
}

export {
  retrieve,
  retrieveById
};

