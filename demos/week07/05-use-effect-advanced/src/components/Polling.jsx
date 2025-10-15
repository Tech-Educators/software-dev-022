// we're going to build a component that will query an API every 3 seconds for a new random fox

import {useEffect, useState} from "react"

export default function Polling() {
    const [img, setImg] = useState('')

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://randomfox.ca/floof/`)
            const imgData = await data.json()
            setImg(imgData)
        }
        // run the fetchData function every 3 seconds
        const intervalID = setInterval(fetchData, 3000)

        // clear the previous interval so that two runing (because in DEV mode our effects run twice)
        return function() {
            clearInterval(intervalID)
        }

    }, [])
    return (
        <>
            <img src={img.image} />
        </>
    )
}