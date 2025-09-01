import clsx from "clsx";
import cls from './AppButton.module.css';
import type { ButtonHTMLAttributes } from "react";

export const THEME = {
	CLEAR: 'clear'
} as const;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: typeof THEME[keyof typeof THEME]
}

export const AppButton = (props: AppButtonProps) => {
	const { children, className, theme, ...otherProps } = props;

	return (
		<button className={clsx(cls.AppButton, className, theme && cls[theme])} {...otherProps}>
			{children}
		</button>
	);
};

