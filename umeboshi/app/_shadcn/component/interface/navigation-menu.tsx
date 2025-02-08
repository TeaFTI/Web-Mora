"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/app/_shadcn/library/utility"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "twgroup/navigation-menu twrelative twflex twmax-w-max twflex-1 twitems-center twjustify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "twgroup twflex twflex-1 twlist-none twitems-center twjustify-center twgap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("twrelative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "twgroup twinline-flex twh-9 tww-max twitems-center twjustify-center twrounded-md twbg-background twpx-4 twpy-2 twtext-sm twfont-medium hover:twbg-accent hover:twtext-accent-foreground focus:twbg-accent focus:twtext-accent-foreground disabled:twpointer-events-none disabled:twopacity-50 data-[active=true]:twbg-accent/50 data-[state=open]:twbg-accent/50 data-[active=true]:twtext-accent-foreground twring-ring/10 dark:twring-ring/20 dark:twoutline-ring/40 twoutline-ring/50 twtransition-[color,box-shadow] focus-visible:twring-4 focus-visible:twoutline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "twgroup", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="twrelative twtop-[1px] twml-1 twsize-3 twtransition twduration-300 group-data-[state=open]:twrotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:twanimate-in data-[motion^=to-]:twanimate-out data-[motion^=from-]:twfade-in data-[motion^=to-]:twfade-out data-[motion=from-end]:twslide-in-from-right-52 data-[motion=from-start]:twslide-in-from-left-52 data-[motion=to-end]:twslide-out-to-right-52 data-[motion=to-start]:twslide-out-to-left-52 twtop-0 twleft-0 tww-full twp-2 twpr-2.5 md:twabsolute md:tww-auto",
        "twgroup-data-[viewport=false]/navigation-menu:bg-popover twgroup-data-[viewport=false]/navigation-menu:text-popover-foreground twgroup-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in twgroup-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out twgroup-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 twgroup-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 twgroup-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 twgroup-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 twgroup-data-[viewport=false]/navigation-menu:top-full twgroup-data-[viewport=false]/navigation-menu:mt-1.5 twgroup-data-[viewport=false]/navigation-menu:overflow-hidden twgroup-data-[viewport=false]/navigation-menu:rounded-md twgroup-data-[viewport=false]/navigation-menu:border twgroup-data-[viewport=false]/navigation-menu:shadow twgroup-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:twring-0 **:data-[slot=navigation-menu-link]:focus:twoutline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "twabsolute twtop-full twleft-0 twisolate twz-50 twflex twjustify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "tworigin-top-center twbg-popover twtext-popover-foreground data-[state=open]:twanimate-in data-[state=closed]:twanimate-out data-[state=closed]:twzoom-out-95 data-[state=open]:twzoom-in-90 twrelative twmt-1.5 twh-[var(--radix-navigation-menu-viewport-height)] tww-full twoverflow-hidden twrounded-md twborder twshadow md:tww-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "hover:twbg-accent hover:twtext-accent-foreground focus:twbg-accent focus:twtext-accent-foreground data-[active=true]:twbg-accent/50 data-[active=true]:twtext-accent-foreground twring-ring/10 dark:twring-ring/20 dark:twoutline-ring/40 twoutline-ring/50 [&_svg:not([class*=text-])]:twtext-muted-foreground twflex twflex-col twgap-1 twrounded-sm twp-2 twtext-sm twtransition-[color,box-shadow] focus-visible:twring-4 focus-visible:twoutline-1 [&_svg:not([class*=size-])]:twsize-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:twanimate-in data-[state=hidden]:twanimate-out data-[state=hidden]:twfade-out data-[state=visible]:twfade-in twtop-full twz-[1] twflex twh-1.5 twitems-end twjustify-center twoverflow-hidden",
        className
      )}
      {...props}
    >
      <div className="twbg-border twrelative twtop-[60%] twh-2 tww-2 twrotate-45 twrounded-tl-sm twshadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
