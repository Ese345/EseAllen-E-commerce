import React from 'react'
import './DescriptionBox.css'

const DesciptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-decription">
        <p>E-commerce</p>
        <p>
            Trial
        </p>
      </div>
    </div>
  )
}

export default DesciptionBox
