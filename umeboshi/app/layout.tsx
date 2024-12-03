/**
 * Root Layout
 */

import { Metadata, Viewport } from "next";
import reactArrayToTree from 'react-array-to-tree';

// Context

// Component

// CSS

// SCSS
import "@/app/global.scss";

export const metadata: Metadata = {
  title: {
    template: "%s 🌼 Umebosh 🌼",
    default: "🌼 Umebosh 🌼",
  },
  description: "🌼 Umebosh 🌼",
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
