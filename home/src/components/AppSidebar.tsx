import {
  UserCircle,
  CalendarDays,
  Receipt,
  Pill,
  FlaskConical,
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar as SidebarPrimitive,
  SidebarTrigger,
  SidebarContent,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { name: "Patient Records", href: "/patient-records", icon: UserCircle },
  { name: "Appointments", href: "/appointments", icon: CalendarDays },
  { name: "Billing", href: "/billing", icon: Receipt },
  { name: "Pharmacy", href: "/pharmacy", icon: Pill },
  { name: "Laboratory", href: "/laboratory", icon: FlaskConical },
];

export function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <SidebarPrimitive className="border-r bg-background dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex h-16 items-center border-b px-4 dark:border-gray-700">
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
          <div className="flex w-full items-center gap-2 lg:ml-2">
            <span className="font-semibold dark:text-white">HealthCare</span>
          </div>
        </div>
        <SidebarContent>
          <ScrollArea className="flex-1 px-3">
            <nav className="flex flex-col gap-2 py-4">
              {sidebarItems.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-2",
                      pathname === item.href && "bg-secondary dark:bg-gray-700",
                      "dark:text-gray-200 dark:hover:bg-gray-700"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="truncate">{item.name}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SidebarContent>
      </div>
    </SidebarPrimitive>
  );
}
