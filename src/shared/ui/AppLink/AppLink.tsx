import clsx from "clsx";
import cls from "./AppLink.module.css";
import { Link, type LinkProps } from "@tanstack/react-router";

export const AppLinkTheme = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: (typeof AppLinkTheme)[keyof typeof AppLinkTheme];
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={clsx(cls.AppLink, className, cls[theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
