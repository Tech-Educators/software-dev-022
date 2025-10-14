import {Link, useSearchParams } from "react-router";


export default function Animals() {
    // const searchParams = useSearchParams()
    // console.log(searchParams[0].get('sam'))

    // I'll use destructuring to destructure the array useSearchParams returns 
    // The first thing it returns is the URLSearchParams object (we can call .get to get values out of this)
    // The second thing it returns is a function to update those search params

    const [params, setSearchParams] = useSearchParams()

    // User goes to the THIS URL: /animals?sortBy=asc
    // params will be this: parmas = {sortBy: asc}

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
      ];

      if (params.get('sortBy') === 'asc') {
        animals.sort()
      } else if (params.get('sortBy') === 'desc') {
        animals.sort().reverse()
      }

    return (
        <div>
            {/* We can just use a link - the most straight forward options */}
            <Link to='/animals?sortBy=asc'>Sort by Asc</Link>
            <Link to='/animals'>Dont sort</Link>
            <ul>
                {animals.map(animal => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>  
            {/* This provides the same outcome as just using the Link tags. */}
            <select onChange={(event) => setSearchParams({sortBy: event.target.value})}>
                <option value="asc">Sort by asc</option>
                <option value='desc'>Sort by desc</option>
            </select>
        </div>
    )
}