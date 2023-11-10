"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut, UserIcon, LayoutDashboard, Home } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";

export function User() {
  const { status, data: session } = useSession();
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  if (status === "loading") {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-accent"></div>
    );
  }

  const logout = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center space-x-4">
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <UserIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                {isDashboard ? (
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                ) : (
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          {pathname !== "/login" && (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </>
      )}
    </div>
  );
}
