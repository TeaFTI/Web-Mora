import drizzleClient from "..";
import { userTable, UserType } from "../schema";

/**
 * Retrieve and return the list of user(s).
 *
 * @returns {Promise<UserType[]>} A promise that resolve to an array of
 * UserType object(s).
 */
async function retrieve({
  expand = false,
}: {
  expand?: boolean;
}): Promise<UserType[]> {
  return await drizzleClient.query.userTable.findMany({
    with: expand ? {
      profile: true,
    } : undefined,
  });
}

/**
 * Retrieve and return a user with the given Universally Unique
 * IDentifier (UUID).
 *
 * @returns {Promise<UserType | undefined>} A promise that resolve to a
 * UserType object or undefined.
 */
async function retrieveById({
  id,
}: {
  id: string;
}): Promise<UserType | undefined> {
  return await drizzleClient.query.userTable.findFirst({
    where: { id: id },
  });
}

/**
 * Retrieve and return a user with the given username.
 *
 * @returns {Promise<UserType | undefined>} A promise that resolve to a
 * UserType object or undefined.
 */
async function retrieveByUsername({
  username,
}: {
  username: string;
}): Promise<UserType | undefined> {
  return await drizzleClient.query.userTable.findFirst({
    where: { username: username },
  });
}

/**
 * Create and return a new user with the given data.
 *
 * @returns {Promise<UserType>} A promise that resolve to a UserType
 * object.
 */
async function create({
  data,
}: {
  data: Omit<UserType, "id">;
}): Promise<UserType> {
  let userData = await retrieveByUsername({
    username: data.username,
  });

  if (!userData) {
    const createUser = await drizzleClient
      .insert(userTable)
      .values(data)
      .returning();

    return createUser[0];
  } else {
    throw new Error("User already exist.");
  }
}

export {
  create,
  retrieve,
  retrieveById,
  retrieveByUsername
};

