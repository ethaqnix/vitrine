import React, { FunctionComponent } from "react";
import Section from "./Section";
import ExperienceIcon from "./icons/ExperienceIcon";
import { useTranslation } from "react-i18next";

type OwnProps = {};

const Formations: FunctionComponent<OwnProps> = ({}) => {
  const { t, i18n } = useTranslation("CV");

  return (
    <Section
      title={t("Formations.title")}
      contents={[
        {
          title: t("Formations.BTS.title"),
          date: t("Formations.BTS.date"),
          content: t("Formations.BTS.description"),
        },
      ]}
      icon={ExperienceIcon}
    />
  );
};

export default Formations;
