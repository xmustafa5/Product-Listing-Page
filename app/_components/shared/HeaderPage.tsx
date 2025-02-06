import { Bell, Package } from "lucide-react"
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeaderPage() {
  return (
    <div className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 flex items-center px-4">
      <div className="flex items-center gap-2">
        <Package className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline-block">Inventory System</span>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Inventory Alerts</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="font-medium">Low Stock Alert</span>
              <span className="text-sm text-muted-foreground">Product SKU-123 below threshold</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="font-medium">Incoming Shipment</span>
              <span className="text-sm text-muted-foreground">Order #456 arriving today</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="font-medium">Stock Update Required</span>
              <span className="text-sm text-muted-foreground">3 items need recount</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>User Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Activity Log</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

