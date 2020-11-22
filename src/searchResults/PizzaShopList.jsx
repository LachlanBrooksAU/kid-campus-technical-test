import React, { useState } from "react";
import PizzaShop from "./PizzaShop";

export default function PizzaShopList({ shops }) {
  console.log(shops + "in List");
  return null //shops.map((shop) => <PizzaShop shop={shop} />);
}
