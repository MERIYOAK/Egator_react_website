import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/mypic4.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section id="header">
      <header id="home">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Meron Michael</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={Me} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
