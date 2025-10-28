// get all books and display
import Link from "next/link";
import { db } from "@/utils/connect";
import Image from "next/image";


export default async function Page() {
    const data = await db.query(`SELECT * from books`)
    const books = data.rows

    return (
        <section className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-5">
                {
                    books.map(book => (
                        <Link href={`/books/${book.id}`} key={book.id}>
                            <Image height={500} width={300} alt="" src={book.img_url} className="p-4 hover:scale-105"/>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}