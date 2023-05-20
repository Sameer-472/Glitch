import React, { useState, useEffect } from "react";
import "./NavBar.css";
import SideNav from "./SideNav";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="navbar">
        <nav className={visible ? "nav" : "hiddenNav"}>
          <ul>
            <li>
              <img src="/assets/Font.png" alt="" width={100} />
            </li>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">BLOGS</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li>{/* <NavLink to="/contact-us">CONTACT US</NavLink> */}</li>

            <li>
              <NavLink to="contact-us">
                <button className="nav-btn">Let's Talk</button>
              </NavLink>
            </li>
            <SideNav />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
