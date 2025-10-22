import pg from "pg"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export default function Page() {

    // my server function
    async function handleSubmit(formData) {
       "use server"
        console.log(formData)
        // turn it into a regular object

        const {title, author, description, quote, released, img_url} = Object.fromEntries(formData)
        // long way: 
        // const data = Object.fromEntries(formData)
        // console.log(data)

        // const title = data.title
        // connect to my Database
        const db = new pg.Pool({connectionString: process.env.DB_CONN})
        const newBook = db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])

        // revalidate path makes sure the books route refetches all the book data now we've added a new one
        revalidatePath('/books')

        // redirect redirects the user to the books route
        redirect('/books')
    }

    return (
        <div>
            <h2>Add a new book:</h2>
            {/* submitting the form passes your FormData to the handleSubmit function as an argument */}
            {/* handleSubmit(FormData) */}
            <form action={handleSubmit}>
                <input name='title' placeholder="title" required />
                <input name='author' placeholder="author" required />
                <input name='description' placeholder="description" required />
                <input name='quote' placeholder="quote" required />
                <input name='released' placeholder="released" required type="date"/>
                <input name='img_url' placeholder="img_url" required />
                <button type="submit" className="m-4">submit</button>
            </form>
        </div>
    )
}

/*
CREATE TABLE books (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL, "use server"
  description TEXT,
  quote VARCHAR(255),
  released DATE,
  img_url TEXT
)


*/



function sum(a) {
    return a + 5
}

sum(10)