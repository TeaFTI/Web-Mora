/**
 * drizzle Configuration
 */

import * as z from "zod";

let POSTGRESQL_URI: string;

const PostgreSQLSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "test",
    "production",
  ]).default("development"),
  MORA_POSTGRESQL_SCHEME: z.string().default("postgresql"),
  MORA_POSTGRESQL_HOST: z.string(),
  MORA_POSTGRESQL_PORT: z.coerce.number().default(5432),
  MORA_POSTGRESQL_USERNAME: z.string(),
  MORA_POSTGRESQL_PASSWORD: z.string(),
  MORA_POSTGRESQL_NAME: z.string(),
  // DATABASE_URI: z.string().default(""),
});

type PostgreSQLSchema = z.infer<typeof PostgreSQLSchema>;

try {
  PostgreSQLSchema.parse(process.env);

  // Database Uniform Resource Identifier (URI)
  // SCHEME://USERNAME:PASSWORD@HOST:PORT/NAME
  // process.env.DATABASE_URI = [
  POSTGRESQL_URI = [
    process.env.MORA_POSTGRESQL_SCHEME,
    "://", process.env.MORA_POSTGRESQL_USERNAME,
    ":", process.env.MORA_POSTGRESQL_PASSWORD,
    "@", process.env.MORA_POSTGRESQL_HOST,
    ":", process.env.MORA_POSTGRESQL_PORT,
    "/", process.env.MORA_POSTGRESQL_NAME,
  ].join("");
} catch (error) {
  if (error instanceof z.ZodError) {
    let message = "\nMissing Required Environment Variable:\n";
    error.issues.forEach((issue) => {
      message += `- ${issue.path}: ${issue.message}\n`;
    });
    const errorMessage = new Error(message);
    errorMessage.stack = "";
    throw errorMessage;
  } else {
    console.error(`Unexpected Error: ${error}`);
  }
}

export {
  POSTGRESQL_URI,
  PostgreSQLSchema
};

