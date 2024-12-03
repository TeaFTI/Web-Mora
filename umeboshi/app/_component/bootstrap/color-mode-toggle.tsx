/**
 * Bootstrap Color Mode Component
 */

"use client";

import { useColorMode } from "@/app/_context/bootstrap/color-mode";

import Check2 from "bootstrap-icons/icons/check2.svg";
import CircleHalf from "bootstrap-icons/icons/circle-half.svg";
import MoonFill from "bootstrap-icons/icons/moon-fill.svg";
import SunFill from "bootstrap-icons/icons/sun-fill.svg";

export default function ColorModeToggle() {
  // Context
  const { setColorMode } = useColorMode();

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      {/* Toggle */}
      <button
        id="bd-theme"
        className="btn dropdown-toggle py-2 d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Toggle Mode (System)"
      >
        <CircleHalf className="bi my-1 theme-icon-active" width="1em" height="1em" />
        <span id="bd-theme-text" className="visually-hidden">Toggle Mode</span>
      </button>
      {/* Mode */}
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            type="button"
            data-bs-theme-value="light"
            aria-pressed="false"
            onClick={() => setColorMode("light")}
          >
            <SunFill className="bi me-2" width="1em" height="1em" />
            Light
            <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            type="button"
            data-bs-theme-value="dark"
            aria-pressed="false"
            onClick={() => setColorMode("dark")}
          >
            <MoonFill className="bi me-2" width="1em" height="1em" />
            Dark
            <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center active"
            type="button"
            data-bs-theme-value="system"
            aria-pressed="true"
            onClick={() => setColorMode("system")}
          >
            <CircleHalf className="bi me-2" width="1em" height="1em" />
            System
            <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
          </button>
        </li>
      </ul>
    </div>
  );
};
