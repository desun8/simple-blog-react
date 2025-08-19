import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  type ThemeType,
} from "./ThemeContext";

interface UseTheme {
  toggleTheme: () => void;
  theme: ThemeType;
}

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!theme || !setTheme) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    console.log(newTheme)
  };

  return {
    toggleTheme,
    theme,
  };
};
