/**
 * Database
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

import { POSTGRESQL_URI } from "~/configuration/drizzle";

import { accountRelationList } from "./schema/account";
import { accountTransactionRelationList } from "./schema/account-transaction";
import { addressRelationList } from "./schema/address";
import { chartOfAccountRelationList } from "./schema/chart-of-account";
import { cityRelationList } from "./schema/city";
import { contactRelationList } from "./schema/contact";
import { contractRelationList } from "./schema/contract";
import { contractItemRelationList } from "./schema/contract-item";
import { countryCurrencyRelationList } from "./schema/country-currency";
import { divisionRelationList } from "./schema/division";
import { journalRelationList } from "./schema/journal";
import { profileAddressRelationList } from "./schema/profile-address";
import { profileEmailRelationList } from "./schema/profile-email";
import { profileTelephoneNumberRelation } from "./schema/profile-telephone-number";
import { propertyRelationList } from "./schema/property";
import { transactionRelationList } from "./schema/transaction";
import { userRelationList } from "./schema/user";
import { userAccountRelationList } from "./schema/user-account";
import { userContractRelationList } from "./schema/user-contract";

const pgClient = new Client({
  connectionString: POSTGRESQL_URI,
});

const pgPool = new Pool({
  connectionString: POSTGRESQL_URI,
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
