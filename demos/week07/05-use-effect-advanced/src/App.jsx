import Header from "./components/Header";
import Polling from "./components/Polling";
import { CookieClicker } from "./components/useEffectTimer";
import UseStateFunctionalUpdate from "./components/useStateFunctionalUpdates";

export default function App() {
  return (
    <div>
      <Header />
      <CookieClicker />
      {/* <Polling /> */}
      {/* <UseStateFunctionalUpdate/> */}
    </div>
  )
}