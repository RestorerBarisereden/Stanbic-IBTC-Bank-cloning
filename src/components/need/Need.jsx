import React from 'react'
import "./Need.css"
import plant from '../../assets/plant.jpg'
import afro from '../../assets/afro.jpg'
import child from '../../assets/child.jpg'
import laptop from '../../assets/laptop.jpg'
import lean from '../../assets/lean.jpg'
import phonelaptop from '../../assets/phonelaptop.jpg'
import phones from '../../assets/phones.jpg'
import smile from '../../assets/smile.jpg'
import tea from '../../assets/tea.jpg'


const Need = () => {
  return (
    <>
      <div className='wholeBody'>

      <div className='needContainer'>
        <h1>Solutions tailored to your needs</h1>

        <div className='needBox'>
            <div className='card'>
                <img src={plant} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>Personal Savings Account</h1>
                        <p>Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow.</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={afro} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>Smart Loan</h1>
                        <p>Smart Loan gives you up to N20M, if you have mutual funds investment with Stanbic IBTC Asset Management, a subsidiary of Stanbic IBTC Holdings. The loan can be accessed via the Stanbic IBTC Mobile App with no paperwork required.</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={laptop} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>MaxYield Account</h1>
                        <p>Accelerate your savings with the option of partial withdrawals for emergencies along the way</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={smile} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>Agent Banking</h1>
                        <p>At Stanbic IBTC Bank, we are committed to driving Africa’s growth and one of the ways we are doing this is by meeting the lifestyle needs of the underbanked and the unbanked while empowering businesses in our communities to provide financial services to them.

</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={phones} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>HYCA Gold</h1>
                        <p>"Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow"</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={child} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>CHESS Account</h1>
                        <p>"Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow"</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={phonelaptop} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>SMS Banking</h1>
                        <p>"Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow"</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={tea} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>Domiciliary Account</h1>
                        <p>"Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow"</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={lean} alt="Grow Coin" />
                <div className="content">
                    <div className="contentValue">
                        <h1>Vehicle and Asset Finance</h1>
                        <p>"Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow"</p>
                        <a href className="info">TELL ME MORE</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Need
