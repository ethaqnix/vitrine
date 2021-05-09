import { makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

type OwnProps = {
  handlePlay(): void;
};

const Controls: FunctionComponent<OwnProps> = ({ handlePlay }) => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Controls;
