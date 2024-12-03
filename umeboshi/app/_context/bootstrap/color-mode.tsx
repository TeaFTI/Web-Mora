/**
 * Bootstrap Color Mode Context
 */

"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type ColorMode = "light" | "dark" | "system";

interface ColorModeContextType {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

// Context
const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

// Provider
export function ColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  const getPreferredColorMode = (): ColorMode => {
    if (typeof window !== "undefined") {
      const storedColorMode = localStorage.getItem("bootstrap-color-mode") as ColorMode;
      return storedColorMode || "system";
    }
    return "system";
  };

  // State
  const [colorModeState, setColorModeState] = useState<ColorMode>("system");

  const setColorMode = (colorMode: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bootstrap-color-mode", colorMode);
      if (colorMode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", colorMode);
      }
    }
  }

  const showColorMode = (
    colorMode: ColorMode,
    focus: boolean = false
  ) => {
    const switcher = document.querySelector("#bd-theme") as HTMLInputElement;
    if (!switcher) { return; }

    // const switcherText = document.querySelector("#bd-theme-text");
    const activeColorModeIcon = document.querySelector(".theme-icon-active");
    // console.debug("Active Color Mode Icon:", activeColorModeIcon);
    const buttonToActive = document.querySelector(`[data-bs-theme-value="${colorMode}"]`);
    // console.debug("Button to Active:", buttonToActive);
    const svgActiveButton = buttonToActive?.querySelector("path");
    // console.debug("SVG Active Button:", svgActiveButton);

    document.querySelectorAll("[data-bs-theme-value]").forEach(element => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    })

    buttonToActive?.classList.add("active");
    buttonToActive?.setAttribute("aria-pressed", "true");
    if (!activeColorModeIcon) { return; }
    activeColorModeIcon.innerHTML = svgActiveButton?.outerHTML ?? "";

    if (focus) { switcher.focus(); }
  };

  // Effect
  useEffect(() => {
    const preferredColorMode = getPreferredColorMode();
    setColorModeState(preferredColorMode);
    setColorMode(colorModeState);
    showColorMode(colorModeState, true);
  }, []);

  useEffect(() => {
    setColorMode(colorModeState);
    showColorMode(colorModeState, true);
  }, [colorModeState]);

  // Provider
  return (
    <ColorModeContext.Provider value={{ colorMode: colorModeState, setColorMode: setColorModeState }}>
      {children}
    </ColorModeContext.Provider>
  );
}

// Hook
export function useColorMode(): ColorModeContextType {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
