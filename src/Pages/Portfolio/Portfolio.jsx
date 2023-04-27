import React from 'react'

const Portfolio = () => {
  return (
    <div>
         <div className='portfolio'>
        <h2 className='our-portfolio'>Our Portfolio</h2>
        <div className='portfolio-btns'>
            <button className='portfolio-buttons'>Branding</button>
            <button className='portfolio-buttons'>Design</button>
            <button className='portfolio-buttons'>Development</button>
            <button className='portfolio-buttons'>Marketing</button>
            <button className='portfolio-buttons'>Management</button>
        </div>
        <div className='portfolio-cards'>
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Name</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Name</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Name</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Name</div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Portfolio