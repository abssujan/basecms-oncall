'use client'

import type React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Media } from '@/payload-types'

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

export interface ButtonType {
  label: string
  href: string
  variant?:
    | 'ghost'
    | 'secondary'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'default'
    | 'primary'
    | null
  // ✅ allow null safely
  id?: string | null
}

export interface ServiceCardProps {
  id?: string
  serviceName?: string
  shortDescription?: string
  startingPrice?: string | number | null
  avgRating?: number | null
  jobsCompleted?: number
  responseTime?: string | null
  serviceArea?: string | null
  badges?: string[]
  variant?: 'default' | 'compact' | 'featured'
  serviceId?: string | null
  imageUrl?: string | null // ✅ add this
  imageAlt?: string | null // ✅ add this
  layout?: any[]
  image?: Media | null
  buttons?: ButtonType[] | null
}

type ButtonVariant =
  | 'default'
  | 'ghost'
  | 'secondary'
  | 'link'
  | 'destructive'
  | 'outline'
  | null
  | undefined

function mapButtonVariant(variant?: string | null): ButtonVariant {
  switch (variant) {
    case 'ghost':
    case 'secondary':
    case 'link':
    case 'destructive':
    case 'outline':
    case 'default':
      return variant
    case 'primary':
      return 'default' // ✅ map CMS “primary” to shadcn “default”
    default:
      return 'default'
  }
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceName = 'Professional Service',
  shortDescription = 'Quality service with expert technicians',
  startingPrice = 'From ৳1,000',
  avgRating = 4.5,
  jobsCompleted = 500,
  responseTime = '45 min',
  serviceArea = 'Local Area',
  badges = ['Certified'],
  image = null,
  variant = 'default',
  serviceId = 'emergency-repair',
  buttons,
}) => {
  const cardClasses = {
    default: 'bg-white border-gray-200 hover:shadow-lg',
    compact: 'bg-white border-gray-200 hover:shadow-md',
    featured: 'bg-white border-2 border-orange-200 hover:shadow-xl hover:border-orange-300',
  }

  const imageClasses = {
    default: 'h-48',
    compact: 'h-32',
    featured: 'h-56',
  }

  const layoutClasses = {
    default: 'flex-col',
    compact: 'flex-col',
    featured: 'flex-col lg:flex-row',
  }
  const imageUrl = image?.url ?? '/placeholder.svg' // safe fallback
  const imageAlt = image?.alt ?? 'Service image' // safe fallback

  return (
    <article
      className={`group transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-2xl ${cardClasses[variant]} motion-reduce:hover:transform-none motion-reduce:transition-none`}
      aria-label={`${serviceName} - ${shortDescription} - ${startingPrice}`}
      tabIndex={0}
    >
      <Card
        className={`h-full border-0 shadow-sm ${cardClasses[variant]} rounded-2xl overflow-hidden p-0`}
      >
        <CardContent className={`p-0 h-full flex ${layoutClasses[variant]}`}>
          {/* Image Section */}
          <div
            className={`relative overflow-hidden ${variant === 'featured' ? 'lg:w-2/5' : 'w-full'} ${variant === 'featured' ? 'lg:rounded-l-2xl lg:rounded-r-none' : 'rounded-t-2xl'}`}
          >
            <img
              src={imageUrl || '/placeholder.svg'}
              alt={imageAlt}
              className={`w-full ${imageClasses[variant]} object-cover group-hover:scale-105 transition-transform duration-300 motion-reduce:group-hover:scale-100`}
            />
          </div>

          {/* Content Section */}
          <div
            className={`flex-1 p-6 flex flex-col justify-between ${variant === 'compact' ? 'p-4' : ''}`}
          >
            {/* Header */}
            <div className="flex-1">
              <h3
                className={`font-bold text-gray-900 mb-2 line-clamp-2 ${variant === 'featured' ? 'text-2xl' : variant === 'compact' ? 'text-lg' : 'text-xl'}`}
              >
                {serviceName}
              </h3>
              <p
                className={`text-gray-600 mb-4 line-clamp-2 ${variant === 'compact' ? 'text-sm mb-3' : 'text-base'}`}
              >
                {shortDescription}
              </p>

              {badges.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {badges.map((badge, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Meta Information */}
              <div
                className={`grid grid-cols-2 gap-3 mb-4 ${variant === 'compact' ? 'gap-2 mb-3' : ''}`}
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-900">{avgRating}</span>
                  <span className="text-xs text-gray-500">({jobsCompleted})</span>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{responseTime}</span>
                </div>

                {/* Service Area */}
                <div className="flex items-center gap-1 col-span-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{serviceArea}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <p
                  className={`font-bold text-gray-900 ${variant === 'featured' ? 'text-xl' : 'text-lg'}`}
                >
                  {startingPrice}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {(buttons && buttons.length > 0
                  ? buttons
                  : [
                      { label: 'View Details', href: `/services/${serviceId}`, variant: 'ghost' },
                      { label: 'Book Now', href: `/services/${serviceId}`, variant: 'primary' },
                    ]
                ).map((btn, index) => (
                  <Link key={('id' in btn && btn.id) || index} href={{ pathname: btn.href || '/' }}>
                    <Button
                      variant={mapButtonVariant(btn.variant)}
                      size={variant === 'compact' ? 'sm' : 'default'}
                      className={`${
                        btn.variant === 'ghost'
                          ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          : btn.variant === 'secondary'
                            ? 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                            : 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm'
                      }`}
                    >
                      {btn.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}

export default ServiceCard
