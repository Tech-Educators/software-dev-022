//TODO: this button will allow the user to toggle themes
// - Provide this button with the theme state using our custom hook and the ThemeProvider

"use client";

//import custom hook

import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme
      </button>
    </>
  );
}
