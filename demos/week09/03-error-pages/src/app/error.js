'use client'

// Error.js pages must have 'use client'
// they get two props 
// error - which contains information about the error that happened
// reset - a function to attempt to re-render the page/component that caused the error
export default function Error({error, reset}) {
    console.log(error)
    return (
        <div>
            <p>Something went wrong ;(((((</p>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}