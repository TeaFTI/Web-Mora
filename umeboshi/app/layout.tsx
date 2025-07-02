/**
 * Root Layout
 */

import { Metadata, Viewport } from "next";
import reactArrayToTree from "react-array-to-tree";

// Context
import { ThemeProvider } from "@/app/_context/shadcn/theme-provider";

// Component
import { siteConfiguration } from "@/configuration/site";

// CSS
import "@/app/global.css";

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
  <ThemeProvider
    key="shadcn-theme-provider"
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  />
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProviderTree>
          {children}
        </ProviderTree>
      </body>
    </html>
  )
}
