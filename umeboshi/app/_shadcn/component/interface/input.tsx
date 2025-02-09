import * as React from "react"

import { cn } from "@/app/_shadcn/library/utility"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "tw-border-input file:tw-text-foreground placeholder:tw-text-muted-foreground selection:tw-bg-primary selection:tw-text-primary-foreground aria-invalid:tw-outline-destructive/60 aria-invalid:tw-ring-destructive/20 dark:aria-invalid:tw-outline-destructive dark:aria-invalid:tw-ring-destructive/50 tw-ring-ring/10 dark:tw-ring-ring/20 dark:tw-outline-ring/40 tw-outline-ring/50 aria-invalid:tw-outline-destructive/60 dark:aria-invalid:tw-outline-destructive dark:aria-invalid:tw-ring-destructive/40 aria-invalid:tw-ring-destructive/20 aria-invalid:tw-border-destructive/60 dark:aria-invalid:tw-border-destructive tw-flex tw-h-9 tw-w-full tw-min-w-0 tw-rounded-md tw-border tw-bg-transparent tw-px-3 tw-py-1 tw-text-base tw-shadow-xs tw-transition-[color,box-shadow] file:tw-inline-flex file:tw-h-7 file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium focus-visible:tw-ring-4 focus-visible:tw-outline-1 disabled:tw-pointer-events-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50 aria-invalid:focus-visible:tw-ring-[3px] aria-invalid:focus-visible:tw-outline-none md:tw-text-sm dark:aria-invalid:focus-visible:tw-ring-4",
        className
      )}
      {...props}
    />
  )
}

export { Input }
