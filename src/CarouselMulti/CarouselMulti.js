import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../CarouselSlider/NextArrow'
import PrevArrow from '../CarouselSlider/PrevArrow'
// import './carousmulti.css'

function CarouselMulti({ products }) {
  // you have to pass iterated data as an {obj} for it to show up in the slider obj
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    // prevArrow: <PrevArroww />,
    // nextArrow: <NextArrowrrow />,
  }

  return (
    <div style={{ margin: '30px' }}>
      <Slider {...settings}>{products}</Slider>
    </div>
  )
}

export default CarouselMulti
