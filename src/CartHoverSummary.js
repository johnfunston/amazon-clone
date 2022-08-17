/*
import React from 'react';
import './CartHoverSummary.css';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue}  from './StateProvider';
import {getBasketTotal} from './reducer';
import CurrencyFormat from 'react-currency-format';


function CartHoverSummary() {

    const [{basket, user}, dispatch] = useStateValue()

  return (
    <div className={`${isHovering ? 'render__hover' : ''}summary__container`}>
        <div className="item__summary">
            {basket.map(item => (
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
        <div className="cart__total">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                                <strong>{value}</strong>
                        </p>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
        </div>
    </div>
  )
}

export default CartHoverSummary */