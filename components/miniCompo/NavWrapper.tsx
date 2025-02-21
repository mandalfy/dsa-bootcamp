'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../basicComponents/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  
  if (pathname === '/profile') return null

  return <Navbar />
}
