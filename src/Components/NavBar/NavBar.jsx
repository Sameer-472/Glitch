import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <img src="/assets/Font.png" alt="" width={100} />
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>

            <li>
              <button>Let's Talk</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
