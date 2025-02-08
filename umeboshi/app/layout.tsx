/**
 * Root Layout
 */

import { Metadata, Viewport } from "next";
import reactArrayToTree from 'react-array-to-tree';

// Context

// Component

// CSS

// SCSS
import "@/app/global.css";
import { siteConfiguration } from "@/configuration/site";

export const metadata: Metadata = {
  title: {
    template: `%s 🌼 ${siteConfiguration.name} 🌼`,
    default: `🌼 ${siteConfiguration.name} 🌼`,
  },
  description: `🌼 ${siteConfiguration.description} 🌼`,
  icons: {
    icon: "/res/img/icon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const ProviderTree = reactArrayToTree([
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ProviderTree>
          {children}
        </ProviderTree>
      </body>
    </html>
  )
}
