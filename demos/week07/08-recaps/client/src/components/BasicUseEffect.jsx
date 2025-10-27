// components re-render when state or props change
import { useEffect, useState } from "react";
export default function BasicUseEffect() {
  const [count, setCount] = useState(0);
  console.log(`Hello`);
  console.log(`how`);
  console.log(`Are you .....`);

  const [fox, setFox] = useState({})
  // so I have some code that I only want to run when the component first loads
  // useeffect is a function react gives us to solve this issue - we can tell our code when it should run
  // if the array is empty, then the functoin given to useEffect will only run when the component first loads
  useEffect(() => {
    async function fetchData() {
        const res = await fetch(`https://randomfox.ca/floof/`)
        const foxData = await res.json()
        setFox(foxData)
    }
    const intervalID = setInterval(fetchData, 5000) // invoke fetchData every 5 secs.
    
    // react runs your effects twice always - in production this would only run once and we'd be fine, but in dev mode our 'effect' runs twice, which means we und up with 2 set intervals running at any point. TO prevent this, we'll call clear inval so the first is destroyed before the second one is created. 
    return function() {
        clearInterval(intervalID)
    }
  }, []);

  return (
    <div>
        <img src={fox.image} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}



// function sum() {
//     let res;

//     <magicbox>
//         function figureOutImportantThing() {
//             // bunch of complex maths
//             res = 42
//         }
//     </magicbox>

//     return (
//         <p>{res}</p>
//     )
// }