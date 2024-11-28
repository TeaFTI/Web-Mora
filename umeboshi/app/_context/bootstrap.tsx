/**
 * Bootstrap Context
 */

"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface BootstrapContextType {
  bootstrap: any;
}

const BootstrapContext = createContext<BootstrapContextType | undefined>(undefined);

export default function BootstrapProvider({
  children,
}: {
  children: ReactNode,
}) {
  /**
   * The React State hook and Effect hook are used for the client.
   *
   * The NEXT.JS framework by default pre-render every page with either
   * Server Side Rendering (SSR) or Static Site Generation (SSG). But
   * the `document` object is not available in the SSR environment. So
   * the Bootstrap JavaScript Bundle (`bootstrap.bundle.min.js`) need to
   * be inside a `useEffect` hook. This is to prevent `ReferenceError`
   * in execution.
   */

  // State
  const [boostrapState, setBootstrapState] = useState<any>(undefined);

  // Effect
  useEffect(() => {
    console.debug("Bootstrap Provider: useEffect");
    if (!boostrapState) {
      const js = require("bootstrap/dist/js/bootstrap.bundle.min.js");
      setBootstrapState(js);
    }
  }, [])

  return (
    <BootstrapContext.Provider value={{ bootstrap: boostrapState }}>
      {children}
    </BootstrapContext.Provider>
  );
}

export function useBootstrap(): BootstrapContextType {
  const context = useContext(BootstrapContext);
  if (!context) {
    throw new Error("useBootstrap must be used within a BootstrapProvider");
  }
  return context;
}
