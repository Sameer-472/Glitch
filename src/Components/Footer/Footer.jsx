import { FacebookOutlined , InstallMobileOutlined , WhatshotOutlined } from "@mui/icons-material";
import React from "react";
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="have-an-project">
        Have An <br /> 
        Awesome <br />
        Project? <br />
      </div>
      <button className="footer-btn">Get a Qoute</button>
      <div className="detail-footer">
          <div className="footerGlitchAF">GLITCH AF</div>
          <div className="footer-nav">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div className="icon-email">
            <div>
            <FacebookOutlined/>
            <InstallMobileOutlined/>
            <WhatshotOutlined/>
            </div>
            <div className="emailNumber">
              <div>Hello@gmail.com</div>
              <div>+0213312596324</div>
            </div>
          </div>
          <div>@copyright</div>
      </div>
    </div>
  );
};

export default Footer;
