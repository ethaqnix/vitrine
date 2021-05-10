import { makeStyles, MenuItem, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({}));

type OwnProps = {};

const Langage: FunctionComponent<OwnProps> = ({}) => {
  const classes = useStyles();
  return <MenuItem>Langage</MenuItem>;
};

export default Langage;
