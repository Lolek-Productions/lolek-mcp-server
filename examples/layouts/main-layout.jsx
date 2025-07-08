import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/main-sidebar";

export default function MainLayout({children}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex-1">
        {children}
      </div>
    </SidebarProvider>
  );
}
