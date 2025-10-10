'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// --- Leaflet default icon fix ---
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface AdvancedMapProps {
  center?: [number, number]
  zoom?: number
  popup?: string
  location?: { lat: number; lng: number } // Static marker
  style?: {
    height?: string | number
    width?: string | number
  }
}

export const AdvancedMap: React.FC<AdvancedMapProps> = ({
  center = [23.8103, 90.4125],
  zoom = 14,
  popup = 'Marker Location',
  location,
  style = { height: '400px', width: '100%' }, // default style
}) => {
  // Determine marker position
  const markerPosition: [number, number] = location ? [location.lat, location.lng] : center

  return (
    <div style={{ ...style }} className="rounded-xs overflow-hidden">
      <MapContainer center={markerPosition} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markerPosition}>
          <Popup>
            <div>
              <strong>{popup}</strong>
              {location && (
                <p className="text-sm text-gray-600">
                  Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
