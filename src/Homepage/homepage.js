import React from 'react'
import CategorySlider from './category/categoryCarousel'
import Header from './Header'
import HomeCarousel from './homeCarousel'
import { products } from '../data'
import ProductVariationSlider from './category/productVariation'
import ProductSelection from './ProductSelcection/ProductSelection'

function Homepage() {
  return (
    <div>
      {/* <Header /> */}
      <HomeCarousel />
      <ProductVariationSlider />
      <CategorySlider products={products} />
      <ProductVariationSlider />
      <ProductSelection />
    </div>
  )
}

export default Homepage
