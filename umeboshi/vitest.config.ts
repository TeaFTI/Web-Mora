/**
 * Vitest Configuration
 */

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    pool: "forks",
    include: [
      "./test/**/*.test.ts",
    ],
    coverage: {
      provider: "v8",
    },
  },
});
