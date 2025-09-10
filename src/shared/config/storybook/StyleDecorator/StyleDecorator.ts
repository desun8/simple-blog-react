import { type Story } from "@storybook/addon-docs/blocks";
import "app/styles/index.css";
import "./StyleDecorator.css";

export const StyleDecorator = (story: () => typeof Story) => story();
