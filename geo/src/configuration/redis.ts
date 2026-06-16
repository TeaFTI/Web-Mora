/**
 * Redis Configuration
 */

import * as z from "zod";

let REDIS_URI: string;

const RedisSchema = z.object({
  MORA_REDIS_SCHEME: z.string().default("redis"),
  MORA_REDIS_HOST: z.string(),
  MORA_REDIS_PORT: z.coerce.number().default(6379),
  MORA_REDIS_USERNAME: z.string().default("default"),
  MORA_REDIS_PASSWORD: z.string(),
});

type RedisSchema = z.infer<typeof RedisSchema>;

try {
  RedisSchema.parse(process.env);

  // Redis Uniform Resource Identifier (URI)
  // SCHEME://USERNAME:PASSWORD@HOST:PORT
  REDIS_URI = [
    process.env.MORA_REDIS_SCHEME,
    "://", process.env.MORA_REDIS_USERNAME,
    ":", process.env.MORA_REDIS_PASSWORD,
    "@", process.env.MORA_REDIS_HOST,
    ":", process.env.MORA_REDIS_PORT,
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
  REDIS_URI,
  RedisSchema
};
