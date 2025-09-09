import { expect, test } from "vitest";
import { TheSidebar } from "./TheSidebar";
import { renderWithProdivers } from "shared/lib/tests/renderWithProviders";

test("test render", async () => {
  const { getByTestId } = renderWithProdivers(<TheSidebar />);

  await expect.element(getByTestId("sidebar")).toBeInTheDocument();
});

test("test toggle", async () => {
  const { getByTestId } = renderWithProdivers(<TheSidebar />);
  const toggleBtn = getByTestId("sidebar-toggle");
  await expect.element(getByTestId("sidebar")).toBeInTheDocument();
  await toggleBtn.click();
  await expect.element(getByTestId("sidebar")).toHaveClass("collapsed");
});
