import type { Metadata } from 'next'
import './globals.css'
import NavbarWrapper from '../components/miniCompo/NavWrapper';
import SessionProviderWrapper from '../components/basicComponents/SessionProviderWrapper';

//db
import { dbConnect } from '../lib/mongo'

export const metadata: Metadata = {
  title: 'DSABOOTCAMP',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/favIcon.ico',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  await dbConnect();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favIcon.ico" type="image/x-icon" />
      </head>
      <body>
        <NavbarWrapper />
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  )
}
