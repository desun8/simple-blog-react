import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { PageLoader } from "./PageLoader";

const meta = {
  title: "Shared/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
