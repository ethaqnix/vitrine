import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { FunctionComponent } from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

type OwnProps = {};

const Now: FunctionComponent<OwnProps> = () => {
  return (
    <TimelineItem>
      <TimelineContent></TimelineContent>
      <TimelineSeparator>
        <TimelineDot>
          <DirectionsRunIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineOppositeContent></TimelineOppositeContent>
    </TimelineItem>
  );
};

export default Now;
