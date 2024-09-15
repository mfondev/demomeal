'use client'

import ImagePicker from '@/app/components/image/image-picker'
import MealsForm from '@/app/components/meals/mealsFormStatus'
import { shareMeal } from '@/lib/action'
import { useFormState } from 'react-dom'

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null })

  return (
    <>
      <header className='text-center space-y-4'>
        <h1 className='text-4xl font-bold text-gray-900'>
          Share your <span className='text-[#f54329]'>favorite meal</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <main>
        <form action={formAction} className='max-w-lg mx-auto space-y-6 p-3 sm:p-0'>
          <h2 className='text-3xl font-bold text-center mb-6'>
            Submit Your Recipe
          </h2>

          <div className='space-y-4'>
            <p>
              <label
                htmlFor='name'
                className='block text-lg font-semibold text-gray-700'
              >
                Your name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full border border-gray-300 rounded-lg p-2 mt-1'
              />
            </p>

            <p>
              <label
                htmlFor='email'
                className='block text-lg font-semibold text-gray-700'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full border border-gray-300 rounded-lg p-2 mt-1'
              />
            </p>
          </div>

          <p>
            <label
              htmlFor='title'
              className='block text-lg font-semibold text-gray-700'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              required
              className='w-full border border-gray-300 rounded-lg p-2 mt-1'
            />
          </p>

          <p>
            <label
              htmlFor='summary'
              className='block text-lg font-semibold text-gray-700'
            >
              Short Summary
            </label>
            <input
              type='text'
              id='summary'
              name='summary'
              required
              className='w-full border border-gray-300 rounded-lg p-2 mt-1'
            />
          </p>

          <p>
            <label
              htmlFor='instructions'
              className='block text-lg font-semibold text-gray-700'
            >
              Instructions
            </label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
              className='w-full border border-gray-300 rounded-lg p-2 mt-1'
            ></textarea>
          </p>

          <div className='mt-4 mb-4'>
            <ImagePicker label='Your image' name='image' />
          </div>


          {state.message && <p className='text-red-600'>{state.message}</p>}

          <div className='text-center'>
            <p><MealsForm /></p>
          </div>
        </form>
      </main>
    </>
  )
}
