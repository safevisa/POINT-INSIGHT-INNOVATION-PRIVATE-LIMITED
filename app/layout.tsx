import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unmanned Retail SaaS - POINT INSIGHT INNOVATION',
  description: 'Complete SaaS solution for automated retail operations',
  keywords: 'unmanned retail, vending machine, SaaS, automation, retail technology',
  authors: [{ name: 'POINT INSIGHT INNOVATION PRIVATE LIMITED' }],
  openGraph: {
    title: 'Unmanned Retail SaaS - POINT INSIGHT INNOVATION',
    description: 'Complete SaaS solution for automated retail operations',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
