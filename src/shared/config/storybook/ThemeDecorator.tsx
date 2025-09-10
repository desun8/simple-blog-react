import { ThemeProvider, type ThemeType } from "app/providers/ThemeProvider";
import { Story } from "@storybook/addon-docs/blocks";

export const ThemeDecorator =
  (theme: ThemeType) => (StoryComponent: typeof Story) => (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
