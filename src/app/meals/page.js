import React from 'react'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import Meals from './Loading/Meals'
import { Suspense } from 'react'

export default function MealsPage() {
  return (
    <>
      <header className='flex flex-col items-center justify-center  text-center mb-8'>
        <div>
          <h1 className='text-4xl font-bold mb-4'>
            Delicious meals, created{' '}
            <span className='text-[#f54329]'>by you.</span>
          </h1>
          <p className='text-lg text-gray-300'>
            Choose your favorite recipe and cook it yourself
          </p>
        </div>

        <p className='mt-6'>
          <Link
            href='/meals/share'
            className='px-6 py-2 bg-[#f54329] text-white rounded-full border border-black shadow-xl'
          >
            {' '}
            Share your Favorite Recipe
          </Link>
        </p>
      </header>
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
