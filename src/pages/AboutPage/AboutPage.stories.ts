import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { AboutPage } from "./AboutPage";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  args: {},
  tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
