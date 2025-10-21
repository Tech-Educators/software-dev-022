'use client'

// ^ you must do this for it to work as a client component
// it must be the very very first thing in the file.
// by putting the 'use client' in this file, its turned back into plain/regular react like we were doing in the past.
import { useState } from "react"

export default function Client() {
    console.log(`This is running on the client`)
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}