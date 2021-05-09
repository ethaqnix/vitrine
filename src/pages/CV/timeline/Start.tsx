import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { FunctionComponent } from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

type OwnProps = {};

const Start: FunctionComponent<OwnProps> = () => {
  const { t } = useTranslation("CV");
  return (
    <TimelineItem>
      <TimelineContent>
        <Typography variant="body2" color="textSecondary">
          {t("Experiences.title")}
        </Typography>
      </TimelineContent>
      <TimelineSeparator>
        <TimelineDot>
          <DirectionsRunIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {t("Projects.title")}
        </Typography>
      </TimelineOppositeContent>
    </TimelineItem>
  );
};

export default Start;
