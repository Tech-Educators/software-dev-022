"use client"
import AnotherServer from "./AnotherServer"
export default function AnotherClient() {
    console.log(`This is another client component`)
    return (
        <div>
            <AnotherServer />
        </div>
    )
}