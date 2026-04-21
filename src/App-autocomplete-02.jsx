import { useRef, useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

function App() {
  const mapRef = useRef(null)
  const autocompleteRef = useRef(null)
  const [markerPosition, setMarkerPosition] = useState(null)

  useEffect(() => {
    if (!mapRef.current) return
    customElements.whenDefined('gmp-map').then(() => {
      mapRef.current.innerMap.setOptions({
        mapTypeControl: false,
      })
    })
  }, [])

  useEffect(() => {
    if (!autocompleteRef.current) return

    const handlePlaceSelect = async ({ placePrediction }) => {
      const place = placePrediction.toPlace()
      await place.fetchFields({ fields: ['location', 'displayName'] })

      const location = place.location
      setMarkerPosition(`${location.lat()},${location.lng()}`)

      // Pan the map to the selected location
      mapRef.current.innerMap.panTo(location)
      mapRef.current.innerMap.setZoom(15)
    }

    autocompleteRef.current.addEventListener('gmp-select', handlePlaceSelect)

    return () => {
      autocompleteRef.current?.removeEventListener('gmp-select', handlePlaceSelect)
    }
  }, [])

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['places', 'marker']} version="beta">
      <gmp-map
        ref={mapRef}
        center="49.2827,-123.1207"
        zoom="13"
        map-id={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        style={{ display: 'block', width: '100vw', height: '100vh' }}
      >
        <div slot="control-inline-start-block-start" style={{ margin: '10px' }}>
          <gmp-place-autocomplete
            ref={autocompleteRef}
            placeholder="Search for a place..."
          ></gmp-place-autocomplete>
        </div>

        {markerPosition && (
          <>
            {console.log('Marker position:', markerPosition)}
            <gmp-advanced-marker position={markerPosition}></gmp-advanced-marker>
          </>
          
        )}
      </gmp-map>
    </APIProvider>
  )
}

export default App