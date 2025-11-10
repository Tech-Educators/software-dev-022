//TODO: Render data related to the app and dev team
"use client";
import ThemeButton from "./ThemeButton";

import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <ThemeButton />
      <h2>About content</h2>
      <p>{theme}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe amet ex
        dolorum, asperiores obcaecati eligendi recusandae, aliquid velit sunt
        odio a, sapiente natus commodi. Autem dolorem dolores corporis libero.
        Dicta illo rem quo ea est ratione saepe cum ab repudiandae.
      </p>
    </div>
  );
}
