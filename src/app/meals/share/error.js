'use client'

import React from 'react'

export default function Error({ error }) {
  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
        <h1 className='text-4xl font-bold mb-4'>An error occurred!</h1>
        <p className='text-xl'>Failed to create meal</p>
      </main>
    </>
  )
}
