/**
 * Database
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

import { DATABASE_URI } from "~/configuration/drizzle";

import {
  accountRelationList,
  accountTransactionRelationList,
  addressRelationList,
  chartOfAccountRelationList,
  cityRelationList,
  contactRelationList,
  contractItemRelationList,
  contractRelationList,
  countryCurrencyRelationList,
  divisionRelationList,
  journalRelationList,
  profileAddressRelationList,
  profileEmailRelationList,
  profileTelephoneNumberRelation,
  propertyRelationList,
  transactionRelationList,
  userAccountRelationList,
  userContractRelationList,
  userRelationList
} from "./schema";

const pgClient = new Client({
  connectionString: DATABASE_URI,
});

const pgPool = new Pool({
  connectionString: DATABASE_URI,
  max: 5,
})

// Combined relations from schema exports
const relationList = {
  ...accountRelationList,
  ...accountTransactionRelationList,
  ...addressRelationList,
  ...chartOfAccountRelationList,
  ...cityRelationList,
  ...contactRelationList,
  ...contractItemRelationList,
  ...contractRelationList,
  ...countryCurrencyRelationList,
  ...divisionRelationList,
  ...journalRelationList,
  ...profileAddressRelationList,
  ...profileEmailRelationList,
  ...profileTelephoneNumberRelation,
  ...propertyRelationList,
  ...transactionRelationList,
  ...userAccountRelationList,
  ...userContractRelationList,
  ...userRelationList,
};

const drizzleClient = drizzle({
  client: pgPool,
  // drizzle 1.0.0-beta.22 Update
  relations: relationList,
  logger: true,
});

export { drizzleClient, pgClient, pgPool };
export type DrizzleClient = typeof drizzleClient;
