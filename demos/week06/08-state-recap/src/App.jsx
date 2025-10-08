import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./App.css"
import { useState } from "react";

export default function App() {
  const [lightMode, setLightMode] = useState(true)
  return (
    <>
    <Header lightMode={lightMode} setLightMode={setLightMode}/>
    <Card lightMode={lightMode}/> 
    <Card lightMode={lightMode}/> 
    </>
  )
}