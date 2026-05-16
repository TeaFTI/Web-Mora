import {
  createFileRoute,
  Outlet,
} from "@tanstack/react-router";
import { ModeToggle } from "~/component/mode-toggle";

export const Route = createFileRoute("/main")({
  component: MainLayout,
})

function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <ModeToggle />
      <Outlet />
    </div>
  );
};
