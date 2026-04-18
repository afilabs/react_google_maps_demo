import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';
import {Marker} from '@vis.gl/react-google-maps';
import {InfoWindow} from '@vis.gl/react-google-maps';
import {AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import {Polyline} from '@vis.gl/react-google-maps';

import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import TrafficPolyline from './external/TrafficPolyline';
import routeData from './data/routeData.json';

import SearchBox from './components/SearchBox';

import './App.css';


function App() {

  const [autocompletePlace, setAutocompletePlace] = useState(null);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>

      <SearchBox onSelectAutocompletePlace={setAutocompletePlace} />

      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
        defaultZoom={13}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        options={{
          mapTypeControl: false     // removes map/satellite toggle
        }}
      >



      </Map>
    </APIProvider>
  )
}

export default App
