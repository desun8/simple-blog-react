import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { TheSidebar } from "./TheSidebar";

const meta = {
  title: "widgets/TheSidebar",
  component: TheSidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof TheSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
