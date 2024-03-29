import React from "react";
import { Container } from "@mui/material";
import Card from "../Card/Card";
import ImageSlider from "../ImageSlider";

function HomePage() {
  let arr = [1, 2, 3, 4];
  const [categoryCarousel, setCategoryCarousel] = React.useState(false);

  window.onresize = function () {
    if (window.screen.width < 900) {
      console.log("yes");
      setCategoryCarousel(true);
    } else {
      console.log("no");
      setCategoryCarousel(false);
    }
  };

  console.log(categoryCarousel);

  // const slides = [
  //   { url: "wallet2.webp", title: "beach" },
  //   { url: "wallet2.webp", title: "boat" },
  //   { url: "wallet2.webp", title: "forest" },
  //   { url: "wallet2.webp", title: "city" },
  //   { url: "wallet2.webp", title: "italy" },
  // ];
  // const containerStyles = {
  //   width: "500px",
  //   height: "280px",
  //   margin: "0 auto",
  // };

  return (
    <>
      <Container maxWidth='xl' id='home_page'>
        <div className='products_wrapper'>
          <span className='header'>featured products</span>
          <div className='products'>
            {arr.map((x) => (
              <Card />
            ))}
          </div>
          <div className='section_footer'>
            <a href='/collections/featured-products-1' className='view_button'>
              View all products
            </a>
          </div>
        </div>
      </Container>
      {/* <ImageSlider slides={slides} parentWidth={500} /> */}
      <div id='categories_wrapper'>
        {!categoryCarousel ? (
          <>
            <div className='category_card'>
              <img src='wallet2.webp' alt='category' />
              <div className='overflow'>
                <span>READY TO SHIP ITEMS</span>
                <a
                  href='/collections/featured-products-1'
                  className='view_button'
                >
                  View products
                </a>
              </div>
            </div>
            <div className='category_card'>
              <img src='wallet2.webp' alt='category' />
              <div className='overflow'>
                <span>LEATHER WALLETS</span>
                <a
                  href='/collections/featured-products-1'
                  className='view_button'
                >
                  View products
                </a>
              </div>
            </div>

            <div className='category_card'>
              <img src='wallet2.webp' alt='category' />
              <div className='overflow'>
                <span>ACCESSORIES & APPAREL</span>
                <a
                  href='/collections/featured-products-1'
                  className='view_button'
                >
                  View products
                </a>
              </div>
            </div>
          </>
        ) : (
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
                <div className='overflow'>
                  <span>LEATHER WALLETS</span>
                  <a
                    href='/collections/featured-products-1'
                    className='view_button'
                  >
                    View products
                  </a>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='wallet2.webp'
                  alt='Second slide'
                />
                <div className='overflow'>
                  <span>LEATHER WALLETS</span>
                  <a
                    href='/collections/featured-products-1'
                    className='view_button'
                  >
                    View products
                  </a>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='wallet.webp'
                  alt='Third slide'
                />
                <div className='overflow'>
                  <span>LEATHER WALLETS</span>
                  <a
                    href='/collections/featured-products-1'
                    className='view_button'
                  >
                    View products
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
