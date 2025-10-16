import { useSearchParams, Link} from "react-router"
import PostsForm from "../components/PostsForm"
import { useEffect, useState } from "react"
export default function PostsPage() {
    // fetch and display all posts 
    const [posts, setPosts] = useState([])
    // we'll need use Effect and use State

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/posts`)
            const data = await res.json()
            console.log(data)
            setPosts(data)
        }
        fetchData()
    }, []) 




    // clear our interval in the cleanup of our useeffect
    // https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week07/05-use-effect-advanced/src/components/Polling.jsx
    return (
        <div>
            <PostsForm />
            {/* map through posts and display */}
            {posts.map((post) => (
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            ))}
        </div>
    )
}