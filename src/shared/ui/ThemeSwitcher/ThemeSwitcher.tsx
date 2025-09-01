import clsx from "clsx";
import cls from './ThemeSwitcher.module.css';
import { useTheme } from "app/providers/ThemeProvider"
import Icon from "./assets/icon-theme.svg?react"
import { AppButton, THEME } from "../AppButton/AppButton"

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { className, } = props;
	const { toggleTheme } = useTheme()

	return (
		<AppButton className={clsx(cls.ThemeSwitcher, className)} theme={THEME.CLEAR} onClick={toggleTheme}>
			<Icon className={cls.icon} />
		</AppButton>
	);
};
