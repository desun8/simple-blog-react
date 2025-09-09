import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { AppButton, AppButtonTheme } from "./AppButton";

test("test render", async () => {
  const { getByText } = render(<AppButton>TEST</AppButton>);

  await expect.element(getByText("TEST")).toBeInTheDocument();
});

test("test clear theme", async () => {
  const { getByText } = render(
    <AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>,
  );

  await expect.element(getByText("TEST")).toHaveClass("clear");
});
