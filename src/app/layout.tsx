import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chipua - Rethinking Youth Football in Kenya',
  description: 'Chipua is a Kenya-based social enterprise committed to transforming the local football landscape through capacity building, data analytics, and inclusive representation.',
  keywords: 'football, Kenya, youth development, coaching, sports analytics, grassroots football',
  authors: [{ name: 'Chipua' }],
  openGraph: {
    title: 'Chipua - Rethinking Youth Football in Kenya',
    description: 'Transforming youth football through capacity building, data analytics, and inclusive representation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}