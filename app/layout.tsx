import type { Metadata } from 'next'
import './globals.css'
import NavbarWrapper from '../components/miniCompo/NavWrapper'

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
        <NavbarWrapper /> {/* Conditionally renders Navbar */}
        {children}
      </body>
    </html>
  )
}
