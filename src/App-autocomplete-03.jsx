import { APIProvider } from '@vis.gl/react-google-maps';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';

import SearchBox from './components/SearchBox';

import './App.css';


function App() {
  const [autocompletePlace, setAutocompletePlace] = useState(null);

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>

        <SearchBox onSelectAutocompletePlace={setAutocompletePlace}>

        </SearchBox>

        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
          defaultZoom={13}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          mapTypeControl={false} 
        >
          {autocompletePlace && (
               <Marker
                  position={{ lat: autocompletePlace.geometry.location.lat(), lng: autocompletePlace.geometry.location.lng() }}
               />
          )}
        </Map>
      </APIProvider>
      

    </div>
    
  )
}

export default App