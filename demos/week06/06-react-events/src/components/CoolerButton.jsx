export const CoolerButton = () => {

    function handleClick(name) {
        console.log(`${name} I said not to press me!`)
    }

    return (
        <button onClick={() => handleClick('Sam')}>
            Dont click me 
        </button>
    )
}


// DONT DO THIS - as it will run the function on page load instead of waiting for the event - it just invokes it immediately.  
/*

return (
    <button onClick={handleClick('Sam')}></button>
)

*/