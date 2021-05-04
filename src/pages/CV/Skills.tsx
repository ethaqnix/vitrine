import { makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Section from "./Section";
import ExperienceIcon from "./icons/ExperienceIcon";

const useStyles = makeStyles((theme: Theme) => ({}));

type OwnProps = {};

const content = {
  title: "Expériences",
  contents: [],
  icon: ExperienceIcon,
};

const Skills: FunctionComponent<OwnProps> = ({}) => {
  const classes = useStyles();
  return <Section {...content} />;
};

export default Skills;
