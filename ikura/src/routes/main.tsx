import {
  createFileRoute,
  Outlet,
} from "@tanstack/react-router";
import { ThemeToggle } from "~/component/theme-toggle";

export const Route = createFileRoute("/main")({
  component: MainLayout,
})

function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <ThemeToggle />
      <Outlet />
    </div>
  );
};
