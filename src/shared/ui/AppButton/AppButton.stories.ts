import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook";
import { AppButton, AppButtonSize, AppButtonTheme } from "./AppButton";

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
    size: {
      control: { type: "select" },
      options: Object.values(AppButtonSize),
      description: "Размер кнопки",
      table: {
        type: { summary: "AppButtonSize" },
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

export const Background: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND,
  },
};
export const BackgroundDark: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};
export const BackgroundInvertedDark: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
  args: {
    size: AppButtonSize.M,
  },
};
export const SizeL: Story = {
  args: {
    size: AppButtonSize.L,
  },
};
export const SizeXL: Story = {
  args: {
    size: AppButtonSize.XL,
  },
};

export const SquareM: Story = {
  args: {
    size: AppButtonSize.M,
    children: ">",
    square: true,
  },
};
export const SquareMDark: Story = {
  args: {
    size: AppButtonSize.M,
    children: ">",
    square: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareL: Story = {
  args: {
    size: AppButtonSize.L,
    children: ">",
    square: true,
  },
};
export const SquareXL: Story = {
  args: {
    size: AppButtonSize.XL,
    children: ">",
    square: true,
  },
};
