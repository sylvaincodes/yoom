import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    ignoredRoutes :['/']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};