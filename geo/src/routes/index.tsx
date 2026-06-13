/**
 * Index Route
 */

import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "~/component/theme-toggle";

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <main>
      <ThemeToggle />
      <h1>Hello Index!</h1>
    </main>
  );
};
