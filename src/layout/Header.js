import React, { Children } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "./Menu";
import UserMenu from "./userMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 56,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Menu />
          <div className={classes.title}>
            <Typography id="app-title" variant="h5">
              {title}
            </Typography>
          </div>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
