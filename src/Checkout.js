/* eslint-disable no-unused-vars */
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
// import FlipMove from 'react-flip-move';


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="assets/ad-banner.jpg" alt=""/>
        <div>
          <h3>{!user ? '' : `Hello, ${user.email}`}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          )
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
