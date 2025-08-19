import { Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { useTheme } from "./providers/ThemeProvider"
import clsx from "clsx"

export function App() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={clsx('app', theme)}>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{' '}
				<Link to="/about" className="[&.active]:font-bold">
					About
				</Link>
				<button type='button' onClick={toggleTheme}>toggle theme</button>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	)
}
