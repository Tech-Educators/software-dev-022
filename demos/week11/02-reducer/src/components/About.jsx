//TODO: Render data related to the app and dev team
"use client";
import ThemeButton from "./ThemeButton";

import { useTheme } from "@/context/ThemeContext";

export default function About() {
  //updating context to use the state from our reducer function
  const { state } = useTheme();
  return (
    <div className={state.theme}>
      <ThemeButton />
      <h2>About content</h2>
      <p>{state.theme}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe amet ex
        dolorum, asperiores obcaecati eligendi recusandae, aliquid velit sunt
        odio a, sapiente natus commodi. Autem dolorem dolores corporis libero.
        Dicta illo rem quo ea est ratione saepe cum ab repudiandae.
      </p>
    </div>
  );
}
