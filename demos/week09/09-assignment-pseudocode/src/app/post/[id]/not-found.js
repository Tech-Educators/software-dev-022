import Link from "next/link";

export default function NotFound() {
  // Usually we just want to link back to a "safe" page on a not-found page, either home or a relevant page
  return (
    <>
      <p>Sorry! We couldn&apos;t find that page.</p>
      <Link href="/">Go home instead please</Link>
    </>
  );
}
