import type { Metadata } from 'next'
import './globals.css'

import Navbar from '../components/basicComponents/Navbar'

export const metadata: Metadata = {
  title: 'GEEKSFORGEEKS',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/favIcon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favIcon.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
