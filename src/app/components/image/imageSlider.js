'use client'

import React from 'react';
import Image from 'next/image';
import { useEffect , useState} from 'react';
import beeftacos from '@/assets/beef-tacos.jpg'
import caesarsalad from '@/assets/caesar-salad.jpg'
import chickencurry from '@/assets/chicken-curry.jpg'
import chocolatebrownie from '@/assets/chocolate-brownie.jpg'
import falafelwrap from '@/assets/falafel-wrap.jpg'
import lemoncheesecake from '@/assets/lemon-cheesecake.jpg'
import lobsterbisque from '@/assets/lobster-bisque.jpg'
import maccheese from '@/assets/mac-and-cheese.jpg'
import steakfrites from '@/assets/steak-frites.jpg'

const images = [
 {image: beeftacos, alt: 'A delicious beef tacos'},
 {image: caesarsalad, alt: 'A delicious'},
 {image: chickencurry, alt: 'A delicious'},
 {image: chocolatebrownie, alt: 'A delicious'},
 {image: falafelwrap, alt: 'A delicious'},
 {image: lemoncheesecake, alt: 'A delicious'},
 {image: lobsterbisque, alt: 'A delicious'},
 {image: maccheese, alt: 'A delicious'},
 {image: steakfrites, alt: 'A delicious'},
]

export default function ImageSlider() {
   const [currentImageIndex, setCurrentImageIndex] = useState(0)

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImageIndex((prevIndex) =>
         prevIndex < images.length - 1 ? prevIndex + 1 : 0
       )
     }, 5000)

     return () => clearInterval(interval)
   }, [])
  return (
    <>
      {/* <div className='mt-8 relative'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={image.alt}
            className={`slideshow ${
              index === currentImageIndex
                ? 'slideshow-active'
                : 'slideshow-hidden'
            }`}
          />
        ))}
      </div> */}
      {/* <h1>hey</h1> */}
      <div className='mt-8 relative h-80 w-80'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={image.alt}
            className={`slideshow ${
              index === currentImageIndex
                ? 'slideshow-active'
                : 'slideshow-hidden'
            }`}
          />
        ))}
      </div>
    </>
  )
}
