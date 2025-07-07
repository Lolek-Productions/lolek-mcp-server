"use client"

import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

type BreadcrumbItem = {
  label: string;
  href?: string;
  active?: boolean;
};

interface MainHeaderProps {
  showSidebarTrigger?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export function MainHeader({ 
  showSidebarTrigger = true,
  breadcrumbs = []
}: MainHeaderProps) {
  // If no breadcrumbs provided, show default Dashboard breadcrumb
  const displayBreadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : [
    { label: "Dashboard" }
  ];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        {showSidebarTrigger && (
          <>
            <SidebarTrigger className="-ml-1" />
            <div className="mr-2 h-4 w-px bg-gray-400 dark:bg-gray-500" />
          </>
        )}
        
        <Breadcrumb>
          <BreadcrumbList>
            {displayBreadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < displayBreadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}