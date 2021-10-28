import React from 'react'
import './category.css'

function SingleCard() {
  return (
    <div className='single-card'>
      <div className='card-title'>Discover selections in Beer</div>
      <div className='img-card'>
        <img src={'./img/img2.jpg'} alt='' className='single-card-img' />
      </div>
      <span className='single-card-text'>see more</span>
    </div>
  )
}

export default SingleCard
