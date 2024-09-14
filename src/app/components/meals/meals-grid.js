import React from 'react';
import MealItem from './meal-item';

export default function Mealsgrid({meals}) {
  return (
    <>
      <div className='flex justify-center'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 gap-y-10 p-8 justify-items-center'>
          {meals.map((meal) => (
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
