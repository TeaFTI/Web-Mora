/**
 * Database Seed
 */

import { PostgreSQLConfiguration } from "@/configuration/database";

const NODE_ENV = PostgreSQLConfiguration.NODE_ENV;
const DATABASE_URI = PostgreSQLConfiguration.DATABASE_URI;

console.debug(`node.js Environment: ${NODE_ENV}`);
console.debug(`Database URI: ${DATABASE_URI}`);
