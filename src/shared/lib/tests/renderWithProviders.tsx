import { type ReactElement, type ReactNode } from "react";
import { render } from "vitest-browser-react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "app/routes/routeTree.gen";
import i18n from "../../config/i18n/i18nForTest";

const router = createRouter({ routeTree });

interface Props {
  children: ReactNode;
}
const Prodivers = (props: Props) => {
  const { children } = props;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <RouterProvider router={router}>{children}</RouterProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export function renderWithProdivers(ui: ReactElement) {
  return render(ui, {
    wrapper: Prodivers,
  });
}
