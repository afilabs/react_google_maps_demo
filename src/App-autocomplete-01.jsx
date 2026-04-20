import { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import './App.css';


function App() {
  const [autocompletePlace, setAutocompletePlace] = useState(null);
  const [coords, setCoords]= useState(null);

  const MarkerIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circle background */}
      <circle cx="16" cy="16" r="15" fill="#94B4F7"/>
      {/* Map marker */}
      <path
        d="M16 8C13.24 8 11 10.24 11 13C11 17 16 22 16 22C16 22 21 17 21 13C21 10.24 18.76 8 16 8ZM16 14.5C15.17 14.5 14.5 13.83 14.5 13C14.5 12.17 15.17 11.5 16 11.5C16.83 11.5 17.5 12.17 17.5 13C17.5 13.83 16.83 14.5 16 14.5Z"
        fill="#ffffff"
      />
    </svg>
  );

  const formatOptionLabel = ({ label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <MarkerIcon />
      <span>{label}</span>
    </div>
  );

  const handleSelect = async (place) => {
    setAutocompletePlace(place);
    
    const results = await geocodeByPlaceId(place.value.place_id);
    const { lat, lng } = await getLatLng(results[0]);

    setCoords({lat, lng});
    
    console.log(lat, lng);
  };

  return (
    <div>

      <div style={ {
        minWidth: '600px',
        position: 'absolute',
        top: '25px',
        left: '25px'
      }}>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          selectProps={{
            value: autocompletePlace,
            onChange: handleSelect,
            formatOptionLabel: formatOptionLabel
          }}
        />
      </div>

      {autocompletePlace &&  
      <p style={{position: 'absolute', top: '30%', left: '40%', fontSize: '48px'}}>
        {autocompletePlace.label} 
        {coords && <p>({coords.lat}, {coords.lng})</p>}
        
      </p>}



    </div>
    
  )
}

export default App
