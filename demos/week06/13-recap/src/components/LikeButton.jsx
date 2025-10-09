import { useState } from "react";

export function LikeButton() {
    console.log('running')
  // plain boring variable
  // let likes = 0;

  // state variable
  const [likes, setLikes] = useState(0);
  const [username, setUsername] = useState('No user')

  function handleClick() {
    // I'm not assinging likes to be a new value, setLikes to be whatever likes currently is plus 1
    // updator function.
    setLikes(likes + 1);
    console.log(likes);
  }

  return (
    <div>
      <p>{likes}</p>
      <button onClick={handleClick}>❤️</button>
      <button onClick={() => {setUsername('Connor')}}>{username}</button>
    </div>
  );
}

// dont update state directly
// components re-render when state (use state variables) or props change.

// function samState(initialValue) {
//   let previousState = [];

//   if (previousState.length == 0) {
//     previousState.push(initialValue)
//   }

//   return [
//     previousState[previousState.length - 1],
//     function (newValue) {
//       previousState.push(newValue);
//     },
//   ];
// }
