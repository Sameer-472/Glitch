import React from 'react'

const Services = () => {
  return (
    <div>
     <div className="services">
        <div id="services">
          <div>
            <h1 className="services-title">Our Services.</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              thereadble of page when looking <br /> as its layout. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img
                src="/assets/illustration 1.png"
                alt=""
                className="servicePic"
              />
              <div>Branding</div>
            </div>
            <div className="card">
              <img
                src="/assets/illustration 2.png"
                alt=""
                className="servicePic"
              />
              <div>Website Design</div>
            </div>
            <div className="card">
              <img
                src="/assets/illustration 3.png"
                alt=""
                className="servicePic"
              />
              <div>Website Development</div>
            </div>
          </div>
          <div className="lowerCards">
            <div className="card">
              <img
                src="/assets/illustration 4.png"
                alt=""
                className="servicePic"
              />
              <div>Social Media Marketing</div>
            </div>
            <div className="card" >
              <img
                src="/assets/illustration 5.png"
                alt=""
                className="servicePic"
              />
              <div>Social Media Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services