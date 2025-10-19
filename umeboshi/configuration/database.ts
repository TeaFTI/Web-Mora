/**
 * Database Configuration
 */

import * as z from "zod";

const PostgreSQLSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "production",
  ]).default("development"),
  DATABASE_SCHEME: z.string().default("postgresql"),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_NAME: z.string(),
  DATABASE_URI: z.string().default(""),
});

export type PostgreSQLSchema = z.infer<typeof PostgreSQLSchema>;

process.env.DATABASE_URI = [
  process.env.DATABASE_SCHEME, "://",
  process.env.DATABASE_USERNAME, ":", process.env.DATABASE_PASSWORD,
  "@", process.env.DATABASE_HOST, ":", process.env.DATABASE_PORT,
  "/", process.env.DATABASE_NAME,
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
