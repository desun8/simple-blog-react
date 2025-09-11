import clsx from "clsx";
import type { FunctionComponent, ReactNode, SVGProps } from "react";
import { AppLink, AppLinkTheme } from "shared/ui";
import cls from "./NavLink.module.css";
import type { LinkTo } from "widgets/TheSidebar/model/navItems";

interface NavLinkProps {
  children: ReactNode;
  className?: string;
  to: LinkTo;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  collapsed?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  const { className, children, to, Icon, collapsed } = props;

  return (
    <AppLink
      to={to}
      className={clsx(cls.NavLink, className, collapsed && cls["is-collapsed"])}
      theme={AppLinkTheme.SECONDARY}
    >
      <Icon />
      <span className={cls.label}>{children}</span>
    </AppLink>
  );
};
