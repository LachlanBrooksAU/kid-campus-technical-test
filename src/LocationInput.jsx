import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./App.css";

export default function LocationInput({ address, setAddress, setLatLng }) {
  function handleChange(address) {
    setAddress(address);
  }

  function handleSelect(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLatLng(latLng);
      })
      .catch((error) => console.error("Error", error));
    setAddress(address);
  }

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "Enter suburb or postcode",
              className: "location-search-input",
            })}
          />
          <div className='autocomplete-dropdown-container'>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? { backgroundColor: "#f1f1f1", height: "50px", cursor: "pointer", fontSize: "24px"}
                : { backgroundColor: "#ffffff", height: "50px", cursor: "pointer", fontSize: "24px"};
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, { className, style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
