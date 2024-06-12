import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
      
      <div className='contactContainer'>

        <div className='leftBody'>

          <div className="general">
            <h1>General Enquiries</h1>

            <div className="local">
              <p>Local</p>
              <h6>0201 2709 676 or 0201 4222 222</h6>
            </div>

            <div className="local">
              <p>International</p>
              <h6>+234 700 909 9099</h6>
            </div>

            <div className="local">
              <p>EMAIL</p>
              <h6>CustomerCareNigeria@stanbicibtc.com</h6>
            </div>

          </div>

          <div className="report">
            <h1>Peport Unethical Behaviour</h1>

            <div className="local">
              <p>Local</p>
              <h6>0201 422 7777 or 0201 271 7739</h6>
            </div>

            <div className="local">
              <p>International</p>
              <h6>+27 31571 5459</h6>
            </div>

            <div className="local">
              <p>EMAIL</p>
              <h6>whistleblowingline@tipoffs.com</h6>
            </div>
          </div>

        </div>


        <div className='rightBody'>

          <div className="rightContent">
            <h1>Get to know us</h1>
            <a href="investor">Investor relations</a>
          </div>

          <div className="rightContent">
            <h1>Careers</h1>
            <a href="investor">View oppurtunities</a>
          </div>

          <div className="rightContent">
            <h1>We need your feedback</h1>
            <p>Got a compliment or complain?</p>
            <button>LET US KNOW</button>
          </div>


        </div>

      </div>

    </>
  )
}

export default Contact
