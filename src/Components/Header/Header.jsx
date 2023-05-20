import React, { useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
// import Button from "../Button3d/Button";

AOS.init();

const Header = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="header banner">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000"
          >
            <span style={{ color: "#DAFC01" }}>Design-driven </span>
            <br />
            <div style={{ color: "#fff" }}>developement of your</div>
            <div style={{ color: "#DAFC01" }}>web product</div>
          </div>
        </div>
        <div
          className="animator"
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-easing="ease-in-out-quart"
          data-aos-duration="1000"
        >
          <img src="/assets/box.png" alt="" id="elements1" />
          <img src="/assets/Element.png" alt="" id="elements" />
          <img src="/assets/box.png" alt="" id="elements2" />
        </div>
        {/* <img src="/assets/Elements.png" alt="" id="elements1" /> */}
        {/* <img src="/assets/Elements.png" alt="" id="elements2" /> */}
        {/* <h1>hello</h1> *6/}
        {/* <img src="/assets/Font.png" alt="" id="glitch" /> */}
      </div>

      {/* services  */}
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
            <div
              className="card"
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-easing="ease-in-out-quart"
              data-aos-duration="1000"
            >
              <img
                src="/assets/illustration 1.png"
                alt=""
                className="servicePic"
              />
              <div>Branding</div>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-easing="ease-in-out-quart"
              data-aos-duration="1000"
            >
              <img
                src="/assets/illustration 2.png"
                alt=""
                className="servicePic"
              />
              <div>Website Design</div>
            </div>
            <div
              className="card"
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-easing="ease-in-out-quart"
              data-aos-duration="1000"
            >
              <img
                src="/assets/illustration 3.png"
                alt=""
                className="servicePic"
              />
              <div>Website Development</div>
            </div>
          </div>
          <div className="lowerCards">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-easing="ease-in-out-quart"
              data-aos-duration="1000"
            >
              <img
                src="/assets/illustration 4.png"
                alt=""
                className="servicePic"
              />
              <div>Social Media Marketing</div>
            </div>
            <div
              className="card"
              data-aos="fade-down-right"
              data-aos-delay="0"
              data-aos-easing="ease-in-out-quart"
              data-aos-duration="1000"
            >
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

      <div className="header">
        <img src="/assets/Elements.png" alt="" id="glitchElement" />
        <img
          src="/assets/Font.png"
          alt=""
          id="glitch"
          data-aos="flip-left"
          data-aos-delay="0"
          data-aos-easing="ease-in-out-quart"
          data-aos-duration="1000"
        />
      </div>

      <div className="header">
        {/* <img src="/assets/box.png" alt="" id="box" /> */}
        {/* <img src="/assets/box.png" alt="" id="box2" /> */}
        <h1 id="brand-title">
          WE <br /> MAKE BRAND <br /> SPECIAL
        </h1>
      </div>

      <div className="header" style={{ height: "fit-content" }}>
        <div className="wideCard" x>
          <div className="div1">
            <div className="items">
              <h3 className="heading">
                {" "}
                <CountUp
                  enableScrollSpy={true}
                  start={0}
                  end={5}
                  duration={4}
                />{" "}
                +
              </h3>
              <p className="headingDetails">
                Years <br /> Experience
              </p>
            </div>
            <div className="items">
              <h3 className="heading">
                {" "}
                <CountUp
                  enableScrollSpy={true}
                  start={0}
                  end={350}
                  duration={4}
                />{" "}
                +
              </h3>
              <p className="headingDetails">
                Happy <br /> Client
              </p>
            </div>
            <div className="items">
              <h3 className="heading">
                {" "}
                <CountUp
                  enableScrollSpy={true}
                  start={0}
                  end={700}
                  duration={4}
                />{" "}
                +
              </h3>
              <p className="headingDetails">
                Project <br /> Finished
              </p>
            </div>
            <div className="items">
              <h3 className="heading">
                <CountUp
                  enableScrollSpy={true}
                  start={0}
                  end={95}
                  duration={4}
                />{" "}
                %
              </h3>
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
