import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./fr";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  fr,
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

declare module "react-i18next" {
  type DefaultResources = typeof resources["fr"];
  interface Resources extends DefaultResources {}
}

export default i18n;
