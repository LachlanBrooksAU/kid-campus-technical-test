import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "../App.css";

export default function LocationInput({ setLatLng, setSelectedAddress }) {
    // Store address to be recieved from user
    const [address, setAddress] = useState('');
  
  function handleChange(address) {
    setAddress(address);
  }

  // When user selects an address, set
  function handleSelect(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLatLng(latLng);
      })
      .catch((error) => console.error("Error", error));
    setAddress(address);
    setSelectedAddress(address);
  }

  // Set search type to regions (allows postcode and suburb but not address)
  const searchOptions = {
    types: ["(regions)"]
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, getSuggestionItemProps, suggestions }) => (
        <div>
          <input 
            {...getInputProps({
              placeholder: "Enter suburb or postcode",
              className: "LocationInput",
            })}
          />
          <div className='AutocompleteContainer'>
            {/* Show google maps autocomplete suggestions */}
            {suggestions.map((suggestion) => {
              return (
                <div
                  className='AutocompletePlaces'
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion)}
                >
                  <span>
                    {suggestion.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
