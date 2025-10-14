import { useState } from "react"
export default function SimpleForm() {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`The user submitted this ${username}`)
        // POST it to an API 
        // Local storage
        // Eventually work its way to a database
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your usernamep</label>
                <input id='username' onChange={(event) => {
                    console.log(event.target.value)
                    setUsername(event.target.value)
                }}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}