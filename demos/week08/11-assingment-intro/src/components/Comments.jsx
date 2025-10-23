// this component will display the comments section for blog post

import DeleteButton from "./DeleteButton";

export default function Comments({id}) {
    // use database to fetch comments based on the post id

    // SELCT * FROM COMMENTS WHERE BLOG id = theiDwePassedIntoTHisComponent

    function handleDelete(idOFComment) {
        "use server"
        // db stuff
        // DELETE * FROM comments where the id = idOfComment

        // revalidate /posts/id
    }
    return (
        <div>
            {/* map through the comments once gotten
                // display the comments + delete for each
                
            */
                <DeleteButton commentId={comment.id} handleDelete={handleDelete}/>
            }
        </div>
    )
}