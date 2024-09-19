import React from 'react'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealSlug)

  if (!meal) {
    notFound()
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}
export default async function MealDetail({ params }) {
  const meal = await getMeal(params.mealSlug)
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  console.log(meal);
  console.log('mounted');
  
  if (!meal) {
    notFound()
  }

  return (
    <>
      <header className='flex flex-col items-center justify-center text-center space-y-6 mt-8'>
        <div>
          <Image
            src={meal.image}
            alt={meal.title}
            width={300}
            height={300}
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>{meal.title}</h1>
          <p className='text-lg text-gray-700'>
            by{' '}
            <a
              href={`mailto:${meal.creator_email}`}
              className='underline text-[#f54329]'
            >
              {meal.creator_email}
            </a>{' '}
            <span className='text-gray-900'>{meal.creator}</span>
          </p>
          <p className='text-lg text-gray-300'>{meal.summary}</p>
        </div>
      </header>

      <main className='px-6 mt-8'>
        <p
          className='text-lg leading-relaxed '
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  )
}
