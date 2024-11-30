/**
 * Bootstrap Color Mode Context
 */

"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type BootstrapColorMode = "light" | "dark" | "system";

interface BootstrapColorModeContextType {
  colorMode: BootstrapColorMode;
  setColorMode: (colorMode: BootstrapColorMode) => void;
}

// Context
const BootstrapColorModeContext = createContext<BootstrapColorModeContextType | undefined>(undefined);

// Provider
export default function BootstrapColorModeProvider({
  children,
}: {
  children: ReactNode,
}) {
  // State
  const [colorModeState, setColorModeState] = useState<BootstrapColorMode>("system");

  // Return
  return (
    <BootstrapColorModeContext.Provider value={{ colorMode: colorModeState, setColorMode: setColorModeState }}>
      {children}
    </BootstrapColorModeContext.Provider>
  );
}

// Hook
export function useBootstrapColorMode(): BootstrapColorModeContextType {
  const context = useContext(BootstrapColorModeContext);
  if (!context) {
    throw new Error("useBootstrapColorMode must be used within a BootstrapColorModeProvider");
  }
  return context;
}
