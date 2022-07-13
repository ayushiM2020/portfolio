import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="items">
          <h2>Front-End</h2>
          <span>
            HTML, CSS, JavaScript, React, Vue, TypeScript, Elm, Angular, JQuery,
            Swift
          </span>
        </li>
        <li className="items">
          <h2>Back-End</h2>
          <span>Ruby, PHP, Java, .Net, and Python</span>
        </li>
        <li className="items">
          <h2>Languages</h2>
          <span>Java, Python, C, JavaScript, </span>
        </li>
      </ol>
    </div>
  );
}

export default Skills;
