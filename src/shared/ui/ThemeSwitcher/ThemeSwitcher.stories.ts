import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "Shared/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
