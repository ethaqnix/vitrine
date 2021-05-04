import React, { FunctionComponent } from "react";
import Section from "./Section";
import ExperienceIcon from "./icons/ExperienceIcon";

type OwnProps = {};

const content = {
  title: "Expériences",
  contents: [],
  icon: ExperienceIcon,
};

const Skills: FunctionComponent<OwnProps> = () => {
  return <Section {...content} />;
};

export default Skills;
