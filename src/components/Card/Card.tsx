import React from "react";

function Card() {
  return (
    <div className='product_wrapper'>
      <a href=''>
        <img className='product_img' src='wallet.webp' alt='' />
      </a>
      <p className='product_info'>
        The Scribe - Rugged Tan <span>100 лв</span>
      </p>
    </div>
  );
}

export default Card;
