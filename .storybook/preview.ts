import type { Preview } from "@storybook/react-vite";
import { Theme } from "../src/app/providers/ThemeProvider";
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  I18nDecorator,
} from "../src/shared/config/storybook";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    I18nDecorator,
    RouterDecorator,
  ],
};

export default preview;
