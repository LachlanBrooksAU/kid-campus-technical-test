import './App.css';
import LocationInput from './LocationInput.jsx';
import { useState } from 'react';
import React from 'react';
import PizzaShopList from './searchResults/PizzaShopList';
import GetPizzaShops from './GetPizzaShops';
import PizzaShop from './searchResults/PizzaShop';


function App() {
  const [address, setAddress] = useState('');
  const [latLng, setLatLng] = useState('');
  const [shops, setShops] = useState(null);

  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderContainer">
          <h1>Pizza Finder</h1>
          <LocationInput name="suburb" placeholder="Suburb" address={address} setAddress={setAddress} setLatLng={setLatLng} latLng={latLng} />
          <button className="SearchButton">Search</button>
          <button onClick={() => setShops(GetPizzaShops({latLng}))}>Set</button>
          <button onClick={() => console.log(latLng)}>Print</button>
        </div>
      </div>
      <h2>Showing Results for {address}</h2>
      <div className="Results">
        <PizzaShopList shops={shops} />
        <PizzaShop />
      </div>
    </div>
  );
}

export default App;
