//TODO: declare new state variables for more themes
//- we are going to refactor state to use reducer, so we can have one state with multiple theme values in it

//import useReducer
import { createContext, useContext, useReducer } from "react";

//declare a reducer function --> it contains our state and the different action types we want it to store
//the reducer function takes two parameters in this order --> state, action (by convention)
//state and action represent objects
function themeReducer(state, action) {
  //specify the type that we want our state to match --> if statements / switch ... case
  switch (action.type) {
    case "light":
      return { theme: (state.theme = "light") };
    case "dark":
      return { theme: (state.theme = "dark") };
    case "colourblind":
      return { theme: (state.theme = "colourblind") };
    case "dyslexia":
      return { theme: (state.theme = "dyslexia") };
    default:
      return { theme: (state.theme = "light") };
  }

  //you could store the theme value in local storage to keep the theme in between page loads

  // switch (action.type) {
  //   case "light":
  //   case "dark":
  //   case "colourblind":
  //   case "dyslexia":
  //     return { theme: (state.theme = action.type) };
  //   default:
  //     return { theme: (state.theme = "light") };
  // }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState("light");

  //declare our state as part of the useReducer hook

  //the useReducer hook --> we destructure state and dispatch // we give our useReducer hook the reducer function and the initial value of state
  //state --> variable that contains our state value
  //dispatch --> trigger a state update

  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
