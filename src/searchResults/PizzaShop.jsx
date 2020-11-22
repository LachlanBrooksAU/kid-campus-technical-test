import React from 'react';
import '../App.css';

export default function PizzaShop({shop}) {
    return (
        <div className="PizzaShop">
            <div className="PizzaDetails">
                <h3>shopname</h3>
                <p>address</p>
                <p>phone</p>
            </div>
            <div className="PizzaOffers">
                <h4>Pizzas Offered</h4>
                <p>Pizza 1</p>
                <p>Pizza 2</p>
                <p>Pizza 3</p>
            </div>
        </div>
    )
}