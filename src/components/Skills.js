import React from "react";
import "./css/Skill.css";
import SkillsAPI from "./SkillsAPI";

export default function Skills() {
  return (
    <>
      <section className="Skills" id="skills">
        <div className="big-skill-div">    
          <div className="content-section mtop skill-div">
            <h4 className="skills_h">Frontend</h4>
            <SkillsAPI done="95" styleList={"frontend"} />
            <h4 className="skills_h">Backend</h4>
            <SkillsAPI done="90" styleList={"backend"} />
            <h4 className="skills_h">Mobile</h4>
            <SkillsAPI done="83" styleList={"mobile"} />
          </div>
        </div>
      </section>
    </>
  );
}
