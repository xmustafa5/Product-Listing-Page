import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      url: "/",
      items: [
        {
          title: "Dashboard",
          url: "/",
        },
        {
          title: "Warehouse",
          url: "/warehouse",
          isActive: true,
        },
      ],
      
    },
    {
      title: "Inventory",
      url: "/inventory",
      items: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Categories",
          url: "/categories",
        },
        {
          title: "Transfer Products",
          url: "/transfer-products",
        },
        {
          title: "Audit",
          url: "/audit",
        },
        {
          title: "History",
          url: "/history",
        }
      ],
    },
    {
      url: "#",
      items: [
        {
          title: "Suppliers",
          url: "/suppliers",
        },
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "Reports",
          url: "/reports",
        },
        {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
  
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="absolute" {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.url}>
            {item?.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
