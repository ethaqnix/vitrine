import Header from "./Header";
import { makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexGrow: 1,
  },
}));

type OwnProps = {
  title: string;
  children: React.ReactNode;
};

const Page: FunctionComponent<OwnProps> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={title} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Page;
