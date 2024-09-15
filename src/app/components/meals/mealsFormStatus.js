'use client'

import { useFormStatus } from 'react-dom'

export default function MealsForm() {
  const { pending } = useFormStatus()


  return (
    <button
      disabled={pending}
      className='px-6 py-2 bg-[#f54329] text-white rounded-full border border-black shadow-xl'
    >
      {pending ? 'Submitting...' : 'Share Recipe'}
    </button>
  )
}
