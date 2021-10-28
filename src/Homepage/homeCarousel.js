import React from 'react'
import './carousel.css'
import { carouselImg } from '../data'
import Carousel from '../CarouselSlider/Carousel'
import ProductSelection from './ProductSelcection/ProductSelection'

function HomeCarousel() {
  const products = carouselImg.map((imgObj) => {
    const imgurl = imgObj.path + imgObj.img
    return (
      <div className='carousel-culture' key={imgObj.id}>
        <img src={imgurl} alt='img' className='carousel-slides' />
      </div>
    )
  })
  return (
    <div className='Layout homecarousel'>
      <Carousel products={products} />
      <div className='info'>
        <div className='infoheader'>Biggest Kente shop</div>
        <div className='infoP'>Rich ghanaian Culture</div>
      </div>
      <div className='productselection'>
        <ProductSelection />
      </div>
    </div>
  )
}

export default HomeCarousel
