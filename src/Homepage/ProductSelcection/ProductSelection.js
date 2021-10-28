import React from 'react'
import SingleCard from '../category/SingleCard'
import SingleCardCarousel from '../category/SingleCardCarousel'

function ProductSelection() {
  return (
    <div className='container'>
      <div className='rowLayout'>
        <SingleCard />
        <SingleCardCarousel />
        <SingleCard />
        <SingleCardCarousel />
      </div>
    </div>
  )
}

export default ProductSelection
