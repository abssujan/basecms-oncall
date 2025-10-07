import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ImageWithText, Media } from '@/payload-types'
import React from 'react'

// Helper to safely get Media URL
function getMediaUrl(media: number | Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'number') return '' // cannot render number directly
  if (typeof media === 'string') return media
  return media.url || media.transformedUrl || media.originalUrl || ''
}

export const ImageWithTextComponent: React.FC<ImageWithText> = ({
  title,
  badge,
  description,
  additionalParagraphs,
  backgroundImage,
  foregroundImage,
  button,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-40 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left image */}
        <div className="relative w-full h-[600px]">
          {/* Background Image */}
          {backgroundImage && typeof backgroundImage !== 'number' && (
            <div className="w-full h-full">
              <img
                src={getMediaUrl(backgroundImage)}
                alt={backgroundImage.alt || 'Background'}
                className="w-[80%] h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Foreground Image */}
          {foregroundImage && typeof foregroundImage !== 'number' && (
            <Card className="absolute -bottom-10 -right-2 z-10 w-[70%] h-[60%] p-1 border-gray-100">
              <img
                src={getMediaUrl(foregroundImage)}
                alt={foregroundImage.alt || 'Foreground'}
                className="w-full h-full object-cover rounded-lg"
              />
            </Card>
          )}
        </div>

        {/* Right info */}
        <div>
          {badge && <p className="text-sm font-bold text-orange-400 mb-2">{badge}</p>}
          <h1 className="text-5xl font-semibold">{title}</h1>

          <div className="space-y-4 mt-5 text-sm">
            {description && <p>{description}</p>}

            {additionalParagraphs?.map((para, idx) => (
              <p key={idx}>{para.text}</p>
            ))}
          </div>

          {button?.label && (
            <Button asChild className="mt-5 bg-orange-500">
              <a href={button.href || '#'}>{button.label}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
