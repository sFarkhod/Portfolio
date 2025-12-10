import React from "react";
import picture from "../components/assets/image.png";
import texture from "../components/assets/texture.png";
import frontend from "../components/assets/frontend.png";
import backend from "../components/assets/backend.png";
import mobile from "../components/assets/mobile.png";
import "./css/Section.css";
import Skills from "./Skills";
import "./Recent";
import Recent from "./Recent";
import Work from "./Work";
import Reviews from "./Reviews";
import From from "./Form";

export default function Section() {
  return (
    <>
      <section id="About">
        <div className="about-us">
          <div className="information-me">
            <div className="photo-block">
              <img className="texture" src={texture} alt="texture"/>
              <h1>About Me</h1>
              <img src={picture} alt="picture"/>
            </div>
            <div className="information-block">
              <div className="my-skill">
                <p>
                  Welcome to my portfolio. I'm Farkhod Sokhibov, a FullStack Web
                  Developer from Uzbekistan. At 21 years old, I've gained
                  extensive experience in various companies as a Frontend and
                  Backend. Passionate about software
                  development and perpetual learning, I enjoy delving into books
                  and exploring new fields of knowledge. Explore further to
                  discover more about my projects, skills, and experiences.
                  <button className="button">About Me</button>
                </p>
              </div>
              <div className="skill-bar">
                <Skills />
              </div>
            </div>
          </div>
        </div>
        <div className="likes">
          <div className="icons-block">
            <div className="icon">
              <i className="fa-regular fa-thumbs-up fa-xl"></i>
            </div>
            <div className="numbers">
              <p>25</p>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="icons-block">
            <div className="icon">
              <i className="fa-solid fa-mug-hot fa-xl"></i>
            </div>
            <div className="numbers">
              <p>192</p>
              <p>Cup Of Coffee</p>
            </div>
          </div>
          <div className="icons-block">
            <div className="icon">
              <i className="fa-solid fa-users fa-xl"></i>
            </div>
            <div className="numbers">
              <p>10</p>
              <p>Satisfied Client</p>
            </div>
          </div>
          <div className="icons-block">
            <div className="icon">
              <i className="fa-solid fa-medal fa-xl"></i>
            </div>
            <div className="numbers">
              <p>3</p>
              <p>Nominees winnner</p>
            </div>
          </div>
        </div>
        <div className="services">
          <h1>Services</h1>
          <div className="box-developments">
            <div className="web-development">
              <img className="frontend_logo" src={frontend} alt="frontend"/>
              <h3>Frontend development</h3>
              <p>
                Front-end web development is the development of the graphical
                user interface of a website, through the use of HTML, CSS, and
                JavaScript.
              </p>
            </div>
            <div className="backend-development">
              <img className="backend_logo" src={backend} alt="backend"/>
              <h3>Backend development</h3>
              <p>
                Back-end development includes the server implementation and it
                more on the logical interaction of data, how it is stored, and
                transmitted.
              </p>
            </div>
            <div className="mobile-development">
              <img className="mobile_logo" src={mobile} alt="mobile"/>
              <h3>Mobile development</h3>
              <p>
                Mobile app development is the act or process by which a mobile
                app is developed for mobile devices, such as personal digital
                assistants.
              </p>
            </div>
          </div>
          <p className="contact">
            Looking for a custom job ? <a href="https://t.me/softprogrammer" target="_blank" rel="noopener">Click here</a> to contact me !
            👋
          </p>
        </div>
        <Recent />
        <Work />
        <Reviews />
        <From />
      </section>
    </>
  );
}
