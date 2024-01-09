import React, { useState, useEffect } from "react";

function Slider() {
  return (
    <div id='slider_wrapper'>
      <div
        id='carouselExampleControls'
        className='carousel slide carousel_wrapper'
        data-ride='carousel'
        data-interval='5000'
      >
        <div className='carousel-inner carousel_child'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src='wallet.webp'
              alt='First slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='wallet2.webp'
              alt='Second slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='wallet.webp'
              alt='Third slide'
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;
