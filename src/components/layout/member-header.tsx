"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bell, Utensils, Settings, CreditCard, LayoutDashboard, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOut } from "@/services/auth";
import { toast } from "sonner";

const navItems = [
  {
    title: "Dashboard",
    href: "/member",
    icon: LayoutDashboard,
  },
  {
    title: "Meal Log",
    href: "/member/meals",
    icon: Utensils,
  },
  {
    title: "Expenses",
    href: "/member/expenses",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/member/settings",
    icon: Settings,
  },
];

export function MemberHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logOut();
      if (result.success) {
        toast.success("Logged out successfully");
        router.push("/auth/login");
      } else {
        toast.error(result.message || "Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
          <Utensils className="h-5 w-5" />
        </div>
        <span className="text-lg font-bold">MessPro</span>
      </div>

      {/* Navigation Links (Center) */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                isActive ? "text-green-500 font-semibold" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Right Side: Notifications & Profile */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        
        <div className="hidden md:flex items-center gap-3 pl-4 border-l">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">Ariful Islam</span>
            <span className="text-xs text-muted-foreground">Member #402</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                <Avatar className="h-9 w-9 border bg-teal-100">
                  <AvatarImage src="/avatars/member.png" alt="Member" />
                  <AvatarFallback className="bg-teal-100 text-teal-700">AI</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Ariful Islam</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    member@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/member/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
