import React from 'react'

function Imgcard({ product }) {
  return (
    <div className='card'>
      <div className='imgbody'>
        <img src={product.imgurl} alt='img' className='card-img' />
      </div>
      <h3>{product.title}</h3>
    </div>
  )
}

export default Imgcard
