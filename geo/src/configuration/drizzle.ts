/**
 * Database Configuration
 */

import * as z from "zod";

const TABLE_PREFIX = process.env.GEO__TABLE_PREFIX
  ?? `${process.env.npm_package_name}_`;

const PostgreSQLSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "test",
    "production",
  ]).default("development"),
  GEO__DATABASE_SCHEME: z.string().default("postgresql"),
  GEO__DATABASE_USERNAME: z.string(),
  GEO__DATABASE_PASSWORD: z.string(),
  GEO__DATABASE_HOST: z.string(),
  GEO__DATABASE_PORT: z.coerce.number().default(5432),
  GEO__DATABASE_NAME: z.string(),
  DATABASE_URI: z.string().default(""),
});

type PostgreSQLSchema = z.infer<typeof PostgreSQLSchema>;

// Database Uniform Resource Identifier (URI)
// SCHEME://USERNAME:PASSWORD@HOST:PORT/NAME
process.env.DATABASE_URI = [
  process.env.GEO__DATABASE_SCHEME,
  "://", process.env.GEO__DATABASE_USERNAME,
  ":", process.env.GEO__DATABASE_PASSWORD,
  "@", process.env.GEO__DATABASE_HOST,
  ":", process.env.GEO__DATABASE_PORT,
  "/", process.env.GEO__DATABASE_NAME,
].join("");

try {
  PostgreSQLSchema.parse(process.env);
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

export default PostgreSQLSchema.parse(process.env);
export {
  PostgreSQLSchema,
  TABLE_PREFIX
};
