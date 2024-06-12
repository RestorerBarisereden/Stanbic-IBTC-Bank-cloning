import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      
      <div className='footer'>

        <div className='leftFooter'>
            
            <div className='footeropt'>
                <a href className="options">Disclamer</a>
                <a href className="options">Terms and Conditions</a>
                <a href className="options">Privacy & Security Statement</a>
                <a href className="options">Manage Cookies</a>
            </div>

            <p>
                "Stanbic IBTC Bank, a member of the Standard Bank Group, an authorised financial
                 services and registered credit provider is licensed by the Central Bank of Nigeria. 
                 RC125097."
            </p>
        </div>

        <div className='rightFooter'>
            <i class="bi bi-facebook"></i> 
            <i class="bi bi-instagram"></i> 
            <i class="bi bi-linkedin"></i> 
            <i class="bi bi-twitter-x"></i> 
            <i class="bi bi-youtube"></i> 
        </div>

      </div>

    </>
  )
}

export default Footer
