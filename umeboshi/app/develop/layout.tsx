/**
 * Develop Layout
 */

import NavigationSidebar from "@/app/_component/shadcn/navigation-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/app/_shadcn/component/interface/sidebar";

export default function DevelopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <NavigationSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
