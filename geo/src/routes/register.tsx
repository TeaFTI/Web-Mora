import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryVerticalEndIcon } from "lucide-react";

import { RegisterForm } from "~/component/register-form";


export const Route = createFileRoute("/register")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link to="/" className="flex items-center gap-2 font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          Geo
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
