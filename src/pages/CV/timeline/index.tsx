import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import Project from "./Project";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";
import Now from "./Now";
import Start from "./Start";

export default function CustomizedTimeline() {
  const { t } = useTranslation("CV");

  return (
    <Timeline>
      <Start />
      <Experience
        title={t("Formations.epitech.title")}
        description={t("Formations.epitech.description")}
        date={{
          start: t("Formations.epitech.date.start"),
          end: t("Formations.epitech.date.end"),
        }}
        icon={
          "https://newsroom.ionis-group.com/wp-content/uploads/2018/12/epitech-logo-signature-quadri.png"
        }
      />
      <Project
        title={t("Projects.orizon.title")}
        description={t("Projects.orizon.description", {
          returnObjects: true,
        })}
        technologies={t("Projects.orizon.technologies", { joinArrays: " - " })}
      />
      <Project
        title={t("Projects.scalpel.title")}
        description={t("Projects.scalpel.description")}
        technologies={t("Projects.scalpel.technologies", { joinArrays: " - " })}
      />
      <Experience
        title={t("Experiences.obvious.title")}
        description={t("Experiences.obvious.description", {
          returnObjects: true,
        })}
        date={{
          start: t("Experiences.obvious.date.start"),
          end: t("Experiences.obvious.date.end"),
        }}
        icon={
          "https://pbs.twimg.com/profile_images/1113003983860350977/Cay7oMKt_400x400.png"
        }
      />
      <Project
        title={t("Projects.agenz.title")}
        description={t("Projects.agenz.description")}
        technologies={t("Projects.agenz.technologies", { joinArrays: " - " })}
      />
      <Project
        title={t("Projects.flow.title")}
        description={t("Projects.flow.description")}
        technologies={t("Projects.flow.technologies", { joinArrays: " - " })}
      />
      <Now />
    </Timeline>
  );
}
