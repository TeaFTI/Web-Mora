/**
 * Root Layout
 */

import { Metadata, Viewport } from "next";

// Context
import BootstrapProvider from "@/app/_context/bootstrap/bootstrap";
import { ColorModeProvider } from "@/app/_context/bootstrap/color-mode";

// Component
import ColorMode from "@/app/_component/bootstrap/color-mode";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" data-bs-theme="system">
      <body>
        <BootstrapProvider>
          <ColorModeProvider>
            <ColorMode />
            {children}
          </ColorModeProvider>
        </BootstrapProvider>
      </body>
    </html>
  )
}
