import Image from 'next/image'
import ImageSlider from './components/image/imageSlider'
import Link from 'next/link'
import Faq from './components/faq'
import { Kanit } from '@next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

import { Fascinate_Inline } from '@next/font/google'

const fascinateInline = Fascinate_Inline({
  subsets: ['latin'],
  weight: '400', 
})

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center  gap-30 '>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
          <ImageSlider />
          <div className='space-y-6 text-center'>
            <article>
              <h1
                className={`text-7xl font-bold text-[#2e2e2e] mb-3 ${fascinateInline.className}`}
              >
                Tasty Recipe App
              </h1>
              <p className={`text-2xl text-gray-300 ${kanit.className}`}>
                Find your Next Favorite Dish with Tasty.
              </p>
            </article>

            <div className='flex gap-6 justify-center '>
              <Link
                href='/community'
                className='px-6 py-2 bg-[#f54329] text-white rounded-full border border-black shadow-xl '
              >
                Community
              </Link>
              <Link
                href='/meals'
                className='px-6 py-2 bg-[#f54329] text-white rounded-full border border-black shadow-xl'
              >
                Explore meals
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Faq />
    </>
  )
}
