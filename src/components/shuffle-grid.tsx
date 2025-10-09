'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Media } from '@/payload-types'
import Link from 'next/link'

interface ShuffleHeroBoxProps {
  badge?: string
  title?: string
  description?: string
  buttonText?: string | null
  buttonLink?: string | null | undefined
  images?:
    | {
        id?: string | null
        image: number | Media
      }[]
    | null
}

type ImageItem = {
  id: string
  image: {
    url: string
    alt?: string | null
  }
}

export const ShuffleHeroBox = ({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  images = [],
}: ShuffleHeroBoxProps) => {
  // console.log('this is from shuffle hero box', images)
  // Normalize images: ensure ID and URL exist
  const normalizedImages: ImageItem[] = (images ?? []).map((img, idx) => {
    if (typeof img.image === 'number') {
      return {
        id: img.id ?? String(idx),
        image: { url: '/placeholder.png', alt: null }, // placeholder when only ID
      }
    }

    return {
      id: img.id ?? String(idx),
      image: {
        url: img.image.url ?? '/placeholder.png', // force string
        alt: img.image.alt ?? null,
      },
    }
  })

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-orange-400 font-medium">
          {badge || 'New'}
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-foreground">
          {title || 'Build your next idea even faster'}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.'}
        </p>
        <Link href={{ pathname: buttonLink ?? '/' }}>
          <button
            className={cn(
              'bg-orange-400 text-primary-foreground font-medium py-2 px-4 rounded-md',
              'transition-all hover:bg-orange-400/90 active:scale-95',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            )}
          >
            {buttonText || 'Get Started'}
          </button>
        </Link>
      </div>
      {normalizedImages.length > 0 && <ShuffleGrid images={normalizedImages} />}
    </section>
  )
}

// shuffle helper
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  let currentIndex = newArray.length,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }

  return newArray
}

const generateSquares = (images: ImageItem[]) => {
  // Normalize images for internal usage

  return shuffle(images).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full rounded-md overflow-hidden bg-muted"
      style={{
        backgroundImage: `url(${sq.image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label={sq.image.alt || 'Grid image'}
    />
  ))
}

const ShuffleGrid = ({ images }: { images: ImageItem[] }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(generateSquares(images))

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares(images))
      timeoutRef.current = setTimeout(shuffleSquares, 3000)
    }

    shuffleSquares()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [images])

  return <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">{squares}</div>
}
