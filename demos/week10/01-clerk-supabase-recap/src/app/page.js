import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <h1>Welcome back!</h1>
      </SignedIn>
      <SignedOut>
        <h1>Welcome to the site! Please sign up to create an account!</h1>
      </SignedOut>
    </>
  );
}
