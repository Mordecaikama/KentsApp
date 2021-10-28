import React from 'react'
import './category.css'
import { products } from '../../data'
import CarouselMulti from '../../CarouselMulti/CarouselMulti'

function ProductVariationSlider() {
  const allproducts = products?.map((product) => {
    return (
      <div className='card'>
        <div className='imgbody'>
          <img src={product.imgurl} alt='img' className='card-img' />
        </div>
        <h3>{product.title}</h3>
      </div>
    )
  })

  return (
    <div className='Layout'>
      <div className='container '>
        <div className='category-bar'>
          <h2>Variation Slider</h2>
          <div className='cardbody'>
            <CarouselMulti products={allproducts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductVariationSlider
