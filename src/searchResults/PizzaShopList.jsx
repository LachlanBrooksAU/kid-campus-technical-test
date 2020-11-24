import React from "react";
import PizzaShop from "./PizzaShop";

export default function PizzaShopList({ shops, selectedAddress }) {
  // Check if shops has been set
  // If shops have not been set, return an empty div
  if (shops === null) {
    return <div className='Results' />;
  } else {
    // If shops have been set, return shops in a div
    return (
      <div className='Results'>
        {shops != null && <h2>Showing results near {selectedAddress}</h2>}
        {shops.map((shop) => (
          <PizzaShop shop={shop} key={shop.objectID} />
        ))}
      </div>
    );
  }
}
