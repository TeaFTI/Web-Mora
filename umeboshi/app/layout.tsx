/**
 * Root Layout
 */

import { Metadata, Viewport } from 'next';
// import Script from 'next/script';

// Context
import BootstrapProvider from '@/app/_context/bootstrap';

// SCSS
import "@/app/global.scss";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: {
    template: '%s 🌼 Umebosh 🌼',
    default: '🌼 Umebosh 🌼',
  },
  description: '🌼 Umebosh 🌼',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <BootstrapProvider>
          {children}
        </BootstrapProvider>
      </body>
    </html>
  )
}
