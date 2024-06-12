import React from 'react';
import stanbic from '../../assets/stanbic.png'
import nigeria from '../../assets/nigeria.png'
import "./Navbar.css"


const Navbar = () => {
  return (
    <>

      <div className="navContainer">

        <div className="nav1">
            <div className='navopt1'>
              <a href="" id='bluey'>Personal</a>
              <a href="">Business</a>
              <a href="">Corporate and Investment</a>
            </div>

            <div className='navopt2'>
            <a href="">About us</a>
            <a href="">Contact us</a>
            <img src={nigeria} alt='Country Flag' />
            <a href="">Nigeria</a>
            </div>
        </div>

        <div className='nav2'>

            <div className='nav2txt'>
                <img src={stanbic} alt='Profile Picture'/>
                <a href="">Product and Services</a>
                <a href="">Ways To Bank</a>
                <a href="">News</a>
                <a href="">FAQs</a>
                <a href="">Product Terms and Conditions</a>
            </div>

            <div className='nav2pic'>
              <i class="bi bi-search"></i>
              <i class= "bi bi-person" id='blue'></i>
            </div>
        </div>
        
      </div>

    </>
  )
}

export default Navbar
