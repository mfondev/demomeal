'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink() {
  const path = usePathname()

  return (
    <div className='flex items-center gap-4'>
      <Link
        href='/meals'
        className={`text-2xl ${
          path.startsWith('/meals') ? 'text-[#f54329]' : 'text-black '
        }`}
      >
        Find Meals
      </Link>
      <Link
        href='/community'
        className={`text-2xl ${
          path.startsWith('/community') ? 'text-[#f54329]' : 'text-black'
        }`}
      >
        Community
      </Link>
    </div>
  )
}
