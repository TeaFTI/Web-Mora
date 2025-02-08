import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_shadcn/library/utility"

const buttonVariants = cva(
  "twinline-flex twitems-center twjustify-center twgap-2 twwhitespace-nowrap twrounded-md twtext-sm twfont-medium twtransition-[color,box-shadow] disabled:twpointer-events-none disabled:twopacity-50 [&_svg]:twpointer-events-none [&_svg:not([class*=size-])]:twsize-4 [&_svg]:twshrink-0 twring-ring/10 dark:twring-ring/20 dark:twoutline-ring/40 twoutline-ring/50 focus-visible:twring-4 focus-visible:twoutline-1 aria-invalid:focus-visible:twring-0",
  {
    variants: {
      variant: {
        default:
          "twbg-primary twtext-primary-foreground twshadow-sm hover:twbg-primary/90",
        destructive:
          "twbg-destructive twtext-destructive-foreground twshadow-xs hover:twbg-destructive/90",
        outline:
          "twborder twborder-input twbg-background twshadow-xs hover:twbg-accent hover:twtext-accent-foreground",
        secondary:
          "twbg-secondary twtext-secondary-foreground twshadow-xs hover:twbg-secondary/80",
        ghost: "hover:twbg-accent hover:twtext-accent-foreground",
        link: "twtext-primary twunderline-offset-4 hover:twunderline",
      },
      size: {
        default: "twh-9 twpx-4 twpy-2 has-[>svg]:twpx-3",
        sm: "twh-8 twrounded-md twpx-3 has-[>svg]:twpx-2.5",
        lg: "twh-10 twrounded-md twpx-6 has-[>svg]:twpx-4",
        icon: "twsize-9",
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
