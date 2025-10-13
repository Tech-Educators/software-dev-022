import { BrowserRouter, Routes, Route, Link } from "react-router"
import PlantsPage from "./pages/PlantsPage"
import IndividualPlant from "./pages/IndividualPlant"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="flex gap-4">
          <Link to='/'>Home</Link>
          <Link to='/plants'>Plants</Link>
        </header>
        <Routes>
          <Route path='/' element={<p>Home page</p>} />
          <Route path="/plants" element={<PlantsPage />} />
          {/* this matches to /plants/1 or plants/3 so on */}
          {/* plants/4 id=4*/}
          {/* plants/sam  id=sam*/}
          <Route path="/plants/:id" element={<IndividualPlant />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}