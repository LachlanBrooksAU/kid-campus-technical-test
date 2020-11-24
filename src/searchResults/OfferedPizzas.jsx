import React from "react";

export default function OfferedPizzas({ shop }) {
return (
    // return a div with all pizzas in the array
    <div>
        {shop.pizzas.map((pizza) => (
          <p key={pizza}>{pizza}</p>
        ))}
      </div>
    
  );
}
