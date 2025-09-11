import type { PartialStoryFn, StoryContext } from "storybook/internal/types";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

export const RouterDecorator = (
  Story: PartialStoryFn,
  { parameters }: StoryContext,
) => {
  const {
    initialEntries = ["/"],
    initialIndex,
    routes = ["/"],
  } = parameters?.router || {};

  const rootRoute = createRootRoute();

  const children = routes.map((path: string) =>
    createRoute({
      path,
      getParentRoute: () => rootRoute,
      component: Story,
    }),
  );

  rootRoute.addChildren(children);

  const router = createRouter({
    history: createMemoryHistory({ initialEntries, initialIndex }),
    routeTree: rootRoute,
  });

  return <RouterProvider router={router} />;
};
