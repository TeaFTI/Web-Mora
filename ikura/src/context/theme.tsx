/**
 * Theme Context
 */

import { createContext, useContext } from "react";

import { useRouter } from "@tanstack/react-router";
import { setThemeServerFn } from "~/server/theme";

export type Theme = "light" | "dark";

type ThemeProviderType = {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  ...props
}: ThemeProviderType) {
  const router = useRouter();

  const value = {
    theme: defaultTheme,
    setTheme: (theme: Theme) => {
      setThemeServerFn({ data: theme });
      router.invalidate();
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
