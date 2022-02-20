import React from 'react'
import './Home.css'
import Product from "../Producten/Product"


function Home() {
  return (
    <div className='home'>
        <div className="home__container">
          <div className="home__row">
            <Product title="Rowenta Air Force All-In-One 360 RH9086 - Steelstofzuiger" 
            price={199.99} 
            image="https://media.s-bol.com/qJMqALAKwl2/751x1200.jpg" 
            rating={5}/>  
            <Product title="Rowenta Air Force Flex 460 RH9293WO - Steelstofzuiger" 
            price={239.99} 
            image="https://media.s-bol.com/Rg978nykgwZw/550x509.jpg" 
            rating={4}/>
          </div>         
        </div>

    </div>
  )
}

export default Home