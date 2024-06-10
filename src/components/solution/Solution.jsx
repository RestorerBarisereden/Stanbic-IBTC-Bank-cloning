import React from 'react'
import "./Solution.css"

const Solution = () => {
  return (
    <>
      
      <div className='solutionContainer'>

        <div className='solution1'>
            <h3>Want solutions that suits your lifestyle?</h3>
            <h5>Spend and Manage your money the way you want</h5>
            <button>TELL ME MORE</button>
        </div>

        <div className='solution2'>
          <div className='solutionBox'>
            <i class="bi bi-shield-check"></i>
            <p>Banking App</p>
          </div>
          <div className='solutionBox'>
            <i class="bi bi-pc-display"></i>
            <p>Internet Banking</p>
          </div>
          <div className='solutionBox'>
            <i class="bi bi-credit-card"></i>
            <p>See all debit cards</p>
          </div>
          <div className='solutionBox'>
            <i class="bi bi-cash-stack"></i>
            <p>See all credit card</p>
          </div>
        </div>

      </div>


    </>
  )
}

export default Solution
