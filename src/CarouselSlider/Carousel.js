import React from 'react'
import Slider from 'react-slick'
import './carousel.css'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

function Carousel({ products }) {
  // you have to pass iterated data as an {obj} for it to show up in the slider obj
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div style={{ margin: '30px' }}>
      <Slider {...settings}>{products}</Slider>
    </div>
  )
}

export default Carousel
