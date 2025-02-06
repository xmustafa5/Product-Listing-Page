"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function CardContentToggle({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="h-10 w-full flex items-center justify-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
          className="transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ArrowDownCircle className="h-5 w-5 text-primary" />
        </Button>
      </div>
      <div 
        className={twMerge(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default CardContentToggle;
