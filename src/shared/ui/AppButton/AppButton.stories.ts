import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { AppButton, AppButtonTheme } from "./AppButton";

const meta = {
  title: "Shared/AppButton",
  component: AppButton,
  args: {
    children: "Button",
  },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: Object.values(AppButtonTheme),
      description: "Тема кнопки",
      table: {
        type: { summary: "AppButtonTheme" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppButtonTheme.PRIMARY,
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: AppButtonTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    theme: AppButtonTheme.SECONDARY,
  },
};
export const SecondaryDark: Story = {
  args: {
    theme: AppButtonTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    theme: AppButtonTheme.CLEAR,
  },
};
export const ClearDark: Story = {
  args: {
    theme: AppButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
