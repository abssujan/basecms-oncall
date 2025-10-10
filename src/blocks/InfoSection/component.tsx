import { InfoSection } from '@/payload-types'
import React from 'react'

export const InfoSectionComponent: React.FC<InfoSection> = ({ badge, title, description }) => {
  return (
    <section className="relative pt-24 pb-16 mt-10">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* Badge */}
        <p
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold 
      text-orange-600 bg-orange-100 rounded-full 
      dark:text-orange-400 dark:bg-orange-900/40"
        >
          {badge}
        </p>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight 
      text-gray-900 dark:text-gray-100 mb-6 leading-tight"
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-600 dark:text-gray-400 
      max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </p>

        {/* Decorative Accent Line */}
        <div className="mt-10 flex justify-center">
          <span className="w-20 h-1 rounded-full bg-orange-500 dark:bg-orange-400"></span>
        </div>
      </div>

      {/* Optional Subtle Background Decoration */}
      <div
        className="absolute inset-0 -z-10 
    bg-[radial-gradient(circle_at_center,rgba(255,237,213,0.3)_0%,transparent_70%)] 
    dark:bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1)_0%,transparent_70%)]"
      ></div>
    </section>
  )
}
