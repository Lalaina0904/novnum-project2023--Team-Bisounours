"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export function User() {
  const { status, data: session } = useSession();
  const pathname = usePathname();

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
        <Button onClick={logout} variant="ghost" size="icon">
          <LogOut className="h-4 w-4" />
        </Button>
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
