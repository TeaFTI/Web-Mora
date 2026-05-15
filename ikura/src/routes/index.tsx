/**
 * Index Route
 */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div>
      <h1>Hello Index!</h1>
    </div>
  );
};
