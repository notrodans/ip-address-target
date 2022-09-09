import { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React, { FC } from 'react'
import { MapContainer, MapContainerProps, Marker, Popup, TileLayer } from 'react-leaflet'

import { useAppSelector } from '../store/hooks'
import { selectIp } from '../store/slices/ip.slice'

const Map: FC<MapContainerProps> = () => {
  const { location, status } = useAppSelector(selectIp)
  const position: LatLngTuple = [location.lat, location.lng]

  return status === 'pending' ? (
    <h2>Loading...</h2>
  ) : status === 'success' ? (
    <MapContainer center={position} zoom={10} scrollWheelZoom zoomControl={false} style={{ height: '72vh' }}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <h2>Error</h2>
  )
}

export default Map
