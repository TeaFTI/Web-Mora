import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_shadcn/library/utility"

const buttonVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-transition-[color,box-shadow] disabled:tw-pointer-events-none disabled:tw-opacity-50 [&_svg]:tw-pointer-events-none [&_svg:not([class*=size-])]:tw-size-4 [&_svg]:tw-shrink-0 tw-ring-ring/10 dark:tw-ring-ring/20 dark:tw-outline-ring/40 tw-outline-ring/50 focus-visible:tw-ring-4 focus-visible:tw-outline-1 aria-invalid:focus-visible:tw-ring-0",
  {
    variants: {
      variant: {
        default:
          "tw-bg-primary tw-text-primary-foreground tw-shadow-sm hover:tw-bg-primary/90",
        destructive:
          "tw-bg-destructive tw-text-destructive-foreground tw-shadow-xs hover:tw-bg-destructive/90",
        outline:
          "tw-border tw-border-input tw-bg-background tw-shadow-xs hover:tw-bg-accent hover:tw-text-accent-foreground",
        secondary:
          "tw-bg-secondary tw-text-secondary-foreground tw-shadow-xs hover:tw-bg-secondary/80",
        ghost: "hover:tw-bg-accent hover:tw-text-accent-foreground",
        link: "tw-text-primary tw-underline-offset-4 hover:tw-underline",
      },
      size: {
        default: "tw-h-9 tw-px-4 tw-py-2 has-[>svg]:tw-px-3",
        sm: "tw-h-8 tw-rounded-md tw-px-3 has-[>svg]:tw-px-2.5",
        lg: "tw-h-10 tw-rounded-md tw-px-6 has-[>svg]:tw-px-4",
        icon: "tw-size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
