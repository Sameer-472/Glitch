import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="wideCard">
          <div
            className="div1"
            style={{ display: "grid", gridTemplateColumns: "auto auto" , gap: "50px"}}
          >
            <div className="items">
              <h3 className="heading">5+</h3>
              <p className="headingDetails">
                Years <br /> Experience
              </p>
            </div>
            <div className="items">
              <h3 className="heading">350+</h3>
              <p className="headingDetails">
                Happy <br /> Client
              </p>
            </div>
            <div className="items">
              <h3 className="heading">700+</h3>
              <p className="headingDetails">
                Project <br /> Finished
              </p>
            </div>
            <div className="items">
              <h3 className="heading">95%</h3>
              <p className="headingDetails">
                Client <br /> Satisfaction Rate
              </p>
            </div>

          </div>
          <div className="div2">
            <h2 style={{fontFamily: "cursive"}}> We Bring Your</h2>
            <h2 style={{fontFamily: "cursive"}}><span style={{color: "#DAFC01"}}>Vision</span> into <span style={{color: "#DAFC01"}}>Life</span></h2>
            <p style={{width: "500px"}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer