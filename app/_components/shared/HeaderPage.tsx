import { Package } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export default function HeaderPage() {
  return (
    <div className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 flex items-center px-4">
      <div className="flex items-center gap-2">
        <Package className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline-block">
          Product Showcase
        </span>
      </div>
      {/* 
      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <ModeToggle />
      </div> */}
    </div>
  );
}
