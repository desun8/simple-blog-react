import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { useTheme } from "./providers/ThemeProvider"
import clsx from "clsx"
import { Navbar } from "../widgets/Navbar"
import { TheSidebar } from "widgets/TheSidebar"

export function App() {
	const { theme } = useTheme()
	return (
		<div className={clsx('app', theme)}>
			<Navbar />
			<div className="content-page">
				<TheSidebar />
				<div className="page-wrapper">
					<Outlet />
				</div>
			</div>
			<TanStackRouterDevtools />
		</div>
	)
}
