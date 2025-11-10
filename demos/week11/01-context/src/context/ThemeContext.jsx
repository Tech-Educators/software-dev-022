//TODO: set up context --> declaring our theme state in here

//import CreateContext and useContext from react
import { createContext, useContext } from "react";

//import useState from react
import { useState } from "react";

//declare our initial context with the initial value
// this initial value is optional at this stage because you can use also declare within useState
const ThemeContext = createContext("light");

//declare a Provider function that we will use to nest the app elements that will require context later on
export function ThemeProvider({ children }) {
  //declare state
  const [theme, setTheme] = useState("light");

  //children represents each component at the time it's rendered
  //value prop --> it contains the values we want to provide
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//declare a custom hook to allow us to use our context easily, including any elements within the context (state variable, mutation function...)
// a custom hook is a function we declare to contain other hooks

export function useTheme() {
  //this custom hook already calls the useContext hook and makes my ThemeContext available to be used
  return useContext(ThemeContext);
}
