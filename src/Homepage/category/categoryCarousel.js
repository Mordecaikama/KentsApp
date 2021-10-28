import React from 'react'
import './category.css'
import { products } from '../../data'
import CarouselMulti from '../../CarouselMulti/CarouselMulti'

function CategorySlider({ products, slidesToShow }) {
  const allproducts = products?.map((product) => {
    return (
      <div className='card category-card'>
        <h4>{product.title}</h4>
        <div className='imgbody'>
          <img src={product.imgurl} alt='img' className='card-img no-rad' />
        </div>
        <h3>{product.title}</h3>
      </div>
    )
  })

  return (
    <div className='Layout'>
      <div className='container '>
        <div className='category-bar no-bg'>
          <h2>Product Category Slider</h2>
          <div className='cardbody'>
            <CarouselMulti products={allproducts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySlider
