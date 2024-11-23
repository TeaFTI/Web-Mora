/**
 * Root Layout
 */

import { Metadata, Viewport } from 'next';

// Context
import BootstrapProvider from '@/app/_context/bootstrap';

// CSS
import '@/style/global.scss';
import './global.css';

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
