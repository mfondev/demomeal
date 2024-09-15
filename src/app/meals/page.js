import React from 'react'
import Meals from './Loading/Meals'
import { Suspense } from 'react'
import MainHeader from '../components/header/main-header'

export const metadata = {
  title: 'All meals',
  description: 'Meals shared by vibrant community',
}

export default function MealsPage() {
  // console.log('Component mounted')

  return (
    <>
      <MainHeader />
      <main>
        <Suspense
          fallback={
            <p className='text-red-950 text-center animate-loading'>
              Loading...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
