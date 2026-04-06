import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';
import {Marker} from '@vis.gl/react-google-maps';
import {InfoWindow} from '@vis.gl/react-google-maps';
import {AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

import { useState, useRef } from 'react';

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
        <Marker
          ref={markerRef}
          position={{ lat: 49.289814, lng: -123.132561 }}
          onClick={() => setOpen(true)}
        >
          
        </Marker>
        {open && (
            <InfoWindow anchor={markerRef.current} onCloseClick={() => setOpen(false)}>
              <p>Zabu Chicken. Yum!</p>
            </InfoWindow>
        )}


        
        {/* <AdvancedMarker
          position={{lat: 49.289814, lng: -123.132561}}
          title={'Zabu Chicken'}>
          <Pin
            background={'#0097A7'}
            glyphColor={'#80CDD4'}
            borderColor={'#006070'}>
            </Pin>
        </AdvancedMarker>

        <AdvancedMarker
          position={{lat: 49.278595, lng: -123.114104}}
          title={'Fanny Bay Oyster Bar'}>
          <Pin
            background={'#E8A020'}
            glyphColor={'#F4D08C'}
            borderColor={'#A86C10'}
            ></Pin>
        </AdvancedMarker>
   
        <AdvancedMarker
          position={{lat: 49.281715, lng: -123.133023}}
          title={'Bangkok Bistro.'}>
          <Pin
            background={'#7B3FC4'}
            glyphColor={'#C4A0E8'}
            borderColor={'#5A2A94'}
            ></Pin>
        </AdvancedMarker> */}

        {/* <AdvancedMarker
          position={{lat: 49.272329, lng: -123.062195}}
          title={'teal'}>
          <Pin
            glyphColor={'#0097A7'}
            background={'#80CDD4'}
            borderColor={'#006070'}
            scale={3.0}>
            </Pin>
        </AdvancedMarker>

        <AdvancedMarker
          position={{lat: 49.272329, lng: -123.050823}}


          title={'Yellow'}>
          <Pin
            glyphColor={'#E8A020'}
            background={'#F4D08C'}
            borderColor={'#A86C10'}
            scale={3.0}
            ></Pin>
        </AdvancedMarker>
   
        <AdvancedMarker
          position={{lat: 49.272329, lng: -123.039029}}
          title={'Purple'}>
          <Pin
            glyphColor={'#7B3FC4'}
            background={'#C4A0E8'}
            borderColor={'#5A2A94'}
            scale={3.0}
            ></Pin>
        </AdvancedMarker> */}


      </Map>
    </APIProvider>
  )
}

export default App
