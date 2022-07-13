import React from "react";
import Typical from "react-typical";
import "./Home.css";
import Skills from "./Skills";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://github.com/ayushiM2020/">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ayushi-mohanty-20a9181b1/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Ayushi </span>
              </span>
            </div>
            <div className="profile-details-roles">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Enthusiastic",
                      1000,
                      "Passionate",
                      1000,
                      "Driven",
                      1000,
                      "Detail-Oriented",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Aspiring Software Engineer
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
              <a href="2nd topper.pdf" download="Ayushi.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <h1> </h1>

      <Skills />
    </div>
  );
}
