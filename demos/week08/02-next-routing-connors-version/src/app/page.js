import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the site!</h1>
      <p>Create a profile!</p>
      <p>Make a post!</p>
      <Link href="/about">About Us</Link>
      <Link href="/users/600/500">Look at this funncy post!</Link>
    </div>
  );
}
