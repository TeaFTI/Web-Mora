/**
 * Vite Configuration
 */

import { defineConfig } from "vite"

import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart(),
    tanstackRouter({
      routesDirectory: 'src/route',
    }),
  ],
})
