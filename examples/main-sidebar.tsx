"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { 
  Home,
  Sparkles,
  Contact,
  MapPin,
  Heart,
  Settings
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { UserProfile } from "@/components/user-profile"
import { CollapsibleNavSection } from "@/components/collapsible-nav-section"







export function MainSidebar() {
  const { isMobile, setOpenMobile } = useSidebar()

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" onClick={handleLinkClick}>
                <Image 
                  src="/Lolek-logo.png" 
                  alt="Lolek Productions" 
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Lolek Productions</span>
                  <span className="truncate text-xs">Serving the Church</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem key="Dashboard">
                <SidebarMenuButton asChild>
                  <Link href="/dashboard" onClick={handleLinkClick}>
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <CollapsibleNavSection
                name="Contacts"
                icon={Contact}
                items={[
                  {
                    title: "Contact List",
                    url: "/contacts",
                    icon: Contact,
                  },
                  {
                    title: "Create Contact",
                    url: "/contacts/create",
                    icon: Sparkles,
                  },
                ]}
                defaultOpen={true}
              />

              <CollapsibleNavSection
                name="Parishes"
                icon={MapPin}
                items={[
                  {
                    title: "Parish Directory",
                    url: "/parishes",
                    icon: MapPin,
                  },
                  {
                    title: "Create Parish",
                    url: "/parishes/create",
                    icon: Sparkles,
                  },
                ]}
                defaultOpen={true}
              />

              <CollapsibleNavSection
                name="Campaigns"
                icon={Heart}
                items={[
                  {
                    title: "Campaigns",
                    url: "/campaigns",
                    icon: Heart,
                  },
                  {
                    title: "Create Campaign",
                    url: "/campaigns/create",
                    icon: Sparkles,
                  },
                ]}
                defaultOpen={true}
              />

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Admin section at the bottom */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem key="Admin Import">
                <SidebarMenuButton asChild>
                  <Link href="/admin/import" onClick={handleLinkClick}>
                    <Settings />
                    <span>Admin Import</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-2">
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  )
}