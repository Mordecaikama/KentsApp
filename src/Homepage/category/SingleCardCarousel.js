import React from 'react'
import { category } from '../../data'
import Carousel from '../../CarouselSlider/Carousel'

function SingleCardCarousel() {
  // this single card carousel can rpresent a category of products with multiple of images
  // e.g Tobinco co having images of a particular product

  const allproducts = category.map((product) => {
    return (
      <div className='img-card'>
        <h3>{product.title}</h3>
        <img src={product.imgurl} alt='' className='single-card-img' />
      </div>
    )
  })
  return (
    <div className='single-card'>
      <div className='card-title'>Discover selections in Beer</div>
      <Carousel products={allproducts} />
      <span className='single-card-text'>see more</span>
    </div>
  )
}

export default SingleCardCarousel
