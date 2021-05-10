import { Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import Portal from "./portals/Portal";

import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export interface OwnProps {
  title: string;
}

const Title: FunctionComponent<OwnProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Portal id={"app-title"} className={classes.root}>
      <Typography variant="h5">{title}</Typography>
    </Portal>
  );
};

export default Title;
