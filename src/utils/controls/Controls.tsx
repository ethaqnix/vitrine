import { makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({}));

type OwnProps = {
  run(board: any): any;
};

const Controls: FunctionComponent<OwnProps> = ({ run }) => {
  const classes = useStyles();
  return <></>;
};

export default Controls;
