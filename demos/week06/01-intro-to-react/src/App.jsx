import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  return (
    // this is called a fragment - all components have to have one parent elemnt, so we can use fragements to return one thing without actually adding another element to one thing
    <>
      <div>
        <h2>This is my great website!</h2>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>wozer</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      Hello world!
      </p>
      </div>
    </>
  )
}

// We are marking the App component available for exporting to our main.js
export default App
