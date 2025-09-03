import "i18next";
import translation from "../../../public/locales/ru/translation.json";
import main from "../../../public/locales/ru/main.json";
import about from "../../../public/locales/ru/about.json";

const resources = {
  translation,
  main,
  about
} as const;

const defaultNS = "translation";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
