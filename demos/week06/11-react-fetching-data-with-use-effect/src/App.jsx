import { useState, useEffect} from "react"
import { DisplayData } from "./componets/DisplayData"

export default function App() {
  const [count, setCount] = useState(0)

  const [importantVariable, setImportantVariable] = useState(0)
  console.log('App component is running....')
  

  // useEffect takes two arguments
  // a callbacj function (the code you want to run)
  // it takes an array as its second argument - we call this the dependency array
  // in that array, you can place varaibles. When the variables in the array change, the 'effect' will run again (the cbf)

  // if we give it an empty array, the 'effect' will only run once at the beginning.
  useEffect(() => {
    console.log('This is really important code that can only run once!')
  }, [importantVariable])

  
  return (
    <div>
      <p>I will re-render</p>
      <button onClick={() => setCount(count + 1)}>re-render</button>
      {/* clicking this button changes the 'importantVariable' - which is listed inside our useEffect array, so the function inside the effect runs again */}
      <button onClick={() => setImportantVariable(importantVariable + 1)}>re-render</button>
      <DisplayData />
    </div>
  )
}