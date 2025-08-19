import { type ReactNode, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "./ThemeContext"

interface ThemeProviderProps {
	children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.LIGHT

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<ThemeType>(defaultTheme)
	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext value={defaultProps}>
			{children}
		</ThemeContext>
	)
}
