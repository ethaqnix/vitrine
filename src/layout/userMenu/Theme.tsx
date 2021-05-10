import { makeStyles, MenuItem, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({}));

type OwnProps = {};

const ChooseTheme: FunctionComponent<OwnProps> = ({}) => {
  const classes = useStyles();
  return <MenuItem>Theme</MenuItem>;
};

export default ChooseTheme;
