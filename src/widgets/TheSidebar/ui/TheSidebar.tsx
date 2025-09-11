import clsx from "clsx";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./TheSidebar.module.css";
import {
  AppButton,
  AppButtonSize,
  AppButtonTheme,
  ThemeSwitcher,
} from "shared/ui";
import { LangSwitcher } from "./LangSwitcher";
import { NavLink } from "./NavLink/NavLink";
import { navItems } from "../model/navItems";

interface TheSidebarProps {
  className?: string;
}

export const TheSidebar = (props: TheSidebarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const toggleLabel = useMemo(() => (collapsed ? ">" : "<"), [collapsed]);
  const NavLinks = navItems.map((navItem) => (
    <NavLink
      key={navItem.path}
      to={navItem.path}
      Icon={navItem.icon}
      collapsed={collapsed}
    >
      {t(`nav.${navItem.i18nKey}`)}
    </NavLink>
  ));

  return (
    <aside
      className={clsx(cls.TheSidebar, className, collapsed && cls.collapsed)}
      data-testid="sidebar"
    >
      <AppButton
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={AppButtonTheme.BACKGROUND_INVERTED}
        size={AppButtonSize.L}
        square
        onClick={onToggle}
      >
        {toggleLabel}
      </AppButton>

      <nav className={cls.nav}>{...NavLinks}</nav>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={collapsed} />
      </div>
    </aside>
  );
};
