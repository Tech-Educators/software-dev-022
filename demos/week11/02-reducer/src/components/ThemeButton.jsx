//TODO: this button will allow the user to toggle themes
// - Provide this button with the theme state using our custom hook and the ThemeProvider

"use client";

//import custom hook

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  //our useTheme custom hook has state and dispatch as values that we can destructure
  const { state, dispatch } = useTheme();

  //we will have a button per theme --> when the user clicks a specific theme button, that will trigger state to update and implement that theme to our page
  return (
    <>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        Toggle light theme
      </button>

      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        Toggle dark theme
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "colourblind" });
        }}
      >
        Toggle colourblind theme
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dyslexia" });
        }}
      >
        Toggle dyslexia theme
      </button>
    </>
  );
}
