import React from 'react'
import "./Personal.css"
import plant from '../../assets/plant.jpg'

const Personal = () => {
  return (
    <>

        <div className='personalBody'>

        <div className='personalContainer'>
            
            <div className='tag'>Most Popular</div>
            <img src={plant} alt="Coin growth"  className='plant'/>
            <div className='person'>
                <h1>Personal Savings Account</h1>
                <div className='line'></div>
            </div>
            <p className='personalSavings'>
             Open a personal savings account that allows you to transact and shop for what you want today, while saving and earning interest for tomorrow.
            </p>

            <div className='interest'>
                <div className='leftInterest'>
                    <h1>NO</h1>
                    <p>Opening Deposit</p>
                </div>

                <div className='rightInterest'>
                    <h1>7.425%</h1>
                    <p>Intererst rate</p>
                </div>
            </div>

            <div className='compareBox'>
                <div className='compare'>
                    <input type="checkbox"/>
                    <p>Add to Compare</p>
                </div>
            </div>

            <button >OPEN NOW</button>

        </div>
        
        </div>  
    </>
  )
}

export default Personal
