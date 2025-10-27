import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


// set up my protected routes
const isProtectedRoute = createRouteMatcher(['/profile(.*)'])

// actual route protection. 
// when the user navigated to anything /profile we'll interrcept the request and check if they're signed in. If not, we redirect them to sign in.
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};