import { supabase } from './supabaseClient'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

export const getMeals = async () => {
  const { data, error } = await supabase
    .from('meals')
    .select(
      'id, slug, title, summary, instructions, creator, creator_email, image'
    )

  if (error) {
    console.error('Error fetching meals:', error)
    return []
  }

  return data.map((item) => ({
    ...item,
    image: item.image.replace(/['"]/g, '').trim(),
  }))
}

export const getMeal = async (slug) => {
  const { data, error } = await supabase
    .from('meals')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw new Error(error.message)
  return data
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  meal.image = `/images/${fileName}`

  const { error } = await supabase.from('meals').insert([
    {
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image,
      slug: meal.slug,
    },
  ])

  if (error) throw new Error(error.message)
}
