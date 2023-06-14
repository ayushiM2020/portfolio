import React from "react";
import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiFirebase } from "react-icons/si";

import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaRProject } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";

import { SiScikitlearn } from "react-icons/si";
import { SiPytorch } from "react-icons/si";

function Skills() {
  return (
    <div className="card">
      <h2>Skills</h2>
      <br></br>
      <div className="web">
        <h5 style={{ margin: "10px" }}>Web Dev</h5>
        <div className="internal">
          <FaHtml5 style={{ color: "navy", fontSize: "64px" }} />
          HTML
        </div>
        <div className="internal">
          <IoLogoCss3 style={{ color: "navy", fontSize: "64px" }} />
          CSS
        </div>
        <div className="internal">
          <FaFigma style={{ color: "navy", fontSize: "64px" }} />
          Figma
        </div>
        <div className="internal">
          <DiJava style={{ color: "navy", fontSize: "64px" }} />
          JAVA
        </div>
        <div className="internal">
          <FaNode style={{ color: "navy", fontSize: "64px" }} />
          Node.js
        </div>
        <div className="internal">
          <FaReact style={{ color: "navy", fontSize: "64px" }} />
          React.js
        </div>
        <div className="internal">
          <SiFirebase style={{ color: "navy", fontSize: "64px" }} />
          Firebase
        </div>
      </div>
      <br></br>
      <div className="web">
        <h5 style={{ margin: "10px" }}>Data Analytics</h5>
        <div className="internal">
          <FaPython style={{ color: "navy", fontSize: "64px" }} />
          Python
        </div>
        <div className="internal">
          <SiNumpy style={{ color: "navy", fontSize: "64px" }} />
          NumPy
        </div>
        <div className="internal">
          <SiPandas style={{ color: "navy", fontSize: "64px" }} />
          Pandas
        </div>
        <div className="internal">
          <SiMysql style={{ color: "navy", fontSize: "64px" }} />
          MySQL
        </div>
        <div className="internal">
          <FaRProject style={{ color: "navy", fontSize: "64px" }} />R
        </div>
        <div className="internal">
          <SiPowerbi style={{ color: "navy", fontSize: "64px" }} />
          Power BI
        </div>
        <div className="internal">
          <SiMicrosoftexcel style={{ color: "navy", fontSize: "64px" }} />
          MS Excel
        </div>
      </div>
      <br></br>
      <div className="ml">
        <div className="web">
          <h5 style={{ margin: "10px" }}>Machine Learning</h5>
          <div className="internal">
            <SiScikitlearn style={{ color: "navy", fontSize: "64px" }} />
            Scikit Learn
          </div>
          <div className="internal">
            <SiPytorch style={{ color: "navy", fontSize: "64px" }} />
            PyTorch
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
