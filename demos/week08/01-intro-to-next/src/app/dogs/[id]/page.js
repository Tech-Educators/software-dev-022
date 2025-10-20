// all page.js files in next.js are given an object as an argument
// that object containers the params and query strings 

export default async function Page({params}) {
    // this is how we see what the dynamic route parameters value is 
    // if the user goes to /dogs/2 -> id is 2
    // if the user goes to /dogs/sam -> id is 'sam'

    const pageParams = await params
    const idOfDog = pageParams.id
    return (
        <div>
            <p>This is a dynamic route!</p>
            <p>the params are {idOfDog}</p>
        </div>
    )
}