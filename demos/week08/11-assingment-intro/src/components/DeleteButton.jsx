"use client"

// this must be a client component
export default function DeleteButton({commentId, handleDelete}) {
    return (
        <button onClick={() => {
            handleDelete(commentId)
        }}>Delete</button>
    )
}