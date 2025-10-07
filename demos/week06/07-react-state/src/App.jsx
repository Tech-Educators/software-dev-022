import { Counter } from "./components/Counter";
import {useState} from "react"

export default function App() {
  const [dislikeCount, setDislikeCount] = useState(0)
  return (
    <>
    <Counter dislikeCount={dislikeCount} setDislikeCount={setDislikeCount}/> 
    <Counter dislikeCount={dislikeCount} setDislikeCount={setDislikeCount} /> 
    </>
  )
}