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
          <Route path="/plants/:id" element={<IndividualPlant />} >
            {/* /plants/2/photos */}
            <Route path='/plants/:id/photos' element={<p>Some more photos</p>}>
            </Route>
            {/* plants/2/edit */}
            <Route path="/plants/:id/edit" element={<p>an edit modal</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}