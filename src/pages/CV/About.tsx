import { makeStyles, Theme, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: 20,
    width: 200,
    height: 200,
    backgroundColor: "black",
    borderRadius: 180,
  },
  name: {
    textAlign: "center",
  },
}));

type OwnProps = {};

const About: FunctionComponent<OwnProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.avatar} />
      <div className={classes.name}>
        <Typography variant="h4">{"Romain Denizot"}</Typography>
      </div>
      <div className={classes.name}>
        <Typography variant="h5">{"Full Stack Developer"}</Typography>
      </div>
    </div>
  );
};

export default About;
