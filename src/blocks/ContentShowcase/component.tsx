import { ShuffleHeroBox } from '@/components/shuffle-grid'
import { ContentShowcase } from '@/payload-types'
import React from 'react'

export const ContentShowcaseComponent: React.FC<ContentShowcase> = ({
  badge,
  title,
  description,
  buttonText,
  images,
  buttonLink,
}) => {
  return (
    <section className="mt-10">
      <ShuffleHeroBox
        badge={badge}
        title={title}
        description={description}
        buttonText={buttonText}
        images={images}
        buttonLink={buttonLink}
      />
    </section>
  )
}
