import { useContext } from "react";
import { ThemeContext } from "../theme/themeProvider";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ButtonMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <>
        {theme === "light" ? (
          <MdOutlineLightMode size={25} color="#8fd9a8" />
        ) : (
          <MdDarkMode size={25} color="#8fd9a8" />
        )}
      </>
    </button>
  );
}
