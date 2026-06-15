/**
 * drizzle Configuration
 */

import * as z from "zod";

const TABLE_PREFIX = process.env.GEO_TABLE_PREFIX
  ?? `${process.env.npm_package_name}_`;

let DATABASE_URI: string;

const PostgreSQLSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "test",
    "production",
  ]).default("development"),
  GEO_DATABASE_SCHEME: z.string().default("postgresql"),
  GEO_DATABASE_HOST: z.string(),
  GEO_DATABASE_PORT: z.coerce.number().default(5432),
  GEO_DATABASE_USERNAME: z.string(),
  GEO_DATABASE_PASSWORD: z.string(),
  GEO_DATABASE_NAME: z.string(),
  // DATABASE_URI: z.string().default(""),
});

type PostgreSQLSchema = z.infer<typeof PostgreSQLSchema>;

try {
  PostgreSQLSchema.parse(process.env);

  // Database Uniform Resource Identifier (URI)
  // SCHEME://USERNAME:PASSWORD@HOST:PORT/NAME
  // process.env.DATABASE_URI = [
  DATABASE_URI = [
    process.env.GEO_DATABASE_SCHEME,
    "://", process.env.GEO_DATABASE_USERNAME,
    ":", process.env.GEO_DATABASE_PASSWORD,
    "@", process.env.GEO_DATABASE_HOST,
    ":", process.env.GEO_DATABASE_PORT,
    "/", process.env.GEO_DATABASE_NAME,
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
  DATABASE_URI,
  PostgreSQLSchema,
  TABLE_PREFIX
};

