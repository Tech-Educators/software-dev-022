import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Game } from "./components/Game"

export default function App() {
  return (
    <div>
      <Header />
      {/* we pass in props like they are attributes */}
      <Game game="Elden Ring" img="https://m.media-amazon.com/images/M/MV5BZGQxMjYyOTUtNjYyMC00NzdmLWI4YmYtMDhiODU3Njc5ZDJkXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg" description="dont fight the guy on the horse" alt="my alt text"/>
      
      <Game game="Destiny 2" img="https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_D2_S27_OfferPortrait_S2_1200x1600_1200x1600-04d6e6bb4240e4248218644d5a891688" description="I think you can shoot monsters and its sci-fi"/>
      <Footer />
    </div>
  )
}