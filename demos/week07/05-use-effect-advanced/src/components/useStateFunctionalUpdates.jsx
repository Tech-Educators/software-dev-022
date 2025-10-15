import { useState } from "react"
export default function UseStateFunctionalUpdate() {
    const [counter, setCounter] = useState(0)

    function handleClick() {
        // React tries to batch these updates and we only go up by 1 each time - it's still getting the old value of counter
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        // make sure it gets the new value of state before running the next update function
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)
        console.log(counter)
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>{counter}</p>
        </div>
    )
}