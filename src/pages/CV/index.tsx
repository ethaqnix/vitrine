import React, { FunctionComponent } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Timeline from "./timeline";
import About from "./About";
import Title from "../../components/Title";

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
  fixed: {
    zIndex: 1,
    display: "flex",
    position: "fixed",
    width: "25%",
    height: "100%",
  },
  mainContent: {
    display: "flex",
    flex: 3,
  },
}));

type OwnProps = {};

const CV: FunctionComponent<OwnProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title title="test" />
      <div className={classes.sidebar}>
        <div className={classes.fixed}>
          <About />
        </div>
      </div>

      <div className={classes.mainContent}>
        <Timeline />
      </div>
    </div>
  );
};

export default CV;
