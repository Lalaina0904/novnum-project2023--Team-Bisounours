import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    authorized: ({ req: { nextUrl }, token }) => {
      const isLoggedIn = !!token;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        return isLoggedIn;
      }
      return true;
    },
  },
});
