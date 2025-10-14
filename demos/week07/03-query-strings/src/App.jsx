import {BrowserRouter, Route, Routes, Link} from "react-router"
import Animals from "./pages/Animals"
import Plain from "./pages/Plain"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/animals">Animals</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Plain />} />
          <Route path="/animals" element={<Animals />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}