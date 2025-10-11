'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loader from './Loader'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show overlay briefly on every route change
    setShowOverlay(true)
    const timer = setTimeout(() => setShowOverlay(false), 800) // shorter = faster feel
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative">
      {/* Overlay loader */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm pointer-events-none">
          <Loader />
        </div>
      )}

      {/* Page content */}
      {children}
    </div>
  )
}
