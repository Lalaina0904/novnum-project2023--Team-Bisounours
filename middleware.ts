import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req: NextRequestWithAuth) => {
    const isAuth = !!req.nextauth.token;
    const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
    const isOnLogin = req.nextUrl.pathname.startsWith("/login");
    const isOnRegister = req.nextUrl.pathname.startsWith("/register");

    if (!isAuth && isOnDashboard) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isAuth) {
      if (isOnLogin || isOnRegister) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }
  },
  {
    pages: {
      signIn: "/login",
      newUser: "/register",
    },
  },
);

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
