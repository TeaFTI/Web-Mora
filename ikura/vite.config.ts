/**
 * Vite Configuration
 */

import { createRequire } from "node:module";
import { dirname } from "node:path";

import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

/**
 * `better-auth` requires `@noble/ciphers` v2 (it imports `managedNonce` from
 * `@noble/ciphers/utils.js`), while the `@dotenvx/dotenvx` → `eciesjs` →
 * `@ecies/ciphers` chain is locked to v1 (it imports `@noble/ciphers/utils`
 * with no extension, which only v1 exports). The two majors are installed
 * side by side: v1 at the top level (so the Node runtime / drizzle / dotenvx
 * resolve it), and v2 nested under `better-auth`. The bundler flattens to the
 * top-level package, so point it explicitly at better-auth's v2 — the only
 * `@noble/ciphers` consumer that is actually bundled.
 */
const require = createRequire(import.meta.url);
const betterAuthNobleCiphers = dirname(
  require.resolve("@noble/ciphers/utils.js", {
    paths: [dirname(require.resolve("better-auth"))],
  }),
);

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@noble/ciphers": betterAuthNobleCiphers,
    },
  },
  plugins: [
    // TanStack
    tanstackStart(),
    // tailwindcss
    tailwindcss(),
    // Nitro
    nitro(),
    // Vite React
    // Note: React's Vite plugin must come after Start's Vite plugin.
    viteReact(),
  ],
})
