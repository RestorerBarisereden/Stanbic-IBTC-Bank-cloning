import React from 'react'
import "./Download.css"
import applogo from '../../assets/applogo.png'
import screenshot from '../../assets/screenshot.png'

const Download = () => {
  return (
    <>
      
      <div className='downloadPart'>
        <h1>Stanbic IBTC Bank App</h1>
        <img src={screenshot} alt="" className='downloadApp'/>
        <img src={applogo} alt="" className='phonePic'/>
      </div>

    </>
  )
}

export default Download
