import Link from "next/link"
export default function NotFound() {
    return (
        <div>
            <p>I couldn't find that book in our database </p>
            <Link href='/books'>Back to all books</Link>
        </div>
    )
}