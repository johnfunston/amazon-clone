import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';


function Product({ id, title, image, price, rating}) {
  
    const [{basket}, dispatch] = useStateValue();
    
  //product has an inBasket property
  //map the basket and determine if the product id matches
    
  let inBasket = false;

    const addToBasket = () => {
      //dispatch the item into the dataLayer
      dispatch({ type: 'ADD_TO_BASKET', 
        item: { 
          id: id, 
          title: title, 
          image: image, 
          price: price, 
          rating: rating,

         }
          
       });
      }
        
      const checkBasket = () => {
        if (basket.length > 0 ) {
        basket.forEach((item, i) => {
         if (item.id === id) {
          inBasket = true;
          return inBasket 
         }
        })
        }
      }
  
      checkBasket();
    
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            {Array(rating).fill().map((_, i) => (<p>★</p>))}
            </div>
            <p className={inBasket ? 'basketAlert' : 'hidden'}>✔️ Item added to basket</p>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product