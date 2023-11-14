import React from "react";
import "./hero.css";
import Me from "../../assets/mypic4.png";
import CV from "../../assets/CV.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="header">
      <header id="home">
        <div className="container header__container">
          <div className="left_side">
            <div className="me">
              <img src={Me} alt="me" />
            </div>
          </div>
          <div className="right_side">
            <h3>Hello this is</h3>
            <h1>Meron Michael</h1>
            <h3 className="text-light">Web Developer</h3>
            <div className="cta">
              <a href={CV} download className="btn">
                Download CV
              </a>
              <a href="#contact" className="btn btn-primary">
                Say Hi
              </a>
            </div>
            <div className="header__socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDribbble />
              </a>
            </div>
            <div className="intro">
              <p>
                Welcome to my personal portfolio website. <br />
                This is a React based website and please, enjoy my product.
              </p>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
