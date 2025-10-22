"use client"
import { useState } from "react"

export function LikeButton() {
    console.log('Hello')
    const [liked, setLikes] = useState(false)
    return (
        <button onClick={() => setLikes(!liked)}>
        {liked ? '❤︎' : '♡'}
    </button>
    )
}