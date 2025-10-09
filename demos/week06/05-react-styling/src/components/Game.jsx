// the word props is not importatnt - we just need the compnoent to accept a parameter

// I'm using 'props' here for the parameter name, but like all parameter names it doesn't really matter what you name them - it will *always* be an object made up of the key:value pairs from where you passed in the props in App.jsx (or whatever file)

export function Game(props) {
  console.log(props);

  // we can use {}'s inside our JSX to write our javascript inside it
  return (
    <div className="flex flex-row w-dvw gap-4 m-5 bg-amber-400">
      <p className="maths">
        {5 + 5}
      </p>
      <p className="text-2xl text-indigo-400">{props.game}</p>
      <img src={props.img} alt={props.alt} />
      <p>{props.description}</p>
    </div>
  );
}

// props will be an object

/*
{
    game: 'Eldren ring',
    img: 'Something',
    description: 'Horse'
}
*/

// Alternate way of working with props
// we know this component will always get an object
// so we are desctruting it inside the function definition
// export function Game({game, img, description, alt}) {
//     return (
//         <div>
//             <p>{game}</p>
//             <img src={img} />
//             <p>{description}</p>
//         </div>
//     )
// }
