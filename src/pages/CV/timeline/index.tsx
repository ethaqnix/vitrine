import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import Project from "./Project";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  alignRight: {
    textAlign: "right",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  const { t } = useTranslation("CV");

  return (
    <Timeline>
      <Experience
        title={t("Formations.epitech.title")}
        description={t("Formations.epitech.description")}
        date={t("Formations.epitech.date.start")}
        icon={
          "https://newsroom.ionis-group.com/wp-content/uploads/2018/12/epitech-logo-signature-quadri.png"
        }
      />
      <Project
        title={t("Projects.orizon.title")}
        description={t("Projects.orizon.description")}
        technologies={t("Projects.orizon.technologies", { joinArrays: " - " })}
      />
      <Project
        title={t("Projects.scalpel.title")}
        description={t("Projects.scalpel.description")}
        technologies={t("Projects.scalpel.technologies", { joinArrays: " - " })}
      />
      <Experience
        title={t("Experiences.obvious.title")}
        description={t("Experiences.obvious.description", {
          returnObjects: true,
        })}
        date={t("Experiences.obvious.date.start")}
        icon={
          "https://pbs.twimg.com/profile_images/1113003983860350977/Cay7oMKt_400x400.png"
        }
      />
      <Project
        title={t("Projects.agenz.title")}
        description={t("Projects.agenz.description")}
        technologies={t("Projects.agenz.technologies", { joinArrays: " - " })}
      />
      <Project
        title={t("Projects.flow.title")}
        description={t("Projects.flow.description")}
        technologies={t("Projects.flow.technologies", { joinArrays: " - " })}
      />
    </Timeline>
  );
  /*<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>*/
}
