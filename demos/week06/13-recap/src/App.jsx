import { Game } from "./components/Game"
import { LikeButton } from "./components/LikeButton"
import "./App.css"

export default function App() {
  console.log('Component is running..')
  return (
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">
      <h2>This is an h2</h2>
      {/* <img src="https://somelinke.com" height='400'/> */}
      {/* we're passing in the props to the component */}
      {/* If you're passing in props that are not a string, you must use curly brackets */}
      <Game game='League' rating={5} tags={['MOBA', '5v5', 'Online']} moreInfo={{description: 'Buy things', esports: true}}/>
      {/* UserName() */}
      <LikeButton />
    </div>
  )
}



// stirngs 'sam'
// booleans true
// numbers 1
// ararys [1,2,3]
// objects {key: value}


// sunset = 'pretty' -> {sunset: 'pretty'}
// src = "https://someimage.png" -> {src: "imglink"}
// name='Sam' => {name: "Sam"}