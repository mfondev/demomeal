'use client'

import React, { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()
  function handleImagePick(params) {
    imageInputRef.current.click()
  }

  function handleImageChange(e) {
    const file = e.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
     setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className='flex flex-col items-center space-y-4'>
      <label
        htmlFor={name}
        className='block text-lg font-semibold text-gray-700'
      >
        {label}
      </label>
      <div>
        <div>
          {!pickedImage && <p>No image Picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='Image selected by user'
              width={200}
              height={200}
            />
          )}
        </div>
        <input
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          className='hidden'
          required
        />
        <button
          type='button'
          onClick={handleImagePick}
          className='px-3 py-1 bg-[#f54329] text-white  border rounded-full border-black shadow-xl text-lg font-semibold'
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
