import PostsForm from "../components/PostsForm"
export default function PostsPage() {
    // fetch and display all posts 
    // we'll need use Effect and use State
    // clear our interval in the cleanup of our useeffect
    // https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week07/05-use-effect-advanced/src/components/Polling.jsx
    return (
        <div>
            <PostsForm />
            {/* map through posts and display */}
        </div>
    )
}