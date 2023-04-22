import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src="/assets/Elements.png" alt="" id="elements" />
        <img src="/assets/Font.png" alt="" id="glitch" />
      </div>
      <div className="design-semplified">
        <div>
          <h2 className="title">DESIGN</h2>
          <h2 className="title">SIMPLIFIED.</h2>
          <p id="contrary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout.
          </p>
        </div>
        <div>
          <img src="/assets/Element.png" alt="" id="element" />
        </div>
      </div>
      <div className="header">
        {/* <img src="/assets/brank.png" alt="" id="brank"/> */}
        <h1 id="brand-title">
          WE <br /> MAKE BRAND <br /> SPECIAL
        </h1>
      </div>
      <div className="services ">
        <div>
          <h1 style={{ color: "white", fontSize: "50px" }}>Our Services.</h1>
          <p style={{ color: "white", fontSize: "20px" }}>
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
              src="/assets/illustration 1.png"
              alt=""
              className="servicePic"
            />
            <div>Branding</div>
          </div>
          <div className="card">
            <img
              src="/assets/illustration 1.png"
              alt=""
              className="servicePic"
            />
            <div>Branding</div>
          </div>
        </div>
        <div className="lowerCards">
          <div className="card">
            <img
              src="/assets/illustration 1.png"
              alt=""
              className="servicePic"
            />
            <div>Branding</div>
          </div>
          <div className="card" style={{ marginLeft: "30px" }}>
            <img
              src="/assets/illustration 1.png"
              alt=""
              className="servicePic"
            />
            <div>Branding</div>
          </div>
        </div>
      </div>
      <div className="header">
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
    </>
  );
};

export default Header;
