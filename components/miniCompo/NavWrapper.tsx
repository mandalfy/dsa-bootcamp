'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../basicComponents/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  
  if (pathname === '/profile') return null
  if (pathname === '/register') return null
  if (pathname === '/') return null

  return <Navbar />
}
