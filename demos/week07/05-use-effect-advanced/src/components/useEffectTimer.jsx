import { useEffect, useState } from "react";

export const CookieClicker = () => {
    const [cookies, setCookies] = useState(0)

    useEffect(() => {
        // setInterval() returns an ID for that interval so we know which one to work with
        const interval = setInterval(() => {
            console.log(`Interval running`) 
            // we force react to give us the last value of cookies and not just the static 0 from when the interval was made. 
            setCookies((prevCookies) => prevCookies + 1)
        }, 1000)

        // I'm going to clear my interval to make sure it stops running before another one can be made
        return () => {
            // clear the interval we started earlier when the component unmounts. 
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <p>{cookies}</p>
        </div>
    )
}


// useEffect(function () {
//     // setInterval() returns an ID for that interval so we know which one to work with
//     const interval = setInterval(function ()  {
//         console.log(`Interval running`) 
//         // we force react to give us the last value of cookies and not just the static 0 from when the interval was made. 
//         setCookies(function (prevCookies) {return prevCookies + 1})
//     }, 1000)

//     // I'm going to clear my interval to make sure it stops running before another one can be made
//     return function() {
//         // clear the interval we started earlier when the component unmounts. 
//         clearInterval(interval)
//     }
// }, [])  



// () => {return foo}
// () => foo

// Array.map(item => (
//     <p>item</p>
// ))

// App.map(item => {
//     return (
//         <p>item</p>
//     )
// })