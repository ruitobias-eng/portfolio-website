import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicializa tema a partir do localStorage ou sistema
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return "system"; // padrão
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Aplica tema no <html> e adiciona transição suave
  const applyTheme = (themeToApply) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.style.transition = "background-color 0.5s, color 0.5s"; // transição suave

    let finalTheme = themeToApply;
    if (themeToApply === "system") {
      finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.classList.add(finalTheme);
  };

  // Atualiza tema ao montar e ao mudar o sistema
  useEffect(() => {
    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  // Persistência
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle cíclico: light → dark → system → light
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  // Set custom theme diretamente: "light", "dark" ou "system"
  const setCustomTheme = (value) => {
    if (["light", "dark", "system"].includes(value)) setTheme(value);
  };

  // Memoiza contexto
  const contextValue = useMemo(
    () => ({ theme, setTheme: setCustomTheme, toggleTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Hook de acesso
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
