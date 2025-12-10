import React from "react";
import "./css/Recent.css";
import texturaRecent from "../components/assets/texture.png";

export default function Recent() {
  return (
    <>
      <section id="recent">
        <div className="recent-works">
          <img className="texturerecent" src={texturaRecent} alt="texture"/>
          <h1 className="recent-notice">Experience</h1>
          <div className="experience-box">
            <div className="academic-year">
              <div className="forBorder"></div>

              <div className="academic-degree">
                <div className="study-icons">
                  <p>2008 - 2019</p>
                </div>
                <h3>School</h3>
                <p>
                  I attend Secondary School Number 68, where I acquire
                  fundamental knowledge essential for personal and academic
                  development.
                </p>
              </div>
              <div className="academic-degree">
                <div className="study-icons">
                  <p>2017 - 2019</p>
                </div>
                <h3>Vocational Collage</h3>
                <p>
                  At Vocational College, I studied Computer Science and IT,
                  where I acquired foundational knowledge in essential IT
                  concepts and skill
                </p>
              </div>
              <div className="academic-degree">
                <div className="study-icons">
                  <p>2020 - 2024</p>
                </div>
                <h3>Bachelor's Degree</h3>
                <p>
                  I pursued Software Engineering at Turin Polytechnic
                  University, where I gained valuable knowledge and skills that
                  I apply today
                </p>
              </div>
            </div>

            <div className="about-study">
              <div className="forBorder"></div>

              <div className="web-designer">
                <div className="study-icons">
                  <p>Aug 2022 - Oct 2022</p>
                </div>
                <h3>iTransition</h3>
                <p>
                  Successfully completed internship at iTransition, contributing
                  as a Software Engineer. Improved website efficiency with
                  optimized algorithms.
                </p>
              </div>
              <div className="web-designer">
                <div className="study-icons">
                  <p>Dec 2022 - Feb 2023</p>
                </div>
                <h3>FounderZ</h3>
                <p>
                  Contributed to React.js projects, creating intuitive
                  interfaces. Designed reusable components, reducing dev time.
                  Integrated canvas for interactive features
                </p>
              </div>
              <div className="web-designer">
                <div className="study-icons">
                  <p>June 2023 - Jan 2024</p>
                </div>
                <h3>Scientech Solution</h3>
                <p>
                  Utilized Redux for state management, RTK Query for data
                  fetching, RRD for navigation. Employed Django,
                  FastAPI, and PostgreSQL for backend development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
