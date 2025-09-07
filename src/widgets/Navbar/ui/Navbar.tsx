import clsx from "clsx";
import cls from "./Navbar.module.css";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx(cls.Navbar, className)}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          {t("nav.home")}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t("nav.about")}
        </AppLink>
      </div>
    </div>
  );
};
