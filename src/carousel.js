import React, { useState } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';


export default function ControlledCarousel() {
    const images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg"].map((number) => ({
        src: `${number}`
    }));
    return (
        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    
    <div>
      <img
        alt=""
        src="./images/img1.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img2.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img3.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img7.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img8.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img9.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img11.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img12.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img13.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="./images/img14.jpg"
      />
    </div>
   
    <div>
      <img
        alt=""
        src="./images/img16.jpg"
      />
    </div>
  </InfiniteCarousel>
    );

}

