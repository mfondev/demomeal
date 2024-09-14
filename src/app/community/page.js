import Image from 'next/image'

import mealIcon from '@/assets/icon/meal.png'
import communityIcon from '@/assets/icon/community.png'
import eventsIcon from '@/assets/icon/events.png'

export default function CommunityPage() {
  return (
    <>
      <header className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          One shared passion: <span className='text-[#f54329]'>Food</span>
        </h1>
        <p className='text-lg text-gray-300'>
          Join our community and share your favorite recipes!
        </p>
      </header>

      <main className='flex flex-col items-center justify-center py-16 text-center'>
        <h2 className='text-3xl font-semibold mb-8'>Community Perks</h2>

        <ul className='grid grid-cols-1 gap-8'>
          <li className='flex flex-col items-center'>
            <Image
              src={mealIcon}
              alt='A delicious meal'
              // width={64}
              // height={64}
            />
            <p className='text-2xl font-medium mt-4'>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image
              src={communityIcon}
              alt='A crowd of people, cooking'
              // width={64}
              // height={64}
            />
            <p className='text-2xl backdrop:font-medium mt-4'>
              Find new friends & like-minded people
            </p>
          </li>
          <li className='flex flex-col items-center'>
            <Image
              src={eventsIcon}
              alt='A crowd of people at a cooking event'
              // width={64}
              // height={64}
            />
            <p className='text-2xl font-medium mt-4'>
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  )
}
