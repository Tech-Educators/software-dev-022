// props are how we give arugments to our components. 
// props *ALWAYS* come in the form of objects
// even if you're not directly passing in anything to a component, it will still get an empty object.

export function Game({game, rating, tags, moreInfo}) {
    // moreInfo still an object - it's nested in the greater 'props' object
    return (
      <div className="text-3xl text-opal-green m-2 border-blue-500 border-solid rounded-4xl border-4 normal-class lg:text-red-500">
        <h2>{game}</h2>
        <p>{moreInfo.description}</p>
      </div>
    )
  }