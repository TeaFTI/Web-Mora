/**
 * NEXT.JS Configuration
 */

import type { NextConfig } from "next";

// const path = require('path');

const isProduction = process.env.NODE_ENV === "production";

const internalHost = process.env.TAURI_DEV_HOST || "localhost";

interface WebpackRuleType {
  test: {
    test: (pattern: string) => any;
  }
}

/*
 * Sass
 */
const sassOption = {
  includePaths: ["app"],
  implementation: "sass-embedded",
}

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'github.com',
  //     },
  //   ],
  // },

  /*
   * TAURI
   */
  // Ensure Next.js uses SSG instead of SSR
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  // Note: This feature is required to use the Next.js Image component in SSG mode.
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
  images: {
    unoptimized: true,
  },
  // Configure assetPrefix or else the server won't properly resolve your assets.
  assetPrefix: isProduction ? undefined : `http://${internalHost}:3000`,

  /*
   * Sass
   */
  sassOptions: {
    ...sassOption,
  },

  /*
   * webpack
   */
  webpack(config) {
    /*
    * SVGR (Scalable Vector Graphic Raw) Webpack Configuration
    */
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: WebpackRuleType) =>
      rule.test?.test?.(".svg"),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  /*
   * Experimental
   */
  experimental: {
  },
};

export default nextConfig;
