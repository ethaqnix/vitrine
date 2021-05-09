import { makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(1),
  },
  header: {
    display: "flex",
  },
  date: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  img: {
    marginRight: theme.spacing(2),
    width: 50,
    height: 50,
  },
}));

type OwnProps = {
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string | string[];
  icon?: any;
};

const Experience: FunctionComponent<OwnProps> = ({
  title,
  date,
  description,
  icon,
}) => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.root}>
      <TimelineContent>
        <Paper elevation={1} className={classes.paper}>
          <div className={classes.header}>
            <div className={classes.img}>
              <img alt={title} src={icon} height={50} />
            </div>
            <div>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <Typography variant="subtitle1">{`${date.start} - ${date.end}`}</Typography>
            </div>
          </div>
          {Array.isArray(description) ? (
            description.map((e) => (
              <div key={e}>
                <Typography variant="caption">{e}</Typography>
              </div>
            ))
          ) : (
            <Typography variant="caption">{description}</Typography>
          )}
        </Paper>
      </TimelineContent>
      <TimelineSeparator>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineOppositeContent classes={{ root: classes.date }}>
        <Typography variant="body2" color="textSecondary">
          {date.start}
        </Typography>
      </TimelineOppositeContent>
    </TimelineItem>
  );
};

export default Experience;
