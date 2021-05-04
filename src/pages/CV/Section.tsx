import { SvgIcon, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { FunctionComponent, useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    color: "#03224c",
  },
  subTitle: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    margin: theme.spacing(1),
  },
  date: {},
  contents: {},
  content: {},
}));

type Content = {
  title: string;
  date: string;
  content: string;
};

interface OwnProps {
  title: string;
  contents: Content[] | React.ReactElement[];
  icon: any;
}

const Section: FunctionComponent<OwnProps> = ({
  title,
  contents,
  icon: Icon,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.icon}>
          <Icon color={"#03224c"} width={50} height={50} />
        </div>
        <Typography variant="h5">{title}</Typography>
      </div>
      <div className={classes.contents}>
        {contents.map((content: Content | React.ReactElement) => {
          if (React.isValidElement(content)) {
            return content;
          } else if (content) {
            return (
              <div>
                <div className={classes.subTitle}>
                  <Typography variant="subtitle1">{`${content.title}`}</Typography>
                  <Typography variant="subtitle2">{`${content.date}`}</Typography>
                </div>
                <div className={classes.content}>
                  <Typography variant="caption">{content.content}</Typography>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Section;
