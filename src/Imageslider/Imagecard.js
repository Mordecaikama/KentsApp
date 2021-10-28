import React from 'react'

function ImageCard({ product }) {
  return (
    <div className='item one'>
      <div className='foreground'>
        <p>{product.title}</p>
      </div>
      <img src={product.imgurl} alt='img' />
    </div>
  )
}

export default ImageCard
