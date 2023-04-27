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
          <h2 className="title">Test</h2>
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
        <img src="/assets/box.png" alt="" id="box" />
        <img src="/assets/box.png" alt="" id="box2" />
        <h1 id="brand-title">
          WE <br /> MAKE BRAND <br /> SPECIAL
        </h1>
      </div>
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

      <div className="header" style={{height: 'fit-content'}}>
        <div className="wideCard" >
          <div className="div1">
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
            <div className="bring-vision">
              <h2> We Bring Your</h2>
              <h2>
                <span style={{ color: "#DAFC01" }}>Vision</span> into{" "}
                <span style={{ color: "#DAFC01" }}>Life</span>
              </h2>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
