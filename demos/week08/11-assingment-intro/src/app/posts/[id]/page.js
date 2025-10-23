import AddComment from "@/components/AddComment"
import pg from "pg"
export default async function Page({params}) {
    // this is a dynamic route that will display my post information

    // I'll need to know what the route parameters are 
    const {id} = await params
    // reword: I need to know what the id in the URL is 
    // /posts/1
    // or
    // /posts/2 -> this tells me what post information we're trying to display

    // set up your db connection

    // replace id with $1 (use is correctly)
    // fetch a post by its id `SELECT * FROM posts WHERE id = id`



    return (
        <div>
            <div>
                {/* display post information */}
            </div>

            {/* the commonets component needs to know the id of the post it has to fetch comments for */}
            <AddComment id={id}/>
            <Comments id={id} />
        </div>
    )
}