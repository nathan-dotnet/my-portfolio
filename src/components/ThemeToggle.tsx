"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative inline-flex items-center w-14 h-8 bg-secondary border border-border p-1 transition-colors"
      aria-label="Toggle dark mode"
    >
      {/* Sliding circle */}
      <span
        className={`absolute w-6 h-6 bg-primary transition-transform duration-300 flex items-center justify-center
        ${dark ? "translate-x-6" : "translate-x-0"}`}
      >
        {dark ? (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </span>

      {/* Icons in background */}
      <span className="flex items-center justify-center w-6 h-6">
        <Sun className="w-4 h-4 text-muted-foreground" />
      </span>

      <span className="flex items-center justify-center w-6 h-6">
        <Moon className="w-4 h-4 text-muted-foreground" />
      </span>
    </button>
  );
};

export default ThemeToggle;
