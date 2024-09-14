import React from 'react'
import { getMeals } from '@/lib/meals'
// import Mealsgrid from '../meals-grid'
import Mealsgrid from '@/app/components/meals/meals-grid'

export default async function Meals() {
  const meals = await getMeals()

  return (
    <>
      <Mealsgrid meals={meals} />
    </>
  )
}
