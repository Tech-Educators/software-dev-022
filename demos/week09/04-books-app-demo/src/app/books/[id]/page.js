import { db } from "@/utils/connect";
import {auth} from "@clerk/nextjs/server"
import BookDetails from "@/components/BookDetails";
import { redirect } from "next/navigation";

export default async function BookPage({params}) {
    const {id} = await params
    // this is the clerk id
    const {userId} = await auth()

    const data = await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [id])
    const book = data.rows[0]


    // get all reviews
    const reviews = await db.query(`
        SELECT review.*, user_account.username, user_account.clerk_id 
        FROM review
        JOIN user_account
        ON user_account.id = review.user_id
        WHERE review.book_id = $1
        `, [id])

    console.log(reviews.rows)
    // see if our current user left any of the reviews


    async function handleSubmit(formData) {
        "use server"
        const content = formData.get('content')
        console.log(content)

        // I need to figure out the id of the currently logged in user based on their clerk id
        const res = await db.query(`SELECT id from user_account WHERE clerk_id = $1`, [userId])
        console.log(res.rows[0].id)
        const currentUserId = res.rows[0].id

        // now that I have the ID, I can insert
        await db.query(`Insert into review (user_id, book_id, content) VALUES ($1, $2, $3)`, [currentUserId, id, content])

        redirect(`/books/${id}`)
    }
    return (    
        <div>
            <BookDetails book={book} />

            <form action={handleSubmit}>
                <input name="content" placeholder="leave a review" />
                <button type="submit">submit review</button>
            </form>

            <h2 className="mt-3 text-2xl mb-5">Reviews of this book</h2>
            {reviews.rows.map(review => (
                <li key={review.id}>
                    <p>{review.username}</p>
                    <p>{review.content}</p>
                </li>
            ))}
        </div>
    )
}

// we can get the book from params
// do a lookup for the user id based on the clerk id to find out the users id in our databased
// we'll get review content fom the form.