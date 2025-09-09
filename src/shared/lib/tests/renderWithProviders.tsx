import { type ReactElement, type ReactNode } from "react";
import { render } from "vitest-browser-react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "app/providers/ThemeProvider";
import i18n from "../../config/i18n/i18nForTest";

interface Props {
  children: ReactNode;
}
const Prodivers = (props: Props) => {
  const { children } = props;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
};

export function renderWithProdivers(ui: ReactElement) {
  return render(ui, {
    wrapper: Prodivers,
  });
}
