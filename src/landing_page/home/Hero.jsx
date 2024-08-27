import React from 'react';
import { ToastContainer } from 'react-toastify';

function Hero() {
  return (
    <div className='container'>
       <ToastContainer />
      <div className="row text-center">
        <img src="\media\images\homeHero.png" alt="hero" />
        <h1 className=''>Invest in Everything</h1>
        <p className=''>Online platfrom to invest in stocks and market</p>
        <button className='btn btn-primary mx-auto my-auto col-3'>Signup now</button>
      </div>
    </div>
  );
}

export default Hero;
