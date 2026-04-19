import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="hover:rotate-12 transition-transform" />
      ) : (
        <Moon size={20} className="hover:-rotate-12 transition-transform" />
      )}
    </button>
  )
}
