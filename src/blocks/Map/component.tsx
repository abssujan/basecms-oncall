'use client'

import React from 'react'
import { Map } from '@/payload-types'
import { AdvancedMap } from '@/components/interactive-map'

export const MapBlockComponent: React.FC<Map> = ({ popup, location, style, zoom }) => {
  console.log('map', location, popup, style)
  if (!location?.lat || !location?.lng) {
    return <p className="text-gray-500 dark:text-red-500">Loading map...</p>
  }

  // Sanitize style: remove null values
  const sanitizedStyle = {
    height: style?.height ?? '400px',
    width: style?.width ?? '100%',
  }

  return (
    <div className="w-full">
      <AdvancedMap
        location={location}
        popup={popup}
        center={[location.lat, location.lng]}
        zoom={zoom}
        style={sanitizedStyle}
      />
    </div>
  )
}
