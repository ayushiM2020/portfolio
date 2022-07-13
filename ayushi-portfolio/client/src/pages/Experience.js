import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#21325e">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2019"
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi Public School, Hyderabad
          </h3>
          <p>CBSE Class X, Salutarian</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3>Timberline High, Boise, Idaho</h3>
          <p>HS Diploma, Salutarian</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006-2019"
          iconStyle={{ background: "#3e497a", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3>Purdue University, West Lafeyette</h3>
          <p>BS, Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
