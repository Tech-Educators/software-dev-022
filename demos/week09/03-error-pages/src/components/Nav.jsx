import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex flex-row gap-10">
            <Link href="/">home</Link>
            <Link href='/books'>books</Link>
        </nav>
    )
}