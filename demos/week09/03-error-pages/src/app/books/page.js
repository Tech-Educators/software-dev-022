import { connect } from "@/utils/connect"
import Link from "next/link"

export default async function BooksPage() {
    const db = connect()
    const data = await db.query(`SELECT * FROM books`)
    const books = data.rows
    

    console.log(books)
    return (
        <div className="flex flex-col mt-10">
            {books.map(book => (
                <Link key={book.id} href={`/books/${book.id}`}>{book.title}</Link>
            ))}
        </div>
    )
}