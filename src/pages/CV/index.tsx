import React, { FunctionComponent } from "react";
import Experiences from "./Experiences";
import Education from "./Education";
import Skills from "./Skills";
import { makeStyles, Theme } from "@material-ui/core";
import About from "./About";
import Formations from "./Formations";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    flex: 1,
    display: "flex",
    backgroundColor: "grey",
  },
  mainContent: {
    display: "flex",
    flex: 3,
  },
}));

type OwnProps = {};

const CV: FunctionComponent<OwnProps> = () => {
  console.log("HELLO");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <About />
      </div>

      <div className={classes.mainContent}>
        <div className="content">
          <Formations />
          <Experiences />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default CV;
