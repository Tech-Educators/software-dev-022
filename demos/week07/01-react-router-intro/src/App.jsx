import {Routes, Route} from "react-router"
import { Header } from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* http://localhost:5173/about */}
        <Route path="/about" element={<About />} />
        {/* If they go to any other path that isn't / or /about we'll render the notfound component */}
        {/* fall back path */}
        {/* * means everythign */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}