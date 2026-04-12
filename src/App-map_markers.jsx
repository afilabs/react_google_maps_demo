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
          position={{lat: 49.293983, lng: -123.145829}}
          title={'Stanley Park Pitch and Putt'}>
          <div
            style={{
              width: 16,
              height: 16,
              position: "absolute",
              top: 0,
              left: 0,
              background: "#0984e3",
              border: "4px solid #FFFFFF",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </AdvancedMarker> */}

        <AdvancedMarker
          position={{lat: 49.288086, lng: -123.112776}}
          title={'Canada Place'}>
          <img src={markerIcon} width={80} height={80} />
        </AdvancedMarker>

        <AdvancedMarker
          position={{lat: 49.284678, lng: -123.111029}}
          title={'Ignite Pizzeria'}>
          <Pin
            background={'#FFFFFF'}
            glyphColor={'#80CDD4'}
            borderColor={'#000000'}
            glyph='🍕'
            scale={2.0}
            ></Pin>
        </AdvancedMarker> */


        
        

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
        </AdvancedMarker>

        <AdvancedMarker
          position={{lat: 49.272329, lng: -123.062195}}
          title={'teal'}>
          <Pin
            glyphColor={'#0097A7'}
            background={'#80CDD4'}
            borderColor={'#006070'}
            scale={1.0}>
            </Pin>
        </AdvancedMarker>

        <AdvancedMarker
          position={{lat: 49.272329, lng: -123.050823}}


          title={'Yellow'}>
          <Pin
            glyphColor={'#E8A020'}
            background={'#F4D08C'}
            borderColor={'#A86C10'}
            scale={2.0}
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
        </AdvancedMarker>


      </Map>
    </APIProvider>
  )
}

export default App
