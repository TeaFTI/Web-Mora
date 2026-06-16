/**
 * Redis Configuration
 */

import * as z from "zod";

const RedisSchema = z.object({
  GEO_REDIS_SCHEME: z.string().default("redis"),
  GEO_REDIS_HOST: z.string(),
  GEO_REDIS_PORT: z.coerce.number().default(6379),
  GEO_REDIS_USERNAME: z.string().default("default"),
  GEO_REDIS_PASSWORD: z.string(),
});

type RedisSchema = z.infer<typeof RedisSchema>;
