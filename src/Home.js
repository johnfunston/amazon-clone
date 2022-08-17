/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import Product from './Product';
import CartHoverSummary from './CartHoverSummary';


function Home() {

  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='assets/amazon-prime-home-banner4.jpg' alt=''/>
            <div className='home__row'>
                <Product
                 id='12121212'
                 title='The Lean Start-Up | Eric Ries | Paperback'
                 price = {19.99} 
                 image='assets/lean-start-up-cover.jpg' 
                 rating={5}/>
                <Product 
                 id='322245'
                 title='Kenwood kMix Stand Mixer (5L) | Silver & Bronze | Harrods CA'
                 price={761.99}
                 image='assets/kenwood-mixer.jpg'
                 rating={4}
                 />
            </div>

            <div className='home__row'>
                <Product 
                 id='687532'
                 title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor | 128hz"
                 price={199.99}
                 image='assets/samsung-tv.png'
                 rating= {3}
                 inBasket={false}
                 />
                <Product 
                 id='8989202'
                 title='Amazon Echo (4th Generation) | Smart speaker with Alexa, Charcoal Fabric'
                 price={98.99}
                 image='assets/amazon-echo.png'
                 rating={5} />
                <Product 
                 id='539181'
                 title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - White & Silver (4th Generation)'
                 price={589.99}
                 image='assets/apple-ipad.jpg'
                 rating={4} />
            </div>

            <div className='home__row'>
                <Product 
                 id='889001'
                 title='LG Ultragear 34GL750 Gaming Monitor with 34 Inch 21:9 Wide Full HD 1ms 144Hz Curved IPS Display, AMD FreeSync, Black'
                 price={473.98}
                 image='assets/LG-Ultragear.jpg'
                 rating={4} />
            </div>
        </div>
    </div>
  )
}

export default Home