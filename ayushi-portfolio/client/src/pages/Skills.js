import React from "react";
import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div className="card">
      <h2>Skills</h2>
      <br></br>
      <div className="web">
        <FaHtml5 style={{ color: "navy", fontSize: "64px" }} />{" "}
        <DiJava style={{ color: "navy", fontSize: "64px" }} />
        <FaNode style={{ color: "navy", fontSize: "64px" }} />
        <FaReact style={{ color: "navy", fontSize: "64px" }} />
        <IoLogoCss3 style={{ color: "navy", fontSize: "64px" }} />
        <SiFirebase style={{ color: "navy", fontSize: "64px" }} />
      </div>
    </div>
  );
}

export default Skills;
