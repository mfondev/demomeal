import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Faq from '../faq'
import NavLink from './nav-link'

export default function Nav() {
  return (
    <nav>
      <header className='flex items-center justify-between p-4 sm:p-8'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='meal logo'
            width={100}
            height={100}
            className='w-16 sm:w-24'
          />
        </Link>
        <NavLink />
      </header>
    </nav>
  )
}
