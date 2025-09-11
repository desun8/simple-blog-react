import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useTheme } from "./providers/ThemeProvider";
import clsx from "clsx";
import { Navbar } from "../widgets/Navbar";
import { TheSidebar } from "widgets/TheSidebar";
import { Suspense } from "react";

export function App() {
  const { theme } = useTheme();
  const showRouterDevtools = false;
  return (
    <div className={clsx("app", theme)}>
      <Suspense>
        <Navbar />
        <div className="content-page">
          <TheSidebar />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </Suspense>
      {showRouterDevtools && <TanStackRouterDevtools />}
    </div>
  );
}
