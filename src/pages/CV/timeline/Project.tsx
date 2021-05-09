import { makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

type OwnProps = {
  title: string;
  description: string | string[];
  technologies: string[];
};

const Project: FunctionComponent<OwnProps> = ({
  title,
  description,
  technologies,
}) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography variant="subtitle2">{technologies}</Typography>
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
    </TimelineItem>
  );
};

export default Project;
