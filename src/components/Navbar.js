import React, { useState } from "react";
import "./css/Navbar.css";
import logo from "../components/assets/logo.png";
import { Link, animateScroll } from "react-scroll";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="nav-link">
            <ul
              className={Mobile ? "nav-links-mobile" : "links"}
              onClick={() => setMobile(false)}
            >
              <li>
                {/* <a href="#home" onClick={() => smoothScroll("home")}>
                  Home
                </a> */}
                <Link
                  to="home"
                  // spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Home
                </Link>
              </li>
              <li>
                {/* <a href="#work">About</a> */}
                <Link
                  to="About"
                  // spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  About
                </Link>
              </li>
              <li>
                {/* <a href="#">Experience</a> */}
                <Link
                  to="recent"
                  // spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Experience
                </Link>
              </li>
              <li>
                {/* <a href="#">Works</a> */}
                <Link
                  to="work"
                  // spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Works
                </Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="https://t.me/softprogrammer" target="_blank">Contact</a>
              </li>
            </ul>
          </div>

          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
