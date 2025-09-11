import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { NavLink } from "./NavLink";
import Icon from "../../assets/i-nav-main.svg?react";

const meta = {
  title: "widgets/TheSidebar/NavLink",
  component: NavLink,
  args: {
    to: "/",
    Icon: Icon,
    children: "nav link",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const BaseDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
};

export const CollapsedDark: Story = {
  args: {
    collapsed: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
