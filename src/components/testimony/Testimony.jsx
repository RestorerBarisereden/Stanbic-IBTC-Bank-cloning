import React from 'react'
import "./Testimony.css"

const Testimony = (props) => {
  return (
    <>
       <div className="mainContainer">

        <div className="Block">
            <i class="bi bi-house-door"></i>
            <h4>I want to open a savings account</h4>
        </div>

        <div className="Block">
            <i class="bi bi-percent"></i>
            <h4>I need instant loan with EZ Cash</h4>
        </div>

        <div className="Block">
            <i class="bi bi-shield-check"></i>
            <h4>I need to use Internet Banking</h4>
        </div>

        <div className="Block">
            <i class="bi bi-cash-stack"></i>
            <h4>I need to access up to 80% of my mutual funds as loan</h4>
        </div>

        <div className="Block">
            <i class="bi bi-car-front"></i>
            <h4>I need to buy a car</h4>
        </div>

        <div className="Block">
            <i class="bi bi-calculator"></i>
            <h4>I need to complete service requests on my account with Quick Services</h4>
        </div>

       </div>
    </>
  )
}

export default Testimony