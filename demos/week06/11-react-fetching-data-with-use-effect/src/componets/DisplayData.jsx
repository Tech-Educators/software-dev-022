import {useState, useEffect} from "react"

// useEffect runs *after* the first render
export const DisplayData = () => {
    const [users, setUsers] = useState(null)
    // give it an empty array so it only fetches when the page first loads
    useEffect(() => {
       async function fetchData() {
        const response = await fetch(`https://dummyjson.com/users`)
        const data = await response.json()
        setUsers(data) 
       } 
       fetchData()
    }, [])

    console.log(users)
    return (
        <div>

        </div>
    )
}
