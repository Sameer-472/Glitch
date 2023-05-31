import React, { useRef } from "react";
import "./ContactUs.css";
import TextField from "@mui/material/TextField";
import { AttachFileRounded, Start } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const ContactUs = () => {
  const underlineStyle = {
    "&:before": {
      borderBottomColor: "blue", // Set your desired color here
    },
    "&:after": {
      borderBottomColor: "blue", // Set your desired color here
    },
  };
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelection = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file here
    console.log(selectedFile);
  };
  return (
    <div>
      <div className="contact">
        <div className="contactPage">
          <div className="contactForm">
            <h1 className="discussProject">
              Ready to discuss <br /> Your Project with us ?{" "}
            </h1>
            <div className="upperInput">
              <div id="name">
                <div style={{ textAlign: "start" }}>Full Name</div>
                <input type="text" name="" id="" />
              </div>
              <div id="email">
                <div style={{ textAlign: "start" }}>Email</div>
                <input type="email" name="" id="" />
              </div>
            </div>
            {/* <div id="about"> */}
              <div id="about" style={{ textAlign: "start" }}>About Project</div>
              <input type="email" name="" id="aboutProjectInput" />
            {/* </div> */}
            <div className="lowerInput">
              <div onClick={handleButtonClick} className="attachedFile" id="attachedFile">
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileSelection}
                />
                <AttachFileRounded
                  style={{
                    border: "2px solid white",
                    borderRadius: 50,
                    padding: 5,
                  }}
                />
                <span style={{ margin: 10, fontWeight: "bolder" }}>
                  Attached a File
                </span>
              </div>

              <button className="submit">Send Message</button>
            </div>
          </div>
          <div className="clientReview">
            <h2 className="clientHeading">Our Client Say</h2>
            <p className="review">
              “Halo Lab delivered a unique and original design that makes my
              company stand out from the competition — they didn’t provide a
              template-based design or something trendy. Their development is
              world-class and perfection itself.”
            </p>
            <div id="clientReviewBottom">
              <img
                src="https://www.halo-lab.com/cdn-cgi/image/anim=true,dpr=1,format=auto,quality=85/cloudflare-images/review-author.ba60a54903c.png?a717beb7ff7"
                alt="hello"
              />
              <div id="companyName">
                <div id="clientName">Rany</div>
                <p id="clientCompany">Founder of casey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
