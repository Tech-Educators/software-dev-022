import Header from "./components/Header.jsx"
import { OtterContainer } from "./components/OtterContainer"


 function App() {
  return (
  <div>
    {/* We need to treat our components as if they're HTML tags */}
    {/* remember to use uppercase letters for your component names */}
    <Header />
    {/* <OtterContainer /> */}
    <p>Hello</p>
    <OtterContainer />
  </div>
)
}

export default App
