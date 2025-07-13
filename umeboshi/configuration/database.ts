/**
 * Database Configuration
 */

import { z } from "zod";

const PostgreSQLSchema = z.object({
  DATABASE_SCHEME: z.string().default("postgresql"),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_NAME: z.string(),
});

export type PostgreSQLSchema = z.infer<typeof PostgreSQLSchema>;

export const PostgreSQLConfiguration = PostgreSQLSchema.parse(process.env);
