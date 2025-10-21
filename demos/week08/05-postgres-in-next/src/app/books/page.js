import pg from "pg"
import Link from "next/link"
import Image from "next/image"

export default async function Page() {
    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const res = await db.query(`SELECT * FROM books`)
    const books = res.rows
    console.log(books)
    return (
        <div>
            <h3>All books</h3>
            <div>
                {books.map((book) => (
                    <div key={book.id}>
                        <Link href={`/books/${book.id}`}>
                            <Image src={book.img_url} width={500} height={400} alt={book.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}