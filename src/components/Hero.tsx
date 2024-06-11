"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    let setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const slideData = [
         {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "₹200",
          },
          {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "₹1500",
          },
          {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "₹300",
          },
    ];
  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...setting}>
                 {slideData.map((item)=>{
                     return <Slide
                        key={item.id} //Should be unique
                        img= {item.img}
                        title= {item.title}
                        mainTitle = {item.mainTitle}
                        price = {item.price}
                     />
                 })}
            </Slider>
        </div>
    </div>
  )
}

export default Hero