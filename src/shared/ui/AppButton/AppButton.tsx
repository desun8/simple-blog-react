import clsx from "clsx";
import cls from "./AppButton.module.css";
import type { ButtonHTMLAttributes } from "react";

export const AppButtonTheme = {
  CLEAR: "clear",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  BACKGROUND: "background",
  BACKGROUND_INVERTED: "backgroundInverted",
} as const;

export const AppButtonSize = {
  M: "size-m",
  L: "size-l",
  XL: "size-xl",
} as const;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: (typeof AppButtonTheme)[keyof typeof AppButtonTheme];
  size?: (typeof AppButtonSize)[keyof typeof AppButtonSize];
  square?: boolean;
}

export const AppButton = (props: AppButtonProps) => {
  const {
    children,
    className,
    theme,
    size = AppButtonSize.M,
    square,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(
        cls.AppButton,
        className,
        theme && cls[theme],
        cls[size],
        square && cls.square,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
