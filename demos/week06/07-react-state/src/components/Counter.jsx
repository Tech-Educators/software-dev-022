import {useState} from "react"

export const Counter = ({dislikeCount, setDislikeCount}) => {
    const [count, setCount] = useState(0)


    // the above is the same as doing what we did below - we're just destructuring the returned array from useState. 
    // let stuff = useState(1)

    // let count = stuff[0]
    // let setCount = stuff[1]

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                console.log('Clickedo on button')
                setCount(count + 1)
                console.log(count)
            }}>Click me!</button>
            
            <button onClick={() => {
                setDislikeCount(dislikeCount - 1)
            }}>Dislike me {dislikeCount}</button>
        </div>
    )
}