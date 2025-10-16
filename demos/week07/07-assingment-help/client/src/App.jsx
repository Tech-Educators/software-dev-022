import {BrowserRouter, Route, Routes} from "react-router"
import PostsPage from "./pages/PostsPage"
import IndividualPosts from "./pages/IndividualPosts"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home page</p>}></Route>
          <Route path='/posts' element={<PostsPage />}/>
          <Route path='/posts/:id' element={<IndividualPosts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}