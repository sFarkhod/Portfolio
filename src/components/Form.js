import React from "react";
import "./css/From.css";
import textureForm from "../components/assets/texture.png";


export default function Form() {
  return (
    <>
      <h1 className="touch-title">Get In Touch</h1>
      <img className="textureForm" src={textureForm} />

      <div className="big-box" id="form">
        <div className="touch-box">
          <div className="everything-box">
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an <span>email 👋</span>
            </p>
          </div>
          <div className="form-box">
            <form>
              <div className="name-box">
                <input type="text" id="name" placeholder="Your Name" />
                <input type="email" id="email" placeholder="Email address" />
              </div>
              <div className="subject-box">
                <input type="text" id="subject" placeholder="Subject" />
                <textarea placeholder="Your message here..." rows="4"></textarea>
              </div>
              <button className="box-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
