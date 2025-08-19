import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { useTheme } from "./providers/ThemeProvider"
import clsx from "clsx"
import { Navbar } from "../widgets/Navbar"

export function App() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={clsx('app', theme)}>
			<Navbar />
			<button type='button' onClick={toggleTheme}>toggle theme</button>

			<Outlet />
			<TanStackRouterDevtools />
		</div>
	)
}
