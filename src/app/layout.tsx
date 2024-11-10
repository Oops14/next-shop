import type { Metadata } from 'next'

import { isAuthenticated } from '@/modules/auth'

import Header from '@/components/header/Header'

import Footer from '@/shared/footer/Footer'

import '../assets/styles/reset.scss'
import '../assets/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { value } = await isAuthenticated()

  return (
    <html lang="en">
      <body>
        <Header isAuthenticated={value} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
