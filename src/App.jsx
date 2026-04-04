import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';

function App() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
        defaultZoom={12}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      >
      </Map>
    </APIProvider>
  )
}

export default App
