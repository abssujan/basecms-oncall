'use client'

import dynamic from 'next/dynamic'

// Dynamically import the MapBlockComponent and disable SSR
export const MapBlockClient = dynamic(
  () => import('./component').then((mod) => mod.MapBlockComponent),
  { ssr: false },
)
