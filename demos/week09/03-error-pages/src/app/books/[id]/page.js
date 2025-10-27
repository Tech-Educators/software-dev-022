import { connect } from "@/utils/connect"
import { notFound } from "next/navigation"

export default async function BooksPage({params}) {
    // get the id of the book from the route parameters?
    const pageParams = await params
    console.log(pageParams.id)

    // connect to DB
    const db = connect()
    const data = await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [pageParams.id])
    const bookDetails = data.rows[0]
    console.log(bookDetails)


    // if booksDetails is undefined
    if (!bookDetails) {
        notFound()
    }

    return (
        <div>
            <h3>{bookDetails.title}</h3>
            <p>{bookDetails.description}</p>
        </div>
    )
}