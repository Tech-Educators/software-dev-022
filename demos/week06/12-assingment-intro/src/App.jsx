import { use, useEffect } from "react";
import "./App.css";
import { useState } from "react";

// please use multiple components, passing props down between them.

export default function App() {
  // state variable to keep track of which thumbnail is being displayed as the bigger image
  const [bigImage, setBigImage] = useState(0);
  // index, setIndex
  // state variable to store API image array.

  const [users, setUsers] = useState([]);
  // useEffect
  // fetch data from an API
  // once it has been fetched, update my state variable so the component re-renders with the new data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/users`);
      const usersFROMAPI = await res.json();
      setUsers(usersFROMAPI.users);
    }
    fetchData();
  }, []);

  // function to control what image we're clicking on and updating our state varible.
  // function handleSwitchImage(index) {
  //  setIndex(index)
  //}
  return (
    <div>
      {/* images.map((image, index) => {}) */}
      {/* this is for my thumbnails */}
      <div className="container">
        {users.map((user, index) => {
          return (
            <div
              onClick={() => {
                setBigImage(index);
              }}
            >
              <p>{user.firstName}</p>
              <img src={user.image} />
            </div>
          );
        })}
      </div>
      {/* this is for my large image */}
      {users.length > 0 && 
        <div>
          <p>{users[bigImage].firstName}</p>
          <img src={users[bigImage].image} />
        </div>
      }
    </div>
  );
}
