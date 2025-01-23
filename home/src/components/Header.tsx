import { Bell, Menu, User } from "lucide-react";
import { ThemeToggle } from "hs-comp-library/components";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-800/95 dark:border-gray-700 h-14 min-h-[3.5rem] flex items-center">
      <div className="container h-full flex items-center gap-4 px-2 justify-between">
        <SidebarTrigger>
          <Button
            variant="ghost"
            type="button"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SidebarTrigger>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
