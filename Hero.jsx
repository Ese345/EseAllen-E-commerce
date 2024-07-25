import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.jpeg'
import arrow from '../Assets/arrow.jpeg'
import hero from '../Assets/hero.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt="" />

                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow} alt="" />

            </div>
        </div>
        <div className='hero-right'>
            <img src={hero} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
