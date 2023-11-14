import React from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./navbar.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html">
          <h4 className="logo">MERON</h4>
        </a>
        <ul className="navbar">
          <li>
            <a href="index">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="testimonials">Testimonials</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <button id="open-menu-btn">
          <FaBars />
        </button>
        <button id="close-menu-btn">
          <RxCross1 />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
