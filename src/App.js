import './App.css';
import LocationInput from './search/LocationInput.jsx';
import { useState } from 'react';
import React from 'react';
import PizzaShopList from './searchResults/PizzaShopList';
import GetPizzaShops from './search/GetPizzaShops';

function App() {
  // Store the selected address
  const [selectedAddress, setSelectedAddress] = useState('');
  // Store the coordinates of the user
  const [latLng, setLatLng] = useState('');
  // Store the pizza shops recieved from algolia
  const [shops, setShops] = useState(null);

  // Ensure the user has entered a valid address
  function handleSearch() {
    if (latLng === '') {
      console.log('invalid address')
      return
    } else {
      GetPizzaShops({latLng, setShops})
    }
  }

  return (
    <div className="App">
      
      {/* Header */}

      <section className="Header">
        <div className="HeaderContainer">
          <h1>Pizza Finder</h1>
          {/* Custom Input Component containing react-native-places, google maps based suggestions */}
          <LocationInput name="suburb" placeholder="Suburb" setLatLng={setLatLng} setSelectedAddress={setSelectedAddress} />
          {/* Update shops array with events from algolia */}
          <button onClick={() => handleSearch()} className="SearchButton">Search</button>
        </div>
      </section>
      
      {/* Results */}
      <section className="ResultsSection">
        <PizzaShopList shops={shops} selectedAddress={selectedAddress} />
      </section>
    </div>
  );
}

export default App;
