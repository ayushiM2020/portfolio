import React from "react";
import "./Home.css";
import SchoolIcon from "@material-ui/icons/School";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function Education() {
  return (
    <div className="card">
      <h2>Education</h2>
      <br></br>
      <h4>
        <SchoolIcon /> &nbsp; Purdue University, West Lafayette
      </h4>
      <div style={{ marginLeft: "60px" }}>
        <b>Major:</b> Computer Science | May 2025<br></br>
        <b>Minors: </b>Minors: Economics, Data Analytics<br></br> <b>Honors:</b>{" "}
        Dean's List and Semester Honors<br></br>
        <b>Relevant Coursework: </b>Data Structures, Systems Programming,
        Machine Learning, Software Engineering
      </div>
      <br></br>
      <h4>
        {" "}
        <AccountBalanceIcon /> &nbsp; Timberline High School, Boise, Idaho
      </h4>
      <div style={{ marginLeft: "60px" }}>
        High School Diploma | May 2021<br></br>
        Honors: Prinicipal's Honors
      </div>
    </div>
  );
}

export default Education;
