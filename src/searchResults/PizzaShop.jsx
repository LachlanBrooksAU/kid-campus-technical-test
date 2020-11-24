import React from "react";
import "../App.css";
import OfferedPizzas from "./OfferedPizzas";

export default function PizzaShop({ shop }) {
  // Display the shop data
  return (
    <div className='PizzaShop'>
      <div className='PizzaDetails'>
        <h3>{shop.shopname}</h3>
        <p>{shop.address}</p>
        <p>{shop.phone}</p>
      </div>
      <div className='PizzaOffers'>
        <h4>Pizzas Offered</h4>
        <OfferedPizzas shop={shop} />
      </div>
    </div>
  );
}
