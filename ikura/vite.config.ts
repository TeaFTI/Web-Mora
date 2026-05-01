/**
 * Vite Configuration
 */

import { defineConfig } from "vite"

import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import viteReact from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    // TanStack
    tanstackStart(),
    tanstackRouter({
      // routesDirectory: "./src/route",
    }),
    // tailwindcss
    tailwindcss(),
    // Vite React
    // Note: React's Vite plugin must come after Start's Vite plugin.
    viteReact(),
  ],
})
