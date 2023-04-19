import React, { useState, ReactNode  } from "react";

interface Props {
    children: ReactNode;
  }

  interface IThemeContext {
    theme: string;
    toggleTheme: () => void;
  }
  
  export const ThemeContext = React.createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => {},
  });
  
export function ThemeProvider({ children } : Props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
