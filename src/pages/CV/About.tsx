import { makeStyles, Theme, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    overflow: "hidden",
    margin: 20,
    width: 200,
    height: 200,
    backgroundColor: "black",
    borderRadius: 180,
  },
  name: {
    textAlign: "center",
  },
}));

type OwnProps = {};

const About: FunctionComponent<OwnProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <img
          width={200}
          height={200}
          src={
            "https://eip.epitech.eu/2019/o-rizon/Dist/Images/team/romain.denizot.jpg"
          }
          alt={"C'est moi"}
        />
      </div>
      <div className={classes.name}>
        <Typography variant="h4">{"Romain Denizot"}</Typography>
      </div>
      <div className={classes.name}>
        <Typography variant="h5">{"Full Stack Developer"}</Typography>
      </div>
    </div>
  );
};

export default About;
