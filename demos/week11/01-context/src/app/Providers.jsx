//TODO: I want to compile different providers for convenience
// - We can use this Providers function in our layout.js

"use client";

//import the Provider set up in your context file
import { ThemeProvider } from "@/context/ThemeContext";

//declare a Providers function to contain any Provider you set up
export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
