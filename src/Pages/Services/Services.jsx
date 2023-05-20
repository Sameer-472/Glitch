import React from "react";
import "./Services.css";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import "aos/dist/aos.css";
import AOS from "aos";
import designLogo from "/design.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

AOS.init();

const Services = () => {
  return (
    <div>
      <div className="servicesPage">
        <div id="servicesHeader">
          <h1
            id="offerWideRange"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000"
          >
            WE OFFER WIDE <br /> RANGE OF SERVICES
          </h1>
          <div
            id="designDevelopmentMarketing"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000"
          >
            <div id="design">
              <div id="designArrow">
                <div id="designTitle">Design</div>
                <div>
                  <SouthEastRoundedIcon className="downArrow" />
                </div>
              </div>
              <div id="designDetail">
                Using human-centered design tools, we create digital products
                that help organizations enhance the value.
              </div>
            </div>
            <div
              id="design"
              style={{
                borderLeft: "1px solid white",
                borderRight: "1px solid white",
              }}
            >
              <div id="designArrow">
                <div id="designTitle">Development</div>
                <div>
                  <SouthEastRoundedIcon className="downArrow" />
                </div>
              </div>
              <div id="designDetail">
                Using human-centered design tools, we create digital products
                that help organizations enhance the value.
              </div>
            </div>
            <div id="design">
              <div id="designArrow">
                <div id="designTitle">Marketing</div>
                <div>
                  <SouthEastRoundedIcon className="downArrow" />
                </div>
              </div>
              <div id="designDetail">
                Using human-centered design tools, we create digital products
                that help organizations enhance the value.
              </div>
            </div>
          </div>
        </div>
        <div id="servicesBody" data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000">
          <div style={{display: "flex" , flexDirection:'column', alignItems: "" }}>
            <div style={{display: "flex" , flexDirection:'row', alignItems: "center" , justifyContent: "space-between" , width: "85vw"}}>
            <h1 id="offerWideRange">
              Design
            </h1>
                <img width="100" id="designLogo" src="https://www.halo-lab.com/images/services/svg/design.svg" alt="hello" />
            </div >
            <p id="servicesText">
            Striking a delicate balance between the intuitive and the analytical, world-class product and service design is about science as much as beauty. Using human-centered design tools, we create digital products that help organizations enhance the value.
            </p>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/web-design.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Web design</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/ui-ux-design.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>UI/UX</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/mobile-app-design.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Mobile App design</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/branding-design.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Branding</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/ecommerce-design.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>eCommerce Design</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
        </div>
        <div id="servicesBody" data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000">
          <div style={{display: "flex" , flexDirection:'column', alignItems: "" }}>
            <div style={{display: "flex" , flexDirection:'row', alignItems: "center" , justifyContent: "space-between" , width: "85vw"}}>
            <h1 id="offerWideRange">
              Development
            </h1>
                <img width="100" id="designLogo" src="https://www.halo-lab.com/images/services/svg/development.svg" alt="hello" />
            </div >
            <p id="servicesText">
            We develop web applications using the most reliable methodologies and the best practices for continuous and highly maintainable software delivery..
            </p>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/web-dev.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Web Development</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="	https://www.halo-lab.com/images/services/services-icons/software-dev.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Software Development</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="	https://www.halo-lab.com/images/services/services-icons/cms-dev.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>CMS Development</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="	https://www.halo-lab.com/images/services/services-icons/back-end-dev.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Backend Development</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="	https://www.halo-lab.com/images/services/services-icons/front-end-dev.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Front-End Development</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
        </div>

        <div id="servicesBody" data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-in-out-quart"
            data-aos-duration="1000">
          <div style={{display: "flex" , flexDirection:'column', alignItems: "" }}>
            <div style={{display: "flex" , flexDirection:'row', alignItems: "center" , justifyContent: "space-between" , width: "85vw"}}>
            <h1 id="offerWideRange">
              Marketing
            </h1>
                <img width="100" id="designLogo" src="https://www.halo-lab.com/images/services/svg/design.svg" alt="hello" />
            </div >
            <p id="servicesText">
            Armed with diverse perspectives and experiences,our high-energy teams unite to develop world-class digital experiences that grow companies. From brand strategy to web development to digital marketing.
            </p>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="	https://www.halo-lab.com/images/services/svg/marketing.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>SEO</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/content-marketing.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Content Marketing</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/pitch.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Pitch Deck Design</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
          <div className="designBar" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
            <div style={{display:"flex"}}>
              <img width={25} style={{margin: "0 10px 0 10px"}} src="https://www.halo-lab.com/images/services/services-icons/conversion-rate.svg" alt="" />
              <h1 style={{fontSize: '25px'}}>Conversion Rate Optimization</h1>
            </div>
            <ArrowForwardIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
