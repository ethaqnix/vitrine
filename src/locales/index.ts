import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./fr";

const resources = {
  fr,
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

declare module "react-i18next" {
  type DefaultResources = typeof resources["fr"] | string;
  interface Resources extends DefaultResources {}
}

export default i18n;
