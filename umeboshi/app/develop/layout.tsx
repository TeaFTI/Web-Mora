/**
 * Develop Layout
 */

import NavigationSidebarAlpha from "@/app/_component/shadcn/navigation-sidebar-alpha";
import { SidebarProvider, SidebarTrigger } from "@/app/_shadcn/component/interface/sidebar";

export default function DevelopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <NavigationSidebarAlpha />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
