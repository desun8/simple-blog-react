import { createContext } from "react";

export const Theme = {
	LIGHT: 'app-theme-light',
	DARK: 'app-theme-dark'
} as const
export type ThemeType = typeof Theme[keyof typeof Theme]

export interface ThemeContextProps {
	theme?: ThemeType,
	setTheme?: (theme: ThemeType) => void
}
export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
