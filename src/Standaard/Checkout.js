import React from 'react'
import "./Checkout.css"
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal'
import CheckoutProduct from "./Checkoutproduct";

function Checkout() {
    const [{basket}, dispatch] =  useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <div> 
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout