import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';
import {Marker} from '@vis.gl/react-google-maps';
import {InfoWindow} from '@vis.gl/react-google-maps';
import {AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

import { useState, useRef } from 'react';

import markerIcon from './assets/gmp-new-logo-2026.svg';

import './App.css';

function App() {

  const [open, setOpen] = useState(false);
  const markerRef = useRef(null);


  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
        defaultZoom={13}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      >
        


      </Map>
    </APIProvider>
  )
}

export default App
