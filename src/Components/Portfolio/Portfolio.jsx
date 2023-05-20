import React from 'react'
import "./Portfolio.css"
import { useState } from 'react';

const Portfolio = () => {
  const [state, setstate] = useState("Branding")
  function CardRenders() {
    if (state == "Branding") {
      return (
        <>  
           <div className='portfolio-cards'  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Branding</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Branding</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Branding</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Branding</div>
            </div>
            
        </div>
        </>
      );
    } 
    else if (state == "Design") {
      return (
        <>
           <div className='portfolio-cards'  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Design</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Design</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Design</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Design</div>
            </div>
            
        </div>
        </>
      );
    } 
    else if (state == "Development") {
      return (
        <>
           <div className='portfolio-cards'  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Development</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Development</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Development</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Development</div>
            </div>
            
        </div>
        </>
      );
    } 
    else if (state == "Marketing") {
      return (
        <>
           <div className='portfolio-cards'  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Marketing</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Marketing</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Marketing</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Marketing</div>
            </div>
            
        </div>
        </>
      );
    } 
    else {
      return (
        <>
           <div className='portfolio-cards'  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
            <div>
              <img src="./assets/portfolio-card.png" alt="" id='portfolio-card-img'/>
              <div>Management</div>
            </div>
            <div>
              <img src="./assets/portfolio-card2.png" alt="" id='portfolio-card-img'/>
              <div>Management</div>
            </div>
            <div>
              <img src="./assets/portfolio-card3.png" alt="" id='portfolio-card-img'/>
              <div>Management</div>
            </div>
            <div>
              <img src="./assets/portfolio-card4.png" alt="" id='portfolio-card-img'/>
              <div>Management</div>
            </div>
            
        </div>
        </>
      );
    }
  }
  return (
    <div className='portfolio'>
        <h2 className='our-portfolio'>Our Portfolio</h2>
        <div className='portfolio-btns'>
            <button  className={`portfolio-buttons ${ state == 'Branding' && "portfolioBtnActive"}` } onClick={()=> setstate("Branding")}>Branding</button>
            <button className={`portfolio-buttons ${ state == 'Design' && "portfolioBtnActive"}` } onClick={()=> setstate("Design")}>Design</button>
            <button className={`portfolio-buttons ${ state == 'Development' && "portfolioBtnActive"}` } onClick={()=> setstate("Development")}>Development</button>
            <button className={`portfolio-buttons ${ state == 'Marketing' && "portfolioBtnActive"}` } onClick={()=> setstate("Marketing")}>Marketing</button>
            <button className={`portfolio-buttons ${ state == 'Management' && "portfolioBtnActive"}` } onClick={()=> setstate("Management")}>Management</button>
        </div>
       <CardRenders/>
    </div>
  )
}

export default Portfolio