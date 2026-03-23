// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Translation from '@/ui/Translation'
import './globals.css'

const inter = Inter({ subsets: ['latin'],   preload: false })

export const metadata: Metadata = {
  title: 'Portfolio - Cédric Kuchen',
  description: 'Portfolio professionnel avec animations et carousel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Translation />
        {children}
      </body>
    </html>
  )
}