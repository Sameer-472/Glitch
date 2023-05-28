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
            <h1 className="discussProject" >
              Ready to discuss <br /> Your Project with us ?{" "}
            </h1>
            <div className="upperInput">
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Full Name"
                InputProps={{ style: { color: "white"} }}
                sx={{pt: 2}}                               
              />
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Email"
                InputProps={{ style: { color: "white"} }}            
                sx={{pt: 2}}
              />
            </div>
            <TextField
              id="standard-basic"
              fullWidth
              variant="outlined"
              label="About Project"
              InputProps={{ style: { color: "white"} }}
              sx={{pt: 2}}
            />
            <div className="lowerInput" >
              <div onClick={handleButtonClick} className="attachedFile">
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileSelection}
                />
                <AttachFileRounded />
                <span>Attached a File</span>
              </div>
              {/* <Button variant="contained" className="submit">Send Response</Button> */}
              <button className="submit">Submit</button>
            </div>
            
          </div>
          <div className="clientReview">
            <img src="http://www.w3.org/2000/svg" alt="" />
            <h2 className="clientHeading">Our Client Say</h2>
            <p className="review">“Halo Lab delivered a unique and original design that makes my company stand out from the competition — they didn’t provide a template-based design or something trendy. Their development is world-class and perfection itself.”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;