import type { FunctionComponent, SVGProps } from "react";
import type { FileRouteTypes } from "app/routes/routeTree.gen";
import translation from "../../../../public/locales/ru/translation.json";
import IconMain from "../assets/i-nav-main.svg?react";
import IconAbout from "../assets/i-nav-about.svg?react";

export type NavI18nKeys = keyof typeof translation.nav;
export type LinkTo = FileRouteTypes["to"];

type NavItem = {
  path: LinkTo;
  i18nKey: NavI18nKeys;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export const navItems: NavItem[] = [
  {
    path: "/",
    i18nKey: "home",
    icon: IconMain,
  },
  {
    path: "/about",
    i18nKey: "about",
    icon: IconAbout,
  },
];
