import Link from 'next/link'
import Image from 'next/image'

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article>
      <header>
        <div>
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className='rounded-md'
          />
        </div>
        <div>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <p className='text-gray-500'>by {creator}</p>
        </div>
      </header>
      <div className='mt-4'>
        <p className='w-80'>Summary: {summary}</p>
        <div className='mt-4'>
          <Link
            href={`/meals/${slug}`}
            className='px-6 py-2 bg-[#f54329] text-white rounded-full border border-black shadow-xl'
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
