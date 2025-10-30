import { clerkMiddleware } from "@clerk/nextjs/server";
// This is all we need here by default but follow the docs here to set up protected routes if you want them, it's simpler than it looks -
// https://clerk.com/docs/reference/nextjs/clerk-middleware#create-route-matcher

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
