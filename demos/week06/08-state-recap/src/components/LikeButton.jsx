import { useState } from "react";

export const LikeButton = () => {

    // useState is a function from react that returns an array. That array will always (and only) have two things. your 'state' variable - so likes in this case. And a function to update the likes count to something new. 

    // You cannot modifiy state directly (eg doing likes++) - you must use the updator function to change it. 

    // setLikes takes an arguemnt of what you want the next values of likes to be 
  let [likes, setLikes] = useState(0);

  return (
    <div>
        <p>{likes} likes</p>
      <button onClick={() => {
        console.log(likes);
        // setLikes(likes++) // likes = likes + 1
        setLikes(likes + 1)
      }}>❤️</button>
    </div>
  );
};
