import React from 'react'
import guy from '../../assets/presslaptop.png'
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className='heroContainer'>

        <div className='hero1'>
            <h2>Update your Account with your NIN and BVN.</h2>
            <p>The CBN has mandated that all accounts without BVN and/or the NIN would not be able to carry out transactions.</p>
            <button>CLICK HERE TO UPDATE</button>
        </div>

        <div className='hero2'>
            <img src={guy} alt="" />
        </div>

      </div>
    </>
  )
}

export default Hero
