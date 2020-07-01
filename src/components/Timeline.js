import React from "react";
import timelineData from "../data";
import TimelineItem from "./TimelineItem";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, index) => {
        return <TimelineItem data={data} key={index} />;
      })}
    </div>
  );
export default Timeline;
