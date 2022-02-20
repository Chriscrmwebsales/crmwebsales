import React from 'react';
import './App.css';
import Header from './Standaard/Header';
import Home from './Standaard/Home';
import { BrowserRouter, Routes, Route}
from "react-router-dom";
import Checkout from "./Standaard/Checkout";
//import ImageSlider from './Afbeeldingen/ImageSlider';
//import {SliderData} from "./Afbeeldingen/SliderData";
// <ImageSlider slides={SliderData}/>

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={
          <div clasName="app">     
            <Home />

          </div>
        } />
        <Route path="checkout" element={
          <div clasName="app">   
            <Checkout/> 
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

